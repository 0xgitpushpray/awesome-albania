// Checks every resource URL and records the result in data/link-status.json.
// The site reads that file to stamp each entry "checked <date>".
//
//   node scripts/check-links.mjs            check all, write status, exit 1 on dead links
//   node scripts/check-links.mjs --dry      check all, print only
//   node scripts/check-links.mjs --dry --changed origin/main
//                                           only URLs added since that git ref (used on PRs)
import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import yaml from 'js-yaml';
import { loadData } from './lib/data.mjs';

const STATUS_FILE = new URL('../data/link-status.json', import.meta.url);
const DRY = process.argv.includes('--dry');
const changedIdx = process.argv.indexOf('--changed');
const SINCE = changedIdx > -1 ? process.argv[changedIdx + 1] : null;
const CONCURRENCY = 8;
const TIMEOUT_MS = 25_000;
const UA =
  'Mozilla/5.0 (compatible; awesome-albania-linkcheck/1.0; +https://github.com/0xgitpushpray/awesome-albania)';

// Sites that answer bots with 401/403/429 are alive; a human can open them.
const ALIVE_BUT_GUARDED = new Set([401, 403, 429]);

async function check(url) {
  for (const method of ['HEAD', 'GET']) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        signal: ctrl.signal,
        headers: { 'user-agent': UA, accept: 'text/html,*/*' },
      });
      clearTimeout(timer);
      if (res.ok) return { ok: true, code: res.status };
      if (method === 'HEAD') continue; // many servers reject HEAD; retry with GET
      return { ok: ALIVE_BUT_GUARDED.has(res.status), code: res.status, guarded: ALIVE_BUT_GUARDED.has(res.status) };
    } catch (err) {
      clearTimeout(timer);
      if (method === 'HEAD') continue;
      return { ok: false, code: 0, error: err.cause?.code || err.name };
    }
  }
}

let { resources } = await loadData();
if (SINCE) {
  let before = [];
  try {
    before = yaml.load(execFileSync('git', ['show', `${SINCE}:data/resources.yml`], { encoding: 'utf8' })).resources;
  } catch {}
  const known = new Set(before.map((r) => r.url));
  resources = resources.filter((r) => !known.has(r.url));
  console.log(`${resources.length} new or changed URL(s) since ${SINCE}.`);
}
let previous = {};
try {
  previous = JSON.parse(await readFile(STATUS_FILE, 'utf8'));
} catch {}

const today = new Date().toISOString().slice(0, 10);
const results = {};
const queue = [...resources];
const dead = [];

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const r = queue.shift();
      const res = await check(r.url);
      const mark = res.ok ? (res.guarded ? 'guarded' : 'ok') : 'DEAD';
      console.log(`${mark.padEnd(7)} ${String(res.code).padStart(3)}  ${r.url}${res.error ? `  (${res.error})` : ''}`);
      if (res.ok) {
        results[r.url] = { checked: today, code: res.code };
      } else {
        dead.push(r);
        // keep the last good date so a flaky run doesn't erase history
        results[r.url] = { ...(previous[r.url] || {}), failed: today, code: res.code };
      }
    }
  }),
);

const sorted = Object.fromEntries(Object.keys(results).sort().map((k) => [k, results[k]]));
if (!DRY) await writeFile(STATUS_FILE, JSON.stringify(sorted, null, 2) + '\n');

console.log(`\n${resources.length - dead.length}/${resources.length} reachable.`);
if (dead.length) {
  console.log('Unreachable:');
  for (const r of dead) console.log(`  - ${r.name}: ${r.url}`);
  process.exitCode = 1;
}

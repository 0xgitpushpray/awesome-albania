// Loads and validates data/resources.yml. Shared by the site build and scripts.
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import yaml from 'js-yaml';

// Resolved from the project root: this module also runs bundled inside the Astro build.
const DATA_FILE = resolve(process.cwd(), 'data/resources.yml');
const REGIONS = new Set(['al', 'xk', 'mk', 'me', 'global']);

export async function loadData() {
  const raw = yaml.load(await readFile(DATA_FILE, 'utf8'));
  const errors = validate(raw);
  if (errors.length) {
    const err = new Error(`resources.yml has ${errors.length} problem(s):\n  - ${errors.join('\n  - ')}`);
    err.errors = errors;
    throw err;
  }
  const resources = raw.resources.map((r) => ({ region: 'global', tags: [], archived: false, ...r }));
  return { categories: raw.categories, resources };
}

export function validate(raw) {
  const errors = [];
  if (!raw?.categories?.length) errors.push('no categories');
  if (!raw?.resources?.length) errors.push('no resources');
  if (errors.length) return errors;

  const cats = new Map();
  for (const c of raw.categories) {
    if (!c.id || !c.name || !Array.isArray(c.via) || !c.via.length) errors.push(`category ${c.id ?? '?'}: needs id, name and via`);
    if (cats.has(c.id)) errors.push(`category ${c.id}: duplicate id`);
    cats.set(c.id, c);
  }

  const urls = new Set();
  const names = new Set();
  for (const r of raw.resources) {
    const at = r.name ? `"${r.name}"` : `entry with url ${r.url}`;
    for (const f of ['name', 'url', 'desc', 'cat', 'via']) if (!r[f]) errors.push(`${at}: missing ${f}`);
    if (r.url && !/^https:\/\//.test(r.url)) errors.push(`${at}: url must start with https://`);
    if (r.url && urls.has(r.url)) errors.push(`${at}: duplicate url`);
    if (r.name && names.has(r.name.toLowerCase())) errors.push(`${at}: duplicate name`);
    urls.add(r.url);
    names.add(r.name?.toLowerCase());
    const cat = cats.get(r.cat);
    if (r.cat && !cat) errors.push(`${at}: unknown category "${r.cat}"`);
    if (cat && r.via && !cat.via.includes(r.via)) errors.push(`${at}: "${r.via}" is not a stop of ${r.cat} (${cat.via.join(', ')})`);
    if (r.desc && r.desc.length > 160) errors.push(`${at}: desc is ${r.desc.length} chars (max 160)`);
    if (r.region && !REGIONS.has(r.region)) errors.push(`${at}: region must be one of ${[...REGIONS].join(', ')}`);
    if (r.tags && !Array.isArray(r.tags)) errors.push(`${at}: tags must be a list`);
  }
  return errors;
}

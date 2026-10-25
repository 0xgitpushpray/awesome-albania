// Validates data/resources.yml and checks README.md is in sync with it.
//   node scripts/validate.mjs
import { readFile } from 'node:fs/promises';
import { loadData } from './lib/data.mjs';
import { renderReadme } from './build-readme.mjs';

try {
  const data = await loadData();
  console.log(`resources.yml OK: ${data.resources.length} resources in ${data.categories.length} categories.`);

  const current = await readFile(new URL('../README.md', import.meta.url), 'utf8').catch(() => '');
  if (current !== renderReadme(data)) {
    console.error('README.md is out of date. Run `npm run readme` and commit the result.');
    process.exitCode = 1;
  }
} catch (err) {
  console.error(err.message);
  process.exitCode = 1;
}

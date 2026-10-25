// Generates README.md from data/resources.yml in awesome-list format.
//   node scripts/build-readme.mjs
import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { loadData } from './lib/data.mjs';

const SITE = 'https://0xgitpushpray.github.io/awesome-albania';
const REPO = 'https://github.com/0xgitpushpray/awesome-albania';
const REGION = { al: '🇦🇱', xk: '🇽🇰', mk: '🇲🇰', me: '🇲🇪' };

// GitHub's heading anchors: lowercase, punctuation dropped, each space a hyphen
// ("Language & NLP" → "language--nlp").
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N} _-]/gu, '')
    .replace(/ /g, '-');

export function renderReadme({ categories, resources }) {
  const out = [];
  out.push(
    '<!-- Generated from data/resources.yml by scripts/build-readme.mjs. Do not edit by hand. -->',
    '',
    '# Awesome Albania [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)',
    '',
    '> A curated list of Albanian datasets, tools, communities and developer resources.',
    '',
    `Albanian-language data, NLP models, open government data, maps, localization and the people building tech in Albania, Kosovo and the diaspora. Every link is checked weekly. Browse and search it at **[${SITE.replace('https://', '')}](${SITE})**.`,
    '',
    '🇦🇱 Albania · 🇽🇰 Kosovo · no flag = global or multilingual',
    '',
    '## Contents',
    '',
  );
  for (const c of categories) {
    out.push(`- [${c.name}](#${slug(c.name)})`);
  }
  out.push('');

  for (const c of categories) {
    const items = resources.filter((r) => r.cat === c.id);
    if (!items.length) continue;
    out.push(`## ${c.name}`, '', `*${c.sq}*. ${c.blurb}`, '');
    for (const via of c.via) {
      const leg = items.filter((r) => r.via === via);
      if (!leg.length) continue;
      if (c.via.length > 1) out.push(`### ${via}`, '');
      for (const r of leg) {
        const flag = REGION[r.region] ? ` ${REGION[r.region]}` : '';
        const name = r.archived ? `~~${r.name}~~` : r.name;
        const note = r.archived ? ' *(archived)*' : '';
        out.push(`- [${name}](${r.url})${flag} - ${r.desc}${note}`);
      }
      out.push('');
    }
  }

  out.push(
    '## Contributing',
    '',
    `Know a resource that belongs here? [Suggest it with the issue form](${REPO}/issues/new?template=suggest-resource.yml), or add it to [\`data/resources.yml\`](data/resources.yml) and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).`,
    '',
    '## License',
    '',
    '[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)',
    '',
    'To the extent possible under law, the contributors have waived all copyright and related rights to this list. The website source code is [MIT](LICENSE).',
    '',
  );
  return out.join('\n');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const data = await loadData();
  await writeFile(new URL('../README.md', import.meta.url), renderReadme(data));
  console.log(`README.md written: ${data.resources.length} resources.`);
}

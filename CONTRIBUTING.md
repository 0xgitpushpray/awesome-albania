# Contributing

Thanks for helping map the Albanian tech ecosystem. There are two ways to add a resource.

## 1. The issue form (no git needed)

[Suggest a resource](https://github.com/0xgitpushpray/awesome-albania/issues/new?template=suggest-resource.yml). Give the name, the link and one line on what it is. A maintainer adds it.

## 2. A pull request

Everything lives in [`data/resources.yml`](data/resources.yml). The website and `README.md` are both generated from it, so **never edit `README.md` by hand**.

Add an entry under the right category:

```yaml
- name: UD Albanian STAF
  url: https://universaldependencies.org/treebanks/sq_staf/index.html
  desc: Hand-corrected Universal Dependencies treebank of sentences from Albanian fiction, 1963–2004.
  cat: datasets          # a category id from the top of the file
  via: Labelled          # one of that category's "via" stops
  region: global         # al | xk | mk | me | global (optional, default global)
  tags: [treebank, syntax]   # optional, helps search
  license: CC BY-SA 4.0      # optional
```

Then:

```sh
npm install
npm run readme      # regenerate README.md
npm run validate    # schema + README in sync
npm run dev         # preview the site at localhost:4321/awesome-albania
```

## What belongs here

- Resources that are genuinely useful for working with Albanian language, data or the tech scene in Albania, Kosovo, North Macedonia, Montenegro and the diaspora.
- Working, publicly reachable links. Gated datasets on Hugging Face are fine, but paywalled or login-only pages are not.
- Descriptions that say what something *is*, in one plain sentence (max 160 characters). No marketing.

## What doesn't

- Commercial services with no free or open tier.
- Personal portfolios, job boards, or link farms.
- Duplicates of something already listed.

## Dead links

A GitHub Action checks every link weekly and opens an issue for anything that stops responding. Projects that are unmaintained but still useful get `archived: true`, which shows them struck through, not deleted.

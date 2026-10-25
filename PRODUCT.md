# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), deployed to GitHub Pages via GitHub Actions at `0xgitpushpray.github.io/awesome-albania` (base path `/awesome-albania`). Repo: `0xgitpushpray/awesome-albania`, currently private — Pages on a private repo needs a paid GitHub plan, so it likely goes public at launch.

## Users

Primary: developers and researchers. Albanian developers in Albania, Kosovo, North Macedonia, Montenegro and the diaspora looking for local data, tools and communities; and foreign developers / NLP researchers who need Albanian-language datasets, models, APIs or a local community to join. They arrive from search, GitHub, or a shared link, usually with a concrete need ("is there an Albanian NER dataset?", "where do Albanian devs hang out?").

## Product Purpose

A curated, verified list of Albanian datasets, tools, communities and developer resources — the hub people link to. Success: someone with a specific need finds a working, relevant resource in seconds; contributors can add entries with a PR or an issue form; the list stays trustworthy (links checked).

## Positioning

The one place that gathers the scattered Albanian tech ecosystem (open data portals, Albanian-language NLP, local APIs, communities, learning) with real, link-checked entries, published both as a searchable site and as a classic GitHub awesome-list README generated from the same data.

## Operating Context

- Single source of truth: a YAML data file in the repo. The site and README.md are both generated from it.
- Contributions: PR to the data file, or a GitHub issue form ("Suggest a resource"). CI validates the schema, checks links, regenerates the README.
- Visitors scan, search and filter; most visits are short and goal-driven. Many arrive on mobile from shared links.

## Capabilities and Constraints

- Static site, no backend. Search/filter runs client-side.
- English UI with Albanian touches (section names, flourishes) — not a full bilingual site.
- Launch content: researched and verified real entries (target 60–120). Every entry must have a working URL; nothing invented.
- Undecided: custom domain (none yet), maintainers beyond the owner, license choice for the list (awesome-list convention is CC0).

## Brand Commitments

Name: "Awesome Albania". Follows awesome-list conventions (README format, contribution guidelines) so it can be discovered by and submitted to awesome-list indexes.

## Evidence on Hand

None beyond the researched entries. No users, stars, sponsors, testimonials or partner logos exist — do not fabricate counts, endorsements or community size.

## Product Principles

1. Findability over browsing theatre: a specific need should resolve in one search or one filter.
2. Every entry is real and verified; trust is the product.
3. One data file, two outputs: the README and the site never drift.
4. Contribution is a first-class path, not a footer link.
5. Albanian in spirit, global in reach.

## Accessibility & Inclusion

WCAG 2.2 AA. Keyboard-operable search and filters, respects reduced motion, works well on mid-range mobile connections. Albanian diacritics (ë, ç) must be searchable with or without them.

---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief: home / index

Scope: the single-page index (`src/pages/index.astro`) — search, category boards, entry list, contribute path. Visitor mode: **Operate** (find a working resource fast).

Audience & job: developers/researchers with a concrete need ("Albanian NER data?", "where do Albanian devs meet?"). Task: search or pick a category → scan rows → open link. Secondary: suggest a resource (issue form / PR).

Content: entries from `data/resources.yml` (real, link-checked). States to design: all entries, category filtered, search with results, search with zero results, archived entry, keyboard focus on a row.

Constraints: static, client-side search, diacritic-insensitive (ë/e, ç/c), WCAG 2.2 AA, reduced motion, base path `/awesome-albania`.

## Direction contract

THESIS: The index is a furgon station: every category is a hand-lettered destination board, and you board the one going where you need. Refuses the category default of a sidebar plus a grid of tag-chip cards.

OWN-WORLD: Windshield-tint teal shell band (deep #0f4c5c family, sun-strip gradient edge) over a cool asphalt-grey ground; destination boards are white sign card lettered in marker-black caps with a red via-line, and the selected board turns signal yellow. Workhorse grotesk for reading, marker caps only on boards. Hairline-ruled rows, tabular figures, stamped statuses.

STORY: The visitor sees "Ku po shkon?" ("Where are you headed?"), types or taps a board, and the windshield board re-letters itself with the destination and count. They scan dense ruled rows, open a verified link, and see that contributing is one click.

FIRST VIEWPORT: Top teal band: wordmark left, GitHub/contribute right, big search input centered below it, with "/" hint. Then a horizontally scrolling (mobile) / wrapping (desktop) row of destination boards, one per category, each with name, via-stops (subcategories) and stop count. Then the list starts: a sticky board header "→ ALL DESTINATIONS · 96 stops" and the first ruled rows. Primary action = search.

FORM: Furgon windshield destination boards, candidate 6 of 7 on the ordered list; seed key da4769c0. Raises: tabular figures & two-ink boards (ikeda), stamped statuses with archived struck-not-removed (ticket wallet), j/k / Enter / "/" keyboard stepping (vertical feed), hairline rows not boxes (design annual), reflow by whole fixed-measure columns (crouwel). Signature move: the windshield board re-lettering to the active destination (category or query) with stop count.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Adaptations (recorded after finish review)

- Search sits left-aligned to the lede column, not centred: it keeps one reading edge with the lede and the boards below.
- Below 720px, destination boards drop their via-stops so the scroll strip shows two full boards; the sticky board still carries the via line.
- "Ku po shkon?" is lettered on a small hung yellow card, so marker caps stay on boards.
- Destination boards show live stop counts for the current query and region; routes with zero stops are disabled.

## Unresolved

- Custom domain (none yet).
- Display faces settled: Permanent Marker (boards) and Archivo variable (reading); both cover ë ç.

---
name: Awesome Albania
description: A curated, link-checked index of Albanian datasets, tools and communities, built as a furgon station of hand-lettered destination boards.
colors:
  teal-950: "#072a33"
  teal-900: "#0b3d4a"
  teal-800: "#0f4c5c"
  on-teal: "#eef6f7"
  on-teal-2: "#b4d3d9"
  red: "#c21f17"
  red-ground: "#c21f17"
  yellow: "#f2c200"
  ground: "#eceeec"
  ground-2: "#e0e4e1"
  ink: "#16161a"
  ink-2: "#464e4b"
  ink-3: "#5a6460"
  rule: "#c5cbc8"
  card: "#fbfbf8"
  card-ink: "#16161a"
  card-ink-2: "#4f5653"
typography:
  marker-display:
    fontFamily: "'Permanent Marker', 'Archivo Variable', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.05
  marker-board:
    fontFamily: "'Permanent Marker', 'Archivo Variable', system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 1rem + 1.2vw, 1.85rem)"
    fontWeight: 400
    lineHeight: 1.15
  marker-sign:
    fontFamily: "'Permanent Marker', 'Archivo Variable', system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.15
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.2rem + 1.3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 72"
  lede:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1rem + 0.9vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 650
    lineHeight: 1.3
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum' 1"
  body-sm:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 80"
  figure:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 75"
  stamp:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 78"
  button:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 650
    lineHeight: 1
rounded:
  plate: "2px"
  card: "3px"
  segment: "5px"
spacing:
  gutter: "clamp(16px, 4vw, 32px)"
  board-gap: "14px"
  row: "14px"
  leg: "22px"
  route: "clamp(44px, 6vw, 64px)"
  section: "clamp(56px, 8vw, 96px)"
components:
  destination-board:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-ink}"
    typography: "{typography.marker-sign}"
    rounded: "{rounded.card}"
    padding: "9px 14px 10px"
  destination-board-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.card-ink}"
  windshield-board:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-ink}"
    typography: "{typography.marker-board}"
    rounded: "{rounded.card}"
    padding: "7px 18px 8px"
  hung-card:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.card-ink}"
    rounded: "{rounded.card}"
    padding: "5px 12px 3px"
  search-field:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-ink}"
    rounded: "{rounded.card}"
    height: "64px"
    padding: "0 56px 0 54px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.button}"
    rounded: "{rounded.card}"
    height: "46px"
    padding: "0 18px"
  button-ink-on-teal:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.card-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.card}"
    height: "46px"
    padding: "0 18px"
  button-ghost-hover:
    backgroundColor: "{colors.ground-2}"
  nav-link:
    textColor: "{colors.on-teal}"
    rounded: "{rounded.card}"
    height: "44px"
    padding: "0 12px"
  region-segment:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.card}"
    height: "36px"
    padding: "0 12px"
  region-segment-checked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  stop-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.card}"
    padding: "14px 10px"
  stop-row-hover:
    backgroundColor: "{colors.ground-2}"
  plate:
    textColor: "{colors.ink-2}"
    typography: "{typography.stamp}"
    rounded: "{rounded.plate}"
    padding: "1px 5px"
  stamp-archived:
    textColor: "{colors.red-ground}"
    typography: "{typography.stamp}"
    rounded: "{rounded.plate}"
    padding: "1px 6px"
---

# Design System: Awesome Albania

## Overview

**Creative North Star: "The Furgon Station"**

The site is a minibus stop, not a library. A deep windshield-tint teal band sits over a cool, pale asphalt ground, and every category is a white sign card lettered in black marker caps, hung slightly crooked on its hook with a red via-line under the name. You board a destination; the sticky board at the top of the list re-letters itself to say where you are headed and how many stops are on the route. The reading layer under the signs is a workhorse grotesk set dense and hairline-ruled, with tabular figures, numbered stops and stamped statuses, so scanning feels like reading a timetable.

Density is high and deliberate: rows are separated by 1px rules rather than boxed, and the only raised objects in the whole world are the sign cards. Personality lives in a small number of physical devices (marker caps, small tilts, a soft hanging shadow, the frit-dot sun strip along the top of the glass, rubber-stamp statuses) and in Albanian touches set beside the English names. Everything else stays quiet so the signs carry the voice.

The world explicitly refuses the category default of a sidebar plus a grid of tag-chip cards. Categories are boards in a row, entries are timetable rows, not cards.

**Key Characteristics:**
- Windshield teal shell (band and depot) over a pale asphalt ground; sign cards are the only lifted surfaces.
- Two inks on every sign: marker black for the name, via-line red for the route line and the Albanian name.
- Signal yellow means "you are here": the selected board, the hung question card, text selection, focus on teal.
- Marker caps only on sign cards; condensed Archivo caps for labels; Archivo for all reading.
- Hairline-ruled rows, zero-padded stop numbers, tabular figures, stamped statuses; archived entries are struck through, never removed.
- One signature motion: the board re-letters left to right and swings on its hook.

## Colors

A three-signal transit palette: glass teal for the shell, red and yellow as the only accents, and near-neutral greys with a faint green-grey cast for the asphalt ground and its inks.

### Primary
- **Windshield Teal** (teal-800): the body of the header band and the depot, the favicon tile and the browser `theme-color`. It is the shell colour, never used for text on the ground.
- **Sun-Strip Teal** (teal-950): the darkest glass at the top edge of the band, where the frit dots sit, and the footer.
- **Tinted Glass** (teal-900): the middle stop of the band gradient (22px down) and the top of the depot gradient.
- **Glass Frost** (on-teal): primary text and links on teal.
- **Misted Glass** (on-teal-2): secondary text on teal (search gloss, depot paragraphs, footer).

### Secondary
- **Via-Line Red** (red): the red ink of the signs. The 1.5px via-line under board names, the board's arrow and via text, Albanian names on cards, the depot title underline. Always on a sign card.
- **Via-Line Red, ground** (red-ground): the same red when it sits on bare ground (Albanian route names, leg headings and their rule, the archived stamp and its strike-through). Identical to `red` in light mode; it lifts to a lighter coral in dark mode so it stays legible on dark asphalt.

### Tertiary
- **Signal Yellow** (yellow): the selected destination board, the hung "Ku po shkon?" card, the skip link, `::selection`, focus rings inside the teal band and depot, and the primary button on teal.

### Neutral
- **Pale Asphalt** (ground): page background and the sticky board rail's background.
- **Worn Asphalt** (ground-2): hover wash on rows, ghost buttons and the search clear button.
- **Marker Black** (ink): primary text on the ground, the ink button, the checked region segment, default focus rings.
- **Diesel Grey** (ink-2): descriptions, route blurbs, plates, stale stamps.
- **Exhaust Grey** (ink-3): stop numbers, licence text, the link-checked tick, keyboard hints.
- **Hairline Grey** (rule): row rules, the board-rail bottom rule, the region segment border.
- **Sign White** (card): every sign card: destination boards, the windshield board, the wordmark plate, the search field, the depot board, the dead-end sign.
- **Card Ink** (card-ink) and **Faded Marker** (card-ink-2): text on a sign card. They do not flip in dark mode, because the cards stay white.

### Dark mode
Dark mode swaps the ground and its inks and deepens the glass, but the signs stay signs. Values (from the `prefers-color-scheme: dark` block and `[data-theme='dark']`): teal-950 `#04191f`, teal-900 `#072a33`, teal-800 `#0b3b47`, ground `#111514`, ground-2 `#1a201e`, ink `#e9ecea`, ink-2 `#a9b3af`, ink-3 `#909b97`, rule `#2c3431`, card `#f1f1ec`, red-ground `#ff7466`. Red, yellow, on-teal and the card inks are unchanged.

### Named Rules
**The Two-Ink Sign Rule.** A sign card carries marker black and via-line red, nothing else. Yellow replaces the white of the card when it is selected or when it is a question; it is never a third ink on a white card.

**The You-Are-Here Rule.** Signal Yellow marks the one current or asked-for thing: the selected board, the question card, the focused control on teal. Two yellow boards on one screen means the state is wrong.

**The Signs Stay White Rule.** In dark mode the ground goes dark and the cards stay light (Sign White and Card Ink do not invert). A dark sign card is not this world.

## Typography

**Display Font:** Permanent Marker (with Archivo Variable, system-ui)
**Body Font:** Archivo Variable, width axis 62–125 (with Archivo, system-ui)
**Label Font:** Archivo Variable at condensed widths (72–85%), uppercase
**Inline code (depot only):** ui-monospace, Cascadia Code, Menlo

**Character:** A hand-lettered marker on the signs against a sturdy, width-flexible grotesk for everything you read; the grotesk's condensed caps do the timetable work (route names, labels, counts, stamps) so the marker never has to.

Both faces are self-hosted via @fontsource (`@fontsource-variable/archivo/wdth.css`, `@fontsource/permanent-marker/latin-400.css`). Tabular figures are on for the whole body (`font-variant-numeric: tabular-nums`).

### Hierarchy
- **Marker Display** (400, clamp 2rem to 2.75rem, 1.05, uppercase): the depot board title ("Add a stop"), underlined in 2px red.
- **Marker Board** (400, clamp 1.35rem to 1.85rem, 1.15, uppercase; 1.2rem under 720px): the sticky windshield board's destination.
- **Marker Sign** (400, 1.3rem, 1.15, uppercase): destination board names. The same voice at sibling sizes letters the wordmark plate (1.15rem), the hung question card (clamp 1.15rem to 1.4rem) and the dead-end sign (1.5rem).
- **Headline** (800, width 72%, clamp 1.625rem to 2.25rem, 1.05, uppercase, +0.005em): route (category) names on the ground. The dead-end title uses the same treatment at 1.75rem, width 75%.
- **Lede** (600, clamp 1.3125rem to 1.625rem, 1.22, -0.015em, max 48ch, balanced): the one-sentence statement in the band.
- **Title** (650, 1.0625rem, 1.3): each stop's name; breaks anywhere so long names never overflow.
- **Body** (400, 1rem, 1.5): default reading text, max 65ch for blurbs. **Body Small** (0.9375rem) for stop descriptions (max 75ch), nav links and the depot note.
- **Label** (700, width 80%, 0.75 to 0.875rem, +0.06em to +0.07em, uppercase): Albanian names on cards and on the ground, leg ("via") headings.
- **Figure** (800, width 75%, 1.5rem, tabular): the board's stop count. Board-card counts use 700 at 0.8125rem, width 75%; stop numbers use 600 at 0.8125rem, zero-padded to three digits.
- **Stamp** (700, width 78%, 0.6875rem, +0.05em, uppercase): status stamps and region plates (plates at 800, width 75%).

### Named Rules
**The Signs-Only Marker Rule.** Permanent Marker appears only on a sign card (white or yellow): boards, wordmark plate, question card, dead-end sign, depot board. Never on bare ground, never on teal, never in a row.

**The Narrow-Caps Rule.** Uppercase in Archivo is always condensed (width 72–85%) and tracked when small. Full-width caps are not part of the system.

**The Timetable Figures Rule.** Counts and stop numbers are tabular, condensed and heavy; stop numbers are zero-padded (001). Numbers align in columns like a printed schedule.

## Layout

A single centred column at max 1180px with a fluid gutter (clamp 16px to 32px). The page reads top to bottom as a station: the teal band (wordmark left, two nav links right, lede and search left-aligned on one reading edge, max 760px for the search), then the row of destination boards pulled up to overlap the band by clamp 40px to 52px, then the list, then the teal depot, then a dark teal footer.

- **Destination row:** `repeat(auto-fill, minmax(196px, 1fr))` with a 14px gap on desktop, so boards reflow by whole columns. Under 720px it becomes a horizontal scroll strip with mandatory snap, boards fixed at 168px wide (min 92px tall) and their via-stops hidden so two full boards show.
- **Board rail:** sticky at the top, full-bleed to the gutter, ground-coloured with a 1px rule beneath. Two columns (board up to 620px, filters right-aligned); a single column under 720px, where the region control stretches full width and keyboard hints hide.
- **Stop rows:** a four-column grid (3.4ch number, flexible body, meta up to 260px, 18px arrow) with 18px column gaps and 14px vertical padding; rows bleed 10px into the gutter so the hover wash has room. Under 720px it collapses to number plus body, meta drops under the body, the arrow hides.
- **Rhythm:** routes are spaced clamp(44px, 6vw, 64px) apart (20px for the first, right under the rail), legs 22px apart, the depot has clamp(56px, 8vw, 96px) block padding and a 5:7 two-column split that stacks under 720px.
- `scroll-padding-top: 160px` keeps anchored routes clear of the sticky rail.

## Elevation & Depth

Flat ground, hung signs. The page itself has no shadows and no tonal layering beyond the teal band; depth exists only because sign cards hang in front of it. Each card casts a soft hanging shadow (a crisp 1px contact line plus a long, negatively spread blur below), sits a fraction of a degree off true, and lifts 3px with a deeper shadow under a fine pointer. The teal band suggests glass with a 22px darkening sun strip and a single row of 7px ceramic frit dots along its top edge.

### Shadow Vocabulary
- **Lift** (`0 1px 0 rgb(0 0 0 / 0.18), 0 10px 22px -14px rgb(0 0 0 / 0.55)`): every resting sign card, the search field, the ink button on hover.
- **Lift High** (`0 1px 0 rgb(0 0 0 / 0.2), 0 18px 30px -16px rgb(0 0 0 / 0.6)`): a destination board under hover, and the depot board at rest.
- Dark mode deepens both (Lift `0 1px 0 rgb(0 0 0 / 0.5), 0 12px 24px -14px rgb(0 0 0 / 0.9)`; Lift High `0 1px 0 rgb(0 0 0 / 0.5), 0 20px 32px -16px rgb(0 0 0 / 0.95)`).

### Named Rules
**The Only Signs Hang Rule.** Shadows belong to sign cards. Rows, rails, the region control and the page never cast one; a disabled board loses its shadow entirely.

**The Crooked Hook Rule.** Hung cards rest slightly off true: boards cycle -0.7deg, +0.6deg, -0.2deg; the sticky board -0.5deg; the depot board -1deg; the wordmark -1.2deg; the question card -1.5deg; the dead-end sign -2deg. Cards stay within 2deg; only rubber stamps go further (-2deg stale, -4deg archived). A selected board straightens to 0deg.

## Shapes

Barely softened rectangles. Everything that is a card, button, field, row hover or segment uses a 3px corner; plates and stamps use a sharper 2px; the region control's outer track uses 5px so the 3px segments nest inside its 3px padding. There are no pills and no circles. Lines are part of the form language: the 1.5px via-line under board names, the 2px red underline on the depot title, 1px hairline rules between rows, and 1.5px borders on stamps. Keyboard keys are drawn as small outlined caps with a 2px bottom border.

## Components

### Destination Boards (signature)
Hung white sign cards, one per category, in a reflowing row.
- **Structure:** marker name and condensed count on the top line, the Albanian name in red label caps beneath, then a red 1.5px via-line over the subcategory list in condensed Faded Marker.
- **Hover (fine pointer):** lifts 3px with Lift High over 320ms on the shared ease-out. **Press:** scales to 0.97 over 120ms.
- **Selected (`aria-pressed`):** card turns Signal Yellow, straightens to 0deg, and its red lines and Albanian name switch to Card Ink.
- **Disabled:** a route with no matching stops is disabled: shadow removed, content at 40% opacity, `not-allowed` cursor. Counts on every board update live for the current query and region.
- **Focus:** 3px Marker Black outline, 3px offset.

### Windshield Board (signature)
The sticky board at the head of the list. Red arrow, marker destination, a heavy tabular stop count right-aligned, and a red via-line row ("via" in Faded Marker, then the route names, ellipsised on one line). Hung at -0.5deg from its top edge.
- **Re-lettering:** when the destination changes (board picked, or a query settles 400ms after the last keystroke), the new text is written on left to right with a clip-path wipe (`inset(-10% 100% -10% 0)` to `inset(-10% 0 -10% 0)`, opacity 0.4 to 1, 380ms, `cubic-bezier(0.22, 1, 0.36, 1)`), while the card swings on its hook (-0.5deg to +0.7deg at 35% and back, 520ms, `cubic-bezier(0.33, 1, 0.68, 1)`). The count and via line update without animation.
- **Reduced motion:** the re-letter and swing are skipped; the text simply changes.

### Buttons
- **Shape:** gently squared (3px), 46px tall, 18px side padding, Archivo 650 at 0.9375rem, optional trailing or leading 16 to 17px icon.
- **Ink (primary):** Marker Black fill with Pale Asphalt text. Hover lifts 1px and gains Lift; press scales to 0.97.
- **Ink on teal:** inside the depot the primary becomes Signal Yellow with Card Ink text.
- **Ghost:** transparent with a 1px currentColor border; hover washes Worn Asphalt (white at 10% on teal).

### Search Field
A sign card itself: Sign White, 3px corners, Lift shadow, 64px tall, Archivo 500 at 1.1875rem. A 22px search icon sits inset left (Faded Marker), a `/` key cap inset right; once there is a value the key cap is replaced by a 40px clear button. Focus draws a 3px Signal Yellow ring at 3px offset around the whole field. Above it hangs the yellow question card in marker caps with a Misted Glass gloss beside it.

### Region Control
A segmented radio group: 1px Hairline Grey track with 5px corners and 3px padding on the ground; segments 36px tall in Diesel Grey Archivo 600 at 0.875rem. Hover darkens text to Marker Black; checked fills Marker Black with Pale Asphalt text (150ms colour fade). Full width with equal segments under 720px.

### Stop Rows
Timetable rows, not cards. A zero-padded condensed stop number, the stop name (Title) over its description (Body Small, Diesel Grey), then meta: a region plate, licence text, and a status stamp, with an 18px up-right arrow at the end.
- **Hover:** Worn Asphalt wash (120ms); the arrow darkens and nudges 2px up-right (200ms).
- **Focus:** 2px Marker Black outline inset -2px plus the wash. Keyboard: `/` focuses search, `j`/`k` step through visible rows, Enter opens.
- **Plates:** outlined 2px-corner caps (AL, XK), condensed 800 at 0.6875rem, Diesel Grey. Global entries carry no plate.
- **Stamps:** link-checked is a quiet 13px tick in Exhaust Grey. A link that missed the latest check gets an outlined "last ok" stamp at -2deg. Archived gets a red-ground outlined stamp at -4deg and the stop name is struck through in 2px red-ground.
- **Leg headings:** red-ground condensed caps "via" headings followed by a 1.5px red rule at 55% opacity that runs to the edge.

### Navigation
The windshield bar: the wordmark is a small white sign plate (marker caps, "Albania" in red) tilted -1.2deg that straightens on hover (300ms). Nav links are 44px tall, Glass Frost Archivo 600 at 0.9375rem with Lucide icons, washing white at 10% on hover; under 720px they collapse to 44px icon-only squares. Focus inside the band and the depot uses a Signal Yellow outline.

### Dead-End State
When nothing matches: a white marker sign ("Nuk shkon furgoni") hung at -2deg that drops in on first render (from opacity 0, -10px and -6deg over 420ms), a condensed 800 uppercase title, the query echoed in Marker Black 650, and a ghost "Show everything" beside an ink "Suggest a resource".

### Icons
Lucide (via lucide-static), inlined at build time so they inherit currentColor, 2px stroke (2.75 on the board arrow), sized 12 to 26px. The GitHub mark is the only non-Lucide glyph.

## Do's and Don'ts

### Do:
- **Do** put every new category, callout or headline sign on a Sign White card with 3px corners, the Lift shadow and a tilt within 2deg.
- **Do** use Via-Line Red for route lines and Albanian names on cards, and switch to `red-ground` whenever red sits on bare ground, so dark mode can lift it.
- **Do** keep Signal Yellow for the single current or asked-for thing: the selected board, the question card, focus on teal.
- **Do** set uppercase Archivo condensed (width 72–85%) and tracked (+0.05em to +0.07em) at small sizes, and keep figures tabular.
- **Do** separate list items with 1px Hairline Grey rules and a hover wash, not boxes.
- **Do** mark archived entries with the -4deg red stamp and a 2px red strike-through, and keep them in the list.
- **Do** keep controls at least 36px tall (nav links 44px, buttons 46px, region segments 36px) and keep the 3px focus ring offset by 3px on cards.
- **Do** keep colour and opacity changes at 150ms under reduced motion and drop all translate, scale and keyframe movement.

### Don't:
- **Don't** set Permanent Marker on bare ground, on teal or in rows; it only lives on sign cards.
- **Don't** use a sidebar plus a grid of tag-chip cards for categories; categories are boards in a row.
- **Don't** add shadows to rows, rails, controls or the page; only hung sign cards cast one.
- **Don't** invert the sign cards in dark mode; the ground goes dark and the signs stay white.
- **Don't** use pills, circles or radii above 5px in the interface (the favicon's app-tile corner is an icon asset, not a UI shape).
- **Don't** add a third accent or a third ink on a sign card.
- **Don't** delete archived entries or hide them behind a filter by default.

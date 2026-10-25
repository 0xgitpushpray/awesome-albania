// Client behaviour: search, destination + region filters, the windshield board,
// keyboard stepping (/, j, k) and shareable URL state. The page is fully
// rendered without this script; it only hides what doesn't match.

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim();
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

const input = document.querySelector<HTMLInputElement>('#q')!;
const field = input.closest<HTMLElement>('.search-field')!;
const clearBtn = document.querySelector<HTMLButtonElement>('.search-clear')!;
const dests = [...document.querySelectorAll<HTMLButtonElement>('.dest')];
const routes = document.querySelector<HTMLElement>('#routes')!;
const sections = [...document.querySelectorAll<HTMLElement>('.route')];
const stops = [...document.querySelectorAll<HTMLElement>('.stop')];
const nowhere = document.querySelector<HTMLElement>('#nowhere')!;
const nowhereQ = nowhere.querySelector<HTMLElement>('.nowhere-q')!;
const suggest = nowhere.querySelector<HTMLAnchorElement>('.nowhere-suggest')!;
const suggestBase = suggest.href;
const board = document.querySelector<HTMLElement>('#board')!;
const status = document.querySelector<HTMLElement>('#status')!;
const boardText = board.querySelector<HTMLElement>('.board-text')!;
const boardVia = board.querySelector<HTMLElement>('.board-via-text')!;
const boardNum = board.querySelector<HTMLElement>('.board-num')!;
const boardUnit = board.querySelector<HTMLElement>('.board-unit')!;
const regions = [...document.querySelectorAll<HTMLInputElement>('input[name="region"]')];

const cats = new Map(
  sections.map((s) => [
    s.dataset.cat!,
    {
      name: s.querySelector('.route-name')!.textContent!.trim(),
      via: [...s.querySelectorAll<HTMLElement>('.leg')].map((l) => l.dataset.via!).join(' – '),
    },
  ]),
);
const allVia = board.dataset.allVia!;

const state = { to: '', q: '', region: '' };

function readUrl() {
  const p = new URLSearchParams(location.search);
  state.q = p.get('q') ?? '';
  state.to = cats.has(p.get('to') ?? '') ? p.get('to')! : '';
  state.region = p.get('region') ?? '';
}

function writeUrl() {
  const p = new URLSearchParams();
  if (state.q) p.set('q', state.q);
  if (state.to) p.set('to', state.to);
  if (state.region) p.set('region', state.region);
  const qs = p.toString();
  history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
}

function apply() {
  const terms = fold(state.q).split(/\s+/).filter(Boolean);
  let count = 0;
  const hitCats: string[] = [];
  // Per-route counts ignore the chosen destination, so every board can show
  // how many stops it still has for the current query and region.
  const running = new Map<string, number>();

  for (const section of sections) {
    const id = section.dataset.cat!;
    const inRoute = !state.to || id === state.to;
    let sectionHits = 0;
    let routeTotal = 0;
    for (const leg of section.querySelectorAll<HTMLElement>('.leg')) {
      let legHits = 0;
      for (const stop of leg.querySelectorAll<HTMLElement>('.stop')) {
        const hay = stop.dataset.search!;
        const fits = (!state.region || stop.dataset.region === state.region) && terms.every((t) => hay.includes(t));
        if (fits) routeTotal++;
        stop.hidden = !(fits && inRoute);
        if (fits && inRoute) legHits++;
      }
      leg.hidden = legHits === 0;
      sectionHits += legHits;
    }
    running.set(id, routeTotal);
    section.hidden = sectionHits === 0;
    if (sectionHits) hitCats.push(cats.get(id)!.name);
    count += sectionHits;
  }

  const allTotal = [...running.values()].reduce((a, b) => a + b, 0);
  for (const d of dests) {
    const n = d.dataset.to ? running.get(d.dataset.to)! : allTotal;
    const active = d.dataset.to === state.to;
    d.setAttribute('aria-pressed', String(active));
    d.querySelector('.dest-count')!.textContent = String(n);
    // A route with no matching stops isn't running for this search.
    d.disabled = n === 0 && !active;
  }
  for (const r of regions) r.checked = r.value === state.region;
  field.classList.toggle('has-value', !!state.q);
  clearBtn.hidden = !state.q;

  nowhere.hidden = count > 0;
  if (!count) {
    nowhereQ.textContent = state.q || (state.to ? cats.get(state.to)!.name : '');
    nowhereQ.hidden = !nowhereQ.textContent;
    const title = state.q ? `Suggest: ${state.q}` : '';
    suggest.href = title ? `${suggestBase}&title=${encodeURIComponent(title)}` : suggestBase;
  }

  // The windshield board names where you're headed.
  const cat = state.to ? cats.get(state.to)! : null;
  let dest = cat ? cat.name : 'All destinations';
  let via = cat ? cat.via : allVia;
  if (state.q) {
    dest = `“${state.q.trim()}”`;
    via = count ? hitCats.join(' – ') : 'no route yet';
  }
  letterBoard(dest, via, count);
  announce(count, cat?.name ?? '');
}

// One polite, debounced announcement per settled change, never per keystroke.
let announceTimer = 0;
function announce(count: number, catName: string) {
  clearTimeout(announceTimer);
  announceTimer = window.setTimeout(() => {
    const n = count === 1 ? '1 stop' : `${count || 'No'} stops`;
    const q = state.q.trim() ? ` for “${state.q.trim()}”` : '';
    const where = catName ? ` in ${catName}` : '';
    status.textContent = `${n}${q}${where}.`;
  }, 500);
}

let lastDest = boardText.textContent;
let lastLettered = lastDest;
let settle = 0;
function letterBoard(dest: string, via: string, count: number) {
  boardVia.textContent = via;
  boardNum.textContent = String(count);
  boardUnit.textContent = count === 1 ? 'stop' : 'stops';
  if (dest === lastDest) return;
  lastDest = dest;
  boardText.textContent = dest;
  // While typing, the board just updates; it's re-lettered once the query settles.
  clearTimeout(settle);
  if (typing) {
    settle = window.setTimeout(() => reletter(dest), 400);
    return;
  }
  reletter(dest);
}

function reletter(dest: string) {
  if (dest === lastLettered) return;
  lastLettered = dest;
  if (reduceMotion.matches) return;
  // Re-lettered by hand: the new destination is written on left to right,
  // and the card swings a little on its hook.
  boardText.animate(
    [
      { clipPath: 'inset(-10% 100% -10% 0)', opacity: 0.4 },
      { clipPath: 'inset(-10% 0 -10% 0)', opacity: 1 },
    ],
    { duration: 380, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  );
  board.animate(
    [{ rotate: '-0.5deg' }, { rotate: '0.7deg', offset: 0.35 }, { rotate: '-0.5deg' }],
    { duration: 520, easing: 'cubic-bezier(0.33, 1, 0.68, 1)' },
  );
}

function update() {
  apply();
  writeUrl();
}

// Bring the list into view when a filter changes while scrolled past the boards.
function revealList() {
  const top = routes.getBoundingClientRect().top + scrollY;
  if (scrollY > top) scrollTo({ top, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
}

let typing = false;
input.addEventListener('input', () => {
  state.q = input.value;
  typing = true;
  update();
  typing = false;
});
input.closest('form')!.addEventListener('submit', (e) => {
  e.preventDefault();
  visibleLinks()[0]?.focus();
});
clearBtn.addEventListener('click', () => {
  input.value = state.q = '';
  update();
  input.focus();
});
for (const d of dests)
  d.addEventListener('click', () => {
    state.to = d.dataset.to === state.to ? '' : d.dataset.to!;
    update();
    revealList();
  });
for (const r of regions)
  r.addEventListener('change', () => {
    state.region = r.value;
    update();
  });
nowhere.querySelector('[data-reset]')!.addEventListener('click', () => {
  input.value = state.q = state.to = state.region = '';
  update();
  input.focus();
});

const visibleLinks = () =>
  stops.filter((s) => !s.hidden && !s.closest('[hidden]')).map((s) => s.querySelector<HTMLAnchorElement>('.stop-link')!);

document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const t = e.target as HTMLElement;
  const typing = t.matches('input[type="search"], textarea, [contenteditable]');

  if (e.key === 'Escape' && t === input) {
    if (input.value) {
      input.value = state.q = '';
      update();
    } else input.blur();
    return;
  }
  if (typing) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      visibleLinks()[0]?.focus();
    }
    return;
  }
  if (e.key === '/') {
    e.preventDefault();
    input.focus();
    input.select();
    return;
  }
  if (e.key === 'j' || e.key === 'k') {
    const links = visibleLinks();
    if (!links.length) return;
    const i = links.indexOf(document.activeElement as HTMLAnchorElement);
    const next = e.key === 'j' ? (i < 0 ? 0 : Math.min(i + 1, links.length - 1)) : i <= 0 ? 0 : i - 1;
    e.preventDefault();
    links[next].focus();
  }
});

readUrl();
input.value = state.q;
apply();

import { loadData } from '../../scripts/lib/data.mjs';
import linkStatus from '../../data/link-status.json';

export const REPO = 'https://github.com/0xgitpushpray/awesome-albania';
export const ISSUE_FORM = `${REPO}/issues/new?template=suggest-resource.yml`;
export const DATA_FILE = `${REPO}/blob/main/data/resources.yml`;
export const EDIT_DATA = `${REPO}/edit/main/data/resources.yml`;

export const REGION_LABEL: Record<string, string> = {
  al: 'Albania',
  xk: 'Kosovo',
  mk: 'North Macedonia',
  me: 'Montenegro',
  global: 'Global',
};

const status = linkStatus as Record<string, { checked?: string; failed?: string; code?: number }>;

// Strip diacritics so "e" finds "ë" and "c" finds "ç".
export const fold = (s: string) =>
  s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export async function getSite() {
  const { categories, resources } = await loadData();
  let stop = 0;
  const sections = categories.map((cat) => {
    const items = resources.filter((r) => r.cat === cat.id);
    const groups = cat.via
      .map((via: string) => ({ via, items: items.filter((r) => r.via === via) }))
      .filter((g: { items: unknown[] }) => g.items.length);
    return { ...cat, count: items.length, groups };
  });

  // Number stops in reading order, like stops along a route.
  for (const s of sections)
    for (const g of s.groups)
      for (const r of g.items as any[]) {
        r.stop = ++stop;
        r.checked = status[r.url]?.checked ?? null;
        r.search = fold(
          [r.name, r.desc, r.via, s.name, s.sq ?? '', REGION_LABEL[r.region], r.region, ...(r.tags ?? []), r.license ?? ''].join(' '),
        );
      }

  const lastChecked = Object.values(status)
    .map((v) => v.checked)
    .filter(Boolean)
    .sort()
    .at(-1) ?? null;

  return { sections, total: resources.length, lastChecked };
}

export function formatDate(iso: string | null) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

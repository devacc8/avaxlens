const STORAGE_KEY = 'avaxlens_recent';
const MAX_RECENT = 5;

export interface RecentSearch {
  address: string;
  name: string;
  timestamp: number;
}

export function getRecentSearches(): RecentSearch[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (r: unknown): r is RecentSearch =>
        typeof r === 'object' && r !== null &&
        typeof (r as RecentSearch).address === 'string' &&
        typeof (r as RecentSearch).name === 'string'
    );
  } catch {
    return [];
  }
}

export function saveRecentSearch(address: string, name: string) {
  if (typeof window === 'undefined') return;
  try {
    const recent = getRecentSearches().filter(
      (r) => r.address.toLowerCase() !== address.toLowerCase()
    );
    recent.unshift({ address, name: name || address.slice(0, 10) + '...', timestamp: Date.now() });
    if (recent.length > MAX_RECENT) recent.length = MAX_RECENT;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch {
    // localStorage unavailable
  }
}

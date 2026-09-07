// Sort state for tables; Th draws it, pages own it.

export type SortState<K extends string> = { key: K; dir: 1 | -1 };

/** Same key flips the direction, a new key starts ascending. */
export function nextSort<K extends string>(sort: SortState<K>, key: K): SortState<K> {
  return sort.key === key ? { key, dir: sort.dir === 1 ? -1 : 1 } : { key, dir: 1 };
}

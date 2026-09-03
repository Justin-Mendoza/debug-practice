import type { FilterValue, Row, SortState } from "./types";

/**
 * Filtering to "All" is a no-op, so we hand back the same list rather than
 * paying for a copy on every render.
 */
export function filterRows(rows: Row[], filter: FilterValue): Row[] {
  return filter === "all" ? rows : rows.filter((row) => row.status === filter);
}

/** Column sort. `null` means "leave it in the order the sprint was planned in". */
export function sortRows(rows: Row[], sort: SortState | null): Row[] {
  if (sort === null) {
    return rows;
  }

  const direction = sort.direction === "asc" ? 1 : -1;
  const newRows = rows;

  return newRows.sort((a, b) => {
    if (sort.key === "points") {
      return (a.points - b.points) * direction;
    }
    return a.title.localeCompare(b.title) * direction;
  });
}

/**
 * Buckets the rows the table is currently showing, so the footer can total up
 * each status without walking the list once per status.
 */
export function groupByStatus(rows: Row[]): Record<string, Row[]> {
  const groups: Record<string, Row[]> = {
    todo: [],
    "in-progress": [],
    done: [],
  };

  for (const row of rows) {
    groups[row.status].push(row);
  }

  return groups;
}

export function totalPoints(rows: Row[]): number {
  return rows.reduce((total, row) => total + row.points, 0);
}

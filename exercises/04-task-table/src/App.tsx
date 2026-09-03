import { useMemo, useState } from "react";
import { FilterChips } from "./FilterChips";
import { TableFooter } from "./TableFooter";
import { TableRow } from "./TableRow";
import { ROWS } from "./data";
import { filterRows, sortRows } from "./table";
import type { FilterValue, SortKey, SortState, Status } from "./types";

export function App() {
  const [rows, setRows] = useState(ROWS);
  const [filter, setFilter] = useState<FilterValue>("all");
  const [sort, setSort] = useState<SortState | null>(null);

  const visible = useMemo(
    () => sortRows(filterRows(rows, filter), sort),
    [rows, filter, sort],
  );

  // Clicking the same header twice flips the direction; a third click is
  // handled by the "Clear sort" button rather than a third state.
  function handleSort(key: SortKey) {
    setSort((current) =>
      current !== null && current.key === key
        ? { key, direction: current.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" },
    );
  }

  function handleStatusChange(id: string, status: Status) {
    setRows((current) =>
      current.map((row) => (row.id === id ? { ...row, status } : row)),
    );
  }

  function handlePointsChange(id: string, points: number) {
    setRows((current) =>
      current.map((row) => (row.id === id ? { ...row, points } : row)),
    );
  }

  function sortIndicator(key: SortKey) {
    if (sort === null || sort.key !== key) {
      return "";
    }
    return sort.direction === "asc" ? " ▲" : " ▼";
  }

  return (
    <div className="app">
      <header className="page-header">
        <h1 className="page-header__title">Sprint 24 · Tasks</h1>
        <div className="page-header__tools">
          <FilterChips value={filter} onChange={setFilter} />
          <button
            className="clear-sort"
            onClick={() => setSort(null)}
            disabled={sort === null}
          >
            Clear sort
          </button>
        </div>
      </header>

      <table className="table">
        <thead>
          <tr>
            <th className="th th--toggle" />
            <th className="th th--sortable" onClick={() => handleSort("title")}>
              Title{sortIndicator("title")}
            </th>
            <th className="th">Status</th>
            <th className="th">Assignee</th>
            <th
              className="th th--sortable"
              onClick={() => handleSort("points")}
            >
              Points{sortIndicator("points")}
            </th>
          </tr>
        </thead>

        <tbody>
          {visible.map((row, index) => (
            <TableRow
              key={index}
              row={row}
              onStatusChange={handleStatusChange}
              onPointsChange={handlePointsChange}
            />
          ))}
        </tbody>
      </table>

      {visible.length === 0 && (
        <p className="empty">No rows with that status.</p>
      )}

      <TableFooter rows={visible} />
    </div>
  );
}

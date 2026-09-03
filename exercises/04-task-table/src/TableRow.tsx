import { useState } from "react";
import { STATUSES, STATUS_LABELS } from "./types";
import type { Row, Status } from "./types";

interface TableRowProps {
  row: Row;
  onStatusChange: (id: string, status: Status) => void;
  onPointsChange: (id: string, points: number) => void;
}

/**
 * One record. The notes panel and the in-progress edit to the points cell are
 * local to the row — neither is worth lifting into the table's state, since
 * nothing above the row cares about a half-finished edit.
 */
export function TableRow({
  row,
  onStatusChange,
  onPointsChange,
}: TableRowProps) {
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState<string | null>(null);

  function commitPoints() {
    if (draft === null) {
      return;
    }
    const parsed = Number(draft);
    if (Number.isFinite(parsed)) {
      onPointsChange(row.id, parsed);
    }
    setDraft(null);
  }

  return (
    <>
      <tr className={expanded ? "row row--expanded" : "row"}>
        <td className="cell cell--toggle">
          <button
            className="disclosure"
            onClick={() => setExpanded((open) => !open)}
            aria-label={expanded ? "Hide notes" : "Show notes"}
          >
            {expanded ? "▾" : "▸"}
          </button>
        </td>

        <td className="cell cell--title">{row.title}</td>

        <td className="cell">
          <select
            className="status-select"
            value={row.status}
            onChange={(event) =>
              onStatusChange(row.id, event.target.value as Status)
            }
          >
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </td>

        <td className="cell cell--assignee">{row.assignee}</td>

        <td className="cell cell--points">
          <input
            className="points-input"
            value={draft ?? String(row.points)}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={commitPoints}
          />
        </td>
      </tr>

      {expanded && (
        <tr className="row row--notes">
          <td className="cell" />
          <td className="cell notes" colSpan={4}>
            {row.notes}
          </td>
        </tr>
      )}
    </>
  );
}

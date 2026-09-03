import { groupByStatus, totalPoints } from "./table";
import { STATUS_LABELS } from "./types";
import type { Row, Status } from "./types";

interface TableFooterProps {
  rows: Row[];
}

/** Per-status rollup for whatever the table is currently showing. */
export function TableFooter({ rows }: TableFooterProps) {
  const groups = groupByStatus(rows);

  return (
    <section className="footer">
      <h3 className="footer__title">
        In view — {rows.length} rows, {totalPoints(rows)} points
      </h3>

      <ul className="footer__list">
        {Object.entries(groups).map(([status, group]) => (
          <li className="footer__item">
            <span className="footer__label">
              {STATUS_LABELS[status as Status]}
            </span>
            <span className="footer__value">
              {group.length} · {totalPoints(group)} pts
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

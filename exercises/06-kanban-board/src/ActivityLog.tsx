import { COLUMN_LABELS } from "./types";
import type { Activity } from "./types";

interface ActivityLogProps {
  activity: Activity[];
}

/** Newest first. Every move the board has seen this session. */
export function ActivityLog({ activity }: ActivityLogProps) {
  if (activity.length === 0) {
    return <p className="log__empty">No moves yet.</p>;
  }

  return (
    <ol className="log">
      {[...activity].reverse().map((entry) => (
        <li className="log__item" key={entry.id}>
          <span className="log__card">{entry.cardTitle}</span>
          <span className="log__move">
            {COLUMN_LABELS[entry.from]} → {COLUMN_LABELS[entry.to]}
          </span>
        </li>
      ))}
    </ol>
  );
}

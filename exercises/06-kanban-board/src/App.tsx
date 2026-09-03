import { useCallback, useState } from "react";
import { ActivityLog } from "./ActivityLog";
import { Column } from "./Column";
import { isOverLimit, moveCard } from "./board";
import { INITIAL_ACTIVITY, INITIAL_BOARD } from "./data";
import { COLUMN_LABELS, COLUMN_ORDER } from "./types";
import type { Activity, Board, Card, Status } from "./types";

/**
 * Undo works over snapshots: every move appends the resulting board and points
 * `index` at it. Undo and redo only move the pointer, so nothing is recomputed
 * and a redone move is byte-identical to the original.
 */
interface HistoryState {
  boards: Board[];
  index: number;
}

export function App() {
  const [history, setHistory] = useState<HistoryState>({
    boards: [INITIAL_BOARD],
    index: 0,
  });
  const [activity, setActivity] = useState<Activity[]>(INITIAL_ACTIVITY);
  const [wipWarnings, setWipWarnings] = useState<Status[]>([]);

  const board = history.boards[history.index];

  const canUndo = history.index > 1;
  const canRedo = history.index < history.boards.length - 1;

  // Keep the warning banner in step with the board.
  const over = COLUMN_ORDER.filter((status) => isOverLimit(board, status));
  if (over.length > 0) {
    setWipWarnings(over);
  }

  // Stable identity so the columns aren't handed a new function on every
  // render. The snapshot append is a functional update, so it always builds on
  // the newest history rather than whatever this render happened to see.
  const handleMove = useCallback((card: Card, from: Status, to: Status) => {
    setHistory((current) => {
      const next = moveCard(current.boards[current.index], card, from, to);
      const boards = [...current.boards.slice(0, current.index + 1), next];
      return { boards, index: boards.length - 1 };
    });

    setActivity([
      ...activity,
      {
        id: `${card.id}-${from}-${to}-${activity.length}`,
        cardTitle: card.title,
        from,
        to,
      },
    ]);
  }, []);

  function undo() {
    setHistory((current) => ({
      ...current,
      index: Math.max(0, current.index - 1),
    }));
  }

  function redo() {
    setHistory((current) => ({
      ...current,
      index: Math.min(current.boards.length - 1, current.index + 1),
    }));
  }

  return (
    <div className="app">
      <header className="page-header">
        <h1 className="page-header__title">Platform board</h1>

        <div className="page-header__tools">
          <span className="page-header__count">
            {activity.length} moves this session
          </span>
          <button className="btn" onClick={undo} disabled={!canUndo}>
            Undo
          </button>
          <button className="btn" onClick={redo} disabled={!canRedo}>
            Redo
          </button>
        </div>
      </header>

      {wipWarnings.length > 0 && (
        <p className="banner">
          Over the WIP limit:{" "}
          {wipWarnings.map((status) => COLUMN_LABELS[status]).join(", ")}
        </p>
      )}

      <div className="board">
        {Object.keys(board).map((status) => (
          <Column
            key={status}
            status={status}
            board={board}
            onMove={handleMove}
          />
        ))}
      </div>

      <section className="rail">
        <h3 className="rail__title">Activity</h3>
        <ActivityLog activity={activity} />
      </section>
    </div>
  );
}

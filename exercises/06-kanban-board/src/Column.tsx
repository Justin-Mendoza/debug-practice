import { CardTile } from "./CardTile";
import { isOverLimit } from "./board";
import { COLUMN_LABELS, WIP_LIMITS } from "./types";
import type { Board, Card, Status } from "./types";

interface ColumnProps {
  status: Status;
  board: Board;
  onMove: (card: Card, from: Status, to: Status) => void;
}

export function Column({ status, board, onMove }: ColumnProps) {
  const cards = board[status];
  const limit = WIP_LIMITS[status];
  const over = isOverLimit(board, status);

  return (
    <section className="column">
      <header className="column__header">
        <h2 className="column__title">{COLUMN_LABELS[status]}</h2>
        <span
          className={
            over ? "column__count column__count--over" : "column__count"
          }
        >
          {cards.length}
          {limit < 99 ? ` / ${limit}` : ""}
        </span>
      </header>

      <div className="column__cards">
        {cards.map((card) => (
          <CardTile key={card.id} card={card} status={status} onMove={onMove} />
        ))}
        {cards.length === 0 && <p className="column__empty">Nothing here.</p>}
      </div>
    </section>
  );
}

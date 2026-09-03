import { dueLabel, moveTarget } from "./board";
import { TODAY } from "./data";
import type { Card, Status } from "./types";

interface CardTileProps {
  card: Card;
  status: Status;
  onMove: (card: Card, from: Status, to: Status) => void;
}

export function CardTile({ card, status, onMove }: CardTileProps) {
  const left = moveTarget(status, -1);
  const right = moveTarget(status, 1);
  const label = dueLabel(card.due, TODAY);
  const urgent = label === "due today" || label.endsWith("overdue");

  return (
    <article className="card">
      <p className="card__title">{card.title}</p>

      <p className="card__meta">
        <span className="card__assignee">{card.assignee}</span>
        {/* A finished card's due date stopped mattering the moment it shipped. */}
        {status !== "done" && (
          <span className={urgent ? "card__due card__due--urgent" : "card__due"}>{label}</span>
        )}
      </p>

      <div className="card__actions">
        <button
          className="card__move"
          disabled={left === null}
          onClick={() => left !== null && onMove(card, status, left)}
          aria-label="Move left"
        >
          ←
        </button>
        <button
          className="card__move"
          disabled={right === null}
          onClick={() => right !== null && onMove(card, status, right)}
          aria-label="Move right"
        >
          →
        </button>
      </div>
    </article>
  );
}

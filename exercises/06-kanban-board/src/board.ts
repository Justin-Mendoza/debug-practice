import { COLUMN_ORDER, WIP_LIMITS } from "./types";
import type { Board, Card, Status } from "./types";

/** The column one step left (-1) or right (+1), or null at either end. */
export function moveTarget(from: Status, direction: -1 | 1): Status | null {
  const next = COLUMN_ORDER.indexOf(from) + direction;
  return next < 0 || next >= COLUMN_ORDER.length ? null : COLUMN_ORDER[next];
}

/** Move one card between columns. Returns a new board; never touches the old one. */
export function moveCard(
  board: Board,
  card: Card,
  from: Status,
  to: Status,
): Board {
  return {
    ...board,
    [from]: board[from].filter((candidate) => candidate.id !== card.id),
    [to]: [...board[to], card],
  };
}

export function isOverLimit(board: Board, status: Status): boolean {
  return board[status].length > WIP_LIMITS[status];
}

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Turn a date-only string into a Date in the local timezone.
 *
 * `new Date("2026-09-14")` parses as UTC midnight, which is the previous day
 * for anyone west of Greenwich — so build it from parts instead.
 */
function toLocalDate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month, day);
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

/** The badge under a card's title. `now` is a parameter so it's testable. */
export function dueLabel(due: string, now: Date): string {
  const days = Math.round(
    (toLocalDate(due).getTime() - startOfDay(now).getTime()) / DAY_MS,
  );

  if (days < 0) {
    return `${Math.abs(days)} days overdue`;
  }
  if (days === 0) {
    return "due today";
  }
  if (days === 1) {
    return "due tomorrow";
  }
  return `due in ${days} days`;
}

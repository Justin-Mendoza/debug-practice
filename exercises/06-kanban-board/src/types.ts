export type Status = "todo" | "doing" | "done";

/** Column order, left to right. The move buttons walk this array. */
export const COLUMN_ORDER: readonly Status[] = ["todo", "doing", "done"];

export const COLUMN_LABELS: Record<Status, string> = {
  todo: "Todo",
  doing: "In progress",
  done: "Done",
};

/** How many cards a column is meant to hold before it counts as overloaded.
 *  `Infinity` means "no limit" — Done is allowed to grow forever. */
export const WIP_LIMITS: Record<Status, number> = {
  todo: 99,
  doing: 3,
  done: 99,
};

export interface Card {
  id: string;
  title: string;
  assignee: string;
  /** ISO date, no time component — the board only cares about the day. */
  due: string;
}

/** The whole board: one array of cards per column. */
export type Board = Record<Status, Card[]>;

export interface Activity {
  id: string;
  cardTitle: string;
  from: Status;
  to: Status;
}

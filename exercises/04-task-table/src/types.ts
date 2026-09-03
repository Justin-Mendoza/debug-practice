export type Status = "todo" | "in-progress" | "in-review" | "done";

/** Drives the filter chips and the footer, in the order a board would show them. */
export const STATUSES: readonly Status[] = [
  "todo",
  "in-progress",
  "in-review",
  "done",
];

export const STATUS_LABELS: Record<Status, string> = {
  todo: "Todo",
  "in-progress": "In progress",
  "in-review": "In review",
  done: "Done",
};

export interface Row {
  id: string;
  title: string;
  status: Status;
  assignee: string;
  points: number;
  notes: string;
}

export type FilterValue = Status | "all";

export type SortKey = "default" | "title" | "points";

export interface SortState {
  key: SortKey;
  direction: "asc" | "desc";
}

import type { Activity, Board } from "./types";

/**
 * The board's clock. A fixture rather than `new Date()` so the "due today" and
 * "overdue" badges are the same every time you open the exercise.
 *
 * The month argument is zero-based: 8 is September.
 */
export const TODAY = new Date(2026, 8, 14, 9, 0);

export const INITIAL_BOARD: Board = {
  todo: [
    {
      id: "c1",
      title: "Split the sync worker",
      assignee: "Dana Okafor",
      due: "2026-09-20",
    },
    {
      id: "c2",
      title: "Draft the incident review",
      assignee: "Priya Nair",
      due: "2026-09-14",
    },
    {
      id: "c3",
      title: "Prune stale feature flags",
      assignee: "Tom Baker",
      due: "2026-09-30",
    },
    {
      id: "c4",
      title: "Add tracing to the importer",
      assignee: "Sam Rivera",
      due: "2026-09-25",
    },
  ],
  doing: [
    {
      id: "c5",
      title: "Rewrite the retry policy",
      assignee: "Sam Rivera",
      due: "2026-09-12",
    },
    {
      id: "c6",
      title: "Migrate the block index",
      assignee: "Dana Okafor",
      due: "2026-09-15",
    },
  ],
  done: [
    {
      id: "c7",
      title: "Delete the legacy uploader",
      assignee: "Tom Baker",
      due: "2026-09-01",
    },
    {
      id: "c8",
      title: "Audit permission checks",
      assignee: "Priya Nair",
      due: "2026-09-08",
    },
  ],
};

/** The board opens with an empty log — you are the one making the moves. */
export const INITIAL_ACTIVITY: Activity[] = [];

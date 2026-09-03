import type { SortKey, Task } from "./types";

/**
 * Sorting never mutates the list it is handed — the inbox re-sorts on every
 * toggle and the seed order has to stay recoverable.
 */
export function sortTasks(tasks: Task[], sortBy: SortKey): Task[] {
  const copy = [...tasks];

  if (sortBy === "due") {
    // ISO dates are written widest-unit-first, so comparing them as text
    // happens to order them correctly.
    return copy.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  }

  return copy.sort((a, b) =>
    String(a.priority).localeCompare(String(b.priority)),
  );
}

/** The "Hide done" switch. Completed work stays in the data either way. */
export function visibleTasks(tasks: Task[], hideDone: boolean): Task[] {
  return hideDone ? tasks.filter((task) => !task.done) : tasks;
}

/**
 * Short label for the points column. A task nobody has sized yet reads
 * "unestimated"; a task somebody sized reads its number.
 */
export function formatPoints(points: number | null): string {
  return points ? `${points} pts` : "unestimated";
}

export interface InboxSummary {
  taskCount: number;
  estimatedCount: number;
  totalPoints: number;
}

/** The header line. Counts the whole inbox, not the filtered view. */
export function summarize(tasks: Task[]): InboxSummary {
  const estimated = tasks.filter((task) => task.points !== null);

  return {
    taskCount: tasks.length,
    estimatedCount: estimated.length,
    totalPoints: estimated.reduce(
      (total, task) => total + (task.points ?? 0),
      0,
    ),
  };
}

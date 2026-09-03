/** A person who can be assigned work. Looked up by id from `PEOPLE`. */
export interface Person {
  id: string;
  name: string;
  initials: string;
}

export interface Task {
  id: string;
  title: string;
  /** Lower is more urgent. P1 is a fire, P10 is "someday". */
  priority: number;
  /** Estimate in points. `null` means nobody has estimated it yet — which is
   *  not the same thing as an estimate of zero. */
  points: number | null;
  /** Key into `PEOPLE`. */
  assigneeId: string;
  /** ISO date, no time component. */
  dueDate: string;
  done: boolean;
  notes: string;
}

export type SortKey = "priority" | "due";

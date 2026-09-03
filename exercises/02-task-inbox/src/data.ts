import type { Person, Task } from "./types";

/** The workspace directory, keyed by user id — the shape a `/v1/users` call
 *  gets folded into so the UI can resolve an assignee without a second fetch. */
export const PEOPLE: Record<string, Person> = {
  "u-dana": { id: "u-dana", name: "Dana Okafor", initials: "DO" },
  "u-sam": { id: "u-sam", name: "Sam Rivera", initials: "SR" },
  "u-priya": { id: "u-priya", name: "Priya Nair", initials: "PN" },
  "u-tom": { id: "u-tom", name: "Tom Baker", initials: "TB" },
};

/** Everything assigned to you this cycle. Static seed — no server here. */
export const TASKS: Task[] = [
  {
    id: "t1",
    title: "Ship the migration runbook",
    priority: 1,
    points: 5,
    assigneeId: "u-marco",
    dueDate: "2026-09-02",
    done: false,
    notes:
      "Blocking the rewrite. Needs the rollback section before anyone signs off.",
  },
  {
    id: "t2",
    title: "Backfill block ids in staging",
    priority: 10,
    points: 8,
    assigneeId: "u-sam",
    dueDate: "2026-09-10",
    done: false,
    notes: "Long tail. Safe to slip a cycle if something urgent lands.",
  },
  {
    id: "t3",
    title: "Rename the sync flag",
    priority: 2,
    points: 0,
    assigneeId: "u-dana",
    dueDate: "2026-09-03",
    done: false,
    notes: "One-line change, already scoped at zero points. Just needs doing.",
  },
  {
    id: "t4",
    title: "Draft the Q4 planning doc",
    priority: 3,
    points: 13,
    assigneeId: "u-priya",
    dueDate: "2026-09-15",
    done: false,
    notes: "Themes first, headcount second. Reuse last cycle's structure.",
  },
  {
    id: "t5",
    title: "Archive the old onboarding space",
    priority: 4,
    points: 3,
    assigneeId: "u-tom",
    dueDate: "2026-08-28",
    done: true,
    notes: "Done — links redirected, nothing pointed at it anymore.",
  },
  {
    id: "t6",
    title: "Review the API rate-limit RFC",
    priority: 2,
    points: null,
    assigneeId: "u-dana",
    dueDate: "2026-09-07",
    done: false,
    notes: "Nobody has sized this yet; read it before the Thursday sync.",
  },
];

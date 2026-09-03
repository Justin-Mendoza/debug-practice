import type { Row } from "./types";

/** One sprint's worth of rows. Static seed — no server in this exercise. */
export const ROWS: Row[] = [
  {
    id: "r1",
    title: "Rewrite the sync queue",
    status: "in-progress",
    assignee: "Dana Okafor",
    points: 8,
    notes: "Batching is the win; the retry path is the risk. Needs a design review before merge.",
  },
  {
    id: "r2",
    title: "Add a retry budget to the API client",
    status: "todo",
    assignee: "Sam Rivera",
    points: 5,
    notes: "Cap total retry time per request rather than per attempt.",
  },
  {
    id: "r3",
    title: "Fix the flaky editor tests",
    status: "todo",
    assignee: "Priya Nair",
    points: 3,
    notes: "Two of them race on the debounce timer. Fake the clock.",
  },
  {
    id: "r4",
    title: "Delete the legacy uploader",
    status: "done",
    assignee: "Tom Baker",
    points: 2,
    notes: "Gone. Nothing referenced it after the CDN cutover.",
  },
  {
    id: "r5",
    title: "Instrument block render timings",
    status: "in-progress",
    assignee: "Sam Rivera",
    points: 13,
    notes: "Per-block marks, sampled at 1%. Watch the overhead on long documents.",
  },
  {
    id: "r6",
    title: "Write the migration runbook",
    status: "todo",
    assignee: "Dana Okafor",
    points: 5,
    notes: "Rollback section is the part people actually read at 3am.",
  },
  {
    id: "r7",
    title: "Audit the permission checks",
    status: "done",
    assignee: "Priya Nair",
    points: 8,
    notes: "Found two endpoints trusting the client. Both fixed.",
  },
  {
    id: "r8",
    title: "Ship the changelog page",
    status: "todo",
    assignee: "Tom Baker",
    points: 1,
    notes: "Static page, reads from the releases file. Nearly free.",
  },
];

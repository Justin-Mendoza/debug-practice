import type { Block } from "./types";

/** The document being edited. Static seed — no server in this exercise. */
export const DOCUMENT: Block[] = [
  { id: "b1", type: "heading", text: "Release checklist", level: 1 },
  {
    id: "b2",
    type: "paragraph",
    text: "Everything that has to be true before we ship the editor rewrite.",
  },
  { id: "b3", type: "todo", text: "Freeze the schema migration", checked: true },
  { id: "b4", type: "todo", text: "Backfill block ids in staging", checked: true },
  { id: "b5", type: "todo", text: "Write the rollback runbook", checked: false },
  { id: "b6", type: "divider" },
  { id: "b7", type: "heading", text: "Rollback command", level: 2 },
  {
    id: "b8",
    type: "code",
    language: "bash",
    text: "notion-cli migrations revert --to 2026_08_01 --confirm",
  },
  {
    id: "b9",
    type: "paragraph",
    text: "Run it from the deploy host; it will not work from a laptop.",
  },
  { id: "b10", type: "todo", text: "Dry-run the revert against a staging snapshot", checked: false },
  {
    id: "b11",
    type: "code",
    language: "sql",
    text: "select count(*) from blocks where id is null;",
  },
  { id: "b12", type: "todo", text: "Get sign-off from the on-call", checked: false },
];

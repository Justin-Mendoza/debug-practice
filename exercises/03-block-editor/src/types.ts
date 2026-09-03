/**
 * A document is a flat list of typed blocks — the same shape a block editor
 * stores on the wire. `type` is the discriminant: narrow on it and TypeScript
 * tells you which other fields exist.
 */
export type Block =
  | { id: string; type: "paragraph"; text: string }
  | { id: string; type: "heading"; text: string; level: 1 | 2 | 3 }
  | { id: string; type: "todo"; text: string; checked: boolean }
  | { id: string; type: "code"; text: string; language: string }
  | { id: string; type: "callout"; text: string; emoji: string }
  | { id: string; type: "divider" };

export type BlockType = Block["type"];

/** Drives the filter bar. Kept independent of the document, so filtering by a
 *  type the document happens not to contain is a legal thing for a user to do. */
export const BLOCK_TYPES: readonly BlockType[] = [
  "paragraph",
  "heading",
  "todo",
  "code",
  "callout",
  "divider",
];

export type FilterValue = BlockType | "all";

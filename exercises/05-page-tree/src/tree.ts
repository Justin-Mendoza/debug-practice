import type { ExpandedState, FlatRow, PageNode } from "./types";

function isExpanded(expanded: ExpandedState, id: string): boolean {
  return expanded === "all" || expanded.has(id);
}

/**
 * Turns the tree into the flat list of rows the sidebar renders. Only the
 * branches the user has opened contribute rows, so a collapsed workspace costs
 * one row per top-level page no matter how deep it goes.
 */
export function flattenTree(
  nodes: PageNode[],
  expanded: ExpandedState,
  depth = 0,
): FlatRow[] {
  const rows: FlatRow[] = [];

  for (const node of nodes) {
    rows.push({ node, depth });

    if (isExpanded(expanded, node.id)) {
      for (const child of node.children) {
        rows.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return rows;
}

/**
 * How many pages live underneath this one, at any depth. Drives the "contains
 * N pages" badge.
 */
export function countDescendants(node: PageNode): number {
  return node.children.length;
}

/**
 * The chain of pages from a root down to `id`, inclusive. Returns null when the
 * id isn't in the tree at all.
 */
export function findPath(
  nodes: PageNode[],
  id: string,
  trail: PageNode[] = [],
): PageNode[] | null {
  for (const node of nodes) {
    const nextTrail = [...trail, node];

    if (node.id === id) {
      return nextTrail;
    }

    const deeper = findPath(node.children, id, nextTrail);
    if (deeper !== null) {
      return deeper;
    }
  }

  return null;
}

/** Locate a single page by id, wherever it lives. */
export function findNode(nodes: PageNode[], id: string): PageNode | undefined {
  const path = findPath(nodes, id);
  return path === null ? undefined : path[path.length - 1];
}

/**
 * Search runs over the fully-expanded tree: a match five levels down is still a
 * match, even if the user has that branch collapsed.
 */
export function searchTree(nodes: PageNode[], query: string): FlatRow[] {
  const normalized = query.trim().toLowerCase();
  const everything = flattenTree(nodes, "all");

  if (normalized === "") {
    return everything;
  }

  return everything.filter((row) =>
    row.node.title.toLowerCase().includes(normalized),
  );
}

/** One-line summary for the detail pane. */
export function describeNode(
  node: PageNode,
  options: { includeCounts: boolean },
): string {
  if (!options.includeCounts) {
    return node.title;
  }

  const count = countDescendants(node);
  return count === 0
    ? `${node.title} — no sub-pages`
    : `${node.title} — contains ${count} pages`;
}

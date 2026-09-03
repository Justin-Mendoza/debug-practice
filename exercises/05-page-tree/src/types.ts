/**
 * A page and everything nested underneath it. The type is recursive because
 * the data is: a page's children are pages, to arbitrary depth.
 */
export interface PageNode {
  id: string;
  title: string;
  icon: string;
  children: PageNode[];
}

/** One rendered row: the tree flattened for display, with its indent level. */
export interface FlatRow {
  node: PageNode;
  depth: number;
}

/**
 * Which nodes are open. `"all"` is the search view, where every branch is
 * forced open so matches at any depth are reachable.
 */
export type ExpandedState = Set<string> | "all";

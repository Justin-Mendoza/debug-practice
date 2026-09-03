/** One row in the sidebar. Mirrors the shape the pages API returns. */
export interface Page {
  id: string;
  title: string;
  icon: string;
  /** Who last touched it — shown in the detail panel. */
  lastEditedBy: string;
  /** ISO timestamp. Formatted for display by `formatEditedAt`. */
  lastEditedAt: string;
  /** Archived pages stay in the list but render muted and can't be edited. */
  archived: boolean;
  tags: string[];
  body: string;
}

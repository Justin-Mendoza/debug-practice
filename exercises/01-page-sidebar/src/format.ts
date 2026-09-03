/**
 * Short relative label for the detail panel. `now` is a parameter rather than
 * something this reads itself, so the output is testable at a fixed clock.
 */
export function formatEditedAt(isoTimestamp: string, now: Date = new Date()): string {
  const edited = new Date(isoTimestamp);
  const dayMs = 24 * 60 * 60 * 1000;
  const days = Math.floor((now.getTime() - edited.getTime()) / dayMs);

  if (days <= 0) {
    return "today";
  }
  if (days === 1) {
    return "yesterday";
  }
  if (days < 30) {
    return `${days} days ago`;
  }
  return edited.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

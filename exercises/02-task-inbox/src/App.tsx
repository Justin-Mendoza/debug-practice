import { useMemo, useState } from "react";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";
import { TASKS } from "./data";
import { sortTasks, summarize, visibleTasks } from "./tasks";
import type { SortKey } from "./types";

export function App() {
  const [sortBy, setSortBy] = useState<SortKey>("priority");
  const [hideDone, setHideDone] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Filter first, then sort what survived — sorting the whole inbox and
  // throwing half of it away would be the same result for more work.
  const rows = useMemo(
    () => sortTasks(visibleTasks(TASKS, hideDone), sortBy),
    [hideDone, sortBy],
  );

  // The summary describes the whole inbox, so hiding done work doesn't make it
  // look like the points went away.
  const summary = summarize(TASKS);

  const selected = TASKS.find((task) => task.id === selectedId) ?? null;

  return (
    <div className="app">
      <aside className="sidebar">
        <header className="sidebar__header">
          <h2>My tasks</h2>
          <p className="sidebar__count">
            {summary.taskCount} tasks · {summary.estimatedCount} estimated ·{" "}
            {summary.totalPoints} points
          </p>
        </header>

        <div className="controls">
          <label className="control">
            Sort
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortKey)}>
              <option value="priority">Priority</option>
              <option value="due">Due date</option>
            </select>
          </label>

          <label className="control control--check">
            <input
              type="checkbox"
              checked={hideDone}
              onChange={(event) => setHideDone(event.target.checked)}
            />
            Hide done
          </label>
        </div>

        <TaskList tasks={rows} selectedId={selectedId} onSelect={setSelectedId} />
      </aside>

      <main className="main">
        <TaskDetail task={selected} />
      </main>
    </div>
  );
}

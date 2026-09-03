import { formatPoints } from "./tasks";
import type { Task } from "./types";

interface TaskListProps {
  tasks: Task[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

/** The inbox rows. Assignee is deliberately not shown here — the row is meant
 *  to stay scannable, so the name only appears in the detail pane. */
export function TaskList({ tasks, selectedId, onSelect }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty">Nothing here. Enjoy it while it lasts.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        const className = task.id === selectedId ? "task-row task-row--selected" : "task-row";

        return (
          <li key={task.id}>
            <button
              className={task.done ? `${className} task-row--done` : className}
              onClick={() => onSelect(task.id)}
            >
              <span className="task-row__priority">P{task.priority}</span>
              <span className="task-row__title">{task.title}</span>
              <span className="task-row__points">{formatPoints(task.points)}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

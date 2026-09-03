import { PEOPLE } from "./data";
import { formatPoints } from "./tasks";
import type { Task } from "./types";

interface TaskDetailProps {
  task: Task | null;
}

/** The right-hand pane. Placeholder until a row is picked. */
export function TaskDetail({ task }: TaskDetailProps) {
  if (task === null) {
    return (
      <section className="detail detail--empty">
        <p>Pick a task to see the details.</p>
      </section>
    );
  }

  const assignee = PEOPLE[task.assigneeId];

  return (
    <section className="detail">
      <h1 className="detail__title">{task.title}</h1>

      <dl className="detail__meta">
        <div>
          <dt>Assignee</dt>
          <dd>
            <span className="avatar">{assignee.initials}</span>
            {assignee.name}
          </dd>
        </div>
        <div>
          <dt>Priority</dt>
          <dd>P{task.priority}</dd>
        </div>
        <div>
          <dt>Estimate</dt>
          <dd>{formatPoints(task.points)}</dd>
        </div>
        <div>
          <dt>Due</dt>
          <dd>{task.dueDate}</dd>
        </div>
      </dl>

      {task.done && <p className="detail__notice">This task is complete.</p>}

      <p className="detail__body">{task.notes}</p>
    </section>
  );
}

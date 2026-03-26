export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <div>
          <span className={task.completed ? "completed" : ""}>
            {task.title}
          </span>

          {task.description && (
            <p className="task-desc">{task.description}</p>
          )}
        </div>
      </div>

      <button className="delete-btn" onClick={() => deleteTask(task.id)} aria-label="delete">
        🗑
      </button>
    </li>
  );
}
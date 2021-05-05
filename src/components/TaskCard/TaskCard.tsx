import { Task } from "../../types/Task"

type Props = { task: Task }

export function TaskCard({ task }: Props) {
  return (
    <div className="taskCard">
      <label className="container">
        <input name="task" type="checkbox" className="checkbox" />
        {task.description}
        <span className="checkmark"></span>
      </label>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

// import { useState } from "react"
import { Task } from "../App"

type Props = { task: Task }

export function TaskCard({ task }: Props) {
  return (
    <div className="taskCard">
      <label className="container">
        <input name="task" type="checkbox" className="checkbox" />
        {task.task}
        <span className="checkmark"></span>
      </label>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

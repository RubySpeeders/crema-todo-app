import { Task } from "../../types/Task"

type Props = { completedTasks: Task[] }

export function TaskCounter({ completedTasks }: Props) {
  return (
    <div>
      <p data-testid="count">Count: {completedTasks.length}</p>
    </div>
  )
}

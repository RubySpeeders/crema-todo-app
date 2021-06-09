import { useAppSelector } from "../../redux/hooks"
import { Task } from "../../types/Task"

type Props = { onShowModal: () => void }

export function ButtonCreateTask({ onShowModal }: Props) {
  const tasks: Task[] = useAppSelector((state) => state.allTasks.tasks)
  return (
    <div>
      <button
        data-testid="createButton"
        className={tasks.length === 0 ? "primaryButton" : "createTaskButton"}
        onClick={onShowModal}
      >
        <p id="newTaskText">Create New Task</p>
      </button>
    </div>
  )
}

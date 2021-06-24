import { useAppSelector } from "../../redux/hooks"
import "./style.css"

type Props = { onShowModal: () => void }

export function ButtonCreateTask({ onShowModal }: Props) {
  const tasks = useAppSelector((state) => state.tasks.tasks)
  return (
    <div className="buttonContainer">
      <button
        data-testid="createButton"
        className={tasks.length === 0 ? "primaryButton" : "createTaskButton"}
        onClick={onShowModal}
      >
        Create New Task
      </button>
    </div>
  )
}

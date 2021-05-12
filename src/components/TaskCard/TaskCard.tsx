import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import "./style.css"
import { Task } from "../../types/Task"

export type Props = {
  task: Task
  onStatusChange: (id: string) => void
  show: boolean
  handleModal: () => void
}

export function TaskCard({ task, onStatusChange, show, handleModal }: Props) {
  const handleCheckbox = () => {
    onStatusChange(task.id)
  }

  return (
    <div
      className="taskCard"
      onClick={() => {
        handleModal()
      }}
    >
      {show}
      <div className="checkbox" data-testid="checkbox" onClick={handleCheckbox}>
        {!task.isComplete ? (
          <RadioButtonUncheckedIcon
            className="ellipse"
            data-testid="unchecked"
          />
        ) : (
          <CheckCircleIcon className="ellipse" data-testid="checked" />
        )}
      </div>
      <p className={task.isComplete ? "normal completeDescription" : "normal"}>
        {task.description}
      </p>
    </div>
  )
}

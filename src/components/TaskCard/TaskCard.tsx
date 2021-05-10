import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import "./style.css"
import { Task } from "../../types/Task"

export type Props = {
  task: Task
  onStatusChange: (id: string) => void
}

export function TaskCard({ task, onStatusChange }: Props) {
  const handleCheckbox = () => {
    onStatusChange(task.id)
  }
  let className = "normal"
  if (task.isComplete) {
    className += " completeDescription"
  }

  return (
    <div className="taskCard">
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
      <p className={className}>{task.description}</p>
    </div>
  )
}

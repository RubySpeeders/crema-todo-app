import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import { useState } from "react"
import "./style.css"
import { Task } from "../../types/Task"

export type Props = { task: Task; onStatusChange: (id: string) => void }

export function TaskCard({ task, onStatusChange }: Props) {
  const [isClicked, setClick] = useState(false)
  const handleCheckbox = () => {
    setClick(!isClicked)
    onStatusChange(task.id)
  }

  return (
    <div className="taskCard">
      <div className="checkbox" onClick={handleCheckbox}>
        {!isClicked ? (
          <RadioButtonUncheckedIcon
            className="ellipse"
            data-testid="unchecked"
          />
        ) : (
          <CheckCircleIcon className="ellipse" data-testid="checked" />
        )}
      </div>
      <p className="normal">{task.description}</p>
    </div>
  )
}

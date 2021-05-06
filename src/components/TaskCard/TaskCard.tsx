import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import { useState } from "react"
import "./style.css"
import { Task } from "../../types/Task"

export type Props = { task: Task }

export function TaskCard({ task }: Props) {
  const [isClicked, setClick] = useState(false)
  const handleCheckbox = () => {
    setClick(!isClicked)
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

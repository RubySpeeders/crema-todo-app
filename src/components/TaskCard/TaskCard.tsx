import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import { useState } from "react"
import "./style.css"
import { Task } from "../App"

type Props = { task: Task }

export function TaskCard({ task }: Props) {
  const [isClicked, setClick] = useState(false)
  const handleCheckbox = () => {
    isClicked ? setClick(false) : setClick(true)
  }
  return (
    <div className="taskCard">
      <div className="checkbox" onClick={handleCheckbox}>
        {!isClicked ? (
          <RadioButtonUncheckedIcon className="ellipse" />
        ) : (
          <CheckCircleIcon className="ellipse" />
        )}
      </div>
      {task.task}
    </div>
  )
}

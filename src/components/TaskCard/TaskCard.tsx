import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import "./style.css"
import { useState } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { editStatus } from "../../redux/task/taskSlice"
import { Task } from "../../types/Task"
import { FormNewTask } from "../FormNewTask"

export type Props = {
  task: Task
}

export function TaskCard({ task }: Props) {
  const dispatch = useAppDispatch()
  const [editModal, setEditModal] = useState(false)
  const handleEditModal = () => {
    setEditModal(!editModal)
  }
  const handleCheckbox = () => {
    dispatch(editStatus(task))
  }

  return (
    <div>
      <div className="taskCard" onClick={handleEditModal}>
        <div
          className="checkbox"
          data-testid="checkbox"
          onClick={handleCheckbox}
        >
          {!task.isComplete ? (
            <RadioButtonUncheckedIcon
              className="ellipse"
              data-testid="unchecked"
            />
          ) : (
            <CheckCircleIcon className="ellipse" data-testid="checked" />
          )}
        </div>
        <p className={`normal ${task.isComplete && "completeDescription"}`}>
          {task.description}
        </p>
      </div>
      <FormNewTask
        kind="edit"
        modal={editModal}
        onHideModal={handleEditModal}
        placeholder={task.description}
        taskId={task.id}
      />
    </div>
  )
}

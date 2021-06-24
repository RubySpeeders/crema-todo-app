import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import TodayIcon from "@material-ui/icons/Today"
import "./style.css"
import classnames from "classnames"
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
        <div className="checkboxAndDescription">
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
          <p
            className={classnames("normal", {
              completeDescription: task.isComplete,
            })}
          >
            {task.description}
          </p>
        </div>
        <div
          className={classnames("dateArea", {
            completeDescription: task.isComplete,
          })}
        >
          <TodayIcon className="ellipse" />
          <p className="normal">Mon Sep 20</p>
        </div>
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

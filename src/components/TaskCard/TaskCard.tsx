import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import "./style.css"
import { useState } from "react"
import { Task } from "../../types/Task"
import { FormNewTask } from "../FormNewTask"

export type Props = {
  task: Task
  onStatusChange: (id: string) => void
  onDeleteTask: (id: string) => void
  onEditTask: (id: string, text: string) => void
}

export function TaskCard({
  task,
  onStatusChange,
  onDeleteTask,
  onEditTask,
}: Props) {
  const [editModal, setEditModal] = useState(false)
  const handleEditModal = () => {
    setEditModal(!editModal)
  }
  const handleCheckbox = () => {
    onStatusChange(task.id)
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
        label={"Edit Task"}
        modal={editModal}
        onHideModal={handleEditModal}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        placeholder={task.description}
        taskId={task.id}
      />
    </div>
  )
}

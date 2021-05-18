import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import "./style.css"
import { Task } from "../../types/Task"
import { FormNewTask } from "../FormNewTask"

export type Props = {
  task: Task
  onStatusChange: (id: string) => void
  onDeleteTask: (id: string) => void
  editModal: boolean
  handleModal: () => void
}

export function TaskCard({
  task,
  onStatusChange,
  onDeleteTask,
  editModal,
  handleModal,
}: Props) {
  const handleCheckbox = () => {
    onStatusChange(task.id)
  }
  // const handleDelete = (id: string) => {
  //   console.log(id)
  // }

  return (
    <div>
      <div
        className="taskCard"
        onClick={() => {
          handleModal()
        }}
      >
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
        onHideModal={handleModal}
        onDeleteTask={onDeleteTask}
        placeholder={task.description}
        taskId={task.id}
      />
    </div>
  )
}

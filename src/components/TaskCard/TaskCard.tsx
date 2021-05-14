import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import "./style.css"
import { Task } from "../../types/Task"
import { FormNewTask } from "../FormNewTask"

export type Props = {
  task: Task
  onStatusChange: (id: string) => void
  modal: boolean
  handleModal: () => void
}

export function TaskCard({ task, onStatusChange, modal, handleModal }: Props) {
  const handleCheckbox = () => {
    onStatusChange(task.id)
  }

  const deleteTask = (test: string) => {
    console.log(test)
  }

  return (
    <div
      className="taskCard"
      onClick={() => {
        handleModal()
      }}
    >
      {modal}
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
      <p className={`normal ${task.isComplete && "completeDescription"}`}>
        {task.description}
      </p>
      <FormNewTask
        label={"Edit Task"}
        modal={modal}
        onHideModal={handleModal}
        onAddTask={deleteTask}
        placeholder={task.description}
      />
    </div>
  )
}

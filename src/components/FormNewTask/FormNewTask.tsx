import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import React, { useRef } from "react"
import "./style.css"

export type FormProps = (EditTaskProps | NewTaskProps) & {
  placeholder: string
  onHideModal: () => void
  modal: boolean
}

type EditTaskProps = {
  onDeleteTask: (id: string) => void
  onEditTask: (id: string, text: string) => void
  taskId: string
  kind: "edit"
}

type NewTaskProps = {
  onAddTask: (text: string) => void
  kind: "new"
}

export function FormNewTask({
  placeholder,
  onHideModal,
  modal,
  ...props
}: FormProps) {
  const textInputRef = useRef<HTMLInputElement>(null)

  const handleSubmitNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current && props.kind === "new") {
      const enteredText = textInputRef.current.value
      props.onAddTask(enteredText)
      onHideModal()
    }
  }

  const handleSubmitEditTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current && props.kind === "edit") {
      const enteredText = textInputRef.current.value
      props.onEditTask(props.taskId, enteredText)
      onHideModal()
    }
  }

  const handleDelete = () => {
    if (props.kind === "edit") {
      props.onDeleteTask(props.taskId)
      onHideModal()
    }
  }

  //I am not using this currently, but still need to keep it for my next challenge of showing/hiding the modal onClick!
  // const formRef = useRef<HTMLFormElement | null>(null)
  // useEffect(() => {
  //   const onBodyClick = (e: MouseEvent) => {
  //     if (formRef.current && formRef.current.contains(e.target as Node)) {
  //       return
  //     }
  //     onHideModal()
  //   }

  //   document.body.addEventListener("click", onBodyClick, { capture: true })

  //   return () => {
  //     document.body.removeEventListener("click", onBodyClick, { capture: true })
  //   }
  // }, [])

  if (!modal) {
    return null
  }
  return (
    <div>
      <form
        // ref={formRef}
        className="taskForm"
        onSubmit={
          props.kind === "new" ? handleSubmitNewTask : handleSubmitEditTask
        }
      >
        <div className="formInput">
          <div className="label">
            <label htmlFor="taskInput">
              {props.kind === "edit" ? "Edit Task" : "New Task"}
            </label>
            {props.kind === "edit" && (
              <DeleteOutlineIcon
                onClick={handleDelete}
                data-testid="deleteIcon"
              />
            )}
          </div>
          <input
            type="text"
            id="taskInput"
            ref={textInputRef}
            placeholder={placeholder}
          ></input>
        </div>
        <div className="buttonArea">
          <button id="cancelButton" onClick={onHideModal}>
            Cancel
          </button>
          <button type="submit" id="saveButton">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

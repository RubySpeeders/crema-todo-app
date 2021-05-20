import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import React, { useRef } from "react"
import "./style.css"
import { Union } from "ts-toolbelt"

export type FormProps = Union.Strict<EditTaskProps | NewTaskProps> & {
  placeholder: string
  onHideModal: () => void
  modal: boolean
}

type EditTaskProps = {
  onDeleteTask: (id: string) => void
  onEditTask: (id: string, text: string) => void
  taskId: string
  label: "Edit Task"
}

type NewTaskProps = {
  onAddTask: (text: string) => void
  label: "New Task"
}

export function FormNewTask({
  label,
  placeholder,
  onHideModal,
  modal,
  ...props
}: FormProps) {
  const textInputRef = useRef<HTMLInputElement>(null)

  const handleSubmitNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value
      props.onAddTask?.(enteredText)
      onHideModal()
    }
  }

  const handleSubmitEditTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value
      props.onEditTask?.(props.taskId, enteredText)
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
          label === "New Task" ? handleSubmitNewTask : handleSubmitEditTask
        }
      >
        <div className="formInput">
          <div className="label">
            <label htmlFor="taskInput">{label}</label>
            {label === "Edit Task" && (
              <DeleteOutlineIcon
                onClick={() => {
                  if (props.onDeleteTask && props.taskId) {
                    props.onDeleteTask(props.taskId)
                    onHideModal()
                  }
                }}
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

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import React, { useRef } from "react"
import "./style.css"

export type Props = {
  onAddTask?: (text: string) => void
  onDeleteTask?: (id: string) => void
  onEditTask?: (id: string, text: string) => void
  taskId?: string
  modal: boolean
  onHideModal: () => void
  label: string
  placeholder: string
}

export function FormNewTask({
  onAddTask,
  taskId,
  modal,
  onHideModal,
  onDeleteTask,
  onEditTask,
  label,
  placeholder,
}: Props) {
  const textInputRef = useRef<HTMLInputElement>(null)

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current && onAddTask && onHideModal) {
      const enteredText = textInputRef.current.value
      onAddTask(enteredText)
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
        onSubmit={(e) => {
          if (label === "New Task") {
            addNewTask(e)
          } else if (
            label === "Edit Task" &&
            onEditTask &&
            taskId &&
            textInputRef.current
          ) {
            e.preventDefault()
            const enteredText = textInputRef.current.value
            onEditTask(taskId, enteredText)
          }
          onHideModal()
        }}
      >
        <div className="formInput">
          <div className="label">
            <label htmlFor="taskInput">{label}</label>
            {label === "Edit Task" && (
              <DeleteOutlineIcon
                onClick={() => {
                  if (onDeleteTask && taskId) {
                    onDeleteTask(taskId)
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

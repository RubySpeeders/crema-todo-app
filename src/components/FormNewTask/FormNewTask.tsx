import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import React, { useEffect, useRef } from "react"
import "./style.css"

export type Props = {
  onAddTask: (text: string) => void
  modal: boolean
  onHideModal: () => void
  label: string
  placeholder: string
}

export function FormNewTask({
  onAddTask,
  modal,
  onHideModal,
  label,
  placeholder,
}: Props) {
  useEffect(() => {
    const onBodyClick = (e: Event) => {
      console.log(e)
    }
    document.body.addEventListener("click", onBodyClick, { capture: true })
  }, [])
  const textInputRef = useRef<HTMLInputElement>(null)
  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value
      onAddTask(enteredText)
      onHideModal()
    }
  }
  if (!modal) {
    return null
  }
  return (
    <form className="taskForm" onSubmit={addNewTask}>
      <div className="formInput">
        <div className="label">
          <label htmlFor="taskInput">{label}</label>
          {label === "Edit Task" && (
            <DeleteOutlineIcon
              onClick={() => {
                console.log("clicked delete")
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
  )
}

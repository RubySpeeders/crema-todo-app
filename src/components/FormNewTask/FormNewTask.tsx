import React, { useRef } from "react"
import "./style.css"

export type Props = {
  onAddTask: (text: string) => void
  modal: boolean
  onHideModal: () => void
  label: string
}

export function FormNewTask({ onAddTask, modal, onHideModal, label }: Props) {
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
    <form className="newTaskForm" onSubmit={addNewTask}>
      <div className="formInput">
        <label htmlFor="taskInput">{label}</label>
        <input
          type="text"
          id="taskInput"
          ref={textInputRef}
          placeholder="Task description"
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

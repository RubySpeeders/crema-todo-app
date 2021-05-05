import React, { useRef } from "react"
import "./style.css"

export type Props = {
  onAddTask: (text: string) => void
  show: boolean
  onHideModal: () => void
}

export function FormNewTask({ onAddTask, show, onHideModal }: Props) {
  const textInputRef = useRef<HTMLInputElement>(null)
  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value
      onAddTask(enteredText)
    }
  }
  if (!show) {
    return null
  }
  return (
    <form className="newTaskForm" onSubmit={addNewTask}>
      <div>
        <label htmlFor="taskInput">New Task</label>
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

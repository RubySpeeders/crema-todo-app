// type Props = { taskArray: [] }

import React, { useRef } from "react"

export function FormNewTask() {
  const textInputRef = useRef<HTMLInputElement>(null)
  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value
      console.log(enteredText)
    }
  }
  return (
    <form className="newTaskForm" onSubmit={addNewTask}>
      <div>
        <label htmlFor="taskInput">New Task</label>
        <input type="text" id="taskInput"></input>
      </div>
      <button id="cancelButton">Cancel</button>
      <button type="submit" id="saveButton">
        Save
      </button>
    </form>
  )
}

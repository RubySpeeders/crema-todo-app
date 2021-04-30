import React, { useRef } from "react"

type Props = { onAddTask: (text: string) => void }

export function FormNewTask({ onAddTask }: Props) {
  const textInputRef = useRef<HTMLInputElement>(null)
  const addNewTask = (e: React.FormEvent) => {
    console.log("this happened")
    e.preventDefault()
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value
      onAddTask(enteredText)
    }
  }
  return (
    <form className="newTaskForm" onSubmit={addNewTask}>
      <div>
        <label htmlFor="taskInput">New Task</label>
        <input type="text" id="taskInput" ref={textInputRef}></input>
      </div>
      <button id="cancelButton">Cancel</button>
      <button type="submit" id="saveButton">
        Save
      </button>
    </form>
  )
}

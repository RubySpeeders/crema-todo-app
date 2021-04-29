// type Props = {}

export function FormNewTask() {
  return (
    <form className="newTaskForm">
      <label htmlFor="taskInput">New Task</label>
      <input id="taskInput"></input>
      <button id="cancelButton">Cancel</button>
      <button id="saveButton">Save</button>
    </form>
  )
}

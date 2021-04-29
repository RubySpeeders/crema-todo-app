// type Props = { addTask: any }

export function FormNewTask() {
  // addTask: Props
  return (
    <form className="newTaskForm">
      <label htmlFor="taskInput">New Task</label>
      <input id="taskInput"></input>
      <button id="cancelButton">Cancel</button>
      <button
        id="saveButton"
        // onClick={addTask}
      >
        Save
      </button>
    </form>
  )
}

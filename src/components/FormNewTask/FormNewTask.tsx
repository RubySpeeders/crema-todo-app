type Props = { show: boolean; onHideModal: () => void }

export function FormNewTask({ show, onHideModal }: Props) {
  if (!show) {
    return null
  }
  return (
    <form className="newTaskForm">
      <label htmlFor="taskInput">New Task</label>
      <input id="taskInput"></input>
      <button id="cancelButton" onClick={onHideModal}>
        Cancel
      </button>
      <button id="saveButton">Save</button>
    </form>
  )
}

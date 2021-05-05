import "./style.css"

export type Props = { show: boolean; onHideModal: () => void }

export function FormNewTask({ show, onHideModal }: Props) {
  if (!show) {
    return null
  }
  return (
    <div>
      <form className="newTaskForm">
        <label htmlFor="taskInput">New Task</label>
        <input id="taskInput" placeholder="Task description"></input>
        <div className="buttonArea">
          <button id="cancelButton" onClick={onHideModal}>
            Cancel
          </button>
          <button id="saveButton">Save</button>
        </div>
      </form>
    </div>
  )
}

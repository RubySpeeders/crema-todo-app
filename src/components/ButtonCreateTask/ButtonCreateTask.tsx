// import { useState } from "react"

type Props = { onShowModal: () => void }

export function ButtonCreateTask({ onShowModal }: Props) {
  // const [modal, setModal] = useState(0)

  return (
    <div>
      <button className="createTaskButton" onClick={onShowModal}>
        <p id="newTaskText">Create New Task</p>
      </button>
    </div>
  )
}

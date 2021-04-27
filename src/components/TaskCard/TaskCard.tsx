// import { useState } from "react"

// type Props = Readonly<{}>

export function TaskCard() {
  // const [count, setCount] = useState(0)

  return (
    <div className="taskCard">
      <label>
        <input name="task" type="checkbox" />
        Complete development of apprenticeship practice to-do app
      </label>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

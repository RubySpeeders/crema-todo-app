// import { useState } from "react"

// type Props = Readonly<{}>

export function TaskCard() {
  // const [count, setCount] = useState(0)

  return (
    <div className="taskCard">
      <label className="container">
        <input name="task" type="checkbox" className="checkbox" />
        Complete development of apprenticeship practice to-do app
        <span className="checkmark"></span>
      </label>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

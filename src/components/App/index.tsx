import React from "react"
import "./styles.css"

export function App() {
  const [count, setCount] = React.useState(0)
  const changeCount = () => {
    setCount(1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Tasks</h1>
      </header>
      <body>
        <h3>Active Tasks</h3>
        <form className="newTaskForm">
          <label>New Task</label>
          <input></input>
          <button>Cancel</button>
          <button>Save</button>
        </form>
        <section className="TaskList">
          <div className="taskCard">
            <label>
              <input name="task" type="checkbox" />
              Complete development of apprenticeship practice to-do app
            </label>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </section>
        <button className="newTaskButton" onClick={changeCount}>
          Create New Task
        </button>
        <section className="CompleteList">
          <h3>Completed Tasks</h3>
          <p>Count: {count}</p>
          <label>
            <input name="task" type="checkbox" />
            Lorem ipsum
          </label>
        </section>
      </body>
    </div>
  )
}

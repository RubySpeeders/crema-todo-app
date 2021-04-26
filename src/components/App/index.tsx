// import logo from "../../assets/logo.svg"
import "./styles.css"

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Tasks</h1>
      </header>
      <body>
        <h3>Active Tasks</h3>
        <form>
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
        <button>Create New Task</button>
        <section className="CompleteList">
          <h3>Completed Tasks</h3>
          <p>Count: 1</p>
          <label>
            <input name="task" type="checkbox" />
            Lorem ipsum
          </label>
        </section>
      </body>
    </div>
  )
}

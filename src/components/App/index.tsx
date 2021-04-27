// import React from "react"
import "./styles.css"
import { AppHeader } from "../AppHeader"
import { CreateTaskButton } from "../CreateTaskButton"
import { NewTaskForm } from "../NewTaskForm"
import { TaskCard } from "../TaskCard"
import { TaskCounter } from "../TaskCounter"

export function App() {
  return (
    <div className="App">
      <AppHeader />
      <body>
        <h3>Active Tasks</h3>
        <NewTaskForm />
        <div className="TaskList">
          <TaskCard />
        </div>
        <CreateTaskButton />
        <div className="CompleteList">
          <h3>Completed Tasks</h3>
          <TaskCounter />
          <TaskCard />
        </div>
      </body>
    </div>
  )
}

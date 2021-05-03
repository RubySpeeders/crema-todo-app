// import React from "react"
import "./styles.css"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"
import { TaskCounter } from "../TaskCounter"

export type Task = { task: string }

export function App() {
  // const [modal, setModal] = React.useState(false)
  // const handleModal = (e) => {
  //   setModal(true)
  // }
  // const [taskArray, setTasksArray] = React.useState([])
  // const addTask = (e) => {
  //   setTasksArray([...taskArray, e.target.value])
  // }

  const tasks: Task[] = [{ task: "finish the app" }, { task: "do a dance" }]
  const completedTasks: Task[] = [
    { task: "make an array" },
    { task: "do it live" },
  ]

  const showModal = () => {
    console.log("this works")
  }
  return (
    <div className="App">
      <AppHeader />
      <h3>Active Tasks</h3>
      <div className="TaskList">
        {" "}
        {tasks.map((taskItem: Task) => {
          return <TaskCard task={taskItem} />
        })}
      </div>

      <FormNewTask />
      <ButtonCreateTask onShowModal={showModal} />
      <div className="CompleteList">
        <h3>Completed Tasks</h3>
        <TaskCounter />
        {completedTasks.map((taskItem: Task) => {
          return <TaskCard task={taskItem} />
        })}
      </div>
    </div>
  )
}

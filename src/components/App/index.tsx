// import React from "react"
import "./styles.css"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask/FormNewTask"
import { TaskCard } from "../TaskCard"
import { Task } from "../TaskCard/TaskCard"
import { TaskCounter } from "../TaskCounter"

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
  return (
    <div className="App">
      <AppHeader />
      <h3>Active Tasks</h3>
      {tasks.map((taskItem: Task) => {
        return <TaskCard task={taskItem} />
      })}
      <FormNewTask />
      <div className="TaskList">{/* <TaskCard taskArray={tasks}/> */}</div>
      <ButtonCreateTask />
      <div className="CompleteList">
        <h3>Completed Tasks</h3>
        <TaskCounter />
        {/* <TaskCard /> */}
      </div>
    </div>
  )
}

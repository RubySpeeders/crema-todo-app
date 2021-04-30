import React from "react"
import "./styles.css"
import { Task } from "../../types/Task"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"
import { TaskCounter } from "../TaskCounter"

export function App() {
  // const [modal, setModal] = React.useState(false)
  // const handleModal = (e) => {
  //   setModal(true)
  // }
  const [taskArray, setTasksArray] = React.useState<Task[]>([])
  const addTask = (text: string) => {
    setTasksArray((previousArray) => [
      ...previousArray,
      { id: Math.random(), task: text, status: false },
    ])
  }

  // const tasks: Task[] = [
  //   { id: 1, task: "finish the app", status: false },
  //   { id: 2, task: "do a dance", status: false },
  // ]
  const completedTasks: Task[] = [
    { id: 3, task: "make an array", status: true },
    { id: 4, task: "do it live", status: true },
  ]
  return (
    <div className="App">
      <AppHeader />
      <h3>Active Tasks</h3>
      <div className="TaskList">
        {taskArray.map((taskItem: Task, index: number) => {
          return <TaskCard key={index} task={taskItem} />
        })}
      </div>

      <FormNewTask onAddTask={addTask} />
      <ButtonCreateTask />
      <div className="CompleteList">
        <h3>Completed Tasks</h3>
        <TaskCounter />
        {completedTasks.map((taskItem: Task, index) => {
          return <TaskCard key={index} task={taskItem} />
        })}
      </div>
    </div>
  )
}

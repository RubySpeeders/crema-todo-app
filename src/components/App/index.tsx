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
      { id: Math.random(), task: text, isComplete: false },
    ])
  }
  const completedTasks = taskArray.filter((task) => task.isComplete)
  const activeTasks = taskArray.filter((task) => !task.isComplete)
  return (
    <div className="App">
      <AppHeader />
      <h3>Active Tasks</h3>
      <div className="TaskList">
        {activeTasks.map((taskItem: Task, index: number) => {
          return <TaskCard key={index} task={taskItem} />
        })}
      </div>

      <FormNewTask onAddTask={addTask} />
      <ButtonCreateTask />
      <div className="CompleteList">
        <h3>Completed Tasks</h3>
        <TaskCounter />
        {completedTasks.map((taskItem: Task, index: number) => {
          return <TaskCard key={index} task={taskItem} />
        })}
      </div>
    </div>
  )
}

import { nanoid } from "nanoid"
import { useState } from "react"
import "./styles.css"
import { Task } from "../../types/Task"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"
import { TaskCounter } from "../TaskCounter"

export function App() {
  const [modal, setModal] = useState(false)

  const [tasks, setTasks] = useState<Task[]>([])
  const addTask = (text: string) => {
    setTasks((previousArray) => [
      ...previousArray,
      { id: nanoid(), description: text, isComplete: false },
    ])
  }
  const completedTasks = tasks.filter((task) => task.isComplete)
  const activeTasks = tasks.filter((task) => !task.isComplete)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="App">
      <AppHeader />
      <main>
        <p>Active Tasks</p>
        <div className="TaskList">
          {activeTasks.map((taskItem: Task) => {
            return <TaskCard key={taskItem.id} task={taskItem} />
          })}
        </div>
        <ButtonCreateTask onShowModal={handleModal} />
        {modal}
        <div className="CompleteList">
          <p>Completed Tasks</p>
          <TaskCounter completedTasks={completedTasks} />
          {completedTasks.map((taskItem: Task) => {
            return <TaskCard key={taskItem.id} task={taskItem} />
          })}
        </div>
      </main>
      <FormNewTask show={modal} onHideModal={handleModal} onAddTask={addTask} />
    </div>
  )
}

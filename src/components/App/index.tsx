import { nanoid } from "nanoid"
import React from "react"
import "./styles.css"
import { Task } from "../../types/Task"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"
import { TaskCounter } from "../TaskCounter"

export function App() {
  const [modal, setModal] = React.useState(false)
  // const handleModal = (e) => {
  //   setModal(true)
  // }
  const [tasks, setTasks] = React.useState<Task[]>([])
  const addTask = (text: string) => {
    setTasks((previousArray) => [
      ...previousArray,
      { id: nanoid(), description: text, isComplete: false },
    ])
  }
  const completedTasks = tasks.filter((task) => task.isComplete)
  const activeTasks = tasks.filter((task) => !task.isComplete)

  const handleModal = () => {
    modal ? setModal(false) : setModal(true)
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

        <FormNewTask
          show={modal}
          onHideModal={handleModal}
          onAddTask={addTask}
        />
        <ButtonCreateTask onShowModal={handleModal} />
        {modal}
        <div className="CompleteList">
          <p>Completed Tasks</p>
          <TaskCounter />
          {completedTasks.map((taskItem: Task) => {
            return <TaskCard key={taskItem.id} task={taskItem} />
          })}
        </div>
      </main>
    </div>
  )
}

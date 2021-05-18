import ExpandLessIcon from "@material-ui/icons/ExpandLess"
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

  const statusHandler = (id: string) => {
    setTasks((previousArray) => {
      const found = previousArray.find((task) => task.id === id)
      if (found) {
        return [
          ...previousArray.filter((item) => item.id !== id),
          { ...found, isComplete: !found.isComplete },
        ]
      } else {
        return [...previousArray]
      }
    })
  }

  // const editTask = (id: string, text: string) => {
  //   console.log("passed the id ok", id)
  // }

  const editTask = (id: string, text: string) => {
    setTasks((previousArray) => {
      const found = previousArray.find((task) => task.id === id)
      if (found) {
        return [
          ...previousArray.filter((item) => item.id !== id),
          { ...found, description: text },
        ]
      } else {
        return [...previousArray]
      }
    })
  }

  const deleteTask = (id: string) => {
    setTasks((previousArray) => {
      const found = previousArray.find((task) => task.id === id)
      if (found) {
        return [...previousArray.filter((item) => item.id !== id)]
      } else {
        return [...previousArray]
      }
    })
    // setEditModal(false)
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
        <div className="activeList">
          <p>Active Tasks</p>
          {activeTasks.map((taskItem: Task) => {
            return (
              <TaskCard
                key={taskItem.id}
                task={taskItem}
                onStatusChange={statusHandler}
                onDeleteTask={deleteTask}
                onEditTask={editTask}
              />
            )
          })}
        </div>
        <ButtonCreateTask onShowModal={handleModal} />
        {modal}
        <div className="completeList">
          <p>Completed Tasks</p>
          <span>
            Hide <ExpandLessIcon />
          </span>
          <TaskCounter completedTasks={completedTasks} />
          {completedTasks.map((taskItem: Task) => {
            return (
              <TaskCard
                key={taskItem.id}
                task={taskItem}
                onStatusChange={statusHandler}
                onDeleteTask={deleteTask}
                onEditTask={editTask}
              />
            )
          })}
        </div>
      </main>
      <FormNewTask
        label={"New Task"}
        modal={modal}
        onHideModal={handleModal}
        onAddTask={addTask}
        placeholder={"Task description"}
      />
    </div>
  )
}

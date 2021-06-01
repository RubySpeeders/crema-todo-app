import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { nanoid } from "nanoid"
import { useState } from "react"
import "./styles.css"
import { Task } from "../../types/Task"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"

export function App() {
  const [modal, setModal] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [expanded, setExpand] = useState(true)
  const completedTasks = tasks.filter((task) => task.isComplete)
  const activeTasks = tasks.filter((task) => !task.isComplete)

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

  const editTask = (id: string, text: string) => {
    setTasks((previousArray) => {
      const found = previousArray.find((task) => task.id === id)
      if (found) {
        return previousArray.map((item) => {
          if (item === found) {
            return { ...found, description: text }
          }
          return item
        })
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
  }

  const handleModal = () => {
    setModal(!modal)
  }

  const handleExpand = () => {
    setExpand(!expanded)
  }

  return (
    <div className="App">
      <AppHeader />
      <main>
        {tasks.length === 0 ? (
          <div className="emptyTaskList">
            <p>Create a task with the button below.</p>
          </div>
        ) : (
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
        )}

        <ButtonCreateTask onShowModal={handleModal} />
        {modal}
        <div className="completeList">
          <div className="completeLabel">
            <p className="complete">Completed Tasks</p>
            {expanded ? (
              <div className="expand active" onClick={handleExpand}>
                Hide
                <ExpandLessIcon />
              </div>
            ) : (
              <div className="expand" onClick={handleExpand}>
                Show
                <ExpandMoreIcon />
              </div>
            )}
          </div>
          {expanded &&
            completedTasks.map((taskItem: Task) => {
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
        kind="new"
        modal={modal}
        onHideModal={handleModal}
        onAddTask={addTask}
        placeholder="Task description"
      />
    </div>
  )
}

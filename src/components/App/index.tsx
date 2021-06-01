import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { nanoid } from "nanoid"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import "./styles.css"
import {
  addTask,
  deleteTask,
  editStatus,
  editTask,
} from "../../redux/task/taskSlice"
import { Task } from "../../types/Task"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"

export function App() {
  const tasks: Task[] = useAppSelector((state) => state.allTasks.tasks)
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState(false)
  const [expanded, setExpand] = useState(true)
  const completedTasks = tasks.filter((task) => task.isComplete)
  const activeTasks = tasks.filter((task) => !task.isComplete)

  const addTaskHandler = (text: string) => {
    dispatch(addTask({ id: nanoid(), description: text, isComplete: false }))
  }

  const statusHandler = (task: Task) => {
    dispatch(editStatus(task))
  }

  const editHandler = (id: string, text: string) => {
    dispatch(editTask({ id, text }))
  }

  const deleteHandler = (id: string) => {
    dispatch(deleteTask(id))
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
        <div className="activeList">
          <p>Active Tasks</p>
          {activeTasks.map((taskItem: Task) => {
            return (
              <TaskCard
                key={taskItem.id}
                task={taskItem}
                onStatusChange={statusHandler}
                onDeleteTask={deleteHandler}
                onEditTask={editHandler}
              />
            )
          })}
        </div>
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
                  onDeleteTask={deleteHandler}
                  onEditTask={editHandler}
                />
              )
            })}
        </div>
      </main>
      <FormNewTask
        onHideModal={handleModal}
        onAddTask={addTaskHandler}
        kind="new"
        modal={modal}
        placeholder="Task description"
      />
    </div>
  )
}

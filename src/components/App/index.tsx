import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { nanoid } from "nanoid"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import "./styles.css"
import { addTaskRedux } from "../../redux/task/taskSlice"
import { Task } from "../../types/Task"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"

export function App() {
  const tasks: Task[] = useAppSelector((state) => state.allTasks.tasks)
  const dispatch = useAppDispatch()

  const [modal, setModal] = useState(false)
  // const [tasks, setTasks] = useState<Task[]>([])
  const [expanded, setExpand] = useState(true)
  const completedTasks = tasks.filter((task) => task.isComplete)
  const activeTasks = tasks.filter((task) => !task.isComplete)

  const addTask = (text: string) => {
    dispatch(
      addTaskRedux({ id: nanoid(), description: text, isComplete: false }),
    )
    // setTasks((previousArray) => [
    //   ...previousArray,
    //   { id: nanoid(), description: text, isComplete: false },
    // ])
  }

  // const statusHandler = (id: string) => {
  //   setTasks((previousArray) => {
  //     const found = previousArray.find((task) => task.id === id)
  //     if (found) {
  //       return [
  //         ...previousArray.filter((item) => item.id !== id),
  //         { ...found, isComplete: !found.isComplete },
  //       ]
  //     } else {
  //       return [...previousArray]
  //     }
  //   })
  // }

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
                onStatusChange={() => {
                  console.log(
                    "replace with statushandler once redux is finished",
                  )
                }}
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
                  onStatusChange={() => {
                    console.log(
                      "replace with statushandler once redux is finished",
                    )
                  }}
                />
              )
            })}
        </div>
      </main>
      <FormNewTask show={modal} onHideModal={handleModal} onAddTask={addTask} />
    </div>
  )
}

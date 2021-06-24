import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useState } from "react"
import "./style.css"
import { useAppSelector } from "../../redux/hooks"
import { Task } from "../../types/Task"
import { AppHeader } from "../AppHeader"
import { ButtonCreateTask } from "../ButtonCreateTask"
import { EmptyStateSVG } from "../EmptyStateSVG"
import { FormNewTask } from "../FormNewTask"
import { TaskCard } from "../TaskCard"

export function TaskPage() {
  const tasks: Task[] = useAppSelector((state) => state.allTasks.tasks)
  const [modal, setModal] = useState(false)
  const [expanded, setExpand] = useState(true)
  const completedTasks = tasks.filter((task) => task.isComplete)
  const activeTasks = tasks.filter((task) => !task.isComplete)

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
            <EmptyStateSVG />
          </div>
        ) : (
          <div className="activeList">
            <p>Active Tasks</p>
            {activeTasks.map((taskItem: Task) => {
              return <TaskCard key={taskItem.id} task={taskItem} />
            })}
          </div>
        )}

        <ButtonCreateTask onShowModal={handleModal} />
        {completedTasks.length > 0 && (
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
                return <TaskCard key={taskItem.id} task={taskItem} />
              })}
          </div>
        )}
      </main>
      <FormNewTask
        kind="new"
        modal={modal}
        onHideModal={handleModal}
        placeholder="Task description"
      />
    </div>
  )
}

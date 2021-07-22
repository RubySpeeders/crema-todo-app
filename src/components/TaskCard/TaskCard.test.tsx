import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { addTask } from "../../redux/task/taskSlice"
import { Task } from "../../types/Task"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  it("has a task with the description on the card", () => {
    //Arrange
    const newTask = {
      id: "123ABC",
      description: "do a dance",
      isComplete: true,
    }
    // Act
    const { getByText } = render(
      <Provider store={store}>
        <TaskCard task={newTask} />
      </Provider>,
    )
    const element = getByText(newTask.description)

    // Assert
    expect(element).toHaveClass("normal")
  })
  it("changes status of task to complete", () => {
    //Arrange
    const newTask: Task = {
      id: "123XYZ",
      description: "zoom with Mandy",
      isComplete: false,
    }
    store.dispatch(addTask(newTask))
    // Act
    const { getByTestId } = render(
      <Provider store={store}>
        <TaskCard task={newTask} />
      </Provider>,
    )
    const checkbox = getByTestId("checkbox")
    fireEvent.click(checkbox)

    // Assert
    const state = store.getState().tasks
    const found = state.tasks.find((task) => task.id === newTask.id)
    expect(found?.isComplete).toBeTruthy()
  })
  it("has a checkbox", () => {
    // Arrange
    const task = { id: "123ABC", description: "do a dance", isComplete: false }

    // Act
    const { getByTestId } = render(
      <Provider store={store}>
        <TaskCard task={task} />
      </Provider>,
    )
    const uncheckedBox = getByTestId("unchecked")

    // Assert
    expect(uncheckedBox).toHaveClass("ellipse")
  })
})

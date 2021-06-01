import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  //Arrange
  const handleCheckbox = jest.fn()
  const task = { id: "123ABC", description: "do a dance", isComplete: true }

  it("has a task with the description on the card", () => {
    // Act
    const { getByText } = render(
      <Provider store={store}>
        <TaskCard task={task} />
      </Provider>,
    )
    const element = getByText(task.description)

    // Assert
    expect(element).toHaveClass("normal")
  })
  it("calls statushandler function when checkbox is clicked", () => {
    // Act
    const { getByTestId } = render(
      <Provider store={store}>
        <TaskCard task={task} />
      </Provider>,
    )
    const checkbox = getByTestId("checkbox")
    fireEvent.click(checkbox)

    // Assert
    // const state = store.getState().allTasks
    expect(handleCheckbox).toHaveBeenCalled()
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

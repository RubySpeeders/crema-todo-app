import { fireEvent, render } from "@testing-library/react"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  const statusHandler = jest.fn()

  it("has a task with the description on the card", () => {
    // Arrange
    const task = { id: "123ABC", description: "do a dance", isComplete: true }

    // Act
    const { getByText } = render(
      <TaskCard task={task} onStatusChange={statusHandler} />,
    )
    const element = getByText(task.description)

    // Assert
    expect(element).toHaveClass("normal")
  })
  it("calls statushandler function when checkbox is clicked", () => {
    // Arrange
    const task = { id: "123ABC", description: "do a dance", isComplete: true }

    // Act
    const { getByTestId } = render(
      <TaskCard task={task} onStatusChange={statusHandler} />,
    )
    const checkbox = getByTestId("checkbox")
    fireEvent.click(checkbox)

    // Assert
    expect(statusHandler).toHaveBeenCalledWith(task.id)
  })
  it("has a checkbox", () => {
    // Arrange
    const task = { id: "123ABC", description: "do a dance", isComplete: false }

    // Act
    const { getByTestId } = render(
      <TaskCard task={task} onStatusChange={statusHandler} />,
    )
    const uncheckedBox = getByTestId("unchecked")

    // Assert
    expect(uncheckedBox).toHaveClass("ellipse")
  })
})

import { fireEvent, render } from "@testing-library/react"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  it("has a task with the description on the card", () => {
    // Arrange
    const task = { id: "123ABC", description: "do a dance", isComplete: true }

    // Act
    const { getByText } = render(<TaskCard task={task} />)
    const element = getByText(task.description)

    // Assert
    expect(element).toHaveClass("normal")
  })
  it("has a checkbox that changes between checked and unchecked", () => {
    // Arrange
    const task = { id: "123ABC", description: "do a dance", isComplete: true }

    // Act
    const { getByTestId } = render(<TaskCard task={task} />)
    const uncheckedBox = getByTestId("unchecked")

    // Assert
    expect(uncheckedBox).toHaveClass("ellipse")

    // Act
    fireEvent.click(uncheckedBox)
    const checkedBox = getByTestId("checked")

    // Assert
    expect(checkedBox).toHaveClass("ellipse")
  })
})

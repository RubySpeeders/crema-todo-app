import { render } from "@testing-library/react"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  it("has edit and delete buttons", () => {
    // Arrange
    const task = { id: "123ABC", description: "do a dance", isComplete: true }

    // Act
    const { getByText } = render(<TaskCard task={task} />)
    const element = getByText(task.description)

    // Assert
    expect(element).toHaveClass("normal")
  })
})

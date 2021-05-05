import { render } from "@testing-library/react"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  it("has edit and delete buttons", () => {
    // Arrange
    const task = { id: 1, description: "do a dance", isComplete: true }

    // Act
    const { getByText } = render(<TaskCard task={task} />)
    const receivedEdit = getByText("Edit")
    const receivedDelete = getByText("Delete")

    // Assert
    expect(receivedEdit).toBeDefined()
    expect(receivedDelete).toBeDefined()
  })
})

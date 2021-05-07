import { render } from "@testing-library/react"
import { TaskCounter } from "./TaskCounter"

describe("TaskCounter", () => {
  it("checks that the length of completed tasks is there", () => {
    // Arrange
    const completedTasks = [
      { id: "123ABC", description: "let's do this", isComplete: true },
    ]

    // Act
    const { getByTestId } = render(
      <TaskCounter completedTasks={completedTasks} />,
    )
    const received = getByTestId("count")

    // Assert
    expect(received).toBeDefined()
  })
})

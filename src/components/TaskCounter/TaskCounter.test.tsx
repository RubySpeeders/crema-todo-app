import { render } from "@testing-library/react"
import { TaskCounter } from "./TaskCounter"

describe("TaskCounter", () => {
  const completedTasks = [
    { id: "123ABC", description: "let's do this", isComplete: true },
  ]

  it("checks that a count is there", () => {
    // Arrange
    const count = completedTasks.length

    // Act
    const { getByText } = render(
      <TaskCounter completedTasks={completedTasks} />,
    )
    const received = getByText(count)

    // Assert
    expect(received).toBeDefined()
  })
})

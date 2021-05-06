import { render } from "@testing-library/react"
import { TaskCounter } from "./TaskCounter"

describe("TaskCounter", () => {
  const completedTasks = [
    { id: "123ABC", description: "let's do this", isComplete: true },
  ]

  it("checks that the length of completed tasks is there", () => {
    // Arrange
    // const count = completedTasks.length

    // Act
    const { getByTestId } = render(
      <TaskCounter completedTasks={completedTasks} />,
    )
    const received = getByTestId("count")

    // Assert
    expect(received).toBeDefined()
  })
})

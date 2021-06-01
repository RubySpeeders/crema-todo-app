import { render } from "@testing-library/react"
import { TaskPage } from "./TaskPage"

describe("TaskPage", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "TaskPage"

    // Act
    const { getByText } = render(<TaskPage />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

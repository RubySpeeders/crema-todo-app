import { render } from "@testing-library/react"
// import React from "react"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "taskCard"

    // Act
    const { getByText } = render(<TaskCard />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

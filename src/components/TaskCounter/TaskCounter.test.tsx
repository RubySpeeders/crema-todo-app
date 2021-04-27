import { TaskCounter } from "./TaskCounter"
import { render } from "@testing-library/react"
import React from "react"

describe("TaskCounter", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "TaskCounter"

    // Act
    const { getByText } = render(<TaskCounter />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

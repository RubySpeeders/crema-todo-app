import { render } from "@testing-library/react"
// import React from "react"
import { TaskCounter } from "./TaskCounter"

describe("TaskCounter", () => {
  it("click me button exists", () => {
    // Arrange
    const name = "Click me"

    // Act
    const { getByText } = render(<TaskCounter />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

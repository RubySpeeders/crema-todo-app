import { fireEvent, render } from "@testing-library/react"
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
  it("changes the count to 15 after clicking the button", () => {
    // Arrange
    const name = "Click me"

    // Act
    const { getByText } = render(<TaskCounter />)
    const button = getByText(name)
    const countBefore = getByText("Count: 0")
    expect(countBefore).toBeDefined()
    fireEvent.click(button)

    // Assert
    const countAfter = getByText("Count: 15")
    expect(countAfter).toBeDefined()
  })
})

import { Drawer } from "./Drawer"
import { render, fireEvent } from "@testing-library/react"
import React from "react"

describe("Drawer", () => {
  it("has correct message before clicking", () => {
    // Arrange
    const message = "You clicked 0 times"

    // Act
    const { getByText } = render(<Drawer />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })

  it("has correct message after clicking", () => {
    // Arrange
    const buttonText = "Click Me"
    const message = "You clicked 1 times"

    // Act
    const { getByText } = render(<Drawer />)
    const button = getByText(buttonText)
    fireEvent.click(button)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})

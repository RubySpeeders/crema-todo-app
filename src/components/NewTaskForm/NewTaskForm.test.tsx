import { render } from "@testing-library/react"
// import React from "react"
import { NewTaskForm } from "./NewTaskForm"

describe("NewTaskForm", () => {
  it("has a label for input", () => {
    // Arrange
    const name = "New Task"

    // Act
    const { getByLabelText } = render(<NewTaskForm />)
    const received = getByLabelText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

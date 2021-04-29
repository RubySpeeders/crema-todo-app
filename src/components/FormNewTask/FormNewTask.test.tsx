import { render } from "@testing-library/react"
// import React from "react"
import { FormNewTask } from "./FormNewTask"

describe("NewTaskForm", () => {
  it("has a label for input", () => {
    // Arrange
    const name = "New Task"

    // Act
    const { getByLabelText } = render(<FormNewTask />)
    const received = getByLabelText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

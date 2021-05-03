import { render } from "@testing-library/react"
// import React from "react"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  it("has a label for input", () => {
    // Arrange
    const name = "New Task"
    const doSomething = () => {
      console.log("doing a test")
    }

    // Act
    const { getByLabelText } = render(<FormNewTask onAddTask={doSomething} />)
    const received = getByLabelText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

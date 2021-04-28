import { render } from "@testing-library/react"
// import React from "react"
import { CreateTaskButton } from "./CreateTaskButton"

describe("CreateTaskButton", () => {
  it("displays button text", () => {
    // Arrange
    const name = "Create New Task"

    // Act
    const { getByText } = render(<CreateTaskButton />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

import { render } from "@testing-library/react"
// import React from "react"
import { CreateTaskButton } from "./CreateTaskButton"

describe("CreateTaskButton", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "createTaskButton"

    // Act
    const { getByText } = render(<CreateTaskButton />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

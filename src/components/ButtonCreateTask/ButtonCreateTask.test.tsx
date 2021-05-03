import { render } from "@testing-library/react"
// import React from "react"
import { ButtonCreateTask } from "./ButtonCreateTask"

describe("ButtonCreateTask", () => {
  it("displays button text", () => {
    // Arrange
    const name = "Create New Task"

    // Act
    const { getByText } = render(<ButtonCreateTask />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

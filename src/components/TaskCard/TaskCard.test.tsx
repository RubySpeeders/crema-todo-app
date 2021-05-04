import { render } from "@testing-library/react"
// import React from "react"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  it("has edit and delete buttons", () => {
    // Arrange
    const todoText = "do a dance"

    // Act
    const { getByText } = render(<TaskCard task={{ task: todoText }} />)
    const element = getByText(todoText)

    // Assert
    expect(element).toHaveClass("normal")
  })
})

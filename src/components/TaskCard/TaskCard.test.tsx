import { render } from "@testing-library/react"
// import React from "react"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  it("has edit and delete buttons", () => {
    // Arrange
    // const btnText1 = "Edit"
    // const btnText2 = "Delete"

    // Act
    const { getByText } = render(<TaskCard task={{ task: "do a dance" }} />)
    const receivedEdit = getByText("Edit")
    const receivedDelete = getByText("Delete")

    // Assert
    expect(receivedEdit).toBeDefined()
    expect(receivedDelete).toBeDefined()
  })
})

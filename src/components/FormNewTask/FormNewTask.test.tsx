import { render } from "@testing-library/react"
// import React from "react"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  const modal = false
  it("has a label for input", () => {
    // Arrange
    const name = "New Task"

    // Act
    const { getByLabelText } = render(
      <FormNewTask
        show={modal}
        onHideModal={() => {
          console.log(name)
        }}
      />,
    )
    const received = getByLabelText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

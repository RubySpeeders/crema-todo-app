import { render } from "@testing-library/react"
// import React from "react"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  it("has a label for input", () => {
    // Arrange
    const modal = false
    const handleModal = () => {
      console.log("this is temporary")
    }

    // Act
    const { getByLabelText } = render(
      <FormNewTask show={modal} onHideModal={handleModal} />,
    )
    // const received = getByLabelText(name)

    // Assert
    // expect(received).toBeDefined()
  })
})

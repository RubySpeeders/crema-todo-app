import { render } from "@testing-library/react"
// import React from "react"
import { AppHeader } from "./AppHeader"

describe("AppHeader", () => {
  it("displays title", () => {
    // Arrange
    const name = "My Tasks"

    // Act
    const { getByText } = render(<AppHeader />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

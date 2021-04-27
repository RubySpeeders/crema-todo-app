import { render } from "@testing-library/react"
import React from "react"
import { AppHeader } from "./AppHeader"

describe("AppHeader", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "AppHeader"

    // Act
    const { getByText } = render(<AppHeader />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

import { Homepage } from "./Homepage"
import { render } from "@testing-library/react"
import React from "react"

describe("Homepage", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Homepage"

    // Act
    const { getByText } = render(<Homepage />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

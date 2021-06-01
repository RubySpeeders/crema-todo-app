import { render } from "@testing-library/react"
import { Homepage } from "./Homepage"

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

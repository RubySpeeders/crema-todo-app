import { render } from "@testing-library/react"
import { Logout } from "./Logout"

describe("Logout", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Logout"

    // Act
    const { getByText } = render(<Logout />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

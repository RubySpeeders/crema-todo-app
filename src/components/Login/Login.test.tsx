import { render } from "@testing-library/react"
import { Login } from "./Login"

describe("Login", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Log in"

    // Act
    const { getByText } = render(<Login />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

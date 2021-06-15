import { render } from "@testing-library/react"
import { GoogleLogin } from "./GoogleLogin"

describe("GoogleLogin", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "GoogleLogin"

    // Act
    const { getByText } = render(<GoogleLogin />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

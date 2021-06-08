import { render } from "@testing-library/react"
import { GoogleAuth } from "./GoogleAuth"

describe("GoogleAuth", () => {
  it("has correct message before clicking", () => {
    // Arrange
    const message = "Sign In"

    // Act
    const { getByText } = render(<GoogleAuth />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})

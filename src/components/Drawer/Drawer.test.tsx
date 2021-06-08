import { render } from "@testing-library/react"
import { Drawer } from "./Drawer"

describe("Drawer", () => {
  it("has correct message before clicking", () => {
    // Arrange
    const message = "Sign In"

    // Act
    const { getByText } = render(<Drawer />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})

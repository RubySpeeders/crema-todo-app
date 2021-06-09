import { render } from "@testing-library/react"
import { LogoSVG } from "./LogoSVG"

describe("LogoSVG", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "LogoSVG"

    // Act
    const { getByText } = render(<LogoSVG />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

import { render } from "@testing-library/react"
import { LogoSVG } from "./LogoSVG"

describe("LogoSVG", () => {
  it("renders a SVG", () => {
    //Arrange
    // Act
    const { getByTestId } = render(<LogoSVG />)

    // Assert
    const logo = getByTestId("todoLogo")
    expect(logo).toBeVisible()
  })
})

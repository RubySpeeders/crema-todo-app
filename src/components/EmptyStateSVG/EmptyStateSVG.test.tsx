import { render } from "@testing-library/react"
import { EmptyStateSVG } from "./EmptyStateSVG"

describe("LogoSVG", () => {
  it("renders a SVG", () => {
    //Arrange
    // Act
    const { getByTestId } = render(<EmptyStateSVG />)

    // Assert
    const logo = getByTestId("emptyStateLogo")
    expect(logo).toBeVisible()
  })
})

import { render } from "@testing-library/react"
import { EmptyStateSVG } from "./EmptyStateSVG"

describe("EmptyStateSVG", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "EmptyStateSVG"

    // Act
    const { getByText } = render(<EmptyStateSVG />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

import { render } from "@testing-library/react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Homepage } from "./Homepage"

//TODO clean up, make real tests
describe("Homepage", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("expect button to exist", () => {
    //Arrange
    // Act
    const { getByTestId } = render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    )
    const start = getByTestId("getStarted")

    // Assert
    expect(start).toHaveTextContent("Get Started")
  })
})

import { render } from "@testing-library/react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "../../redux/store"
import { Homepage } from "./Homepage"

//TODO clean up, make real tests
describe("Homepage", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("expect button to exist", () => {
    //Arrange
    // Act
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
    )
    const start = getByTestId("getStarted")

    // Assert
    expect(start).toHaveTextContent("Get Started")
  })
})

import { fireEvent, render } from "@testing-library/react"
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
  it("calls statushandler function when checkbox is clicked", () => {
    // Act
    const { getByTestId } = render(<Homepage />)
    const checkbox = getByTestId("checkbox")
    fireEvent.click(checkbox)

    // Assert
    expect(statusHandler).toHaveBeenCalledWith(task.id)
  })
})

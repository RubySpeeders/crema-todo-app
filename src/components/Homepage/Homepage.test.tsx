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
})

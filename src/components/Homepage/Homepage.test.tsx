import ReactDOM from "react-dom"
import { Homepage } from "./Homepage"

//TODO clean up, make real tests
describe("Homepage", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Homepage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

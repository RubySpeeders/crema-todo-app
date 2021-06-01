import ReactDOM from "react-dom"
import { TaskPage } from "./TaskPage"

//TODO clean up, make real tests
describe("TaskPage", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TaskPage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

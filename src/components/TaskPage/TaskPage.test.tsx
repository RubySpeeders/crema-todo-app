import ReactDOM from "react-dom"
import { TaskPage } from "./TaskPage"

describe("TaskPage", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TaskPage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

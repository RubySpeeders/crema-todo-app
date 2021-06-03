import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { TaskPage } from "./TaskPage"

describe("TaskPage", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <Provider store={store}>
        <TaskPage />
      </Provider>,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

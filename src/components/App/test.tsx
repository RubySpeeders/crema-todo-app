import ReactDOM from "react-dom"
import { App } from "."

describe("App", () => {
  it("renders", () => {
    //Arrange
    const div = document.createElement("div")
    const task = [
      { id: 1, task: "make dinner", isComplete: false },
      { id: 2, task: "finish app", isComplete: true },
    ]

    //Act
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)

    //Assert
  })
})

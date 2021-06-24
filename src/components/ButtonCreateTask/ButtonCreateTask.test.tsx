import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { ButtonCreateTask } from "./ButtonCreateTask"

describe("ButtonCreateTask", () => {
  it("displays button text", () => {
    // Arrange
    const name = "Create New Task"

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <ButtonCreateTask
          onShowModal={() => {
            console.log("test happened")
          }}
        />
      </Provider>,
    )
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

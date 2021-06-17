import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { Login } from "./Login"

describe("Login", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Log in"

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    )
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

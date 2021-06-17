import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { Logout } from "./Logout"

describe("Logout", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Logout"

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <Logout />
      </Provider>,
    )
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

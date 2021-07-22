import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { Drawer } from "./Drawer"

describe("Drawer", () => {
  it("has correct message before clicking", () => {
    // Arrange
    const message = "Login"

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <Drawer />
      </Provider>,
    )
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})

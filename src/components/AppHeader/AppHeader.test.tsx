import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { AppHeader } from "./AppHeader"

describe("AppHeader", () => {
  it("displays title", () => {
    // Arrange
    const name = "My Tasks"

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <AppHeader />
      </Provider>,
    )
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})

import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { GoogleAuth } from "./GoogleAuth"

describe("GoogleAuth", () => {
  it("has correct message before clicking", () => {
    // Arrange
    const message = "Sign In"

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <GoogleAuth />
      </Provider>,
    )
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})

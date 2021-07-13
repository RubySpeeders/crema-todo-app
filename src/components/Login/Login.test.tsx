import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import { signIn } from "../../redux/oauth/oauthSlice"
import store from "../../redux/store"
import { Login } from "./Login"

describe("Login", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Login"
    const payload = { userId: "testing123", userName: "Sarah Peters" }
    store.dispatch(signIn(payload))

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    )
    const button = getByText(name)
    fireEvent.click(button)

    // Assert
    expect(button).toBeDefined()
    const state = store.getState()
    expect(state.drawer.isOpen).toBeFalsy()
    expect(state.auth.isSignedIn).toBeTruthy()
    expect(state.auth.userId).toBe("testing123")
    expect(state.auth.userName).toBe("Sarah Peters")
  })
})

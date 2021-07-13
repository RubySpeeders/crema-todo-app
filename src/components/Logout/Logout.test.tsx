import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import { signOut } from "../../redux/oauth/oauthSlice"
import store from "../../redux/store"
import { Logout } from "./Logout"

describe("Logout", () => {
  it("name prop is rendered", () => {
    // Arrange
    store.dispatch(signOut())

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <Logout />
      </Provider>,
    )
    const button = getByText("Logout")
    fireEvent.click(button)

    // Assert
    expect(button).toBeDefined()
    const state = store.getState()
    expect(state.auth.isSignedIn).toBeFalsy()
    expect(state.auth.userId).toBeNull()
  })
})

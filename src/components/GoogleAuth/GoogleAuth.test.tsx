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
  // it("tests onSignIn is called", () => {
  //   // Arrange
  //   const text = "Sign In"

  //   // Act
  //   const { getByText } = render(
  //     <Provider store={store}>
  //       <GoogleAuth />
  //     </Provider>,
  //   )
  //   const signInButton = getByText(text)
  //   fireEvent.click(signInButton)
  //   const state = store.getState().allOauth

  //   // Assert
  //   expect(state.userId).toBeDefined()
  // })
})

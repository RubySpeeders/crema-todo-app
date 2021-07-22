import store from "../store"
import oauthReducer, { signIn, signOut } from "./oauthSlice"

describe("oauthSlice", () => {
  it("sign in changes isSignedIn to true and saves the userId", () => {
    //Arrange
    const userId = "test123"
    const userName = "Sarah Peters"
    // Act
    const state = oauthReducer(undefined, signIn({ userId, userName }))

    // Assert
    expect(state.userId).toBe(userId)
    expect(state.isSignedIn).toBeTruthy()
  })
  it("sign out changes isSignedIn to false and negates the userId", () => {
    //Arrange
    // Act
    store.dispatch(signOut)
    const state = oauthReducer(undefined, signOut())
    // Assert
    expect(state.isSignedIn).toBeFalsy()
    expect(state.userId).toBe(null)
    expect(state.userName).toBe(null)
  })
})

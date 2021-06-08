// import store from "../store"
import drawerReducer, { handleDrawer } from "./drawerSlice"

describe("drawerSlice", () => {
  it("calling drawer reducer changes the drawer open status to be the opposite after the handleDrawer is called", () => {
    //Arrange
    // Act
    const state = drawerReducer(undefined, handleDrawer)

    // Assert
    expect(state.drawer).toBeTruthy()
  })
})

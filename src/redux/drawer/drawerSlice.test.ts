// import store from "../store"
import drawerReducer, { toggleDrawerOpen } from "./drawerSlice"

describe("drawerSlice", () => {
  it("changes the drawerIsOpen status to be the opposite after the function is called", () => {
    //Arrange
    // Act
    const state = drawerReducer(undefined, toggleDrawerOpen)

    // Assert
    expect(state.isOpen).toBeTruthy()
  })
})

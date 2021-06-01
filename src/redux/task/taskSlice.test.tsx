import { taskSlice } from "./taskSlice"

describe("taskSlice", () => {
  //Arrange
  const actual = someReducer(initialState, someAction)

  it("has a task with the description on the card", () => {
    // Act
    // Assert
    expect(actual).toEqual(expectedState)
  })
})

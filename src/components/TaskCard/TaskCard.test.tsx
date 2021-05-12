import { fireEvent, render } from "@testing-library/react"
import { TaskCard } from "./TaskCard"

describe("TaskCard", () => {
  //Arrange
  const statusHandler = jest.fn()
  const task = { id: "123ABC", description: "do a dance", isComplete: true }
  const editModal = false
  const handleEditModal = () => {
    console.log("do a real test!")
  }
  it("has a task with the description on the card", () => {
    // Act
    const { getByText } = render(
      <TaskCard
        task={task}
        onStatusChange={statusHandler}
        modal={editModal}
        handleModal={handleEditModal}
      />,
    )
    const element = getByText(task.description)

    // Assert
    expect(element).toHaveClass("normal")
  })
  it("calls statushandler function when checkbox is clicked", () => {
    // Act
    const { getByTestId } = render(
      <TaskCard
        task={task}
        onStatusChange={statusHandler}
        modal={editModal}
        handleModal={handleEditModal}
      />,
    )
    const checkbox = getByTestId("checkbox")
    fireEvent.click(checkbox)

    // Assert
    expect(statusHandler).toHaveBeenCalledWith(task.id)
  })
  it("has a checkbox", () => {
    // Arrange
    const task = { id: "123ABC", description: "do a dance", isComplete: false }
    const editModal = false
    const handleEditModal = () => {
      console.log("do a real test!")
    }
    // Act
    const { getByTestId } = render(
      <TaskCard
        task={task}
        onStatusChange={statusHandler}
        modal={editModal}
        handleModal={handleEditModal}
      />,
    )
    const uncheckedBox = getByTestId("unchecked")

    // Assert
    expect(uncheckedBox).toHaveClass("ellipse")
  })
})

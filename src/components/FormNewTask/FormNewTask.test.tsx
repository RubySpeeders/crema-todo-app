import { fireEvent, getByTestId, render } from "@testing-library/react"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  it("tests onAddTask is called with correct parameter", () => {
    // Arrange
    const onAddTask = jest.fn()
    const modal = true

    // Act
    const { getByLabelText, getByText } = render(
      <FormNewTask
        kind="new"
        placeholder="Task Description"
        onAddTask={onAddTask}
        modal={modal}
        onHideModal={() => {
          console.log("onhide called")
        }}
      />,
    )

    const input = getByLabelText("New Task", { selector: "input" })
    const saveButton = getByText("Save")
    fireEvent.change(input, { target: { value: "meeting with Mandy" } })
    fireEvent.click(saveButton)

    // Assert
    expect(onAddTask).toHaveBeenCalledWith("meeting with Mandy")
  })
  it("tests Edit Form called with correct parameters", () => {
    // Arrange
    const onEditTask = jest.fn()
    const modal = true
    const id = "123ABC"

    // Act
    const { getByLabelText, getByText } = render(
      <FormNewTask
        kind="edit"
        placeholder="Task Description"
        onEditTask={onEditTask}
        modal={modal}
        onHideModal={() => {
          console.log("onhide called")
        }}
        onDeleteTask={() => {
          console.log("ondelete called")
        }}
        taskId={id}
      />,
    )

    const input = getByLabelText("Edit Task", { selector: "input" })
    const saveButton = getByText("Save")
    fireEvent.change(input, { target: { value: "meeting with Mandy" } })
    fireEvent.click(saveButton)

    // Assert
    expect(onEditTask).toHaveBeenCalledWith(id, "meeting with Mandy")
  })
  it("tests deleting is called with correct parameters", () => {
    // Arrange
    const onDeleteTask = jest.fn()
    const modal = true
    const id = "123ABC"

    // Act
    const { getByTestId } = render(
      <FormNewTask
        kind="edit"
        placeholder="Task Description"
        onEditTask={() => {
          console.log("onEdit called")
        }}
        modal={modal}
        onHideModal={() => {
          console.log("onhide called")
        }}
        onDeleteTask={onDeleteTask}
        taskId={id}
      />,
    )

    const deleteIcon = getByTestId("deleteIcon")
    fireEvent.click(deleteIcon)

    // Assert
    expect(onDeleteTask).toHaveBeenCalledWith(id)
  })
})

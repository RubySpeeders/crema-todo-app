import { fireEvent, render } from "@testing-library/react"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  it("tests onAddTask is called with correct parameter", () => {
    // Arrange
    const onAddTask = jest.fn()
    const modal = true

    // Act
    const { getByLabelText, getByText } = render(
      <FormNewTask
        label="New Task"
        placeholder="TaskDescription"
        onAddTask={onAddTask}
        modal={modal}
        onHideModal={onAddTask}
      />,
    )

    const input = getByLabelText("New Task", { selector: "input" })
    const saveButton = getByText("Save")
    fireEvent.change(input, { target: { value: "meeting with Mandy" } })
    fireEvent.click(saveButton)

    // Assert
    expect(onAddTask).toHaveBeenCalledWith("meeting with Mandy")
  })
})

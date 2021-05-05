import { fireEvent, render } from "@testing-library/react"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  it("has a label for input", () => {
    // Arrange
    const name = "New Task"

    // Act
    const { getByLabelText } = render(
      <FormNewTask onAddTask={(name: string) => console.log(name)} />,
    )
    const received = getByLabelText(name)

    // Assert
    expect(received).toBeDefined()
  })
  it("tests onAddTask is called with correct parameter", () => {
    // Arrange
    const onAddTask = jest.fn()

    // Act
    const { getByLabelText, getByText } = render(
      <FormNewTask onAddTask={onAddTask} />,
    )
    const input = getByLabelText("New Task")
    const saveButton = getByText("Save")
    fireEvent.change(input, { target: { value: "make dinner" } })
    fireEvent.click(saveButton)

    // Assert
    expect(onAddTask).toHaveBeenCalledWith("make dinner")
  })
})

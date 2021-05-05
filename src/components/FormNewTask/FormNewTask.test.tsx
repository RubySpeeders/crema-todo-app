import { fireEvent, render } from "@testing-library/react"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  const modal = false
  it("has a label for input", () => {
    // Arrange
    const name = "New Task"

    // Act
    const { getByLabelText } = render(
      <FormNewTask
        onAddTask={(name: string) => console.log(name)}
        show={modal}
        onHideModal={() => {
          console.log("must change this!!")
        }}
      />,
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
      <FormNewTask
        onAddTask={onAddTask}
        show={modal}
        onHideModal={onAddTask}
      />,
    )
    const input = getByLabelText("New Task")
    const saveButton = getByText("Save")
    fireEvent.change(input, { target: { value: "meeting with Mandy" } })
    fireEvent.click(saveButton)

    // Assert
    expect(onAddTask).toHaveBeenCalledWith("meeting with Mandy")
  })
})

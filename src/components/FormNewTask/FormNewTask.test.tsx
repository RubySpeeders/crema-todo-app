import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  it("tests onAddTask is called with correct parameter", () => {
    // Arrange
    const handleSubmitNewTask = jest.fn()
    const modal = true

    // Act
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <FormNewTask
          kind="new"
          placeholder="Task Description"
          modal={modal}
          onHideModal={() => {
            console.log("onhide called")
          }}
        />
        ,
      </Provider>,
    )

    const input = getByLabelText("New Task", { selector: "input" })
    const saveButton = getByText("Save")
    fireEvent.change(input, { target: { value: "meeting with Mandy" } })
    fireEvent.click(saveButton)

    // Assert
    expect(handleSubmitNewTask).toHaveBeenCalledWith("meeting with Mandy")
    const state = store.getState().allTasks
    console.log(store.getState().allTasks.tasks)
    expect(state.tasks[0].description).toBe("meeting with Mandy")
  })
  it("tests Edit Form called with correct parameters", () => {
    // Arrange
    const onEditTask = jest.fn()
    const modal = true
    const id = "123ABC"

    // Act
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <FormNewTask
          kind="edit"
          placeholder="Task Description"
          // onEditTask={onEditTask}
          modal={modal}
          onHideModal={() => {
            console.log("onhide called")
          }}
          taskId={id}
        />
      </Provider>,
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
      <Provider store={store}>
        <FormNewTask
          kind="edit"
          placeholder="Task Description"
          modal={modal}
          onHideModal={() => {
            console.log("onhide called")
          }}
          taskId={id}
        />
      </Provider>,
    )

    const deleteIcon = getByTestId("deleteIcon")
    fireEvent.click(deleteIcon)

    // Assert
    expect(onDeleteTask).toHaveBeenCalledWith(id)
  })
})

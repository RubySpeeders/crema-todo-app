import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { addTask } from "../../redux/task/taskSlice"
import { Task } from "../../types/Task"
import { FormNewTask } from "./FormNewTask"

describe("FormNewTask", () => {
  it("tests onAddTask is called with correct parameter", () => {
    // Arrange
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
    const state = store.getState().allTasks
    expect(state.tasks[0].description).toBe("meeting with Mandy")
  })
  it("tests Edit Form called with correct parameters", () => {
    // Arrange
    const modal = true
    const newTask: Task = {
      id: "123XYZ",
      description: "zoom with Mandy",
      isComplete: false,
    }
    store.dispatch(addTask(newTask))

    // Act
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <FormNewTask
          kind="edit"
          placeholder="Task Description"
          modal={modal}
          onHideModal={() => {
            console.log("onhide called")
          }}
          taskId={newTask.id}
        />
      </Provider>,
    )

    const input = getByLabelText("Edit Task", { selector: "input" })
    const saveButton = getByText("Save")
    fireEvent.change(input, { target: { value: "meeting with Israel" } })
    fireEvent.click(saveButton)

    // Assert
    const state = store.getState().allTasks
    const found = state.tasks.find((task) => task.id === newTask.id)
    expect(found?.description).toBe("meeting with Israel")
  })
  it("tests deleting is called with correct parameters", () => {
    // Arrange
    const modal = true
    const newTask: Task = {
      id: "123XYZ",
      description: "zoom with Blake",
      isComplete: false,
    }

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
          taskId={newTask.id}
        />
      </Provider>,
    )

    const deleteIcon = getByTestId("deleteIcon")
    fireEvent.click(deleteIcon)

    // Assert
    const state = store.getState().allTasks
    const found = state.tasks.find((task) => task.id === newTask.id)
    expect(found).not.toBeDefined()
  })
})

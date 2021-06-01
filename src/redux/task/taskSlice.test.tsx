import { convertColorToString } from "material-ui/utils/colorManipulator"
import { Task } from "../../types/Task"
import store from "../store"
import taskReducer, {
  addTask,
  deleteTask,
  editStatus,
  editTask,
} from "./taskSlice"

describe("taskSlice", () => {
  it("addTask function adds a task to the array", () => {
    //Arrange
    const newTask: Task = {
      id: "123ABC",
      description: "zoom with Israel",
      isComplete: false,
    }
    // Act
    const state = taskReducer(undefined, addTask(newTask))

    // Assert
    const value = state.tasks.find(({ id }) => id === "123ABC")
    expect(value?.description).toBe("zoom with Israel")
  })
  it("editStatus function edits the complete status of the task", () => {
    //Arrange
    const newTask: Task = {
      id: "123XYZ",
      description: "zoom with Mandy",
      isComplete: false,
    }
    store.dispatch(addTask(newTask))
    // Act
    store.dispatch(editStatus(newTask))
    const state = store.getState().allTasks
    const value = state.tasks.find((task) => task.id === "123XYZ")
    // Assert
    expect(value?.isComplete).toBe(true)
  })
  it("deleteTask function deletes the task", () => {
    //Arrange
    const newTask: Task = {
      id: "456XYZ",
      description: "zoom with Blake",
      isComplete: false,
    }
    store.dispatch(addTask(newTask))
    // Act
    store.dispatch(deleteTask(newTask.id))
    const state = store.getState().allTasks
    const value = state.tasks.find((task) => task.id === newTask.id)
    // Assert
    expect(value).not.toBeDefined()
  })
  it("editTask function edits the description of the task", () => {
    //Arrange
    const newTask: Task = {
      id: "789DEF",
      description: "zoom with Rob",
      isComplete: false,
    }
    store.dispatch(addTask(newTask))
    const newText = "no more zoom with Rob"
    // Act
    store.dispatch(editTask({ id: newTask.id, text: newText }))
    const state = store.getState().allTasks
    const value = state.tasks.find((task) => task.id === newTask.id)
    // Assert
    expect(value?.description).toBe(newText)
  })
})

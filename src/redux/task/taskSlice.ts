import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Task } from "../../types/Task"
import type { RootState } from "../store"

const tasks: Task[] = []
export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks,
  },
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    editStatus: (state, action: PayloadAction<Task>) => {
      const found = state.tasks.find((task) => task.id === action.payload.id)
      if (found) {
        const index = state.tasks.indexOf(found)
        state.tasks.splice(index, 1, {
          ...found,
          isComplete: !found.isComplete,
        })
      }
    },
    // deleteTask: (state) => {
    //   state.tasks.slice(index, action.payload)
    // },
    // editTask: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, editStatus } = taskSlice.actions

export const selectTasks = (state: RootState) => state.allTasks.tasks

export default taskSlice.reducer

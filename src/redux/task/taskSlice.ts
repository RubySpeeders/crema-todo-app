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
    addTaskRedux: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
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
export const { addTaskRedux } = taskSlice.actions

export const selectTasks = (state: RootState) => state.allTasks.tasks

export default taskSlice.reducer

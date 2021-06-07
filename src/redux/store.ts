import { configureStore } from "@reduxjs/toolkit"
import oauthReducer from "./oauth/oauthSlice"
import taskReducer from "./task/taskSlice"

const store = configureStore({
  reducer: {
    allTasks: taskReducer,
    allOauth: oauthReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

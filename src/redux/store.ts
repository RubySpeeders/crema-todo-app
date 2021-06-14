import { configureStore } from "@reduxjs/toolkit"
import drawerReducer from "./drawer/drawerSlice"
import authReducer from "./oauth/oauthSlice"
import taskReducer from "./task/taskSlice"

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
    drawer: drawerReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

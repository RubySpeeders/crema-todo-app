import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export const initialState = {
  drawer: false,
}
export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    handleDrawer: (state) => {
      state.drawer = !state.drawer
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleDrawer } = drawerSlice.actions

export const selectDrawer = (state: RootState) => state.allDrawer

export default drawerSlice.reducer

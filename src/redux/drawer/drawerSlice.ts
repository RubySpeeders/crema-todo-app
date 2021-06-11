import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export const initialState = {
  isOpen: false,
}
export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawerOpen: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleDrawerOpen } = drawerSlice.actions

export const selectDrawer = (state: RootState) => state.drawer

export default drawerSlice.reducer

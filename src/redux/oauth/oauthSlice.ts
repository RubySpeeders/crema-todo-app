import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export const initialState = {
  userId: 0,
  isSignedIn: false,
}
export const oauthSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isSignedIn = true
    },
    signOut: (state) => {
      state.isSignedIn = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = oauthSlice.actions

export const selectOauth = (state: RootState) => state.allOauth

export default oauthSlice.reducer

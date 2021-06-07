import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

const isSignedIn = false
export const oauthSlice = createSlice({
  name: "oauth",
  initialState: {
    isSignedIn,
  },
  reducers: {
    signIn: (state) => {
      state.isSignedIn = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn } = oauthSlice.actions

export const selectOauth = (state: RootState) => state.allOauth.isSignedIn

export default oauthSlice.reducer

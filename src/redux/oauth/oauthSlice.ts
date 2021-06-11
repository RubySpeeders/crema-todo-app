import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

type sliceState = { isSignedIn: boolean; userId: null | string }

export const initialState: sliceState = {
  userId: null,
  isSignedIn: false,
}
export const oauthSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      state.isSignedIn = true
      state.userId = action.payload
    },
    signOut: (state) => {
      state.isSignedIn = false
      state.userId = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = oauthSlice.actions

export const selectOauth = (state: RootState) => state.auth

export default oauthSlice.reducer

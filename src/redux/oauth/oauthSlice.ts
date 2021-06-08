import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export const initialState = {
  userId: "null",
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
      state.userId = "null"
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = oauthSlice.actions

export const selectOauth = (state: RootState) => state.allOauth

export default oauthSlice.reducer

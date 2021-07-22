import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

type SliceState = {
  isSignedIn: boolean
  userId: null | string
  userName: null | string
}
type GooglePayload = { userId: string; userName: string }

export const initialState: SliceState = {
  userId: null,
  userName: null,
  isSignedIn: false,
}
export const oauthSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<GooglePayload>) => {
      state.isSignedIn = true
      state.userId = action.payload.userId
      state.userName = action.payload.userName
    },
    signOut: (state) => {
      state.isSignedIn = false
      state.userId = null
      state.userName = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = oauthSlice.actions

export const selectOauth = (state: RootState) => state.auth

export default oauthSlice.reducer

import { PayloadAction, createSlice } from "@reduxjs/toolkit"
// import type { RootState } from "../store"

const isSignedIn = false
export const oauthSlice = createSlice({
  name: "oauth",
  initialState: {
    isSignedIn,
  },
  reducers: {
    signIn: (state, action: PayloadAction<boolean>) => {
      console.log(action, state, "placeholder")
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn } = oauthSlice.actions

// export const selectTasks = (state: RootState) => state.allTasks.tasks

export default oauthSlice.reducer

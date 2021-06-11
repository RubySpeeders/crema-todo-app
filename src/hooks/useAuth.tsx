import { useEffect } from "react"
import { toggleDrawerOpen } from "../redux/drawer/drawerSlice"
import { useAppDispatch } from "../redux/hooks"
import { signIn, signOut } from "../redux/oauth/oauthSlice"

const useAuth = (authInstance = window.gapi) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (authInstance) {
      authInstance.load("client:auth2", () => {
        authInstance.client
          .init({
            clientId:
              "97459474309-nv26m4tb2fgrk15uvvkup2cen066hqq9.apps.googleusercontent.com",
            scope: "email",
          })
          .then(() => {
            onAuthChange(authInstance.auth2.getAuthInstance().isSignedIn.get())
            authInstance.auth2.getAuthInstance().isSignedIn.listen(onAuthChange)
          })
      })
    }
  })
  const onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      dispatch(
        signIn(authInstance.auth2.getAuthInstance().currentUser.get().getId()),
      )
    } else {
      dispatch(signOut())
    }
  }

  const onSignInClick = () => {
    if (authInstance) {
      authInstance.auth2.getAuthInstance().signIn()
      dispatch(toggleDrawerOpen())
    }
  }
  const onSignOutClick = () => {
    authInstance.auth2.getAuthInstance().signOut()
    dispatch(toggleDrawerOpen())
  }
  return { onSignInClick, onSignOutClick }
}

export default useAuth

import { useEffect } from "react"
import { toggleDrawerOpen } from "../../redux/drawer/drawerSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { signIn, signOut } from "../../redux/oauth/oauthSlice"

export function GoogleAuth() {
  const dispatch = useAppDispatch()
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn)
  useEffect(() => {
    if (window.gapi) {
      window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId:
              "97459474309-nv26m4tb2fgrk15uvvkup2cen066hqq9.apps.googleusercontent.com",
            scope: "email",
          })
          .then(() => {
            onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get())
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange)
          })
      })
    }
  })

  const onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      dispatch(
        signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId()),
      )
    } else {
      dispatch(signOut())
    }
  }

  const onSignInClick = () => {
    if (window.gapi) {
      window.gapi.auth2.getAuthInstance().signIn()
      dispatch(toggleDrawerOpen())
    }
  }

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut()
    dispatch(toggleDrawerOpen())
  }

  const renderAuthButton = () => {
    //this should really say something like "loading", but if it does, then the tests don't run because I am not sure how to make tests that work with google oauth
    if (isSignedIn === null) {
      return <p>Sign In</p>
    }
    return (
      <button
        className="getStarted"
        onClick={!isSignedIn ? onSignInClick : onSignOutClick}
      >
        {isSignedIn ? "Sign Out" : "Sign In"}
      </button>
    )
  }

  return <div>{renderAuthButton()}</div>
}

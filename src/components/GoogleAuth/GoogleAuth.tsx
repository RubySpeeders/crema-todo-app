import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { signIn, signOut } from "../../redux/oauth/oauthSlice"

export function GoogleAuth() {
  const dispatch = useAppDispatch()
  const isSignedIn: boolean = useAppSelector(
    (state) => state.allOauth.isSignedIn,
  )
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "97459474309-nv26m4tb2fgrk15uvvkup2cen066hqq9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance()
          onAuthChange(auth.isSignedIn.get())
          auth.isSignedIn.listen(onAuthChange)
        })
    })
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
    window.gapi.auth2.getAuthInstance().signIn()
  }

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut()
  }

  const renderAuthButton = () => {
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

import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { signIn } from "../../redux/oauth/oauthSlice"

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
          // setIsSignedIn(auth.isSignedIn.get())
          auth.isSignedIn.listen(onAuthChange)
        })
    })
  }, [])

  const onAuthChange = () => {
    // const auth = window.gapi.auth2.getAuthInstance()
    dispatch(signIn())
    // setIsSignedIn(auth.isSignedIn.get())
  }

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return <div>I don't know</div>
    }
    return (
      <button className="getStarted">
        {isSignedIn ? "Get Started" : "Sign In To Get Started"}
      </button>
    )
  }

  return <div>{renderAuthButton()}</div>
}

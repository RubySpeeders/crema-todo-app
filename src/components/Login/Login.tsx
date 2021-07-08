// import React from "react"
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login"
import { toggleDrawerOpen } from "../../redux/drawer/drawerSlice"
import { useAppDispatch } from "../../redux/hooks"
import { signIn } from "../../redux/oauth/oauthSlice"

export function Login() {
  // const isSignedIn = useAppSelector((state) => state.auth.isSignedIn)
  // const googleId = useAppSelector((state) => state.auth.userId)
  const dispatch = useAppDispatch()
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENTID ?? ""
  console.log(CLIENT_ID)
  const isGoogleLoginResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ): response is GoogleLoginResponse => {
    return (
      Boolean(response) &&
      typeof response === "object" &&
      Boolean((response as GoogleLoginResponse).tokenObj)
    )
  }

  function handleGoogleResponse(
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) {
    if (!isGoogleLoginResponse(response)) {
      return
    }
    dispatch(signIn(response.profileObj.googleId))
    dispatch(toggleDrawerOpen())
  }

  return (
    <GoogleLogin
      data-testid="login"
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={handleGoogleResponse}
      onFailure={handleGoogleResponse}
      cookiePolicy={"single_host_origin"}
    />
  )
}

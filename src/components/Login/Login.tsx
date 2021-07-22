import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login"
import { toggleDrawerOpen } from "../../redux/drawer/drawerSlice"
import { useAppDispatch } from "../../redux/hooks"
import { signIn } from "../../redux/oauth/oauthSlice"

export function Login() {
  const dispatch = useAppDispatch()
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENTID ?? ""

  const isGoogleLoginResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ): response is GoogleLoginResponse => {
    console.log("is google response")
    return (
      Boolean(response) &&
      typeof response === "object" &&
      Boolean((response as GoogleLoginResponse).tokenObj)
    )
  }

  const handleGoogleResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if (!isGoogleLoginResponse(response)) {
      return
    }
    console.log("handle google")
    dispatch(
      signIn({
        userId: response.profileObj.googleId,
        userName: response.profileObj.name,
      }),
    )
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

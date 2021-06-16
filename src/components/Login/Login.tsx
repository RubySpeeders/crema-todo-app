// import React from "react"
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login"

export function Login() {
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_APP_ID ?? ""
  const handleGoogleResponse = (
    response: GoogleLoginResponseOffline | GoogleLoginResponse,
  ) => {
    if (response.profileObj) {
      console.log(response.profileObj)
    }
  }
  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={handleGoogleResponse}
        onFailure={handleGoogleResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  )
}

import React from "react"
import { GoogleLogin } from "react-google-login"

export function Login() {
  const CLIENT_ID = process.env.GOOGLE_APP_ID
  const handleGoogleResponse = (response) => {
    console.log(response)
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

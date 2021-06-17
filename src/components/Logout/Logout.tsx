import { GoogleLogout } from "react-google-login"

export function Logout() {
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_APP_ID ?? ""
  return (
    <div>
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={() => {
          console.log("signed out")
        }}
      ></GoogleLogout>
    </div>
  )
}

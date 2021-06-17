import { GoogleLogout } from "react-google-login"
import { useAppDispatch } from "../../redux/hooks"
import { signOut } from "../../redux/oauth/oauthSlice"

export function Logout() {
  const dispatch = useAppDispatch()
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_APP_ID ?? ""
  const handleGoogleResponse = () => {
    //TODO - actually sign out of google
    console.log("signed out")
    dispatch(signOut())
  }
  return (
    <div>
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleGoogleResponse}
      ></GoogleLogout>
    </div>
  )
}

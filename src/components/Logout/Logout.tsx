import { GoogleLogout } from "react-google-login"
import { toggleDrawerOpen } from "../../redux/drawer/drawerSlice"
import { useAppDispatch } from "../../redux/hooks"
import { signOut } from "../../redux/oauth/oauthSlice"

export function Logout() {
  const dispatch = useAppDispatch()
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENTID ?? ""
  const handleGoogleResponse = () => {
    dispatch(signOut())
    dispatch(toggleDrawerOpen())
  }
  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={handleGoogleResponse}
    />
  )
}

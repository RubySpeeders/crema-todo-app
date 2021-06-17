// import { GoogleAuth } from "../GoogleAuth"
import { useAppSelector } from "../../redux/hooks"
import { Login } from "../Login"
import { Logout } from "../Logout"

export function Drawer() {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn)
  return (
    <div>
      <p>Lists</p>
      <div className="authContainer">
        {/* <GoogleAuth /> */}
        {isSignedIn ? <Logout /> : <Login />}
      </div>
    </div>
  )
}

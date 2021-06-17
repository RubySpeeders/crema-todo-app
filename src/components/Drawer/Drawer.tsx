import { useAppSelector } from "../../redux/hooks"
import { Login } from "../Login"
import { Logout } from "../Logout"
import "./style.css"

export function Drawer() {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn)
  return (
    <div className="drawer">
      <p>Lists</p>
      <div className="authContainer">{isSignedIn ? <Logout /> : <Login />}</div>
    </div>
  )
}

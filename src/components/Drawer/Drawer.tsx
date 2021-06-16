// import { GoogleAuth } from "../GoogleAuth"
import { Login } from "../Login"

export function Drawer() {
  return (
    <div>
      <p>Lists</p>
      <div className="authContainer">
        {/* <GoogleAuth /> */}
        <Login />
      </div>
    </div>
  )
}

import { GoogleAuth } from "../GoogleAuth"
import { Login } from "../Login"

export function Drawer() {
  return (
    <div>
      <p>Lists</p>
      <GoogleAuth />
      <Login />
    </div>
  )
}

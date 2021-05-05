import "./style.css"
import MenuIcon from "@material-ui/icons/Menu"

export function AppHeader() {
  return (
    <header className="AppHeader">
      <MenuIcon />
      <h5 className="AppHeaderTitle">My Tasks</h5>
    </header>
  )
}

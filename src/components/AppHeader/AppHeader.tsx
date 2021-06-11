import "./style.css"
import MenuIcon from "@material-ui/icons/Menu"
import { toggleDrawerOpen } from "../../redux/drawer/drawerSlice"
import { useAppDispatch } from "../../redux/hooks"

export function AppHeader() {
  const dispatch = useAppDispatch()
  const onDrawerClick = () => {
    dispatch(toggleDrawerOpen())
  }
  return (
    <header className="AppHeader">
      <MenuIcon
        className="menuIcon"
        data-testid="hamburger"
        onClick={onDrawerClick}
      />
      <h5 className="AppHeaderTitle">My Tasks</h5>
    </header>
  )
}

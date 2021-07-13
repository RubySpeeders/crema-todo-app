import "./style.css"
import MenuIcon from "@material-ui/icons/Menu"
import { toggleDrawerOpen } from "../../redux/drawer/drawerSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"

export function AppHeader() {
  const username: string | null = useAppSelector((state) => state.auth.userName)
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
      <div className="HeaderItems">
        <h5 className="AppHeaderTitle">My Tasks</h5>
        {username && <p>Welcome, {username}!</p>}
      </div>
    </header>
  )
}

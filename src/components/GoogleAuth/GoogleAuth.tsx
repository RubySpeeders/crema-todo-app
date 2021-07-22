import useAuth from "../../hooks/useAuth"
import { useAppSelector } from "../../redux/hooks"

export function Auth() {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn)
  const { onSignInClick, onSignOutClick } = useAuth()

  const renderAuthButton = () => {
    return (
      <button
        className="getStarted"
        onClick={!isSignedIn ? onSignInClick : onSignOutClick}
      >
        {isSignedIn ? "Sign Out" : "Sign In"}
      </button>
    )
  }

  return <div>{renderAuthButton()}</div>
}

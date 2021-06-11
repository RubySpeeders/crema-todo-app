import useAuth from "../../hooks/useAuth"
import { useAppSelector } from "../../redux/hooks"

export function GoogleAuth() {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn)
  const { onSignInClick, onSignOutClick } = useAuth(window.gapi)

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

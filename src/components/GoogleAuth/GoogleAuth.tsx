import { GoogleAuth } from "google-auth-library"
import useAuth from "../../hooks/useAuth"
import { useAppSelector } from "../../redux/hooks"

export function Auth() {
  async function main() {
    const auth = new GoogleAuth({
      scopes: "https://www.googleapis.com/auth/cloud-platform",
    })
    const client = await auth.getClient()
    const projectId = await auth.getProjectId()
    const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`
    const res = await client.request({ url })
    console.log(res.data)
  }

  main().catch(console.error)

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

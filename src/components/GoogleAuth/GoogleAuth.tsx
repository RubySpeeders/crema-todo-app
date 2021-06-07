import { useEffect, useState } from "react"

export function GoogleAuth() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>()
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "97459474309-nv26m4tb2fgrk15uvvkup2cen066hqq9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance()
          setIsSignedIn(auth.isSignedIn.get())
          auth.isSignedIn.listen(onAuthChange)
        })
    })
  }, [])

  const onAuthChange = () => {
    const auth = window.gapi.auth2.getAuthInstance()
    setIsSignedIn(auth.isSignedIn.get())
  }

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return <div>I don't know</div>
    }
    if (isSignedIn) {
      return <div>Get Started</div>
    } else {
      return <div>Sign In To Get Started!</div>
    }
  }

  return (
    <div>
      {renderAuthButton()}
      <button className="getStarted">Sign in</button>
    </div>
  )
}

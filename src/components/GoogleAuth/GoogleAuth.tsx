import { useEffect } from "react"

export function GoogleAuth() {
  useEffect =
    (() => {
      window.gapi.load("client:auth2", () => {
        window.gapi.client.init({
          clientId:
            "1000160533098-053ssjekeh140r1gpv5eb8iq0qhq2ls5.apps.googleusercontent.com",
          scope: "email",
        })
      })
    },
      [])
  return <button className="getStarted">Sign in</button>
}

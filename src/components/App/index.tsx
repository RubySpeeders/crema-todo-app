import { BrowserRouter, Route } from "react-router-dom"
import "./styles.css"
import { signIn } from "../../redux/oauth/oauthSlice"
import store from "../../redux/store"
import { Homepage } from "../Homepage"
import { TaskPage } from "../TaskPage"

declare global {
  interface Window {
    Cypress: unknown
    store: unknown
  }
}

export function App() {
  const googleCypressResponse = window.localStorage.getItem("googleCypress")
  if (googleCypressResponse) {
    const jsonResponse = JSON.parse(googleCypressResponse)
    const googleId = jsonResponse.user.googleId
    store.dispatch(signIn(googleId))
  }
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/todo" component={TaskPage} />
      </BrowserRouter>
    </div>
  )
}

if (window.Cypress) {
  window.store = store
}

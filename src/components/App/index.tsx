import { BrowserRouter, Route } from "react-router-dom"
import "./styles.css"
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

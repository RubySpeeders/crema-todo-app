import { BrowserRouter, Route } from "react-router-dom"
import { Homepage } from "../Homepage"
import { TaskPage } from "../TaskPage"

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

import CheckIcon from "@material-ui/icons/Check"
import { Link } from "react-router-dom"

import "./style.css"

export function Homepage() {
  return (
    <div className="homepage">
      <div className="homepageContent">
        <div className="circle">
          <div className="child">
            <CheckIcon />
            <p>todo</p>
          </div>
        </div>
        <div className="welcome">
          <h5>Welcome!</h5>
          <p>Get things done with Todo</p>
        </div>
        <Link to="/todo" className="link">
          <button data-testid="getStarted" className="getStarted">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

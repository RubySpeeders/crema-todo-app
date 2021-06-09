import { Link } from "react-router-dom"
import { LogoSVG } from "../LogoSVG"
import "./style.css"

export function Homepage() {
  return (
    <div className="homepage">
      <div className="homepageContent">
        <LogoSVG />
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

import React from "react"
import { Link } from "react-router-dom"
import "./hero.css"

export default class Hero extends React.Component {

  render() {
    return (
      <header className="hero">
        <div className="container">
          <div className="back">
            <Link to="/">
              Tillbakaknapp
            </Link>
          </div>
          <div className="userinfo">
            <div>
              <div>
                {this.props.name
                  ? this.props.name
                  : `User number ${this.props.userId}`}
              </div>
              <div>
                {this.props.nick
                  ? this.props.nick
                  : null}
              </div>
            </div>
            <div>
              Antal saker kvar att göra
            </div>
          </div>
        </div>
      </header>
    )
  }

}

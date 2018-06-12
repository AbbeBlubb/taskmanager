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
              Namnet på personen
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

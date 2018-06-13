import React from "react"
import { Link } from "react-router-dom"
import "./hero.css"
import leftarrow from "../../media/left-arrow.png"

export default class Hero extends React.Component {

  render() {
    return (
      <header className="hero">
        <div className="container">
          <div className="back">
            <Link to="/">
              <img src={leftarrow} alt="Back" />
            </Link>
          </div>
          <div className="userinfo">
            <div>
              <div className="large">
                {this.props.name
                  ? this.props.name
                  : `User id: ${this.props.userId}`}
              </div>
              <div className="medium">
                {this.props.nick
                  ? this.props.nick
                  : null}
              </div>
              <div className="medium">
                Antal saker kvar - callback
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

}

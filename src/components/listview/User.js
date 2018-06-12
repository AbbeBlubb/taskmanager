import React from "react"
import { Link } from "react-router-dom"
import "./user.css"

export default class User extends React.Component {

  render() {
    return (
      <Link to={`/user/${this.props.id}`}>
        <div className="user">
          <div className="container borderbox">

            <div className="firsthalf">
              <div className="first">
                <div>
                  Nick
                </div>
              </div>

              <div className="second">
                <div>
                  <div className="name">
                    {this.props.name}
                  </div>
                </div>
                <div className="email">
                  E-post
                </div>
                <div className="city">
                  <div>
                    Stad
                  </div>
                </div>
              </div>
            </div>

            <div className="secondhalf">
              <div className="third">
                <div>
                  5
                </div>
                <div>
                  Saker att göra
                </div>
              </div>

              <div className="fourth">
                <div>
                  >
                </div>
              </div>
            </div>

          </div>
        </div>
      </Link>
    )
  }

}

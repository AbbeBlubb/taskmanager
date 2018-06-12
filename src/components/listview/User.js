import React from "react"
import { Link } from "react-router-dom"
import "./user.css"
import user from "../../media/user.png"
import rightarrow from "../../media/right-arrow-1.png"

export default class User extends React.Component {

  render() {
    return (
      <Link to={`/user/${this.props.id}`}>
        <div className="user">
          <div className="container borderbox">

            <div className="firsthalf">
              <div className="first">
                <div className="userimage">
                  <img src={user} alt="User" />
                </div>
                <div className="nick tiny gray">
                  {this.props.nick}
                </div>
                <div className="tiny gray">
                  Id: {this.props.id}
                </div>
              </div>

              <div className="second">
                <div>
                  <div className="large">
                    {this.props.name}
                  </div>
                </div>
                <div className="email small gray">
                  {this.props.email}
                </div>
                <div className="city small gray">
                  <div>
                    {this.props.city}
                  </div>
                </div>
              </div>
            </div>

            <div className="secondhalf">
              <div className="third">
                <div className="medium">
                  5
                </div>
                <div className="tiny gray">
                  Saker att göra
                </div>
              </div>

              <div className="fourth">
                <div className="userimage">
                  <img src={rightarrow} alt="Go to the user's tasklist" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </Link>
    )
  }

}

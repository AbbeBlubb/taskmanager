import React from "react"
import { Link } from "react-router-dom"
import "./user.css"
import user from "../../media/user.png"
import rightarrow from "../../media/right-arrow-1.png"

export default class User extends React.Component {

  render() {
    return (
      <article className="user">
        <div className="container1">
          <Link to={`/user/${this.props.id}`}>
            <div className="container2 borderbox">

              <div className="firsthalf">
                <div className="first">
                  <div className="userimage">
                    <img src={user} alt="User icon" title="User icon" />
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
                    <h2 className="large">
                      {this.props.name}
                    </h2>
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
                <div className="third" title="Right now we can't display the ammount of pending tasks in this section. Click on the user to see the number of pending tasks.">
                  <div className="medium">
                    5
                  </div>
                  <div className="tiny gray">
                    pending tasks
                  </div>
                </div>

                <div className="fourth">
                  <div className="userimage">
                    <img src={rightarrow} alt="Go to the user's tasklist" title="Go to the user's tasklist" />
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </div>
      </article>
    )
  }

}

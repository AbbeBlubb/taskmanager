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
            <div className="container2">

              <div className="user__stretch">
                <div className="first">
                  <div>
                    <img className="icon--small" src={user} alt="User icon" title="User icon" />
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

              <div className="user__stretch">
                <div className="user__pending" title="Right now we can't display the ammount of pending tasks in this section. Click on the user to see the number of pending tasks.">
                  <div className="user__pending-nr">
                    5
                  </div>
                  <div className="user__pending-text">
                    pending tasks
                  </div>
                </div>

                <div className="user__link">
                  <img className="icon--small" src={rightarrow} alt="Go to the user's tasklist" title="Go to the user's tasklist" />
                </div>
              </div>

            </div>
          </Link>
        </div>
      </article>
    )
  }

}

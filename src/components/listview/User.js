import React from "react"
import { Link } from "react-router-dom"
import user from "../../assets/user.png"
import rightarrow from "../../assets/right-arrow-1.png"

export default class User extends React.Component {

  render() {
    return (
      <article className="userblock">
        <Link to={`/user/${this.props.id}`}>
          <div className="userblock__inner">

            <div className="user__stretch">
              
              {/* Icon with nickname */}
              <div className="user__nickname-wrap">
                <div>
                  <img
                    className="icon--small"
                    src={user} alt="User icon"
                    title="User icon" />
                </div>
                <div className="user__nickname">
                  {this.props.nick}
                </div>
                <div className="user__id">
                  Id: {this.props.id}
                </div>
              </div>

              {/* Personal details */}
              <div className="user__name-box">
                <div>
                  <h2 className="user__name">
                    {this.props.name}
                  </h2>
                </div>
                <div className="user__email">
                  {this.props.email}
                </div>
                <div className="user__city">
                  <div>
                    {this.props.city}
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="user__stretch">
            
              {/* Pending tasks */}
              <div
                className="user__pending-box"
                title="Right now we can't display the amount of pending tasks in this section. Click on the user to see the number of pending tasks.">
                <div className="user__pending-nr">
                  5
                </div>
                <div className="user__pending-text">
                  pending tasks
                </div>
              </div>

              {/* Link icon */}
              <div className="user__link">
                <img className="icon--small" src={rightarrow} alt="Go to the user's tasklist" title="Go to the user's tasklist" />
              </div>
              
            </div>

          </div>
        </Link>
      </article>
    )
  }

}

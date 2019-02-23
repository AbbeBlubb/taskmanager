import React from "react"
import { Link } from "react-router-dom"
import { UserNickname } from "./UserNickname"
import { UserPersonalDetails } from "./UserPersonalDetails"
import { UserPendingTasks } from "./UserPendingTasks"
import { UserLinkToTasks } from "./UserLinkToTasks"

export default class UserBlock extends React.Component {

  render() {
    return (
      <article className="user-block">
        <Link to={`/user/${this.props.id}`}>
          <div className='user-block__centered
                          waves-effect
                          waves-light-gray'>
            <div className="user-block__inner
                            flex-space-between">
              <div className="flex">
                <UserNickname
                  nick={this.props.nick}
                  id={this.props.id} />
                <UserPersonalDetails
                  name={this.props.name}
                  email={this.props.email}
                  city={this.props.city} />
              </div>
  
              <div className="flex">
                <UserPendingTasks pending={this.props.pending} />
                <UserLinkToTasks />
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }

}

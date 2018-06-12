import React from "react"
import "./header.css"
import user from "../../media/user.png"
import edit from "../../media/edit.png"

export default class Header extends React.Component {

  render() {
    return (
      <header className="listheader">
        <div className="user">
          <img src={user} alt="You are logged in!" />
        </div>
        <div className="title">Task Manager</div>
        <div className="settings">
          <img src={edit} alt="Create your own task" />
        </div>
      </header>
    )
  }

}

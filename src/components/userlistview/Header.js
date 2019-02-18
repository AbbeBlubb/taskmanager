import React from "react"
import user from "../../assets/user.png"
import edit from "../../assets/edit.png"

export default class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <img className="icon" src={user} alt="You are logged in!" title="You are logged in!" />
        <h1 className="header__title">Task Manager</h1>
        <img className="icon" src={edit} alt="Create your own task" title="Create your own task" />
      </header>
    )
  }

}

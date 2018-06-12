import React from "react"

export default class Header extends React.Component {

  render() {
    return (
      <header className="listheader">
        <div className="back">
          Tillbakapil
        </div>
        <div className="title">Task Manager</div>
        <div className="settings">
          Kontroller
        </div>
      </header>
    )
  }

}

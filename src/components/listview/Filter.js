import React from "react"
import loupe from "../../media/loupe.png"
import "./filter.css"

export default class Filter extends React.Component {

  render() {
    return (
      <section className="filter">
        <input
          autoFocus="true"
          className="search"
          onChange={event => this.props.handleChange(event)} />
        <img className="icon" src={loupe} alt="Search user information: name, username, e-mail, or city" title="Search user information: name, username, e-mail, or city" />
      </section>
    )
  }

}

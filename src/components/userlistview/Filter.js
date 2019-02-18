import React from "react"
import loupe from "../../assets/loupe.png"

export default class Filter extends React.Component {

  render() {
    return (
      <section className="filter">
        <input
          autoFocus="{true}"
          className="filter__search"
          onChange={event => this.props.handleChange(event)} />
        <img className="icon" src={loupe} alt="Search user information: name, username, e-mail, or city" title="Search user information: name, username, e-mail, or city" />
      </section>
    )
  }

}

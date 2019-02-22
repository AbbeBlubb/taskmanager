import React from "react"
import loupe from "../../assets/loupe.png"

export default class Filter extends React.Component {

  render() {
    return (
      <section className="filter">
        <input
          type='search'
          className="filter__search"
          autoFocus="{true}"
          placeholder="Search user"
          onFocus={(event) => event.target.placeholder = ''}
          onBlur={(event) => event.target.placeholder = 'Search user'}
          onChange={event => this.props.handleChange(event)} />
        <img className="icon" src={loupe} alt="Search user information: name, username, e-mail, or city" title="Search user information: name, username, e-mail, or city" />
      </section>
    )
  }

}

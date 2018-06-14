import React from "react"
import loupe from "../../media/loupe.png"
import "./filter.css"

export default class Filter extends React.Component {

  render() {
    return (
      <section className="filter">
        <div className="container">
          <div>
            <input
              className="inputfield medium"
              onChange={event => this.props.handleChange(event)} />
          </div>
          <div className="search">
            <img src={loupe} alt="Search user information: name, username, e-mail, or city" title="Search user information: name, username, e-mail, or city" />
          </div>
        </div>
      </section>
    )
  }

}

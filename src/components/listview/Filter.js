import React from "react"
import loupe from "../../media/loupe.png"
import "./filter.css"

export default class Filter extends React.Component {

  render() {
    return (
      <section className="filter">
        <div className="container">
          <div>
            Låda för sökning
          </div>
          <div className="search">
            <img src={loupe} alt="Search" />
          </div>
        </div>
      </section>
    )
  }

}

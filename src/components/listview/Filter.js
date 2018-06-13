import React from "react"
import loupe from "../../media/loupe.png"
import "./filter.css"

export default class Filter extends React.Component {

  render() {
    return (
      <section className="filter">
        <div className="container">
          <div>
            <input className="inputfield medium" />
          </div>
          <div className="search">
            <img src={loupe} alt="Search" />
          </div>
        </div>
      </section>
    )
  }

}

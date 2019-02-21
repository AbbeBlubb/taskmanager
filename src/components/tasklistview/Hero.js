import React from "react"
import { Link } from "react-router-dom"
import leftarrow from "../../assets/left-arrow.png"


export default class Hero extends React.Component {

  componentDidMount() {
    window.addEventListener("scroll", this.parallax)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallax)
  }

  parallax = () => {
    document.querySelector(".hero").style.top = `${window.pageYOffset * 0.4}px`
    /* console.log(`Y pixel: ${window.pageYOffset}\n` +
                   `Selected: ${document.querySelector(".hero")}\n` +
                   `.hero style top: ${document.querySelector(".hero").style.top}`) */
  }

  render() {
    return (
      <header className="hero">
        <div className="hero__container">

          {/* Link back to UserListView */}
          <Link to="/">
            <div className="hero__back waves-effect">
              <img className="icon" src={leftarrow} alt="Back to the list with users" title="Back to the list with users" />
            </div>
          </Link>

          {/* Box with user info */}
          <div className="hero__userinfo">
            <div>
              <h2 className="hero__name">
                {this.props.name}
              </h2>
              <div className="hero__username">
                {this.props.username}
              </div>
              <div className="hero__pendingnr">
                {this.props.pendingNr} pending tasks
              </div>
            </div>
          </div>

        </div>
      </header>
    )
  }

}

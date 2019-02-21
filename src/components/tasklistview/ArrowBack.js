import React from "react"
import leftArrow from "../../assets/left-arrow.png"
import { Link } from "react-router-dom"

export function ArrowBack(props) {
  return(
    <Link to={props.to}>
      <div className={`arrow-back ${props.class} waves-effect`}>
        <img className="icon" src={leftArrow} alt="Back to the list with users"
             title="Back to the list with users"/>
      </div>
    </Link>
  )
}

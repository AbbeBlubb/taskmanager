import React from "react"
import * as PropTypes from "prop-types"

export function HeroUserInfoBox(props) {
  return(
    <div className="hero-user-info-box">
      <h2 className="hero-user-info-box__name">
        {props.name}
      </h2>
      <div className="hero-user-info-box__username">
        {props.username}
      </div>
      <div className="hero-user-info-box__pending">
        {props.pending} pending tasks
      </div>
    </div>
  )
}

HeroUserInfoBox.propTypes = {
  name: PropTypes.string,
  username: PropTypes.any,
  pending: PropTypes.any
}

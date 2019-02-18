import * as PropTypes from "prop-types"
import React from "react"

export function UserPersonalDetails(props) {
  return(
    <div className="user-personal-details">
      <div>
        <h2 className="user-personal-details__name">
          {props.name}
        </h2>
      </div>
      <div className="user-personal-details__email">
        {props.email}
      </div>
      <div className="user-personal-details__city">
        <div>
          {props.city}
        </div>
      </div>
    </div>
  )
}

UserPersonalDetails.propTypes = {
  name: PropTypes.string,
  email: PropTypes.any,
  city: PropTypes.string
}

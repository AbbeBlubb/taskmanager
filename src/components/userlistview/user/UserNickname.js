import user from "../../../assets/user.png"
import * as PropTypes from "prop-types"
import React from "react"

export function UserNickname(props) {
  return(
    <div className="user-nickname">
      <div className='user-nickname__img-wrap'>
        <img
          className="icon--small"
          src={user}
          alt="User icon"
          title="User icon" />
      </div>
      <div className="user-nickname__nickname">
        {props.nick}
      </div>
      <div className="user-nickname__id">
        Id: {props.id}
      </div>
    </div>
  )
}

UserNickname.propTypes = {
  nick: PropTypes.any,
  id: PropTypes.any
}

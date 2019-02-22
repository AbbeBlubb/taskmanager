import React from "react"
import * as PropTypes from "prop-types"

export function TaskBlockTextArea(props) {
  return(
    <div className="task-block-text-area">
      <p className="task-block-text-area__text">
        {props.task.title}
      </p>
    </div>
  )
}

TaskBlockTextArea.propTypes = { task: PropTypes.any }

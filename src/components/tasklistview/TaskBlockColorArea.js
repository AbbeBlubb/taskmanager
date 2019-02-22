import React from "react"
import document from "../../assets/document.png"
import * as PropTypes from "prop-types"

export function TaskBlockColorArea(props) {
  return(
    <div className="task-block-color-area">
      <img
        className={props.task.completed
          ? "icon--small icon--done"
          : "icon--small icon--pending"}
        src={document}
        alt="Task: blue for pending, green for done"
        title="Task: blue for pending, green for done"/>
    </div>
  )
}

TaskBlockColorArea.propTypes = { task: PropTypes.any }

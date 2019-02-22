import React from "react"

export function UserPendingTasks(props) {
  return(
    <div
      className="user-pending-tasks"
      title="Click to see details about the tasks">
      <div className="user-pending-tasks__pending-nr">
        {props.pending}
      </div>
      <div className="user-pending-tasks__pending-text">
        pending tasks
      </div>
    </div>
  )
}

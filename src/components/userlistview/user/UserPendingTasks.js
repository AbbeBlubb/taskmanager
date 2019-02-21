import React from "react"

export function UserPendingTasks(props) {
  return(
    <div
      className="user-pending-tasks"
      title="Right now we can't display the amount of pending tasks in this section. Click on the user to see the number of pending tasks.">
      <div className="user-pending-tasks__pending-nr">
        {props.pending}
      </div>
      <div className="user-pending-tasks__pending-text">
        pending tasks
      </div>
    </div>
  )
}

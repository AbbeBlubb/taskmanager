import rightarrow from "../../../assets/right-arrow-1.png"
import React from "react"

export function UserLinkToTasks() {
  return(
    <div className="user-link-to-tasks">
      <img className="icon--small" src={rightarrow} alt="Go to the user's tasklist"
           title="Go to the user's tasklist"/>
    </div>
  )
}

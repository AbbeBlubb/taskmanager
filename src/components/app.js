import React from "react"
import { HashRouter, Route } from "react-router-dom"
import UserListView from "./userlistview/UserListView"
import TaskListView from "./tasklistview/TaskListView"

export default class App extends React.Component {
  
  render() {
    return (
      <HashRouter>
        <div className="main">
          <Route exact path="/" component={UserListView} />
          <Route exact path="/user/:id" component={TaskListView} />
        </div>
      </HashRouter>
    )
  }

}

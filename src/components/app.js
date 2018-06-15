import React from "react"
import { HashRouter, Route } from "react-router-dom"
import UserView from "./listview/UserView"
import TaskView from "./taskview/TaskView"

export default class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="main">
          <Route exact path="/" component={UserView} />
          <Route exact path="/user/:id" component={TaskView} />
        </div>
      </HashRouter>
    )
  }

}

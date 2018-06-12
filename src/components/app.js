import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Header from "./listview/Header"
import Filter from "./listview/Filter"
import List from "./listview/List"
import TaskView from "./taskview/TaskView"
import User from "./listview/User"

export default class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="main">
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Filter} />
          <Route exact path="/" component={List} />
          <Route exact path="/user/:id" component={TaskView} />
          <User />
        </div>
      </HashRouter>
    )
  }

}

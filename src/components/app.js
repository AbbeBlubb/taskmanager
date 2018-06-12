import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Header from "./listview/Header"
import Filter from "./listview/Filter"
import List from "./listview/List"
import TaskView from "./taskview/TaskView"

export default class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="main">
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Filter} />
          <Route exact path="/" component={List} />
          <Route exact path="/task/:id" component={TaskView} />
        </div>
      </HashRouter>
    )
  }

}

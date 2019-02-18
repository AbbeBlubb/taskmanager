import React from "react"
import { HashRouter, Route } from "react-router-dom"
import { connect } from "react-redux"
import UserListView from "./userlistview/UserListView"
import TaskListView from "./tasklistview/TaskListView"
import { USERS, storeUsers } from "../store/actions"

class App extends React.Component {

  componentDidMount() {
    fetch(USERS)
      .then(response => response.json())
      .then(json => this.props.storeUsers(json))
  }

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

const mapDispatchToProps = dispatch => ({
  storeUsers: json => dispatch(storeUsers(json))
})

export default connect(null, mapDispatchToProps)(App)

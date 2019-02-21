import React from "react"
import { HashRouter, Route } from "react-router-dom"
import UserListView from "./userlistview/UserListView"
import TaskListView from "./tasklistview/TaskListView"
import '../assets/waves'
import { connect } from "react-redux"
import {
  USERS_URL,
  FETCH_USERS_START,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESSFUL } from "../store/actions"


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(dispatch => {
      dispatch({ type: FETCH_USERS_START })
      fetch(USERS_URL)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: FETCH_USERS_SUCCESSFUL, payload: json })
        })
        .catch(error => {
          dispatch({ type: FETCH_USERS_ERROR, payload: error })
        })
    })
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

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(App)

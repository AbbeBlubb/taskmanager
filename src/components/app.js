import React from "react"
import { HashRouter, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import UserListView from "./userlistview/UserListView"
import TaskListView from "./tasklistview/TaskListView"
import '../assets/waves'
import { connect } from "react-redux"
import {
  USERS_URL,
  FETCH_USERS_START,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESSFUL,

  TASKS_URL,
  FETCH_TASKS_START,
  FETCH_TASKS_ERROR,
  FETCH_TASKS_SUCCESSFUL,

  SORT_TASKS_BY_ID } from "../store/actions"


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

    this.props.dispatch(dispatch => {
      dispatch({ type: FETCH_TASKS_START })
      fetch(TASKS_URL)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: FETCH_TASKS_SUCCESSFUL, payload: json })
          dispatch({ type: SORT_TASKS_BY_ID, payload: json })
        })
        .catch(error => {
          dispatch({ type: FETCH_TASKS_ERROR, payload: error })
        })
    })
  }

  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <Route exact path="/" component={UserListView} />
          <Route exact path="/user/:id" component={TaskListView} />
        </ScrollToTop>
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

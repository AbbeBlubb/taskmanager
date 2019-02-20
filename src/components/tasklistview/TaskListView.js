import React from "react"
import Hero from "./Hero"
import TaskList from "./TaskList"
import {
  TASKS_URL,
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESSFUL,
  FETCH_TASKS_ERROR } from "../../store/actions"
import { connect } from "react-redux"

class TaskListView extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(dispatch => {
      dispatch({ type: FETCH_TASKS_START })
      fetch(TASKS_URL)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: FETCH_TASKS_SUCCESSFUL, payload: json })
        })
        .catch(error => {
          dispatch({ type: FETCH_TASKS_ERROR, payload: error })
        })
    })
  }

  render() {
    const userId = this.props.match.params.id
    
    /* User information for Hero */
    const filteredUsers = this.props.users.find(element =>
      element.id === Number(userId))
    
    /* User's tasks */
    const filteredTasks = this.props.tasks.filter(element =>
      element.userId === Number(userId))
  
    /* User's not completed tasks */
    const pendingTasks = filteredTasks.filter(element =>
      !element.completed).length
    
    return (
      <>
        <Hero
          userId={userId}
          name={filteredUsers.name}
          username={filteredUsers.username}
          pendingNr={pendingTasks}
        />
        
        <TaskList
          error={this.props.error}
          fetched={this.props.fetched}
          tasks={filteredTasks} />
      </>
    )
  }

}

const mapStateToProps = state => ({
  fetching: state.tasksReducer.fetching,
  fetched: state.tasksReducer.fetched,
  tasks: state.tasksReducer.tasks,
  error: state.tasksReducer.error,
  users: state.usersReducer.users
})

export default connect(mapStateToProps)(TaskListView)

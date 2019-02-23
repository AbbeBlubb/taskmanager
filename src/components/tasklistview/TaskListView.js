import React from "react"
import { Error } from "../Error"
import { Loader } from "../Loader"
import Hero from "./Hero"
import TaskList from "./TaskList"
import { connect } from "react-redux"


class TaskListView extends React.Component {

  render() {

    if (this.props.tasksError || this.props.usersError) { return <Error/> }
    if (!this.props.tasksAreFetched || !this.props.usersAreFetched || !this.props.tasksAreSorted) { return <Loader/> }
    else {

      const userId = this.props.match.params.id

      /* User information for Hero */
      const filteredUsers = this.props.users.find(element =>
        element.id === Number(userId))

      /* User's tasks
      const filteredTasks = this.props.tasks.filter(element =>
        element.userId === Number(userId)) */

      /* User's not completed tasks
      const pendingTasks = filteredTasks.filter(element =>
        !element.completed).length */

      return (
        <>
          <Hero
            userId={userId}
            name={filteredUsers.name}
            username={filteredUsers.username}
            pending={this.props.sortedTasks[userId].filter(element => !element.completed).length}
          />

          <TaskList
            error={this.props.error}
            fetched={this.props.tasksAreFetched}
            tasks={this.props.sortedTasks[userId]}/>
        </>
      )
    }
  }

}

const mapStateToProps = state => ({

  tasksAreFetching: state.tasksReducer.fetching,
  tasksAreFetched: state.tasksReducer.fetched,
  tasksError: state.tasksReducer.error,

  usersAreFetching: state.usersReducer.fetching,
  usersAreFetched: state.usersReducer.fetched,
  users: state.usersReducer.users,
  usersError: state.usersReducer.error,
  
  tasksAreSorted: state.tasksReducer.tasksAreSorted,
  sortedTasks: state.tasksReducer.sortedTasks

})

export default connect(mapStateToProps)(TaskListView)

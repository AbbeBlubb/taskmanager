import React from "react"
import { Error } from "../Error"
import { Loader } from "../Loader"
import Hero from "./Hero"
import TaskList from "./TaskList"
import { connect } from "react-redux"


class TaskListView extends React.Component {

  render() {

    if (this.props.tasksError || this.props.usersError) { return <Error/> }
    if (!this.props.tasksAreFetched || !this.props.usersAreFetched) { return <Loader/> }
    else {

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
            fetched={this.props.tasksAreFetched}
            tasks={filteredTasks}/>
        </>
      )
    }
  }

}

const mapStateToProps = state => ({

  tasksAreFetching: state.tasksReducer.fetching,
  tasksAreFetched: state.tasksReducer.fetched,
  tasks: state.tasksReducer.tasks,
  tasksError: state.tasksReducer.error,

  usersAreFetching: state.usersReducer.fetching,
  usersAreFetched: state.usersReducer.fetched,
  users: state.usersReducer.users,
  usersError: state.usersReducer.error

})

export default connect(mapStateToProps)(TaskListView)

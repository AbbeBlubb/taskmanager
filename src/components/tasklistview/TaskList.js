import React from "react"
import { connect } from "react-redux"
import Task from "./Task"
import {
  TASKS_URL,
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESSFUL,
  FETCH_TASKS_ERROR } from "../../store/actions"
import { Error } from "../Error"
import { Loader } from "../Loader"

class TaskList extends React.Component {
  
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
    if (this.props.error) { return <Error /> }
    if (!this.props.fetched) { return <Loader /> }
    else {
      
      const filteredArray = this.props.tasks.filter(element =>
        element.userId === Number(this.props.userId))
      
      return (
        <section className="tasklist">
          {filteredArray.map(task => (
            <Task
              key={task.id}
              task={task} />
          ))}
        </section>
      )
    }
  }

}

const mapStateToProps = state => ({
  fetching: state.tasksReducer.fetching,
  fetched: state.tasksReducer.fetched,
  tasks: state.tasksReducer.tasks,
  error: state.tasksReducer.error
})

export default connect(mapStateToProps)(TaskList)

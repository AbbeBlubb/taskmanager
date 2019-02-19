import React from "react"
import Task from "./Task"
import { Error } from "../Error"
import { Loader } from "../Loader"

export default class TaskList extends React.Component {

  render() {
    if (this.props.error) { return <Error /> }
    if (!this.props.fetched) { return <Loader /> }
    else {
      
      return (
        <section className="tasklist">
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              task={task} />
          ))}
        </section>
      )
    }
  }

}

import React from "react"
import Task from "./Task"


export default class TaskList extends React.Component {

  render() {

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

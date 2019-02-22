import React from "react"
import TaskBlock from "./TaskBlock"


export default class TaskList extends React.Component {

  render() {

    return (
      <section className="tasklist">
        {this.props.tasks.map(task => (
          <TaskBlock
            key={task.id}
            task={task} />
        ))}
      </section>
    )
  }

}

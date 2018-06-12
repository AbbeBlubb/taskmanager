import React from "react"
import Hero from "./Hero"
import TaskList from "./TaskList"

export default class TaskView extends React.Component {

  render() {
    return (
      <section>
        <Hero
          name={this.props.location.state ? this.props.location.state.name : null}
          nick={this.props.location.state ? this.props.location.state.nick : null} />
        <TaskList />
      </section>
    )
  }

}

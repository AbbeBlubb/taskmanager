import React from "react"
import Hero from "./Hero"
import TaskList from "./TaskList"

export default class TaskView extends React.Component {

  render() {
    return (
      <section>
        <Hero />
        <TaskList />
      </section>
    )
  }

}

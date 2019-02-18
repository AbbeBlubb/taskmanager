import React from "react"
import Hero from "./Hero"
import TaskList from "./TaskList"

export default class TaskListView extends React.Component {



  render() {
    const userId = this.props.match.params.id
    
    return (
      <section>
        <Hero
          userId={userId} />
        <TaskList
          userId={userId} />
      </section>
    )
  }

}

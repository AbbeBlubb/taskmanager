import React from "react"
import Hero from "./Hero"
import TaskList from "./TaskList"

export default class TaskListView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userId: ""
    }
  }

  componentDidMount() {
    this.getUserId()
  }

  getUserId = () => {
    const userId = this.props.match.params.id
    this.setState({ userId })
  }

  render() {
    return (
      <section>
        <Hero
          userId={this.state.userId} />
        <TaskList
          userId={this.state.userId} />
      </section>
    )
  }

}

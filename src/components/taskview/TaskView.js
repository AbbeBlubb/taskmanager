import React from "react"
import Hero from "./Hero"
import TaskList from "./TaskList"

export default class TaskView extends React.Component {

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
          name={this.props.location.state ? this.props.location.state.name : null}
          nick={this.props.location.state ? this.props.location.state.nick : null} />
        <TaskList
          userId={this.state.userId} />
      </section>
    )
  }

}

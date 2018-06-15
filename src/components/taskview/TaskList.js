import React from "react"
import Task from "./Task"

export default class TaskList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      informationIsDownloaded: false
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos").then(response => (
      response.json()
    )).then(json => {
      this.setState({
        taskList: json,
        informationIsDownloaded: true
      })
    })
  }

  render() {
    const filteredArray = this.state.taskList.filter(element =>
      element.userId === Number(this.props.userId))

    if (!this.state.informationIsDownloaded) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <section className="list">
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

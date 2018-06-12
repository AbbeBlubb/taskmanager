import React from "react"
import Task from "./Task"

export default class List extends React.Component {

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
      console.log(this.state.taskList)
    })
  }

  render() {
    if (!this.state.informationIsDownloaded) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <section className="list">
          Task
        </section>
      )
    }
  }

}

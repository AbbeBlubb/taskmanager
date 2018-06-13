import React from "react"
import { Link } from "react-router-dom"
import "./hero.css"
import leftarrow from "../../media/left-arrow.png"

export default class Hero extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      user: [],
      taskList: [],
      pendingNr: null,
      userInfoIsDone: false,
      pendingNrIsDone: false
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => (
      response.json()
    )).then(json => {
      this.setState({
        users: json
      })
      this.getUser()
    })

    fetch("https://jsonplaceholder.typicode.com/todos").then(response => (
      response.json()
    )).then(json => {
      this.setState({
        taskList: json
      })
      this.getPending()
    })
  }

  getUser = () => {
    const user = this.state.users.find(element => element.id === Number(this.props.userId))
    this.setState({
      user,
      userInfoIsDone: true
    })
    console.log(this.state.user)
  }

  getPending = () => {
    const pending = this.state.taskList.filter(element =>
      element.userId === Number(this.props.userId) && !element.completed)
    const pendingNr = pending.length
    this.setState({
      pendingNr,
      pendingNrIsDone: true
    })
    console.log(this.state.pendingNr)
  }

  render() {
    if (!this.state.userInfoIsDone || !this.state.pendingNrIsDone) {
      return (
        <header className="hero">
          <div className="container">
            <div className="back">
              <Link to="/">
                <img src={leftarrow} alt="Back" />
              </Link>
            </div>
            <div className="loading large">
              Loading hero section...
            </div>
          </div>
        </header>
      )
    } else {
      return (
        <header className="hero">
          <div className="container">
            <div className="back">
              <Link to="/">
                <img src={leftarrow} alt="Back" />
              </Link>
            </div>
            <div className="userinfo">
              <div>
                <div className="large">
                  {this.state.user.name}
                </div>
                <div className="medium">
                  {this.state.user.username}
                </div>
                <div className="medium">
                  {this.state.pendingNr} pending tasks
                </div>
              </div>
            </div>
          </div>
        </header>
      )
    }
  }

}

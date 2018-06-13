import React from "react"
import { Link } from "react-router-dom"
import "./hero.css"
import leftarrow from "../../media/left-arrow.png"

export default class Hero extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      taskList: [],
      userInfoIsDownloaded: false,
      userTaskListIsDownloaded: false
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => (
      response.json()
    )).then(json => {
      this.setState({
        users: json,
        informationIsDownloaded: true
      })
      this.getUser()
    })

    fetch("https://jsonplaceholder.typicode.com/todos").then(response => (
      response.json()
    )).then(json => {
      this.setState({
        taskList: json,
        informationIsDownloaded: true
      })
      this.getPending()
    })
  }

  getUser = () => {
    const user = this.state.users.find(element => element.id === Number(this.props.userId))
    console.log(user)
  }

  getPending = () => {
    const pending = this.state.taskList.filter(element =>
      element.userId === Number(this.props.userId) && !element.completed)
    const pendingNr = pending.length
    console.log(pendingNr)
  }

  render() {
    if (!this.state.informationIsDownloaded) {
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
                  {this.props.name
                    ? this.props.name
                    : `User id: ${this.props.userId}`}
                </div>
                <div className="medium">
                  {this.props.nick
                    ? this.props.nick
                    : null}
                </div>
                <div className="medium">
                  Antal saker kvar - callback
                </div>
              </div>
            </div>
          </div>
        </header>
      )
    }
  }

}

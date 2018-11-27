import React from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import "./hero.css"
import leftarrow from "../../media/left-arrow.png"
import { getOneUser } from "../../store/actions"

class Hero extends React.Component {

/*  constructor(props) {
    super(props)
    this.state = {
      users: [],
      user: [],
      taskList: [],
      pendingNr: null,
      userInfoIsDone: false,
      pendingNrIsDone: false
    }
  }*/

  componentDidMount() {
/*    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json
        })
        this.getUser()
      })

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => {
        this.setState({
          taskList: json
        })
        this.getPending()
      })*/

    this.props.getOneUser(this.props.users, this.props.userId)
    console.log(this.props.users)
    console.log(this.props.userId)
    console.log(this.props.oneUser.name)
    window.addEventListener("scroll", this.parallax)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallax)
  }

  parallax = () => {
    document.querySelector(".hero").style.top = `${window.pageYOffset * 0.4}px`
    console.log(`Y pixel: ${window.pageYOffset}\n` +
                `Selected: ${document.querySelector(".hero")}\n` +
                `.hero style top: ${document.querySelector(".hero").style.top}`)
  }

  /*  getUser = () => {
    const user = this.state.users.find(element => element.id === Number(this.props.userId))
    this.setState({
      user,
      userInfoIsDone: true
    })
    console.log(this.state.user)
  } */
  

  getPending = () => {
    const pending = this.state.taskList.filter(element =>
      element.userId === Number(this.props.userId) && !element.completed)
    const pendingNr = pending.length
    this.setState({
      pendingNr,
      pendingNrIsDone: true
    })
  }

  render() {
    if (this.props.oneUserId !== this.props.userId) {
      return (
        <header className="hero">
          <div className="hero__container">
            <Link to="/">
              <div className="hero__back">
                <img className="icon" src={leftarrow} alt="Back to the list with users" title="Back to the list with users" />
              </div>
            </Link>
            <div className="hero__loading">
              Loading hero section...
            </div>
          </div>
        </header>
      )
    } else {
      return (
        <header className="hero">
          <div className="hero__container">
            <Link to="/">
              <div className="hero__back">
                <img className="icon" src={leftarrow} alt="Back to the list with users" title="Back to the list with users" />
              </div>
            </Link>
            <div className="hero__userinfo">
              <div>
                <h2 className="hero__name">
                  {this.props.oneUser.name}
                </h2>
                <div className="hero__username">
                  {this.props.oneUser.username}
                </div>
                <div className="hero__pendingnr">
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

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  oneUser: state.oneUserReducer.oneUser,
  oneUserId: state.oneUserReducer.oneUserId
})

const mapDispatchToProps = dispatch => ({
  getOneUser: (users, userId) => dispatch(getOneUser(users, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Hero)

import React from "react"
import User from "./User"

export default class UserList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      informationIsDownloaded: false
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
      console.log(this.state.users)
    })
  }

  render() {
    if (!this.state.informationIsDownloaded) {
      return (
        <section className="userlist">
          Loading...
        </section>
      )
    } else {
      return (
        <section className="userlist">
          {this.state.users.map(user => (
            <User
              key={user.id}
              id={user.id}
              nick={user.username}
              name={user.name}
              email={user.email}
              city={user.address.city} />
          ))}
        </section>
      )
    }
  }

}

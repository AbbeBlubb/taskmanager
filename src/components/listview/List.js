import React from "react"
import User from "./User"

export default class List extends React.Component {

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
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <section className="list">
          {this.state.users.map(user => (
            <User
              key={user.id}
              id={user.id}
              nick={user.username}
              name={user.name}
              email={user.email}
              city={user.address.city}/>
          ))}
        </section>
      )
    }
  }

}

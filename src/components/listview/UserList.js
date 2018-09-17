import React from "react"
import User from "./User"
import "./userlist.css"

export default class UserList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      informationIsDownloaded: false
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
      this.setState({
        users: json,
        informationIsDownloaded: true
      })
    })
  }

  render() {
    if (!this.state.informationIsDownloaded) {
      return (
        <section>
          Loading...
        </section>
      )
    } else {
      const filteredArray = this.state.users.filter(element => {
        return (
          element.name.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1 ||
          element.email.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1 ||
          element.address.city.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1 ||
          element.username.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1
        )
      })
      return (
        <section className="userlist">
          {filteredArray.map(user => (
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

import React from "react"
import { connect } from "react-redux"
import User from "./User"
import "./userlist.css"

class UserList extends React.Component {

  render() {
    if (!this.props.userInformationIsDownloaded) {
      return (
        <section>
          Loading... THIS DOESNT WORK
        </section>
      )
    } else {
      const filteredArray = this.props.users.filter(element => (
        element.name.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1 ||
          element.email.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1 ||
          element.address.city.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1 ||
          element.username.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1
      ))
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

const mapStateToProps = state => ({
  users: state.storeUsersReducer.users,
  userInformationIsDownloaded: state.storeUsersReducer.userInformationIsDownloaded
})

export default connect(mapStateToProps)(UserList)

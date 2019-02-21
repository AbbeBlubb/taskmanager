import React from "react"
import { connect } from "react-redux"
import User from "./user/User"
import { Loader } from "../Loader"
import { Error } from "../Error"


class UserList extends React.Component {

  render() {
    if (this.props.error) { return <Error /> }
    if (!this.props.fetched) { return <Loader /> }
    else {

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
  fetching: state.usersReducer.fetching,
  fetched: state.usersReducer.fetched,
  users: state.usersReducer.users,
  error: state.usersReducer.error
})

export default connect(mapStateToProps)(UserList)

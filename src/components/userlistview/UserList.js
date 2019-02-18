import React from "react"
import { connect } from "react-redux"
import User from "./user/User"
import { Loader } from "./Loader"
import { USERS_URL, FETCH_USERS_START, FETCH_USERS_SUCCESSFUL, FETCH_USERS_ERROR } from "../../store/actions"

class UserList extends React.Component {

  componentDidMount() {
    this.props.dispatch(dispatch => {
      dispatch({ type: FETCH_USERS_START })
      fetch(USERS_URL)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: FETCH_USERS_SUCCESSFUL, payload: json })
        })
        .catch(error => {
          dispatch({ type: FETCH_USERS_ERROR, payload: error })
        })
    })
  }
  
  render() {
    if (!this.props.fetched) {
      return <Loader />
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
  users: state.usersReducer.users,
  fetched: state.usersReducer.fetched
})

export default connect(mapStateToProps)(UserList)

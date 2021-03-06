import React from "react"
import Header from "./Header"
import Filter from "./Filter"
import UserList from "./UserList"


export default class UserListView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputSearchUser: ""
    }
  }

  handleChangeForSearchUser = event => {
    event.preventDefault()
    this.setState({
      inputSearchUser: event.target.value
    })
    console.log('Search value: ', event.target.value)
  }

  render() {
    return (
      <div>
        <Header />
        <Filter
          handleChange={this.handleChangeForSearchUser} />
        <UserList
          searchValue={this.state.inputSearchUser} />
      </div>
    )
  }

}

import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Header from "./listview/Header"
import Filter from "./listview/Filter"
import UserList from "./listview/UserList"
import TaskView from "./taskview/TaskView"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputSearchUser: ""
    }
  }

  handleChangeForSearchUser = event => {
    this.setState({
      inputSearchUser: event.target.value
    })
  }

  render() {
    return (
      <HashRouter>
        <div className="main">
          <Route exact path="/" component={Header} />
          <Route exact path="/" render={() => <Filter handleChange={this.handleChangeForSearchUser} />}  />
          <Route exact path="/" component={UserList} />
          <Route exact path="/user/:id" component={TaskView} />
        </div>
      </HashRouter>
    )
  }

}

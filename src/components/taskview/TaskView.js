import React from "react"
import Hero from "./Hero"
import List from "./List"

export default class TaskView extends React.Component {

  render() {
    return (
      <section>
        <Hero />
        <List />
      </section>
    )
  }

}

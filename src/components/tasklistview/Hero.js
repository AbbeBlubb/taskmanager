import React from "react"
import { ArrowBack } from "./ArrowBack"
import { HeroUserInfoBox } from "./HeroUserInfoBox"

export default class Hero extends React.Component {
/*
  componentDidMount() {
    window.addEventListener("scroll", this.parallax)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallax)
  }

  parallax = () => {
    document.querySelector(".hero").style.top = `${window.pageYOffset * 0.4}px`
    /* console.log(`Y pixel: ${window.pageYOffset}\n` +
                   `Selected: ${document.querySelector(".hero")}\n` +
                   `.hero style top: ${document.querySelector(".hero").style.top}`)
  }
  */

  render() {
    return (
      <header className="hero border-box">
        
        <ArrowBack
          to='/'
          class='arrow-back-hero' />
          
        <HeroUserInfoBox
          name={this.props.name}
          username={this.props.username}
          pending={this.props.pending} />
  
      </header>
    )
  }

}

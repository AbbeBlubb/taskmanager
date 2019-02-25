import React from "react";
import * as contentful from 'contentful'
import { ArrowBack } from "./ArrowBack";
import { HeroUserInfoBox } from "./HeroUserInfoBox";

export default class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      backgroundImageUrl: ''
    })
  }
  
  client = contentful.createClient({
    space: 'p2umsb6s9jzz',
    accessToken: '8162bc7710fa7f24217390add41677f60fd692a1dfac0200c5c028d857992c4d' })
  
  fetchAsset = (asset) => {
    this.client.getAsset(asset)
      .then(asset => {
        //console.log('Asset object: ', asset)
        //console.log('Asset url: ', asset.fields.file.url)
        this.setState({backgroundImageUrl: asset.fields.file.url})})
  }
  
  parallax = () => {
    /* For this to work, .hero needs to be position: relative, so it is in the stylesheet */
    document.querySelector(".hero").style.top = `${window.pageYOffset * 0.4}px`
    
    /* console.log(
      `Y pixel: ${window.pageYOffset}\n` +
      `Selected: ${document.querySelector(".hero")}\n` +
      `.hero style top: ${document.querySelector(".hero").style.top}`) */
  }
  
  componentDidMount() {
    this.fetchAsset('4UMAsaKfAUb7h1B39mBCe0')
    
    window.addEventListener("scroll", this.parallax)
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallax)
  }
  
  render() {
    return (
      <header
        className="hero border-box"
        style={{
          background: `center / cover url(http:${this.state.backgroundImageUrl}?w=${window.innerWidth})`,
          backgroundSize: 'cover'}}>
        
        <div className='hero__content-wrap border-box'>
          <ArrowBack
            to='/'
            class='arrow-back-hero border-box' />
          <HeroUserInfoBox
            name={this.props.name}
            username={this.props.username}
            pending={this.props.pending} />
        </div>
        
      </header>
    )
  }

}

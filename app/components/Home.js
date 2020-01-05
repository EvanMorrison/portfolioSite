import React, { Component } from 'react';
import styled from '@emotion/styled';
import { heroUrls } from '../data/imgUrls';
// import './home.scss';

const Root = styled.div`
  position: relative;
  height: 100vh;
  transition: background 0.8s linear;
  background: url(${props => props.bgImg});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`
const TitleGroup = styled.div`
  position: relative;
  top: 33vh;
  width: 90%;
  max-width: 500px;
  padding:10px 20px;
  border: 2px solid rgba(127, 125, 105,0.8);
  background-color: rgba(230, 230, 230, 0.8);
  margin:0 auto;
`
const MainTitle = styled.h1`
  font-size: 3em;
  font-family: Roboto;
  font-weight: 100;
  text-align: center;
  text-shadow: 1px 1px 1px #555;
  color: #0a0a0a;
`
const SubTitle = styled.h2`
  font-weight: 100;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  text-shadow: 1px 1px 3px #555;
  color: #0a0a0a;
`

class Home extends Component {

  state = {
    imgIndex: 0,
    count: -1
  }

  componentDidMount() {
    // rotate through background images at top of page
    this.timer = setInterval(this.changeBGImage, 5000);
    }
    
  componentWillUnmount() {
    clearInterval(this.timer);
  }
    
  changeBGImage = () => {
    let length = heroUrls.length;
    let count = this.state.count;
    let rand = Math.floor(Math.random() * length)
    this.setState({count: ++count, imgIndex: (count > length ? rand : count) % length});
  }

  handleClick = (e) => {
    e.preventDefault();
    clearInterval(this.timer);
    let count = this.state.imgIndex + 1;

    this.setState({count, imgIndex: count % heroUrls.length}, () => {
      this.timer = setInterval(this.changeBGImage, 5000);
    });
  }
  render() {
  return (
      <Root bgImg={heroUrls[this.state.imgIndex]} onClick={this.handleClick}>
        <TitleGroup>
          <MainTitle>Evan Morrison</MainTitle>
          <SubTitle>Software Engineer / Web Developer</SubTitle>
        </TitleGroup>
      </Root>
  )
  }
}

export default Home;


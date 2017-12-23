import React, { Component } from 'react';
import styled from 'styled-components';
import { heroUrls } from '../data/imgUrls';
// import './home.scss';

const Root = styled.div`
  position: relative;
  height: 100vh;
  background-color: black;
  transition: background-image .8s linear;
  background-image: url(${props => props.bgImg});
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
let timer;

class Home extends Component {

  state = {
    bgImg: heroUrls[0],
    count: -1
  }

  componentWillMount = () => {
    let length = heroUrls.length;
    // rotate through background images at top of page
    timer = setInterval(() => {
      let count = this.state.count;
      let bgi = this.state.bgImg;
      let rand = Math.floor(Math.random() * length)

      this.setState({count: ++count, bgImg: heroUrls[(count > length ? rand : count) % length]});
    }, 5000)
  }

  componentWillUnmount = () => {
    clearInterval(timer);
  }

  handleClick = (e) => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({count, bgImg: heroUrls[count % heroUrls.length]})
  }
  render() {
  return (
      <Root bgImg={this.state.bgImg} onClick={this.handleClick}>
        <TitleGroup>
          <MainTitle>Evan Morrison</MainTitle>
          <SubTitle>Software Engineer / Web Developer</SubTitle>
        </TitleGroup>
      </Root>
  )
  }
}

export default Home;


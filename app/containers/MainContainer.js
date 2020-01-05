import React, { Component } from 'react';

import Menu from '../components/Menu';

import scrollToComponent from 'react-scroll-to-component';

// Customized Components
import Home from '../components/Home';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import { Global } from '@emotion/core';
import globalStyles from '../globalStyle.js';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
      scrollToTarget: "Top",
      menuClick: false,
      appBarOpacity: 0,
      backgroundDark: true,
      open: false
    }
    this.menuBtn = React.createRef();
    // this.Top = React.createRef();
    // this.Contact = React.createRef();
    // this.About = React.createRef();
    // this.Projects = React.createRef();
  }
  
  componentDidMount() {
    this.lastScroll = 0;
      window.addEventListener('scroll', () => {
        if (!this.state.menuClick)
          this.handleScrolling(window.innerHeight)
      })
  }

  handleScrolling(windowHeight) {
    if ( (window.scrollY / windowHeight) % 2 >= 1  || window.scrollY > (3 * windowHeight) ) {
        this.setState(({backgroundDark}) => {
          if(backgroundDark) return {backgroundDark: false}
          else return null;
        });
    } else {
      this.setState(({backgroundDark}) => {
        if(!backgroundDark) return {backgroundDark: true}
        else return null;
      })
    } 
  }

  handleMenuTap(ev) {
    this.setState({
      menuClick: true
    })
    scrollToComponent(this[ev.target.textContent], {
      align: 'top',
      duration: 1000
    })
    this.setState({
      menuClick: false,
      open: false
    })
  }

  handleOpenMenu = (e) => {
    this.setState({open: true, anchorEl: e.currentTarget});
  }
  
    
  render () {
    return (
      <div>
        <Global styles={globalStyles}/>
        <Menu css={{position: "fixed", top: 30, left: 30}} onDark={this.state.backgroundDark}>
            <li onClick={this.handleMenuTap.bind(this)}>Top</li>
            <li onClick={this.handleMenuTap.bind(this)}>Contact</li>
            <li onClick={this.handleMenuTap.bind(this)}>About</li>
            <li onClick={this.handleMenuTap.bind(this)}>Projects</li>
          </Menu>
        <Home ref={el => this.Top = el} />
        <Contact ref={el => this.Contact = el}/>
        <AboutMe ref={el => this.About = el} />
        <Projects ref={el => this.Projects = el} />
      </div>
    )
  }  
}

export default MainContainer;

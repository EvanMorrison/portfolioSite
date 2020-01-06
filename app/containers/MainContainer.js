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
      menuClick: false,
      backgroundDark: false,
    }
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
  }
  
  componentDidMount() {
    this.handleScrolling();
    window.onscroll = this.handleScrolling;
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  handleScrolling = (windowHeight) => {
    if (!this.state.menuClick) {
      const scroll = window.scrollY;
      const section1End = this.section1.current.getBoundingClientRect().height - 30;
      const section2End = section1End + this.section2.current.getBoundingClientRect().height;
      const section3End = section2End + this.section3.current.getBoundingClientRect().height;
      let scrollSection = 1;
      if (scroll > section3End) {
        scrollSection = 4;
      } else if (scroll > section2End) {
        scrollSection = 3;
      } else if (scroll > section1End) {
        scrollSection = 2;
      }

      if ([2, 4].includes(scrollSection)) {
          this.setState(({backgroundDark}) => {
            if(!backgroundDark) return {backgroundDark: true, section: scrollSection}
            else return null;
          });
        } else {
          this.setState(({backgroundDark}) => {
            if(backgroundDark) return {backgroundDark: false, section: scrollSection}
          else return null;
        })
      }
    }
  }

  handleMenuTap = (ev) => {
    const sectionName = ev.target.textContent;
    let section = 1;
    if (sectionName === 'About') {
      section = 2;
    } else if (sectionName === 'Contact') {
      section = 3;
    } else if (sectionName === 'Projects') {
      section = 4;
    }
    this.setState({
      menuClick: true,
      section,
    }, () => {
      scrollToComponent(this[sectionName], {
        align: 'top',
        duration: 1000
      })
      setTimeout(() => {
        this.setState({
          menuClick: false,
          section,
        })
      }, 950);
    })
  }
    
  render () {
    return (
      <div>
        <Global styles={globalStyles}/>
        <Menu css={{position: "fixed", top: 15}} onDark={this.state.backgroundDark} section={this.state.section}>
            <li onClick={this.handleMenuTap}>Top</li>
            <li onClick={this.handleMenuTap}>About</li>
            <li onClick={this.handleMenuTap}>Contact</li>
            <li onClick={this.handleMenuTap}>Projects</li>
          </Menu>
        <section ref={this.section1}>
          <Home ref={el => this.Top = el} />
        </section>
        <section ref={this.section2}>
          <AboutMe ref={el => this.About = el} />
        </section>
        <section ref={this.section3}>
          <Contact ref={el => this.Contact = el}/>
        </section>
        <section>
          <Projects ref={el => this.Projects = el} />
        </section>
      </div>
    )
  }  
}

export default MainContainer;

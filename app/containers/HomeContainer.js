import React, { Component } from 'react';
import Home from '../components/Home';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Break from '../components/Break';
import Projects from '../components/Projects';
import styles from '../components/styles';


class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Contact/>
        <AboutMe/>
        <Break/>
        <Projects/>
      </div>

    )
  }
}

export default HomeContainer;

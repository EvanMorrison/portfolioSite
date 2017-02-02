import React, { Component } from 'react';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';


class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Home/>
        <AboutMe/>
      </div>

    )
  }
}

export default HomeContainer;

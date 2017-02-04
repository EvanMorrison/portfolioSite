import React, { Component } from 'react';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import styles from '../components/styles';


class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Contact styles={styles}/>
        <AboutMe styles={styles}/>
        {/*<Projects styles={styles}/>*/}
      </div>

    )
  }
}

export default HomeContainer;

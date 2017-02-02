import React, { Component } from 'react';
import typography from 'material-ui/styles/typography';


class AboutMe extends Component {
  getStyles() {
    return {
      aboutMe: {
        marginTop: 40,
        padding: '0 40px 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      },
      h1: {
        textAlign: 'center',
        fontWeight: typography.fontWeightNormal,
        fontSize: 20,
        marginBottom: 15
      },
      content: {
        maxWidth: 700,
        textAlign: 'justify',
        fontWeight: typography.fontWeightLight,
        color: typography.textDarkBlack,
        fontSize: 18,
        lineHeight: '28px'
      }
    }
  }
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.aboutMe}>
        <h1 style={styles.h1} >ABOUT ME</h1>
        <div style={styles.content}>
          <p className="about-me">I am a web developer with knowledge of frontend and backend technologies. More than ten years ago my interest in coding led me to teach myself enough to code my first 'app' to automate case handling in my real estate law practice. Ever since then I've known coding was what I really wanted to do.</p>
          <p className="about-me">I recently completed over 600 hours of intensive training in Full Stack Web Development at <a href="http://vschool.io">V School</a> web dev bootcamp.</p>
          <p className="about-me">I am knowledgable in many of the most widely used languages, libraries, and frameworks of modern web development, from JavaScript, HTML5, and CSS3, to JQuery, AngularJS, React, Webpack, NodeJS, Express, and MongoDB.</p>
        </div>
      </div>
    )
  }
}

export default AboutMe;

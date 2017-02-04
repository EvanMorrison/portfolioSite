import React, { Component } from 'react';
import typography from 'material-ui/styles/typography';
import SVGIcon from 'material-ui/SvgIcon'
import icons from '../icons';

class AboutMe extends Component {
  // getStyles() {
  //   return {
  //     aboutMe: {
  //       marginTop: 40,
  //       padding: '0 40px 50px',
  //       display: 'flex',
  //       flexDirection: 'column',
  //       alignItems: 'center'
  //     },
  //     sectionHeading: {
  //       textAlign: 'center',
  //       fontWeight: typography.fontWeightNormal,
  //       fontSize: 20,
  //       marginBottom: 15
  //     },
  //     sectionContent: {
  //       maxWidth: 700,
  //       textAlign: 'justify',
  //       fontWeight: typography.fontWeightLight,
  //       color: typography.textDarkBlack,
  //       fontSize: 18,
  //       lineHeight: '28px'
  //     }
  //   }
  // }
  
  render() {
    const styles = this.props.styles;
    return (
      <div style={styles.sectionStyle}>
      <div>
      </div>
        <h1 style={styles.sectionHeading} >ABOUT ME</h1>
        <div style={styles.sectionContent}>
          <p className="about-me">I am a web developer with knowledge of front and back-end technologies. More than ten years ago my interest in coding led me to teach myself enough to code my first 'app' to automate case handling in my real estate law practice. Ever since then I've known coding was what I really wanted to do.</p>
          <p className="about-me">I recently completed over 600 hours of intensive training in Full Stack Web Development at <a href="http://vschool.io">V School</a> web dev bootcamp.</p>
          <p className="about-me">I am knowledgable in many of the most widely used languages, libraries, and frameworks of modern web development, from JavaScript, HTML5, and CSS3, to JQuery, AngularJS, React, Webpack, NodeJS, Express, and MongoDB.</p>
        </div>
        <div>
            {icons.html5}
            {icons.css3}
            {icons.js}
            {icons.angularjs}
            {icons.react}
            {icons.jquery}
            {icons.github}
            {icons.git}
            {icons.bootstrap}
            {icons.nodejs}
            {icons.mongodb}
        </div>

      </div>
    )
  }
}

export default AboutMe;

import React, { Component } from 'react';
import { logoUrls } from '../data/imgUrls';
import { sectionStyle, sectionHeading, paragraph, logoGroup} from './styles';

class AboutMe extends Component {
  
  getLogos() {
    return Object.keys(logoUrls).filter((e,i) => i < 12).map(key =>
      <img key={logoUrls[key].slice(-10,-4)} src={logoUrls[key]} alt={key} height="64px" style={{marginRight:'24px', marginTop:'15px'}}/>
      )
  }

  render() {
    return (
      <div style={{...sectionStyle, backgroundColor:'#FFF'}}>
          <div style={{maxWidth:'700px'}}>
            <h1 style={sectionHeading} >ABOUT ME</h1>
            <p style={paragraph}>I am a web developer with knowledge of front and back-end technologies. More than ten years ago my interest in coding led me to teach myself enough to code my first 'app' to automate case handling in my real estate law practice. Ever since then I&rsquo;ve known coding was what I really wanted to do.</p>
            <p style={paragraph}>I recently completed over 600 hours of intensive training in Full Stack Web Development at the outstanding <a href="http://vschool.io">V School</a> web dev bootcamp.</p>
            <p style={paragraph}>I am knowledgable in many of the most widely used languages, libraries, and frameworks of modern web development, from JavaScript, HTML5, and CSS3, to JQuery, AngularJS, React, Webpack, NodeJS, Express, and MongoDB.</p>
            <div style={logoGroup}>
              {this.getLogos()}
            </div>
          </div>
      </div>
    )
  }
}

export default AboutMe;

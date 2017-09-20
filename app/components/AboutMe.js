import React, { Component } from 'react';
import { logoUrls } from '../data/imgUrls';
import { sectionStyle, sectionHeading, paragraph, logoGroup} from './styles';

class AboutMe extends Component {
  
  getLogos() {
    return Object.keys(logoUrls).filter((e,i) => i < 13).map(key =>
      <img key={logoUrls[key]} src={logoUrls[key]} alt={key} height="64px" style={{marginRight:'24px', marginTop:'15px'}}/>
      )
  }

  render() {
    return (
      <div style={{...sectionStyle, backgroundColor:'#191919'}}
           className="about-section">
          <div style={{maxWidth:'700px'}}>
            <h1 style={sectionHeading} >ABOUT ME</h1>
            <p style={paragraph}>I’m a full stack web developer with a background in real estate law and applied math.</p>
            <p style={paragraph}>More than ten years ago my interest in coding led me to teach myself enough to code my first 'app', a tool for automating case handling in my real estate practice. Ever since then I&rsquo;ve known coding was what I really wanted to do.</p>
            <p style={paragraph}>I currently specialize in the JavaScript MEAN stack, jQuery, React, Webpack and more and have a portfolio of work with various clients and Open Source contributions (check it out below!). I am continually seeking to expand my skills and knowledge and tackle new challenges. I'm currently working on various professional projects for clients and love working on open source projects too.  </p>
            <div style={logoGroup}>
              {this.getLogos()}
            </div>
          </div>
      </div>
    )
  }
}

export default AboutMe;

import React, { Component } from 'react';
import typography from 'material-ui/styles/typography';
import SVGIcon from 'material-ui/SvgIcon';
import imgUrls from '../imgUrls';

class AboutMe extends Component {
  getLogos() {
    
    return imgUrls.map(img =>
      <img key={img.url.slice(-10,-4)} src={img.url} alt={img.name} height="64px" style={{marginRight:24, marginTop:15}}/>
      )
  }

  render() {
    const styles = this.props.styles;
    const logos = this.getLogos();
    return (
      <div style={styles.sectionStyle}>
      <div>
      </div>
        <h1 style={styles.sectionHeading} >ABOUT ME</h1>
        <div style={styles.sectionContent}>
          <p className="body-content">I am a web developer with knowledge of front and back-end technologies. More than ten years ago my interest in coding led me to teach myself enough to code my first 'app' to automate case handling in my real estate law practice. Ever since then I&rsquo;ve known coding was what I really wanted to do.</p>
          <p className="body-content">I recently completed over 600 hours of intensive training in Full Stack Web Development at the outstanding <a href="http://vschool.io">V School</a> web dev bootcamp.</p>
          <p className="body-content">I am knowledgable in many of the most widely used languages, libraries, and frameworks of modern web development, from JavaScript, HTML5, and CSS3, to JQuery, AngularJS, React, Webpack, NodeJS, Express, and MongoDB.</p>
          <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            {this.getLogos()}
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;

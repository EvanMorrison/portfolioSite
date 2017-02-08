import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ProjectCards from './ProjectCards.js';
import {sectionStyle, sectionHeading, styles} from './styles';

class Projects extends Component {

  render() {
    return (
      <div style={{...sectionStyle, backgroundColor:'transparent', paddingBottom:'200px'}}>
        <h1 style={sectionHeading}>
          SAMPLE PROJECTS
        </h1>
        <h2 style={{fontWeight:'100',fontSize:'16px'}}>(Clicking a site launches in new tab. Github icon will open the repo)</h2>
        <ProjectCards />
      </div>
    )
  }
}

export default Projects;

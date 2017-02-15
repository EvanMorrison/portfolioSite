import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ProjectCard from './ProjectCard.js';
import {cardGroup, sectionStyle, sectionHeading, styles} from './styles';

import projectList from '../data/projectList';
import { logoUrls } from '../data/imgUrls';


class Projects extends Component {
  CreateCards () {
    return (
      projectList.filter(el => el.siteUrl.length > 1 )
      .map(project => {
        return <ProjectCard  key={project.name}
                             project={project} />
      })
    )
  }
  render() {
    return (
      <div style={{...sectionStyle, backgroundColor:'transparent', paddingBottom:'200px'}}>
        <h1 style={sectionHeading}>
          SAMPLE PROJECTS
        </h1>
        <h2 style={{fontWeight:'100',fontSize:'16px'}}>(Clicking a site launches in new tab. Github icon will open the repo)</h2>
        <div style={cardGroup}>
          {this.CreateCards()}
        </div>
      </div>
    )
  }
}

export default Projects;

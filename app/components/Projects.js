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
        <h2 style={{fontWeight:'100',fontSize:'16px'}}>(Clicking a site image opens the live site in a new tab - some sites take up to 5-10 seconds for the server to spin up. The Github icons will open the repo)</h2>
        <div style={cardGroup}>
          {this.CreateCards()}
        </div>
      </div>
    )
  }
}

export default Projects;

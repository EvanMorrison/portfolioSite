import React, { Component } from 'react';
import styled from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ProjectCard from './ProjectCard.js';
import {Section, SectionHeading} from './shared';

import projectList from '../data/projectList';
import { logoUrls } from '../data/imgUrls';
import bgImg from '../images/heros/rock-ocean-sky-1080x720.jpeg'

const ProjectSection = styled(Section).attrs({
  bgImg: bgImg
})`
  padding-bottom: 200px;
  &::after {
  position: absolute;
  top: 0;
  left: 0;
  content: ' ';
  height: 100%;
  width: 100%;
  background: url(${props => props.bgImg});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: bottom left, bottom center;
  background-attachment: fixed, fixed; 
  z-index: -1;
}
`
const ProjectTitleGroup = styled.div`
  width: 90%;
  max-width: 500px;
  padding:10px 20px;
  border: 2px solid rgba(127, 125, 105,0.8);
  background-color: rgba(230, 230, 230, 0.8);
  margin:0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H2 = styled.h2`
font-weight: 100;
font-size: 16px;
text-align: center
`

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 30px
`

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
      <ProjectSection>
        <ProjectTitleGroup>
          <SectionHeading>
            SAMPLE PROJECTS
          </SectionHeading>
          <H2>Click a website image to visit the live site.</H2>
          <H2>Github icons are linked to the corresponding repo.</H2> 
        </ProjectTitleGroup>
        <CardGroup>
          {this.CreateCards()}
        </CardGroup>
      </ProjectSection>
    )
  }
}

export default Projects;

import React, { Component } from 'react';
import styled from '@emotion/styled';
import ProjectCard from './ProjectCard.js';
import {Section, SectionHeading} from './shared';

import projectList from '../data/projectList';
import { heroUrls } from '../data/imgUrls';

const ProjectSection = styled(Section)`
  padding-bottom: 200px;
  &::after {
  position: absolute;
  top: 0;
  left: 0;
  content: ' ';
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(200, 200, 200, 0.3), rgba(200, 200, 200, 0.3)), url(${heroUrls[1]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-attachment: fixed; 
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

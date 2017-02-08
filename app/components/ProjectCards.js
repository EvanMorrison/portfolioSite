import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import projectList from '../data/projectList';
import { logoUrls } from '../data/imgUrls';
import {cardGroup, cardStyle, paragraph, styles} from './styles';

class ProjectCards extends Component {
  
  getLogos(frameworks) {
    return (
      frameworks.map(framework => {
        return <img key={framework} style={{margin:'0 8px', height:'24px'}} src={logoUrls[framework]} alt="framework"/>
      })
    )
  }

  createProjectCards() {
    return (
      projectList.filter(el => el.siteUrl.length > 2 ).map(project => {
        return (
          <div key={project.name} style={cardStyle}>
            <a href={project.siteUrl} target='_blank'>
                <Card zDepth={1}>
                  <CardMedia
                      overlay={
                          <CardTitle title={project.name} >
                            <IconButton 
                                href={project.gitUrl}
                                target='_blank'
                                tooltip="see repo on github" 
                                touch={true}
                                tooltipPosition="top-center" 
                                style={{position:'absolute', right:'10px',top:'5px'}}>
                              <img src={logoUrls['Github']} alt='Github' height='24px'/>
                            </IconButton>
                          </CardTitle>
                      }>
                    <img src={project.imgUrl} alt={project.name} />
                  </CardMedia>
                </Card>
            </a>
          </div>
        )
      })
    )
  }

  render() {
    return (
       <div style={cardGroup}>
        {this.createProjectCards()}
      </div>
    )
  }
}

export default ProjectCards;

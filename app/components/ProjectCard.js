import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import { logoUrls } from '../data/imgUrls';
import {cardStyle, paragraph, styles} from './styles';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zDepth: 0
    }
  }
  getLogos(frameworks) {
    return (
      frameworks.map(framework => {
        return <img key={framework} style={{margin:'0 4px',padding:'2px', height:'24px',background:'#fff',border:'1px transparent',borderRadius:'5px'}} src={logoUrls[framework]} alt="framework"/>
      })
    )
  }

  // increase shadow depth on mouse enter
  handleMouseEnter = () => {
    this.setState({
      zDepth: 4
    })
  }
  // return shadow depth to normal on mouse leave
  handleMouseLeave = (refName, e) => {
    this.setState({
      zDepth: 0
    })
  }

  render() {
    const project = this.props.project;
    return (
          <a href={project.siteUrl} style={cardStyle} target='_blank'>
            <Card 
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  zDepth={this.state.zDepth}>
              <CardMedia
                  overlay={
                      <CardTitle title={project.name} >
                        <span style={{color:'white'}}>
                          {this.getLogos(project.frameworks)}
                        </span>
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

    )
  }
}

export default ProjectCard;

import React, { Component } from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { css } from '@emotion/core';
import { logoUrls } from '../data/imgUrls';

const CardContainer = styled.div`
  position: relative;
  flex: 1 0 40%;
  margin: 50px 8px 15px;
  min-width: 300px;
  max-width: 600px;
  transform: scale(${props => props.size});
  transition: transform .2s ease-out;
`
const OverlayLogo = styled.img`
  margin: 0 4px;
  position: relative;
  top: 5px;
  height: 24px;
  background: #FFF;
  border: 1px transparent;
  border-radius: 5px;
`
class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1
    }
  }

  getLogos(frameworks) {
    return (
      frameworks.map(framework => {
        return <OverlayLogo key={framework} src={logoUrls[framework]} alt="framework"/>
      })
    )
  }

  // increase shadow depth on mouse enter
  handleMouseEnter = () => {
    this.setState({
      size: 1.005
    })
  }
  // return shadow depth to normal on mouse leave
  handleMouseLeave = (refName, e) => {
    this.setState({
      size: 1.0
    })
  }
 
  render() {
    const project = this.props.project;
    return (
            <CardContainer size={this.state.size}>
              <Card onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
                <a href={project.siteUrl} target='_blank' css={{':hover':{textDecoration: 'none'}}}>
                  <CardMedia
                    component='img'
                    image={project.imgUrl}
                    height='350'
                  />
                  <CardHeader
                    avatar={
                      <span>
                        <span css={{color: '#000', fontSize: '18px'}}>
                          {project.name}
                        </span>
                        <span>
                          {this.getLogos(project.frameworks)}
                        </span>
                      </span>}
                    css={{height: '80px'}}>
                  </CardHeader>
                </a>
                <Tooltip title='see repo on github' placement='top'>
                  <IconButton
                    href={project.gitUrl}
                    target='_blank'
                    css={{position:'absolute', bottom:'5px', right:'20px', zIndex:'1000'}}
                  >
                    <img src={logoUrls['Github']} alt='Github' height='36px'/>
                  </IconButton>
                </Tooltip>
              </Card>
            </CardContainer>

    )
  }
}

export default ProjectCard;

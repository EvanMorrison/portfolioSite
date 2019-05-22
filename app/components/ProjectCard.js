import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
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
  padding: 2px;
  height: 24px;
  background: #fff;
  border: 1px transparent;
  border-radius: 5px;
`
class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zDepth: 0,
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
      zDepth: 4,
      size: 1.005
    })
  }
  // return shadow depth to normal on mouse leave
  handleMouseLeave = (refName, e) => {
    this.setState({
      zDepth: 0,
      size: 1.0
    })
  }

  render() {
    const project = this.props.project;
    return (
            <CardContainer size={this.state.size}>
              <Card onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    zDepth={this.state.zDepth}>
                    <a href={project.siteUrl}  target='_blank'>
                <CardMedia
                    overlay={
                        <CardTitle title={project.name} >
                          <span style={{color:'white'}}>
                            {this.getLogos(project.frameworks)}
                          </span>
                        </CardTitle>
                    }>
                  <img src={project.imgUrl} alt={project.name} />
                </CardMedia>
                </a>
                <IconButton 
                    href={project.gitUrl}
                    target='_blank'
                    tooltip="see repo on github" 
                    touch={true}
                    tooltipPosition="top-center" 
                    style={{position:'absolute',bottom:'40px', right:'20px', zIndex:'1000'}}>
                  <img src={logoUrls['Github']} alt='Github' height='36px'/>
                </IconButton>
              </Card>
            </CardContainer>

    )
  }
}

export default ProjectCard;

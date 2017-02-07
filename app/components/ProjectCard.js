import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { logos, projects } from '../imgUrls';
// import styles from './styles';

class ProjectCard extends Component {

  getLogos() {
    return (
      this.props.projectInfo['frameworks'].map(framework => {
        return <img key={framework} style={{marginRight:'20px', height:'24px'}} src={logos[framework]} alt="framework"/>
      })
    )
  }

  render() {
    const project = this.props.projectInfo
    const styles = this.props.styles;
    return (
      <div>
        {/*<a style={styles.a} href={project.siteUrl} rel='noopener noreferrer' target='_blank'> */}
          <Card>
            <CardMedia 
              // overlay={<CardTitle title={
              // <div style={{width:'100%'}}>
              //   this.props.name {this.getLogos()} 
              //   <a href={project.gitUrl} target='_blank' 
              //       style={{position:'absolute',right:'30px',height:'36px'}}>
              //     <img src={logos['Github']} alt="Github"/>
              //   </a>
              // </div>}
              // />}
              >
              {project.imgUrl}
            </CardMedia>
          </Card>
          {/*</a>*/}
      </div>
    )
  }
}

export default ProjectCard;

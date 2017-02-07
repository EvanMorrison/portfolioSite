import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { logoUrls, projectUrls } from '../imgUrls';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.projectList =   {
      "Mad-Lib": {
        siteUrl: "http://madlibapp.heroku.com",
        imgUrl: projectUrls['Mad-Lib'],
        gitUrl: "https://github.com/EvanMorrison/angularjs-madLib",
        frameworks: ['AngularJS', 'Bootstrap']
      },
      "Shopping List": {
        siteUrl: "http://mothers-shoppinglist.heroku.com",
        imgUrl: projectUrls['Shopping List'],
        gitUrl: "https://github.com/EvanMorrison/Mothers-Shopping-List",
        frameworks: ['jQuery', 'Bootstrap']
      } 
    }
  }

  render() {
    const projects = this.projectList;
    const styles = this.props.styles
    return (
      <div style={styles.sectionStyle}>
        <h1 style={{...styles.sectionHeading, marginBottom:'40px'}}>Sample Projects</h1>
        <div style={styles.projects.content}>
            <a style={{flex:'0 1 40%', minWidth:'400px',marginBottom:'40px'}} href={projects['Mad-Lib'].siteUrl} rel='noopener noreferrer' target='_blank'>
              <Card >
                <CardMedia overlay={<CardTitle title={<div style={{width:'100%'}}>Mad Lib <img style={{marginRight:'15px'}} src={logoUrls['AngularJS']} alt="angularjs" height='24px'/><img style={{marginRight:'15px'}} src={logoUrls['Bootstrap']} alt="bootstrap" height='24px'/><a style={{position:'absolute',right:'30px'}} target='_blank' href="https://github.com/EvanMorrison/angularjs-madLib"><img src={logoUrls['Github']} alt="" height='36px'/></a></div>}/>}>
                  <img src={projectUrls['Mad-Lib']} alt="madlib"/>
                </CardMedia>
              </Card></a>
            <a style={{flex:'0 1 40%', minWidth:'400px',marginBottom:'40px'}} href={projects['Shopping List'].siteUrl} rel='noopener noreferrer' target='_blank'>
              <Card>
                <CardMedia overlay={<CardTitle title={<div>Shopping List <img style={{marginRight:'15px',background:'rgba(255,255,255,.7)'}} src={logoUrls['jQuery']} alt="" height='24px'/><img style={{marginRight:'15px'}} src={logoUrls['Bootstrap']} alt="" height='24px'/><a style={{position:'absolute',right:'30px'}} target='_blank' href="https://github.com/EvanMorrison/Mothers-Shopping-List"><img src={logoUrls['Github']} alt="" height='36px'/></a></div>}/>}>
                  <img src={projectUrls['Shopping List']} alt="shoppingList"/>
                </CardMedia>
              </Card></a>
        </div>
      </div>
    )
  }
}

export default Projects;

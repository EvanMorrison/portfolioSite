import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import imgUrls from '../imgUrls';

class Projects extends Component {
  render() {
    const styles = this.props.styles
    return (
      <div style={styles.sectionStyle}>
        <h1 style={{...styles.sectionHeading, marginBottom:'40px'}}>Sample Projects</h1>
        <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around'}}>
            <a style={{flex:'0 1 40%', minWidth:'400px',marginBottom:'40px'}} href="http://madlibapp.heroku.com" rel='noopener noreferrer' target='_blank'>
              <Card >
                <CardMedia overlay={<CardTitle title={<div style={{width:'100%'}}>Mad Lib <img style={{marginRight:'15px'}} src={imgUrls[3].url} alt="angularjs" height='24px'/><img style={{marginRight:'15px'}} src={imgUrls[8].url} alt="bootstrap" height='24px'/><a style={{position:'absolute',right:'30px'}} target='_blank' href="https://github.com/EvanMorrison/angularjs-madLib"><img src={imgUrls[6].url} alt="" height='36px'/></a></div>}/>}>
                  <img src="./madLib-842x513.png" alt="madlib"/>
                </CardMedia>
              </Card></a>
            <a style={{flex:'0 1 40%', minWidth:'400px',marginBottom:'40px'}} href="http://mothers-shoppinglist.heroku.com" rel='nooperner noreferrer' target='_blank'>
              <Card>
                <CardMedia overlay={<CardTitle title={<div>Shopping List <img style={{marginRight:'15px',background:'rgba(255,255,255,.7)'}} src={imgUrls[5].url} alt="" height='24px'/><img style={{marginRight:'15px'}} src={imgUrls[8].url} alt="" height='24px'/><a style={{position:'absolute',right:'30px'}} target='_blank' href="https://github.com/EvanMorrison/Mothers-Shopping-List"><img src={imgUrls[6].url} alt="" height='36px'/></a></div>}/>}>
                  <img src="./shoppingList-1240x754.png" alt="shoppingList"/>
                </CardMedia>
              </Card></a>
        </div>
      </div>
    )
  }
}

export default Projects;

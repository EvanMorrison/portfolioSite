import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { purple50 } from 'material-ui/styles/colors'
import {sectionStyle, sectionHeading, paragraph} from './styles';

class Contact extends React.Component {
  render() {
    // const styles = this.props.styles
    return (
      <div style={{...sectionStyle,padding:'60px 0 0',backgroundColor:'#FFF'}}>
      {/*  <Divider style={{marginBottom:'30px',width:'66vw'}} />*/}
        {/*<Paper zDepth={1} style={{...sectionStyle, width:'80vw', padding:'60px'}}>*/}
          <div  style={{position:'relative',zIndex:'1'}}>
            <Avatar src="http://i.imgur.com/wmK5ZW9.jpg" size={96} style={{position:'absolute',top:'-5px',left:'-80px',boxShadow:'2px 1px 5px rgba(0,0,0,1)',zIndex:'-1'}}/>
            <h1 style={{...sectionHeading,zIndex:10, background:'rgba(255,255,255,1)', padding:'5px',borderRadius:'40px'}}>Contact</h1>
          </div>
          <p  style={{margin:'20px'}}>email: <a href="mailto:evanrmorrison@gmail.com">evanrmorrison@gmail.com</a></p> 
          <Divider style={{width:'33%'}} />
          <p style={{margin:'20px'}}>tel: <a href="tel:801-792-9290">801-792-9290</a></p>
          <Divider style={{width:'33%'}} />
          <p style={{margin:'20px'}}>github: <a href="https://github.com/EvanMorrison">EvanMorrison</a></p>
        {/*</Paper>*/}
          {/*<Divider style={{marginTop:'30px',width:'66vw'}} />*/}
      </div>
    )
  }
}

export default Contact;

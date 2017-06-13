import React from 'react';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome';
import {sectionStyle, sectionHeading, paragraph} from './styles';

class Contact extends React.Component {
  render() {
    return (
      <div style={{...sectionStyle,padding:'60px 0 0',backgroundColor:'#FFF'}}>
          <div  style={{position:'relative',zIndex:'1'}}>
            <Avatar src="http://i.imgur.com/wmK5ZW9.jpg" size={96} style={{position:'absolute',top:'-5px',left:'-80px',boxShadow:'2px 1px 5px rgba(0,0,0,1)',zIndex:'-1'}}/>
            <h1 style={{...sectionHeading,zIndex:10, background:'rgba(255,255,255,1)', padding:'5px',borderRadius:'40px'}}>Contact</h1>
          </div>
         <div style={{alignItems:'left',width:'33%'}}>
            <p  style={{margin:'20px'}}>
             <FontAwesome name='envelope' size='2x' style={{marginRight:'25px'}} />
             <a href="mailto:evanrmorrison@gmail.com">evanrmorrison@gmail.com</a>
           </p> 
           <Divider />
           <p style={{margin:'20px'}}>
             <FontAwesome name='phone' size='2x' style={{marginRight:'25px'}} />
             <a href="tel:801-792-9290">801-792-9290</a>
           </p>
           <Divider />
           <p style={{margin:'20px'}}>
             <FontAwesome name='github' size='2x' style={{marginRight:'25px'}} />
             <a href="https://github.com/EvanMorrison">EvanMorrison</a>
           </p>
           <Divider />
           <p style={{margin:'20px'}}>
             <FontAwesome name='file-text' size='2x' style={{marginRight:'25px'}} />
             <a href="https://drive.google.com/file/d/0B8qa-UZelBhOQXUzb0h4MDg1Wmc/view?usp=sharing" target="_blank">view/download resume</a>
           </p>
         </div>
      </div>
    )
  }
}

export default Contact;

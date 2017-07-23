import React from 'react';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome';
import {sectionStyle, sectionHeading, paragraph} from './styles';
import ermAvatar from '../images/avatar-bkg-bw.jpg';

class Contact extends React.Component {
  render() {
    return (
      <div style={{...sectionStyle,padding:'20vh 0',height:'100vh',minHeight:'600px', backgroundColor:'#fff'}}>
          <div  style={{position:'relative',zIndex:'1'}}>
            <Avatar src={ermAvatar} size={96} style={{position:'absolute',top:'-5px',left:'-80px',boxShadow:'2px 1px 5px rgba(0,0,0,1)',zIndex:'-1'}}/>
            <h1 style={{...sectionHeading,zIndex:10, color:'#000', background:'#fff', padding:'5px',borderRadius:'40px'}}>Contact</h1>
          </div>
         <div style={{alignItems:'left',width:'90%',maxWidth:'400px'}}>
            <p  style={{margin:'20px 0 20px 80px'}}>
             <FontAwesome name='envelope' size='2x' style={{color:'#000', marginRight:'25px'}} />
             <a href="mailto:evanrmorrison@gmail.com">evanrmorrison@gmail.com</a>
           </p> 
           <Divider />
           <p style={{margin:'20px 0 20px 80px'}}>
             <FontAwesome name='phone' size='2x' style={{color:'#000', marginRight:'25px'}} />
             <a href="tel:801-792-9290">801-792-9290</a>
           </p>
           <Divider />
           <p style={{margin:'20px 0 20px 80px'}}>
             <FontAwesome name='github' size='2x' style={{color:'#000', marginRight:'25px'}} />
             <a href="https://github.com/EvanMorrison">EvanMorrison</a>
           </p>
           <Divider />
           <p style={{margin:'20px 0 20px 80px'}}>
             <FontAwesome name='file-text' size='2x' style={{color:'#000', marginRight:'25px'}} />
             <a href="https://drive.google.com/file/d/0B8qa-UZelBhOQXUzb0h4MDg1Wmc/view?usp=sharing" target="_blank">view/download resume</a>
           </p>
         </div>
      </div>
    )
  }
}

export default Contact;

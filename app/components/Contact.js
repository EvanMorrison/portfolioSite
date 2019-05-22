import React from 'react';
import styled from '@emotion/styled';

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome';
import {Section, SectionHeading} from './shared';
import ermAvatar from '../images/avatar-bkg-bw.jpg';


const ContactAvatar = styled(Avatar)`
  position: absolute; 
  top: -24px; 
  left: -100px; 
  box-shadow: 2px 1px 5px rgba(0,0,0,1); 
  z-index: -1;
`
const ContactSectionHeading = styled(SectionHeading)`
  z-index: 10;
  color: #000;
  background: #fff;
  padding: 5px;
  border-radius: 40px;
`
const ContactInfoGroup = styled.div`
  align-items: left;
  width: 90%;
  max-width: 400px;
`
const ContactItem = styled.p`
  margin: 20px 0 20px 0px;
`

class Contact extends React.Component {
  render() {
    return (
      <Section>
        <div  style={{position:'relative',marginBottom:'30px'}}>
          <ContactAvatar src={ermAvatar} size={128}/>
          <ContactSectionHeading>Contact</ContactSectionHeading>
        </div>
        <ContactInfoGroup>
          <ContactItem>
            <FontAwesome name='envelope' size='2x' style={{color:'#000', marginRight:'25px'}} />
            <a href="mailto:evanrmorrison@gmail.com">evanrmorrison@gmail.com</a>
          </ContactItem> 
          <Divider />
          <ContactItem>
            <FontAwesome name='phone' size='2x' style={{color:'#000', marginRight:'25px'}} />
            <a href="tel:801-792-9290">801-792-9290</a>
          </ContactItem>
          <Divider />
          <ContactItem>
            <FontAwesome name='github' size='2x' style={{color:'#000', marginRight:'25px'}} />
            <a href="https://github.com/EvanMorrison">EvanMorrison</a>
          </ContactItem>
          <Divider />
          <ContactItem>
            <FontAwesome name='file-text' size='2x' style={{color:'#000', marginRight:'25px'}} />
            <a href="https://drive.google.com/file/d/0B8qa-UZelBhOQXUzb0h4MDg1Wmc/view?usp=sharing" target="_blank">view/download resume</a>
          </ContactItem>
        </ContactInfoGroup>
      </Section>
    )
  }
}

export default Contact;

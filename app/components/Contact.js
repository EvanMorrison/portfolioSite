import React from 'react';
import styled from '@emotion/styled';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import DescriptionIcon from '@material-ui/icons/Description';
import {Section, SectionHeading} from './shared';
import ermAvatar from '../images/avatar-bkg-bw.jpg';
import { logoUrls } from "../data/imgUrls";

const ContactSectionHeading = styled(SectionHeading)`
  z-index: 10;
  color: #000;
  background: #fff;
  padding: 5px;
  border-radius: 40px;
  font-weight: 100;
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
        <div  style={{position:'relative', marginBottom:'30px'}}>
          <Avatar src={ermAvatar} 
            css={{
              width: 128,
              height: 128,
              zIndex: -1,
              position: 'absolute',
              top: -24,
              left: -100,
              boxShadow: '2px 1px 5px rgba(0, 0, 0, 1)'
          }}/>
          <ContactSectionHeading>Contact</ContactSectionHeading>
        </div>
        <ContactInfoGroup>
          <ContactItem>
            <EmailIcon css={{fontSize: 32, marginRight: 25, position: 'relative', top: 15}}/>
            <a href="mailto:evanrmorrison@gmail.com">evanrmorrison@gmail.com</a>
          </ContactItem> 
          <Divider />
          <ContactItem>
            <PhoneIcon css={{fontSize: 32, marginRight: 25, position: 'relative', top: 15}}/>
            <a href="tel:801-792-9290">801-792-9290</a>
          </ContactItem>
          <Divider />
          <ContactItem>
            <img src={logoUrls['Github']} css={{width: 30, height: 30, marginRight: 25, position: 'relative', top: 10}}/>
            <a href="https://github.com/EvanMorrison">EvanMorrison</a>
          </ContactItem>
          <Divider />
          <ContactItem>
            <DescriptionIcon css={{fontSize: 32, marginRight: 25, position: 'relative', top: 15}}/>
            <a href="https://drive.google.com/file/d/0B8qa-UZelBhOQXUzb0h4MDg1Wmc/view?usp=sharing" target="_blank">view/download resume</a>
          </ContactItem>
        </ContactInfoGroup>
      </Section>
    )
  }
}

export default Contact;

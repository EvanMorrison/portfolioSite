import React, { Component } from 'react';
import styled from '@emotion/styled';
import { logoUrls } from '../data/imgUrls';
import { Section, SectionHeading, Paragraph} from './shared';

const AboutSection = styled(Section)`
  background-color: #191919;
  color: #fff;
`
const LogoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class AboutMe extends Component {
  
  getLogos() {
    return Object.keys(logoUrls).filter((e,i) => i < 13).map(key =>
      <img key={logoUrls[key]} src={logoUrls[key]} alt={key} height="64px" style={{marginRight:'24px', marginTop:'15px'}}/>
      )
  }

  render() {
    return (
      <AboutSection>
          <div style={{maxWidth:'700px'}}>
            <SectionHeading>ABOUT ME</SectionHeading>
            <Paragraph>I’m a full stack web developer with a background in real estate law and applied math.</Paragraph>
            <Paragraph>More than ten years ago my interest in coding led me to teach myself enough to code my first 'app', a tool for automating case handling in my real estate practice. Ever since then I&rsquo;ve known coding was what I really wanted to do.</Paragraph>
            <Paragraph>I have a portfolio of work with various clients and open source projects (check it out below!). I am continually seeking to expand my skills and knowledge and tackle new challenges. I love working on open source projects too.</Paragraph>
            <LogoGroup>
              {this.getLogos()}
            </LogoGroup>
          </div>
      </AboutSection>
    )
  }
}

export default AboutMe;

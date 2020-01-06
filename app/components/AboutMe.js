import React from 'react';
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

  img {
    height: 64px;
    margin-right: 24px;
    margin-top: 15px;

    @media (max-width: 708px) {
     height: 32px; 
    }
  }
`

const AboutMe = React.forwardRef((props, ref) => {
  function getLogos() {
    return Object.keys(logoUrls).filter((e,i) => i < 14).map(key =>
      <img key={logoUrls[key]} src={logoUrls[key]} alt={key}/>
    )
  }

  return (
    <AboutSection ref={ref}>
      <div style={{maxWidth:'700px'}}>
        <SectionHeading>ABOUT ME</SectionHeading>
        <Paragraph>I’m a full stack web developer with a background in real estate law and applied math.</Paragraph>
        <Paragraph>More than ten years ago my interest in coding led me to teach myself enough to code my first 'app', a tool for automating case handling in my real estate practice. Ever since then I&rsquo;ve known coding was what I really want to do.</Paragraph>
        <Paragraph>I'm currrently a software engineer with <a href='https://tazworks.com' target='_blank'>TazWorks</a>, doing fullstack work with Java, JavaScript & React. And I have a portfolio of work with various clients and open source projects (check it out below!). I am continually seeking to expand my skills and knowledge and tackle new challenges.</Paragraph>
        <LogoGroup>
          {getLogos()}
        </LogoGroup>
      </div>
    </AboutSection>
  )
})

export default AboutMe;

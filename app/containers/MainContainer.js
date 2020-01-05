import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import scrollToComponent from 'react-scroll-to-component';

// Customized Components
import Home from '../components/Home';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import { Global, css } from '@emotion/core';
import globalStyles from '../globalStyle.js';

const styles = {
  root: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  primary: {
    color: '#FFF'
  },
  secondary: {
    color: '#000'
  }
};

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
      scrollToTarget: "Top",
      menuClick: false,
      appBarOpacity: 0,
      menuButtonColor: '#FFF',
      open: false
    }
    this.menuBtn = React.createRef();
    // this.Top = React.createRef();
    // this.Contact = React.createRef();
    // this.About = React.createRef();
    // this.Projects = React.createRef();
  }
  
  componentDidMount() {
    this.lastScroll = 0;
      window.addEventListener('scroll', () => {
        if (!this.state.menuClick)
          this.handleScrolling(window.innerHeight)
      })
  }

  handleScrolling(windowHeight) {
    if ( (window.scrollY / windowHeight) % 2 >= 1  || window.scrollY > (3 * windowHeight) ) {
        this.setState(({menuButtonColor}) => {
          if(menuButtonColor === '#FFF') return {menuButtonColor: '#000'}
          else return null;
        });
    } else {
      this.setState(({menuButtonColor}) => {
        if(menuButtonColor === '#000') return {menuButtonColor: '#FFF'}
        else return null;
      })
    } 
  }

  handleMenuTap(ev) {
    this.setState({
      menuClick: true
    })
    scrollToComponent(this[ev.target.textContent], {
      align: 'top',
      duration: 1000
    })
    this.setState({
      menuClick: false,
      open: false
    })
  }

  handleOpenMenu = (e) => {
    this.setState({open: true, anchorEl: e.currentTarget});
  }
  
    
  render () {
    return (
      <div>
        <Global styles={globalStyles}/>
        <AppBar className={this.props.classes.root}>
          <Toolbar>
            <IconButton ref={this.menuBtn} onClick={this.handleOpenMenu}>
              <div css={css`svg[class^='MuiSvgIcon']{color: ${this.state.menuButtonColor};}`}>
                <MenuIcon className={this.props.classes.primary}/>
              </div>
            </IconButton>
            <Menu 
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              >
                <MenuItem onClick={this.handleMenuTap.bind(this)}>Top</MenuItem>
                <MenuItem onClick={this.handleMenuTap.bind(this)}>Contact</MenuItem>
                <MenuItem onClick={this.handleMenuTap.bind(this)}>About</MenuItem>
                <MenuItem onClick={this.handleMenuTap.bind(this)}>Projects</MenuItem>
              </Menu>
          </Toolbar>
        </AppBar>
        <Home ref={el => this.Top = el} />
        <Contact ref={el => this.Contact = el}/>
        <AboutMe ref={el => this.About = el} />
        <Projects ref={el => this.Projects = el} />
      </div>
    )
  }  
}

export default withStyles(styles)(MainContainer);

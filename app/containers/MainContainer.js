import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// third party
import scrollToComponent from 'react-scroll-to-component';

// Customized Components
import Home from '../components/Home';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import '../main.css';


class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrollToTarget: "Top",
      menuClick: false,
      // navDrawerOpen: false,
      appBarOpacity: 0,
      // appBarPosition: 0,
      menuButtonColor: '#fff'
    }
  }
  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(),
    });
  }
  componentDidMount() {
    this.lastScroll = 0;
      window.addEventListener('scroll', () => {
        if (!this.state.menuClick)
          this.handleScrolling(window.innerHeight)
      })
  }
  handleScrolling(windowHeight) {
    // clearTimeout(this.appBarFade);
    // let st = window.scrollY - this.lastScroll;
    if ( (window.scrollY / windowHeight) % 2 >= 1  || window.scrollY > (3 * windowHeight) ) {
        this.setState({
          // appBarOpacity: 0,
          // appBarPosition: 0,
          menuButtonColor: '#000'
        });
    } else {
      this.setState({
        // appBarOpacity: 0,
        menuButtonColor: '#fff'
      })
    } 
    //  this.lastScroll = this.lastScroll + st; 
  }

  handleMenuTap(ev) {
    this.setState({
      menuClick: true
    })
    let ref = ReactDOM.findDOMNode(this.refs[ev.target.innerHTML])
    scrollToComponent(ref, {
      align: 'top',
      duration: 1000
    })
    this.setState({
      menuClick: false
    })
  }
  getStyles() {
    return {
      appBar: {
        position: 'fixed',
        top: this.state.appBarPosition,
        backgroundImage: 'url(./assets/fbg03.jpg)',
        backgroundSize: 'cover',
        marginBottom: '80px',
        background: `rgba(250,250,250,${this.state.appBarOpacity})`,
        opacity: 1,
        transition: '.3s ease'
      },
      content: {
        margin: spacing.desktopGutter,
      }
    }
  }  
  
  render () {
    const styles = this.getStyles();
  return (
      <MuiThemeProvider>
        <div>
          <AppBar
            zDepth={0} 
            iconElementLeft={
              <IconMenu 
                iconButtonElement={<IconButton><MenuIcon color={this.state.menuButtonColor}/></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical:'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                <MenuItem primaryText="Top" onTouchTap={this.handleMenuTap.bind(this)} />
                <MenuItem primaryText="Contact" onTouchTap={this.handleMenuTap.bind(this)} />
                <MenuItem primaryText="About" onTouchTap={this.handleMenuTap.bind(this)} />
                <MenuItem primaryText="Projects" onTouchTap={this.handleMenuTap.bind(this)} />
              </IconMenu>}
            title="" 
            style={styles.appBar}
          />
          <Home ref="Top" />
          <Contact ref="Contact" />
          <AboutMe ref="About" />
          <Projects ref="Projects" />
        </div>
      </MuiThemeProvider>
    )
  }  
}

export default MainContainer

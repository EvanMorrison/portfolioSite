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

// third party
import scrollToComponent from 'react-scroll-to-component';

// Customized Components
import Home from '../components/Home';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import { transparent } from 'material-ui/styles/colors';
import '../globalStyle.js';

const muiTheme = getMuiTheme({
  appBar: { color: transparent,
             }  
})


class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrollToTarget: "Top",
      menuClick: false,
      appBarOpacity: 0,
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
          menuButtonColor: '#000'
        });
    } else {
      this.setState({
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
  
    
  render () {
  return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            zDepth={0} 
            iconElementLeft={
              <IconMenu 
                iconButtonElement={<IconButton><MenuIcon color={this.state.menuButtonColor}/></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical:'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                <MenuItem primaryText="Top" onClick={this.handleMenuTap.bind(this)} />
                <MenuItem primaryText="Contact" onClick={this.handleMenuTap.bind(this)} />
                <MenuItem primaryText="About" onClick={this.handleMenuTap.bind(this)} />
                <MenuItem primaryText="Projects" onClick={this.handleMenuTap.bind(this)} />
              </IconMenu>}
            title="" 
            className="appbar main-menu"
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

import React, { Component } from 'react';
// import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import '../main.css';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayPage: false,
      navDrawerOpen: false,
      appBarOpacity: 0,
      appBarPosition: 0
    }
  }
  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(),
    });
  }
  componentDidMount() {
    this.setState({
      displayPage: 'block'
    })
    this.lastScroll = 0;
      window.addEventListener('scroll', () => this.handleScrolling())
    this.scrollTimer = setInterval( () => {
      if (this.didScroll) {
        this.handleScrolling();
        this.didScroll = false;
      }
    }, 5);
  }
  handleScrolling() {
    let st = window.scrollY - this.lastScroll;
    if (st > 10 ) {
        this.setState({
          appBarOpacity: 0,
          appBarPosition: -64
        })
    } else if (st < -10 ) {
        this.setState({
          appBarOpacity: 1,
          appBarPosition: 0
        })
    }
        
     this.lastScroll = this.lastScroll + st; 

  }

  getStyles() {
    return {
      appBar: {
        position: 'fixed',
        top: this.state.appBarPosition,
        backgroundImage: 'url(./assets/fbg03.jpg)',
        backgroundSize: 'cover',
        marginBottom: '80px',
        background: 'rgba(0,0,0,.2)',
        opacity: this.state.appBarOpacity,
        transition: '.3s ease'
      },
      content: {
        margin: spacing.desktopGutter,
      }
    }
  }
  handleTouchTapLeftIconButton = () => {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    })
  }
  handleChangeRequestNavDrawer = (open) => {
    this.setState({
      navDrawerOpen: false
    })
  }
  
  render () {
    const styles = this.getStyles();
  return (
      <MuiThemeProvider>
        <div style={{display:this.state.displayPage}}>
          <AppBar 
            iconElementLeft={
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical:'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                <MenuItem primaryText="Top" />
                <MenuItem primaryText="Contact" />
                <MenuItem primaryText="About" />
                <MenuItem primaryText="Projects" href="#Projects" />

              </IconMenu>}
            title="Welcome" 
            style={styles.appBar}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }  
}

export default MainContainer

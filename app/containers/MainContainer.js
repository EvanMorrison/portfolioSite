import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
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
      navDrawerOpen: false
    }
  }
  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(),
    });
  }
  getStyles() {
    return {
      appBar: {
        position: 'fixed',
        top: 0,
        backgroundImage: 'url(./assets/fbg03.jpg)',
        backgroundSize: 'cover',
        marginBottom: 80,
        background: 'rgba(0,0,0,.25)'
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
  handleScroll = (e) => {
    alert('hello');
  }
  render () {
    const styles = this.getStyles();
  return (
      <MuiThemeProvider>
        <div>
          <AppBar 
            iconElementLeft={<span/>}
            title="Welcome" 
            style={styles.appBar}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }  
}

export default MainContainer

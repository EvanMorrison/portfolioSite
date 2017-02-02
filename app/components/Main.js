import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan100} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import '../main.css';

// class Main extends React.Component {
class Main extends Component {
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
        display: 'flex',
        marginBottom: 80
      },
      root: {
        position: 'relative',
        marginTop: 60,
        paddingTop: 150,
        minHeight: '100vh',
        backgroundImage: 'url(./assets/woman_facing_morning_sun.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'

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
        <div>
          <AppBar 
            iconElementLeft={<span/>}
            className="app-bar"
            title="Welcome" 
            style={styles.appBar}/>
            <div 
              style={styles.root}>
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    )
  }  
}

export default Main

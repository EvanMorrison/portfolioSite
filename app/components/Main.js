import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import '../main.css';

// class Main extends React.Component {
const Main = ({children}) => (
    <MuiThemeProvider>
      <div>
        <AppBar title="" className="app-bar"/>
        {children}
      </div>
    </MuiThemeProvider>
  )
  


export default Main

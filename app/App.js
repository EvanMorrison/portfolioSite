import React from 'react';
import globalStyles from './globalStyle';
import { BrowserRouter, Route } from 'react-router-dom';
import { Global } from '@emotion/core';
import MainContainer from './containers/MainContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={MainContainer}/>
      </BrowserRouter>
    )
  }
}
    
export default App

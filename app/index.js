/**
 * AppContainer is a component used with react-hot-loader that handles module reloading, 
 * as well as error handling. In production AppContainer is automatically desabled, and 
 * simply returns its children.
 */

 
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';


// AppContainer is a wrapper for react-hot-loader.
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App').default);
  })
}
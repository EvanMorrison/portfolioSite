import React, { Component } from 'react';
import typography from 'material-ui/styles/typography';

class Home extends Component {
  getStyles() {
    return {
      root: {
        position: 'relative',
        height: '60vh',
        minHeight: '500px',
        backgroundImage: 'url(./assets/people-coffee-notes-tea.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      },
      shadow: {
        position: 'absolute',
        display: 'block',
        background: 'rgba(255,250,250,.75)',
        top: 0,
        height: '100%',
        width: '100%'
      }
      
    }
  }
  render() {
    const styles = this.getStyles();
  return (
    <div>
    <div style={styles.root}>
      <div style={styles.shadow}>
      <div className="title-group">
        <h1 className="main-title">Evan Morrison</h1>
        <h2 className="sub-title">Web Developer</h2>
      </div>
      
        </div>
        </div>
    </div>
  )
  }
}

export default Home

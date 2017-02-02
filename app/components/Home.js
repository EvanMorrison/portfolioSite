import React, { Component } from 'react';
import typography from 'material-ui/styles/typography';

class Home extends Component {
  getStyles() {
    return {
      root: {
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(./assets/woman_facing_morning_sun.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      },
      shadow: {
        position: 'absolute',
        display: 'block',
        background: 'rgba(255,240,240,.75)',
        top: 0,
        height: '100%',
        width: '100%'
      },
      footer: {
        position: 'absolute',
        bottom: 0,
        margin: 20,
        // color: 'white',
        textAlign: 'center'
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
      <div className="footer" style={styles.footer}>scroll down</div>
        </div>
        </div>
    </div>
  )
  }
}

export default Home

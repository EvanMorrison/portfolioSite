import React, { Component } from 'react';

class Home extends Component {
  getStyles() {
    return {
      root: {
        position: 'relative',
        height: '60vh',
        minHeight: '500px',
        backgroundImage: 'url(http://i.imgur.com/zoU5shZ.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      },
      shadow: {
        position: 'absolute',
        display: 'block',
        background: 'rgba(255,255,255,.6)',
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

export default Home;


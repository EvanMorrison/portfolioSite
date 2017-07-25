import React, { Component } from 'react';
import hero from '../images/heros/people-coffee-notes-tea-1920x1280.jpg'

class Home extends Component {
  getStyles() {
    return {
      root: {
        position: 'relative',
        height: '100vh',
        backgroundImage: `url(${hero})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      },
      shadow: {
        position: 'absolute',
        display: 'block',
        background: 'rgba(255,255,255,0)',
        top: 0,
        height: '100%',
        width: '100%'
      },
      titleGroup: {
        position: 'relative',
        top: '33vh',
        width: '90%',
        maxWidth: '500px',
        padding:'10px 20px',
        border: '2px solid rgba(127, 125, 105,0.8)',
        backgroundColor: 'rgba(230, 230, 230, 0.8)',
        margin:'0 auto'
      },
      mainTitle: {
        fontSize: "3em",
        fontFamily: "Roboto",
        fontWeight: "100",
        textAlign: "center",
        
        textShadow: "1px 1px 1px #555",
        color: "#0a0a0a",
      },
      subTitle: {
        fontWeight: "100",
        width: "100%",
        textAlign: "center",
        marginTop: "20px",
        textShadow: "1px 1px 3px #555",
        color: "#0a0a0a",
      }
    }
  }

  render() {
    const styles = this.getStyles();
  return (
    <div>
    <div style={styles.root}>
      <div style={styles.shadow}>
      <div style={styles.titleGroup}>
        <h1 style={{...styles.mainTitle,fontWeight:'500'}}>Evan Morrison</h1>
        <h2 style={styles.subTitle}>Web Developer</h2>
      </div>
        </div>
        </div>
    </div>
  )
  }
}

export default Home;


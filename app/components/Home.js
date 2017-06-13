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
        background: 'rgba(255,255,255,.5)',
        top: 0,
        height: '100%',
        width: '100%'
      },
      titleGroup: {
        position: 'absolute',
        top: '20vh',
        width: '100%'
      },
      mainTitle: {
        textShadow: "0 0 10 black",
        fontSize: "50px",
        fontFamily: "Roboto",
        fontWeight: "100",
        width: "100%",
        textAlign: "center",
        marginTop: "20px",
        textShadow: "1px 1px 3px #555",
        color: "#0a0a0a",
        /*font-family: ""'Helvetica Neue'*/
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


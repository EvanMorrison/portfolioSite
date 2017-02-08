import React, { Component } from 'react';

class Break extends Component {
  render() {
    return (
      <div>
        <div style={{background:'url(http://i.imgur.com/zoU5shZ.jpg)',backgroundSize: 'cover',backgroundPosition:'center',width:'100vw',height:'100vh',zIndex:'-1',position:'fixed',top:'0',backgroundSize:'cover',opacity:'.2'}}>
        </div>
        <div style={{height:'0px',width:'100vw'}}>
        </div>
      </div>
    )
  }
}

export default Break;

import React from 'react';
import Avatar from 'material-ui/Avatar';


class Contact extends React.Component {
  render() {
    const styles = this.props.styles
    return (
      <div style={styles.sectionStyle}>
        <div style={{position:'relative'}}>
          <Avatar src="http://i.imgur.com/wmK5ZW9.jpg" size={96} style={{position:'absolute',zIndex:'-1',top:'-5px',left:'-80px',boxShadow:'2px 1px 5px rgba(0,0,0,1)'}}/><h1 style={{...styles.sectionHeading, background:'rgba(255,255,255,1)', padding:'5px',borderRadius:'40px'}}>Contact</h1>
        </div>
        <p className="body-content" style={{marginTop:'25px',background:'white'}}>email: <a href="mailto:evanrmorrison@gmail.com">evanrmorrison@gmail.com</a></p> 
        <p className="body-content">github: <a href="https://github.com/EvanMorrison">EvanMorrison</a></p>
      </div>
    )
  }
}

export default Contact;

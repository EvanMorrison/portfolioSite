import React from 'react';


class Contact extends React.Component {
  render() {
    const styles = this.props.styles
    return (
      <div style={styles.sectionStyle}>
        <h1 style={styles.sectionHeading}>Contact</h1>
        <p>email: <a href="mailto:evanrmorrison@gmail.com">evanrmorrison@gmail.com</a></p> 
        <p>github: <a href="https://github.com/EvanMorrison">EvanMorrison</a></p>
      </div>
    )
  }
}

export default Contact;

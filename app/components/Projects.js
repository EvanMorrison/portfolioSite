import React, { Component } from 'react';

class Projects extends Component {
  render() {
    const styles = this.props.styles
    return (
      <div style={styles.sectionStyle}>
        <h1 style={styles.sectionHeading}>Sample Work</h1>
        <div style={styles.sectionContent}>
          <p className="body-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptate repudiandae quo praesentium a porro accusantium recusandae deleniti, cupiditate esse, iusto repellat molestiae neque repellendus.
          </p>
        </div>
      </div>
    )
  }
}

export default Projects;

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import resumeFile from '../../files/Basic_Resume.docx.pdf'
import '../../styles/Portfolio.css'

export default function Resume() {

  const styles = {
    row: {
      margin: 0,
      paddingTop: '2%'
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      height: '85vh',
      paddingTop: '10px',
      paddingLeft: '10%',
    },
    list: {
      listStyle: 'circle',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      fontSize: '20px'
    },
    heading: {
      color: '#40798C',
      fontWeight: 'bold',
      paddingBottom: '10px',
    },
    subheading: {
      color: '#40798C',
      fontWeight: 'bold'
    }
  }


  return (
    <Row style={styles.row}>
      <Col xs={12} md={8} style={styles.col}>
        <h2 style={styles.heading}>My Resume</h2>
        <a className="resumeDownload" href={resumeFile} download> Download my resume</a>
        <h3 style={styles.subheading}>Front-end Proficiencies</h3>
        <ul style={styles.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3 style={styles.subheading}>Back-end Proficiencies</h3>
        <ul style={styles.list}>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </Col>
    </Row>
  );
}
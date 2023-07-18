import React from 'react';
import { Row, Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png'

export default function About() {

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
    heading: {
      color: '#40798C',
      fontWeight: 'bold',
      paddingBottom: '10px',
    },
    img: {
      borderRadius: '50%',
      border: 'solid black 5px',
      height: '30%',
      marginBottom: '15px',
    },
    p: {
      fontSize: '18px',
      textAlign: 'start'
    }
  }

// About me component
  return (
    <Row style={styles.row}>
      <Col style={styles.col}>
        {/* {Header} */}
        <h2 style={styles.heading}>About Me</h2>
        {/* Avatar Img */}
        <img src={avatar} alt='avatar of the developer' style={styles.img}/>
        {/* Bio */}
        <p style={styles.p}>Hello! My name is Drew Smith, and I live in Middle-of-Nowhere, Tennessee. Here in Middle-of-Nowhere, I work in education. And now I'm embarking on the journey to learn coding. To be honest, it's certainly a mountainous climb, and while I'm struggling up the cliff side, I know that standing atop this crag will reveal a whole new landscape I've heretofore yet to see. Thanks for joining me at this particular campsite on my way to the summit. It's nice to meet you!</p>
      </Col>
    </Row>
  );
}
import React from 'react';
import '../styles/Portfolio.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


const styles = {
    footer: {
        display: 'flex',
        alignItems: 'center',
        background:'#40798C',
        height: '75px'
    },
    text: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        cursor: 'pointer'
    }
}

// return Footer el
export default function Footer() {
    return (
        <div style={styles.footer}>
            <Container >
            <Row>
            <Col style={styles.text}><h1>Greebert Devs</h1></Col>
            <Col style={styles.text}><a href='https://www.linkedin.com/'><FontAwesomeIcon className='icons' icon={ faLinkedin } size='4x'/></a></Col>
            <Col style={styles.text}><a href='https://github.com/ds055'><FontAwesomeIcon className='icons' icon={ faGithubSquare } size='4x'/></a></Col>
            <Col style={styles.text}><a href='https://www.twitter.com/'><FontAwesomeIcon className='icons' icon={ faTwitterSquare } size='4x'/></a></Col>
            </Row>
            </Container>
        </div>

);
}

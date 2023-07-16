import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:'#40798C',
        height: 'auto',
        paddingTop: '15px'
    },
    icon: {
        padding: '0px 20px 5px 20px'
    }, 
    name: {
        color: 'white'
    },
    linkContainer: {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between'
    }
}

// return Footer el
export default function Footer() {
    return (
        <div style={styles.footer}>
            <div style={styles.linkContainer}>
                <a href='https://www.linkedin.com/'><FontAwesomeIcon className='icons'  icon={ faLinkedin } size='2x'/></a>
                <a href='https://github.com/ds055'><FontAwesomeIcon className='icons' icon={ faGithubSquare } size='2x'/></a>
                <a href='https://www.twitter.com/'><FontAwesomeIcon className='icons' icon={ faTwitterSquare } size='2x'/></a>
            </div>
            <div>
                <p style={styles.name}>Greebert Devs</p>
            </div>
        </div>
);
}

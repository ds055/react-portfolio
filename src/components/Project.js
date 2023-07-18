import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Get GitHub Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const styles = {
    row: {
        margin: 0,
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'center'
    }, 
    col: {
        display: 'flex',
        justifyContent: 'center'
    },
    img: {
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '25px',
        border: 'solid black 3px'
    }, 
    project: {
        position: 'relative',
        height: 'calc(200px + 8vw)',
        width: '100%',
        margin: '10px',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.75)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px',
    }
}

function Project({ projects }) {
    return (
        <Row style={styles.row}>
            {/* Map function iterates through project array prop and creates project item */}
            {projects.map((project) => (
                <Col md={5} xs={10} style={styles.col} key={project.id}>
                    <div className='project' style={styles.project}>
                        {/* Project Image first displayed on "page" load */}
                        <img src={project.imgLoc} alt={project.alt} style={styles.img}/>
                        {/* overlay appears on hover, showing links to GitHub and live site */}
                        <div style={styles.overlay} className='overlay'>
                            {/* Project name, link to live app */}
                            <a className='projectLink' style={styles.link} href={project.deployedUrl}>{project.projectName}</a>
                            {/* Stack used to create project */}
                            <p>{project.stack}</p>
                            {/* GitHub Icon, link to repo */}
                            <a href={project.projectUrl}><FontAwesomeIcon className='projectIcon' icon={ faGithubSquare } size='2x'/></a>
                        </div>
                    </div>
                </Col>
        ))}
        </Row>
);
}

export default Project


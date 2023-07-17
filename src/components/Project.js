import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'



function Project({ projects }) {
    return (
        <Row>
            {projects.map((project) => (
                <Col>
                    <div style ={{
                        backgroundImage: project.imgLoc,
                        backgroundRepeat: 'no-repeat',
                        objectFit: 'cover'
                    }}>
                        <a href={project.projectUrl}>${project.projectName}</a>
                    </div>
                </Col>
        ))}
        </Row>
);
}

export default Project


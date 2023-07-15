import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './Nav'

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        background:'#40798C',
        height: '75px'
    },
    title: {
        
    }
}

function Header({currentPage, handlePageChange}) {

    return (

        <div >
            <Container >
            <Row>
            <Col><h1>Drew Smith</h1></Col>
            <Col><Nav currentPage={currentPage} handlePageChange={handlePageChange} /></Col>
            </Row>
            </Container>
        </div>

);
}

export default Header;
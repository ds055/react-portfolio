import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './Nav'

const styles = {
    header: {
        background:'#40798C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        display: 'flex',
        color: 'white',
        justifyContent: 'center'
    },
}

function Header({currentPage, handlePageChange}) {
    return (
        // Header container
        <div style={ styles.header }>
            <Row style={ styles.row }>
            {/* Header Title--my name */}
            <Col  style={styles.title}><h1>Drew Smith</h1></Col>
            {/* Nav component imported */}
            <Col md={9} xs={12} style={styles.col}><Nav currentPage={currentPage} handlePageChange={handlePageChange} /></Col>
            </Row>
        </div>
);
}

export default Header;
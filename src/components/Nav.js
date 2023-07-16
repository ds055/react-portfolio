import React from 'react';
import Row from 'react-bootstrap/Row'

const styles = {
  linkList: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '0px',
    width: '100%'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  }
}

function Nav({ currentPage, handlePageChange }) {
  return (
    <Row style={ styles.row }>
      <ul style={ styles.linkList }>
      <li className='link-item'>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // set class name based on state of current page
          className={currentPage === 'About' ? 'active-link' : 'inactive-link'}
        >
          About Me
        </a>
      </li>
      <li className='link-item'>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // set class name based on state of current page
          className={currentPage === 'Portfolio' ? 'active-link' : 'inactive-link'}
        >
          Portfolio
        </a>
      </li >
      <li className='link-item'>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // set class name based on state of current page
          className={currentPage === 'Resume' ? 'active-link' : 'inactive-link'}
        >
          Resume
        </a>
      </li>
      <li className='link-item'>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'active-link' : 'inactive-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </Row>
    
  );
}

export default Nav;

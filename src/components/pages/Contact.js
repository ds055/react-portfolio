import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Contact() {

  // alert message used when input field empty or invalid
  const [alertMsg, setAlert] = useState('');

  // prevent page reload on submit
  const submitPressed = (e) => {
    e.preventDefault();
  }

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
    form: {
      width: '100%',
      height: '100%',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      paddingTop: '10px',
    },
    message: {
      paddingTop: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      height: '50%',
      width: '100%'
    },
    inputs: {
      width: '70%',
    },
    textarea: {
      width: '65%',
      height: '100%'
    },
    alert: {
      color: '#BF2402',
      fontWeight: 'bold'
    }
  }

  // validate text in email input
  const checkEmail = (text) => {
    // checks validity of entered text
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if statement based on truthiness of regex
    if (emailRegex.test(text)) {
      return true;
    } else {
      return false;
    }
  }

  // function runs when input fields change
  const inputChanged = (event) => {
    // if name input is empty, return name error alert
    if (event.target.name === 'name input'){
      if (event.target.value.length === 0) {
        setAlert("Uh, oh! Name cannot be empty!");
      }
      else {
        setAlert("");
      } //if email is invalid, alert user
    } else if (event.target.name === 'email input'){
      // gets true or false from checkEmail function
      const emailQM = checkEmail(event.target.value)
      if (emailQM === false){
        setAlert("Uh, oh! Please use a valid email!")
      } else {
        setAlert("");
      } //if input name not name or email, verify message length
    } else {
      if (event.target.value.length <= 0) {
        setAlert("Uh, oh! Please type a message!");
      } else {
        setAlert("");
      }
    }
  } 

  return (
    <Row style={styles.row}>
      <Col xs={12} md={8} style={styles.col}>
        {/* "page" title */}
        <h2>Contact Me</h2>
        <form style={styles.form} className='contact-form' onSubmit={submitPressed}>
          {/* Name input */}
          <div style={styles.section} className='name-input'>
            <label htmlFor='name input'>Name:</label>
            {/* when input unfocused, input validation is run */}
            <input
              type='text'
              name='name input'
              onBlur={inputChanged}
            />
          </div>
          {/* Email input and validation */}
          <div style={styles.section} className='email-input'>
            <label htmlFor='email input'>E-mail:</label>
            <input
              type='text'
              name='email input'
              onBlur={inputChanged}
            />
          </div>
          {/* Message input and validation */}
          <div style={styles.message} className='message-input'>
            <label htmlFor='message input'>Message:</label>
            <textarea
              name='message input'
              style={styles.textarea}
              onBlur={inputChanged}
            />
          </div>
          {/* Alert message container */}
          <div style={styles.section}>
            <p style={styles.alert}>{alertMsg}</p>
          </div>
          {/* Submit Button container */}
          <div style={styles.section}>
            <input
              type='submit'
            />
          </div>
        </form>
      </Col>
    </Row>
  );
}
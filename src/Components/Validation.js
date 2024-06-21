import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { db } from './Firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const InputValidation = ({ email, phone, message, onEmailChange, onPhoneChange, onMessageChange, onSubmit }) => {
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError(null);
    }

    onEmailChange(event);
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(value)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError(null);
    }

    onPhoneChange(event);
  };

  const handleMessageChange = (event) => {
    console.log(message,"message from handle Message")
    const { value } = event.target;

    if (value.length < 1) {
      setMessageError('Message cannot be empty');
    } else {
      setMessageError(null);
    }

    onMessageChange(event);
    console.log(messageError);
  };

  // const handleMessageChange = (event) => {
  //   const value = event.target.value;
  //   // ... (validation logic, if needed)
    
  //   console.log(value);  // Log after state update (optional)
  //   onMessageChange(value);  // Call the prop handler with the updated value (if needed)
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email,phone,message,"message from handle submit")
    // if (!emailError && !phoneError && !messageError) {
      if (email && phone && message) { // Ensure all fields are filled
        console.log("Inside If block")
        try {
          console.log("Inside try")
          const docRef = await addDoc(collection(db, "contacts"), {
            // email,
            // phone,
            // message,
            // timestamp: new Date(),
            first: "Ada",
            last: "Lovelace",
            born: 1815
          });
          console.log("Document written with ID: ", docRef.id);

          onSubmit();
          setSubmitted(true);
          console.log("post submission block")
          // Clear the form fields
          onEmailChange({ target: { value: '' } });
          onPhoneChange({ target: { value: '' } });   
          onMessageChange({ target: { value: '' } });
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      } else {
        console.log(message,"message from error handler")
        if (!email) setEmailError('Email is required');
        if (!phone) setPhoneError('Phone number is required');
        if (!message) setMessageError('Message is required');
      }
    // }
  };

  const handleRetrieve = async(event)=>{
    event.preventDefault();
    console.log("Retrieved button clicked")
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
  }

  return (
    <div>
      <button type="retrieve" onClick={handleRetrieve}>
            retrieve
          </button>
      {submitted ? (
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
          </div>
          <div>
            <label htmlFor={message}>Message:</label>
            <input
              type='text'
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              
            />
            {messageError && <p style={{ color: 'red' }}>{messageError}</p>}
          </div>
          <button type="submit" disabled={emailError || phoneError || messageError}>
            Submit
          </button>
        </form>
        
      )}
    </div>
  );
};

InputValidation.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  onEmailChange: PropTypes.func.isRequired,
  onPhoneChange: PropTypes.func.isRequired,
  onMessageChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InputValidation;

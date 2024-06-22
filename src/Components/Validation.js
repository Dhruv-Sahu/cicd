import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { db } from './Firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Validation.css';

const InputValidation = ({ Cname, email, phone, message, onNameChange, onEmailChange, onPhoneChange, onMessageChange, onSubmit }) => {
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    const { value } = event.target;
    if (value.trim().length === 0) {
      setNameError('Name cannot be empty');
    } else {
      setNameError(null);
    }
    onNameChange(event);
  };

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
    const { value } = event.target;
    if (value.length < 1) {
      setMessageError('Message cannot be empty');
    } else {
      setMessageError(null);
    }
    onMessageChange(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Cname && email && phone && message) {
      try {
        await addDoc(collection(db, "contacts"), {
          Cname,
          email,
          phone,
          message,
          timestamp: new Date(),
        });
        onSubmit();
        setSubmitted(true);
        onNameChange({ target: { value: '' } });
        onEmailChange({ target: { value: '' } });
        onPhoneChange({ target: { value: '' } });
        onMessageChange({ target: { value: '' } });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      if (!Cname) setNameError('Name is required');
      if (!email) setEmailError('Email is required');
      if (!phone) setPhoneError('Phone number is required');
      if (!message) setMessageError('Message is required');
    }
  };

  return (
    <div className="v-container">
      {submitted ? (
        <p className="v-successMessage">Your Query is submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="v-form">
          <div className="v-formGroup">
            <div className="v-formRow">
              <label htmlFor="Cname" className="v-label">Name:</label>
              <label htmlFor="email" className="v-label">Email:</label>
              <label htmlFor="phone" className="v-label">Phone Number:</label>
            </div>
            <div className="v-formRow">
              <input
                type="text"
                id="Cname"
                name="Cname"
                value={Cname}
                onChange={handleNameChange}
                className="v-input v-thirdInput"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="v-input v-thirdInput"
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="v-input v-thirdInput"
                required
              />
            </div>
            {nameError && <p className="v-errorMessage">{nameError}</p>}
            {emailError && <p className="v-errorMessage">{emailError}</p>}
            {phoneError && <p className="v-errorMessage">{phoneError}</p>}
          </div>
          <div className="v-formGroup">
            <label htmlFor="message" className="v-label">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              className="v-input v-fullInput"
              rows="6"
            />
            {messageError && <p className="v-errorMessage">{messageError}</p>}
          </div>
          <button type="submit" className="v-submitButton" disabled={nameError || emailError || phoneError || messageError}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

InputValidation.propTypes = {
  Cname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPhoneChange: PropTypes.func.isRequired,
  onMessageChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InputValidation;

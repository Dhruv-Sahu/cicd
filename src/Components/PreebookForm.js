import React, { useState } from 'react'
import Himage from '../Assets/Image/HRoadmap.png'
import Link from 'react-router-dom'
import "./Preebook.css"
import { useNavigate } from 'react-router-dom'

const PreebookForm = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({ name: "", phone: "", email: "", message: "" })
  const [amount, setAmount] = useState(5000)
  const [buttonname, setbuttonname] = useState("Pre-Book")
  const addNote = async (name, phone, email, message) => {
    const response = await fetch(`https://aerem.taparia11.repl.co/api/aeremfeedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, email, message })
    });
    const json = await response.json()
    console.log(json)
    console.log("Sending Feedback")
  }

  setTimeout(() => {
    setbuttonname("Pre-Book");
  }, 1000);


  const handleClick = (e) => {
    e.preventDefault();
    addNote(feedback.name, feedback.phone, feedback.email, feedback.message);
    setFeedback({ name: "", phone: "", email: "", message: "" })
    setbuttonname("Your booking request was sent Successfully!!");
  }
  const onChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value })
  }

  return (
    <div className='container-road' id="book-an-aerem">
      <a href="https://rzp.io/l/2Jp56Sc"><button className='btn' onClick={() => { console.log("Payment evoked") }} id="roadmap">Book Now!</button></a>
      {/* <button className='btn' onClick={handlePayment} id="roadmap">Pre-Book</button> */}
      <img src={Himage}></img>
      <div>
      </div>
    </div>

  )
}

export default PreebookForm
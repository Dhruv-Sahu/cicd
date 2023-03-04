import React from 'react'
import Popup from '../Popup'
import { useLocation } from 'react-router-dom'
import './CustomerInfo.css'
import QRImage from '../../Assets/Image/paymentQR.jpeg'
import roadmap from '../../Assets/Image/roadmap.png'
import Link, { Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// var amount = 270000;
// Line 141 is the possible line of change

const CustomerInfo = () => {
    // const [doubleB, setDoubleB] = useState(false)
    // const [buttonPopup, setButtonPopup] = useState(false)
    const preebook = { name: "", email: "", address: "", phone: "", quantity: "" }
    const [prebook, setprebook] = useState({ fname: "", lname: "", name: "", email: "", phone: "", address: "", zip: "", city: "", state: "", quantity: "1" })
    const [formValues, setFormValues] = useState(preebook);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // const [buttonname, setbuttonname] = useState("Pre-Book")
    // const addPrebook = async (fname, lname, email, phone, address, zip, city, state) => {
    //     const response = await fetch(`http://api.climeclabs.com/api/user/prebooking`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ fname, lname, email, phone, address, zip, city, state })
    //     });
    //     const json = await response.json()
    //     console.log(json)
    //     console.log("Prebooking Initiated")
    // }

    // setTimeout(() => {
    //     setbuttonname("Pre-Book");
    // }, 1000);

    // let navigate = useNavigate();
    // const payment = () => {
    //     let path = "https://paytm.me/R0-Z5Le";
    //     navigate(path);
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setDoubleB(true);

    // }
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setButtonPopup(true);
    //     // setDoubleB(true)
    //     addPrebook(prebook.fname, prebook.lname, prebook.email, prebook.phone, prebook.address, prebook.zip, prebook.city, prebook.state);
    //     setprebook({ fname: "", lname: "", email: "", phone: "", address: "", zip: "", city: "", state: "" })
    //     setbuttonname("Your booking request was sent Successfully!!");
    // }


    // const onChange = (e) => {
    //     setprebook({ ...prebook, [e.target.name]: e.target.value })
    // }

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    // const routePath = useLocation();
    // const onTop = () => {
    //     window.scrollTo(0, 0);
    // }
    // useEffect(() => {
    //     onTop()
    // }, [routePath]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!"
        }
        if (!values.phone) {
            errors.phone = "Phone is required!";
        } else if (values.phone.length !== 10) {
            errors.phone = "Phone number should have 10 digits!"

        }
        // else if (values.phone > 10) {
        //     errors.phone = "Phone number should have 10 digits only!"
        //     console.log(values.phone.length)
        // }
        if (!values.address) {
            errors.address = "Address is required!";
        } else if (values.address.length < 10) {
            errors.address = "Your Address should be more descriptive!"
        }
        if (!values.quantity) {
            errors.quantity = "Quantitiy is required";
        } else if (values.quantity < 1) {
            errors.quantity = "Minimum buy is 1 product!"
        }
        return errors;
    }

    const handlePayment = (e) => {
        e.preventDefault();
        console.log("Payment Evoked")
        const amount = 270000 * formValues.quantity;
        if (amount === "") {
            alert("please enter amount");
        } else {
            var options = {
                key: "rzp_test_nk9UIJqXnjQcIT",
                key_secret: "0FBhv0xKaLiqnY9Mxz9LKEFm",
                amount: amount,
                currency: "INR",
                name: "AEREM GO",
                description: "Product Payment",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name: formValues.name,
                    email: formValues.email,
                    contact: formValues.phone
                },
                notes: {
                    address: formValues.address
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }
    return (
        <div className='customerBG' id="customerBGTop"><div className="container-customer">
            {<h1 style={{ display: 'flex-center' }}>Payment Details</h1>}
            {<p>Please enter your shipping details, you will be contacted in 24 hrs!</p>}
            {/* <hr /> */}
            {<div className="form-customer">
                {/* <div className="fields-customer fields--2customer">
                    <label className="field-customer">
                        <span className="field__label-customer" htmlFor="firstname">First name</span>
                        <input className="field__input-customer" type="text" id="firstname"
                            name='fname'
                            value={prebook.fname}
                            onChange={onChange}
                            required />
                    </label>
                    <label className="field-customer">
                        <span className="field__label-customer" htmlFor="lastname">Last name</span>
                        <input className="field__input-customer" type="text" id="lastname"
                            onChange={onChange}
                            name='lname'
                            value={prebook.lname} required />
                    </label>
                </div> */}
                <label className="field-customer">
                    <span className="field__label-customer" htmlFor="email">Name</span>
                    <input className="field__input-customer" type="text" id="email"
                        name='name'
                        onChange={onChange}
                        value={formValues.name} required />
                </label>
                <p style={{ color: "red" }}>{formErrors.name}</p>
                <label className="field-customer">
                    <span className="field__label-customer" htmlFor="email">Email</span>
                    <input className="field__input-customer" type="text" id="email"
                        name='email'
                        onChange={onChange}
                        value={formValues.email} required />
                </label>
                <p style={{ color: "red" }}>{formErrors.email}</p>
                <label className="field-customer">
                    <span className="field__label-customer" htmlFor="address">Address</span>
                    <input className="field__input-customer" type="text" id="address"
                        name='address'
                        onChange={onChange}
                        value={formValues.address} required />
                </label>
                <p style={{ color: "red" }}>{formErrors.address}</p>

                <label className="field-customer">
                    <span className="field__label-customer" htmlFor="phone">Phone Number</span>

                    <input className="field__input-customer" type="text" id="address"
                        name='phone'
                        onChange={onChange}
                        value={formValues.phone} required />

                </label>
                <p style={{ color: "red" }}>{formErrors.phone}</p>

                <label className="field-customer">
                    <span className="field__label-customer" htmlFor="city">Quantity</span>
                    <input className="field__input-customer" type="text" id="quantity"
                        name='quantity'
                        onChange={onChange}
                        value={formValues.quantity} required />
                </label>
                <p style={{ color: "red" }}>{formErrors.quantity}</p>

                {/*<div className="fields-customer fields--3customer">
                    { <label className="field-customer">
                        <span className="field__label-customer" htmlFor="zipcode">Zip code</span>
                        <input className="field__input-customer" type="text" id="zipcode"
                            name='zip'
                            onChange={onChange}
                            value={prebook.zip} required />
                    </label> }
                    <label className="field-customer">
                        <span className="field__label-customer" htmlFor="city">City</span>
                        <input className="field__input-customer" type="text" id="city"
                            name='city'
                            onChange={onChange}
                            value={prebook.city} required />
                    </label>
                    <label className="field-customer">
                        <span className="field__label-customer" htmlFor="state">State</span>

                        <input className='field__input-customer' type="numbers" id="state" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                            name='state'
                            onChange={onChange}
                            value={prebook.state} required />

                    </label>

                </div>*/}

            </div>}
            <hr />

            {/* <hr /> */}
            {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Our UPI Code</h3>
                <img src={QRImage} className='QRImage'></img>
                <h5>inderan98-1@okhdfcbank</h5>
            </Popup> */}
            { }
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className='flex-containerb'><button className='button-customer' onClick={handlePayment}>Proceed to Pay!</button></div>
            ) : (
                <div className='flex-containerb'><button className='button-customer' onClick={handleSubmit}>Submit</button></div>
            )}
            {/* {<div className='flex-container2'>
                <button type='submit' className="button-customer" onClick={(e) => handleClick(e)}>Pay Through UPI</button>
                <button className="button-customer" onClick={() => { window.location.href = 'https://paytm.me/R0-Z5Le' }}>Pay Through Credit Card / DebitCard / Net Banking</button>
            </div>} */}
            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
        </div>
        </div>
    )
}

export default CustomerInfo
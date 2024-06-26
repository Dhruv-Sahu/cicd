import React from 'react'

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <h2><span>Contact</span> Us</h2>
            <p>We'll be happy to hear from you!</p>
          </div>
        </div>

        <div className="container mt-5">
          <div className="info-wrap">
            <div className="row">
              <div className="col-lg-3 col-md-6 info">
                <a target="_blank" href='https://goo.gl/maps/q44rBwspUtU5HuK26' >
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>3rd floor, SIDC<br />Main Campus, SRMIST, Chennai, 603203</p>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <>
                  <i className="bi bi-clock"></i>
                  <h4>Open Hours:</h4>
                  <p>Monday-Saturday:<br />09:00 AM - 18:00 PM</p>
                </>
              </div>

              <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <a href='mailto:support@climeclabs.com'>
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>support@climeclabs.com</p>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <a href='tel:+919123580564'>
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9123580564</p>
                </a>
              </div>
            </div>
          </div>



        </div>
      </section>
    </>
  )
}

export default Contact
import React from 'react'
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>Climec Lab</h3>
          <p>Made with Pride, Made for a Purpose</p>
          <div className="social-links">
            <a href='https://www.facebook.com/Aerem-Sustainable-Technology-104692632115964/' className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href='https://instagram.com/climeclabs/' className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href='https://www.linkedin.com/company/aerem19/' className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>Climec labs</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="/">Climec Labs</a>
          </div>
        </div>
        <div><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_L2725XzopLUGA5" async> </script> </form></div>
      </footer>
    </>
  )
}

export default Footer
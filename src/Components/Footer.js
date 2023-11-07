import React from 'react'
import ReactGA from 'react-ga4'
const Footer = () => {
  const handleFBClick = () => {
    console.log("Facebook Button Clicked")
    ReactGA.event({
      category: "Button Clicked from Footer",
      action: "Facebook footer Button",
      label: "FB Button from Footer is clicked"
    });
  };
  const handleIGClick = () => {
    // console.log("IG Button Clicked")
    ReactGA.event({
      category: "Button Clicked from Product Page",
      action: "IG Button",
      label: "FAQ Button from Product Page is clicked"
    });
  };
  const handleLKClick = () => {
    // console.log("LK Button Clicked")
    ReactGA.event({
      category: "Button Clicked from Product Page",
      action: "Product FAQ Button",
      label: "FAQ Button from Product Page is clicked"
    });
  };
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>Climec Lab</h3>
          <p>Made with Pride, Made for a Purpose</p>
          <div className="social-links">
            <a href='https://www.facebook.com/Aerem-Sustainable-Technology-104692632115964/' className="facebook" onClick={handleFBClick}><i className="bx bxl-facebook"></i></a>
            <a href='https://instagram.com/climeclabs/' className="instagram" onClick={handleIGClick}><i className="bx bxl-instagram"></i></a>
            <a href='https://www.linkedin.com/company/aerem19/' className="linkedin"><i className="bx bxl-linkedin" onClick={handleLKClick}></i></a>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>Climec labs</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="/">Climec Labs</a>
          </div>
          <div className="credits">
            <a href="/TC">Terms And Conditions </a>applied!
          </div>
        </div>
        <div><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_L2725XzopLUGA5" async> </script> </form></div>
      </footer>
    </>
  )
}

export default Footer
import React, { useState } from 'react'
import ReactGa from 'react-ga4'
import ap from '../Assets/Image/A1min.png'
import ag from '../Assets/Image/AeremGo.gif'
import a1 from '../Assets/Image/a12.png'
import ak from '../Assets/Image/NewPurifier2.jpeg'
import './Product.css'


const Product = () => {
  let AEREM1 = { "firstName": "AEREM Model A", "description": "Air quality of a jungle inside your four walls!", "point1": 'Oxygen generation of 22 trees!.', "point2": 'Viable & Eco-Friendly Solution.', "point3": 'Subscription cost of the filter is as low as Rs. 1.', "description2": "India's first Oxygen generating air purifier Provides you with oxygen worth of 22 trees while sequestering carbon dioxide and creating hyperlocal clean air zone." };
  let AEREMGO = { "firstName": "AEREM-GO ", "description": "Made with ❤ for your workspace", "point1": 'Inbuilt Planter.', "point2": 'Portable.', "point3": 'Smart Auto Purification', "description2": "A portable air purifier designed specially to reduce fatigue, stress and increases productivity & attention span, all this while imporving the air quality of your workspace" };
  const [product, setProduct] = useState({ firstName: "AEREM Go ", value: 1, booking: "Bookings have started!", description: "Made with ❤ for your workspace", point1: 'Inbuilt Planter.', point2: 'Portable.', point3: 'Smart Auto Purification', description2: "A portable air purifier designed specially to reduce fatigue, stress and increases productivity & attention span, all this while imporving the air quality of your workspace." })
  const [aeremcolor, setAeremcolor] = useState({ backgroundColor: "black", color: "white" })
  const [aeremgocolor, setAeremgocolor] = useState({ backgroundColor: "#1fc050", color: "white" })
  const changeToAeremgo = (e) => {
    e.preventDefault();
    setProduct({ firstName: "AEREM-GO ", value: 1, booking: "Bookings have started!", description: "Made with ❤ for your workspace", point1: 'Inbuilt Planter.', point2: 'Portable.', point3: 'Smart Auto Purification', description2: "A portable air purifier designed specially to reduce fatigue, stress and increases productivity & attention span, all this while imporving the air quality of your workspace." })
    setAeremgocolor({ backgroundColor: "#1fc050", color: "white" })
    setAeremcolor({ backgroundColor: "black", color: "white" })
  }
  const changeToAerem = (e) => {
    e.preventDefault();
    setProduct({ firstName: "AEREM Model A", value: 0, booking: "Coming Soon", description: "Air quality of a jungle inside your four walls!", point1: 'O2 Production equates to 22 trees!', point2: 'Tailored and Customisable filters!', point3: 'Subscription cost of the filter is as low as Rs. 1!', description2: "India's first Oxygen generating air purifier provides you with oxygen worth of 22 trees while sequestering carbon dioxide worth 6 trees. The bio-filter's lifetime is about 4-6 months and the residue can be used in your houseplants as fertilisers. Predicts and displays CO2 levels along with AQI, with the help of IoT through mobile app." })
    setAeremcolor({ backgroundColor: "#1fc050", color: "white" })
    setAeremgocolor({ backgroundColor: "black", color: "white" })
  }
  const handleBookNowClick = () => {
    console.log("FAQ Button Clicked")
    ReactGa.event({
      category: "Button Clicked from Product Page",
      action: "Product FAQ Button",
      label: "FAQ Button from Product Page is clicked"
    });
  };
  const handleFAQClick = () => {
    console.log("book now clicked from product")
    ReactGa.event({
      category: "Button Clicked from Product Page",
      action: "Product BookNow Button",
      label: "Book Now Button from Product Page is clicked"
    });
  };
  const handleView = () => {
    console.log("Product see button")
    ReactGa.event({
      category: "Button for next pic",
      action: "Product Image slider button",
      label: "Product page image Button to see next Product Page is clicked"
    });
  };
  return (
    <>
      <section id="events" className="events" style={{ padding: "25px 0px 60px 0px" }}>
        <div className="container ">
          <div className="section-title" >
            <pre style={{ overflow: "hidden" }}><h2>Get Your<span> AEREM!</span></h2></pre>
          </div>
          <div className="events-slider swiper">
            {/* <div className="swiper-wrapper">
            </div> */}
            <div className="swiper-slide">
              <div className="row event-item">
                <div className="col-lg-6">
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                    <div className="carousel-inner" data-bs-interval="false">
                      <div className="carousel-item active" data-bs-interval="false">
                        {product.value === 0 && <img src={ak} className="d-block w-100" alt="..." style={{ maxWidth: "80%", border: "5px solid transparent", borderColor: "#1fc050", borderRadius: "5px", marginLeft: "52px" }} data-bs-interval="false" />}

                        {product.value === 1 && <img src={ag} className="d-block w-100" alt="..." style={{ maxWidth: "80%", border: "5px solid transparent", borderColor: "#1fc050", borderRadius: "5px", marginLeft: "52px" }} data-bs-interval="false" />}
                      </div>
                      <div className="carousel-item">
                        {product.value === 0 && <img src={a1} className="d-block w-100" alt="..." style={{ height: "450px", maxWidth: "80%", border: "5px solid transparent", borderColor: "#1fc050", borderRadius: "5px", marginLeft: "52px" }} data-bs-interval="false" />}
                        {product.value === 1 && <img src={ap} className="d-block w-100" alt="..." style={{ height: "400px", maxWidth: "80%", border: "5px solid transparent", borderColor: "#1fc050", borderRadius: "5px", marginLeft: "52px" }} data-bs-interval="false" />}

                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" data-bs-interval="false" onClick={handleView}><span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" data-bs-interval="false" onClick={handleView}>
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>{product.firstName}</h3>

                  <div className="price">
                    <p><span>({product.booking})</span></p>
                  </div>
                  <p className="fst-italic">

                    {product.description}
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle"></i>{product.point1}</li>
                    <li><i className="bi bi-check-circle"></i>{product.point2}</li>
                    <li><i className="bi bi-check-circle"></i>{product.point3}</li>
                  </ul>
                  <p>
                    {product.description2}
                  </p>
                  <div className='d-flex justify-content-center'>
                    <a href="#FAQS" className="btn-book animate_animated animate_fadeInUp" style={{ borderRadius: '10px' }} onClick={handleFAQClick}>FAQ</a>
                    <div style={{ width: "70px", height: "auto", display: "inline-block" }}></div>
                    <a href="#book-an-aerem" className="btn-book animate_animated animate_fadeInUp" style={{ borderRadius: '10px' }} onClick={handleBookNowClick}>Book Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
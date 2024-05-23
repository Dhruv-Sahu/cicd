import React from 'react'
// import video from '../Assets/Image/pexels1.mp4'
// import video from 'https://ik.imagekit.io/DamnDaniel/pexels1.mp4'
import ReactGa from 'react-ga4'
import About from './About'
import Slider from './Slider'
import Us from './Us'
import Gallery from './Gallery'
import PreebookForm from './PreebookForm'
import Contact from './Contact'
import Special from './Special'
import Footer from './Footer'
import Product from './Product'
import './Home.css'


const Home = () => {
  const handleBookNowClick = () => {
    console.log("book now clicked")
    ReactGa.event({
      category: "Button Clicked from Hero Page",
      action: "Hero BookNow Button",
      label: "Book Now Button from Hero Page is clicked"
    });
  };
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <video className='' style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }} autoPlay loop muted>
                  <source src='https://ik.imagekit.io/DamnDaniel/pexels1.mp4' type='video/mp4' />
                  {/* video/ogg */}
                </video>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <br /><br /><br /><br /><br /><br /><br />
                    <h2 className="animate__animated animate__fadeInDown contenttop"><span></span></h2>
                    <p className="animate__animated animate__fadeInUp" style={{ fontWeight: "450", fontSize: "17px" }}>Climec Labs is an organic brand that offers an eco-friendly yet affordable solution to enhance indoor air quality. We take it upon ourselves to add a fresh breath of air into your lives!</p>
                    <div>
                      <a href="https://forms.fillout.com/t/8iYctbZ9AAus" className="btn-book animate__animated animate__fadeInUp scrollto" style={{ borderRadius: '10px' }} onClick={handleBookNowClick}>Sign me up!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Product />
      <Slider />
      <Us />
      <Gallery />
      <Contact />
      <Special />
      <PreebookForm />
      <Footer />
    </>
  )
}

export default Home
import React from 'react'

const Us = () => {
  return (
    <>
      <section id="why-us" className="why-us" style={{ backgroundColor: "#fff7ec" }}>
        <div className="container">

          <div className="section-title" >
            <h2>Why choose <span>Climec Labs?</span></h2>
            <p>Promising and delivering what's possible.</p>
          </div>

          <div className="row" >

            <div className="col-lg-4" >
              <div className="box" >
                <span data-aos="flip-down-">Our Mission</span>
                <h4>What We Aim for daily!</h4>
                <p>We, at ClimecLabs, develop sustainable solutions to help counter the rapidly declining air quality which is both environment and consumer-centric. Our goal is to devise a system with minimal waste generation while utilizing bio-filters to sequester carbon.</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                <span>Our Plan</span>
                <h4>How we are going forward</h4>
                <p>The goal is to gradually undo the damage that years of urbanization have caused while making Aerem a household name.</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                <span>Our Vision</span>
                <h4>Where we see ourselves</h4>
                <p>We strive to do our part in combating air pollution, one breath (step) at a time. In the long run, we aspire to play a crucial role in creating a positive impact on the current climate change scenario</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Us
import React from 'react';
import './Home.css'

const Gallery = () => {
  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container-fluid">

          <div className="section-title">
            <h2>Supporters for <span>Climec Labs</span></h2>
            <p>Be a Part of our Journey!</p>
          </div>
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://www.startupnexus.in/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/Nexus.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px',  marginLeft: '15px', marginTop:"10px" }} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://siicincubator.com/index.php" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/IITK.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px', marginTop: '10px' }} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://nsrcel.org/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/NSRCEL2.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px', marginTop: '13px'}} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://events.withgoogle.com/startups-for-sustainable-development/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/Google.png")} alt="" className="img-fluid " style={{  blockSize: '200px', marginRight: 'auto', marginTop: '10px' }} />
                </a>
              </div>
            </div>
          </div>
          <div className="row g-0">

            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://www.srmiic.com/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/index-removebg-preview.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px', marginLeft: '30px', marginBottom: "50px", marginTop: '10px' }} />

                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item ">

                <a href="https://www.mic.gov.in/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  {/* <h6 style={{ textAlign: 'left', padding: '10px' }}>IINC</h6> */}
                  <img src={require("../Assets/Image/iinc-removebg-preview.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px', marginTop: '10px' }} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item ">
                {/* <h3 style={{ textAlign: 'center' }}>MoE</h3> */}

                <a href="https://www.mic.gov.in/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  {/* <h6 style={{ textAlign: 'left', padding: '10px' }}>National Winner NIC!</h6> */}
                  <img src={require("../Assets/Image/moe-removebg-preview.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px' , marginTop: '10px'}} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item ">

                <a href="https://www.aicte-india.org/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/AICTE-removebg-preview.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px', marginRight: "auto" , marginTop: '10px'}} />
                </a>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://newgeniedc.iiita.ac.in/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/IEDC.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px', marginLeft: '15px' }} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://climatecollective.net/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/cc.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px' }} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://dst.gov.in/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/DST3.png")} alt="" className="img-fluid " style={{  blockSize: '200px' }} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">

              <div className="gallery-item ">
                <a href="https://www.startupindia.gov.in/" target="_blank" className="gallery-lightbox" rel="noreferrer">
                  <img src={require("../Assets/Image/StartupIndia.png")} alt="" className="img-fluid " style={{ borderRadius: '45px', blockSize: '200px', marginRight: 'auto' }} />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Gallery
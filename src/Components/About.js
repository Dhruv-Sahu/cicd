import React from 'react'

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container-fluid">

          <div className="row">
            {/* LZ-LKBsbAA4 */}
            <div className="col-lg-5 align-items-stretch video-box">
              <br /><br />

              <iframe className="frame-video" width="560" height="315" src="https://www.youtube.com/embed/Il0yLPAoqO8?si=F_f9iBDH8-qZG-ks?playlist=LZ-LKBsbAA4&loop=1"
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ border: "10px solid transparent", borderColor: "#1fc050", borderRadius: "15px", width: "100%" }}></iframe>
            </div>

            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

              <div className="content">
                <pre ><h3 className='heading-about'>Why<strong> The World Needs Aerem</strong></h3></pre>
                <p>
                  Every year, exposure to air pollution is estimated to cause 7 million premature deaths and result in the loss of millions more healthy years of life.
                </p>
                <p className="fst-italic">
                  In children, this could reduce lung growth and function,induce respiratory infections and aggravate asthma.
                </p>
                <p>
                  In adults, ischaemic heart disease and stroke are the most common causes of premature death attributable to outdoor air pollution. Recently evidence is also emerging of other effects such as diabetes and neurodegenerative conditions.
                  Our model aims to reduce pollution in the air, and improve its AQI. Furthermore it also absorbs CO2 and produces oxygen to improve O2 content in the surroundings.

                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default About
import React from 'react'

const Special = () => {
  return (
    <>
      <section id="FAQS" className="specials">
        <div className="container">

          <div className="section-title">
            <h2>Our <span>FAQ</span></h2>
            <p>Common Queries!</p>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Filters</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Costs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Policies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Services & Maintainence</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0" style={{ backgroundColor: "#fff6e8" }}>
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1" >
                      
                      <div className="accordion accordion-flush" id="accordionExample" style={{ backgroundColor: "#fff7ec" }}>
                        <div className="accordion-item border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingOne">
                            <button className="accordion-button border border-success border-5  rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                              What is so special about our filters?
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                              Unlike any ordinary purifier’s filter, our filter releases oxygen equivalent to that of 22 trees! It does so by using a combination of Customized HEPA and Activated carbon filter along with a special powerful bio-tech filter that can produce oxygen and also capture carbon-dioxide!
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border border-success border-5  rounded-3">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Which pollutants are targeted by Climec Labs?
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Currently we use a combination of 3 filters to generate Oxygen and filter out Particulate Matter(PM2.5,PM10), VOCs’(Smoke odour), harmful microorganisms(different types of bacteria and virus), Pet dander, pollen, air borne dust and other allergens as well and the list goes on. Contact us to get the complete list.
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border-success border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingThree">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              What is the Lifetime of these filters?
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              The Biotech filter has to be replaced biannualy and the inorganic filter has to be changed once in approximately 12 months.
                            </div>
                          </div>
                        </div>
                        <br></br>
                        <div className="accordion-item border border-success border-5  rounded-3">
                          <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              Why has my algae color changed?
                            </button>
                          </h2>
                          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              As the algae growth happens,CO2 is used for its respiration from your surrounding helps the algae for its growth and this lets you know that the product is reducing the CO2 levels from the surrounding giving you a healthy environment.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={require("../Assets/Image/NewPurifier2.jpeg")} alt="" className="img-fluid1" style={{ borderRadius: '50%', margin: "auto", height: "18rem", width: "18rem" }} />
                    </div>
                  </div>
                </div>
                {/* Costs */}
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <div className="accordion" id="accordionExample" style={{ backgroundColor: "#fff7ec" }}>
                        <div className="accordion-item border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingOne">
                            <button className="accordion-button border border-success border-5 collapsed rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What is the cost of the Product?
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                              <strong>Interested to own an Aerem? </strong>
                              Currently we are only open for pre-booking(+ extra benefits) and selling to a very specific demography fill up the form below and our representative will get back to you with the cost and extra benefits. <br></br>
                              <i>We promise, that we won’t share your details with any 3rd party app.</i>

                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border border-success border-5  rounded-3">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              What is the cost of the filter?
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>Your first year of doorstep service and filters are on us :).</strong><br></br>
                              After that you can either purchase the filters individually or subscribe to our service on an yearly basis. You can query us in the prebook form to know more about the various yearly plans we would contact you!
                              The combination of various inorganic filter for purifying air <strong> MRP - Rs.1599 </strong>
                              Organic Filter which is responsible for generating oxygen <strong>MRP - Rs.1999 </strong>
                              When subscribed to our yearly service these filters with excellent service of our team would be available at the comfort of your homes.
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border-success border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingThree">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              What is the cost of various subscription plans?
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              We offer various subscription plans.
                              Please query us on the prebook form for us to contact you and choose the one that suits your need!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2" style={{ borderRadius: "45px" }}>
                      <img src={require("../Assets/Image/NewPurifier2.jpeg")} alt="" className="img-fluid1" style={{ borderRadius: '50%', margin: "auto", height: "18rem", width: "18rem" }} />
                    </div>
                  </div>
                </div>
                {/* Delivery */}
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <div className="accordion" id="accordionExample" style={{ backgroundColor: "#fff7ec" }}>
                        <div className="accordion-item border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingOne">
                            <button className="accordion-button border border-success border-5 collapsed rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What is the cost of various subscription plans?
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                              We offer various subscription plans.
                              Please query us on the prebook form to be contacted and choose the one that suits your need!
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border border-success border-5  rounded-3">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              How often would servicing be provided?
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              We will be visiting you twice a year or biannually to make sure that the air purifier is working service of the unit twice a year at the cost of Rs.2999 only (Basic plan).
                              Inclusive of this,
                              you can go over the other plans
                              Pre-booking owners will have the benefit of availing special discounts on our services.
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border-success border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingThree">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              How to change our filters?
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              At the time of installation the service provider will explain the do’s and don’ts of how to use the air purifier and the same would also be mentioned in the instruction manual.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={require("../Assets/Image/NewPurifier2.jpeg")} alt="" className="img-fluid1" style={{ borderRadius: '50%', margin: "auto", height: "18rem", width: "18rem" }} />
                    </div>
                  </div>
                </div>
                {/* Products */}
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <div className="accordion" id="accordionExample" style={{ backgroundColor: "#fff7ec" }}>
                        <div className="accordion-item border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingOne">
                            <button className="accordion-button border border-success border-5 collapsed rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What are the different products available?
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                              Desktop model - AeremGo <br />
                              Domestic Model - Aerem Model A
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border border-success border-5  rounded-3">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              What is the Power Consumption of the product?
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Aerem covers an area of a master bedroom. i.e approximately 160 - 180 Sq. ft. The power consumption would be approximately 80-90 Watts, equivalent to that of a fan.
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border-success border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingThree">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Why algae? Has this idea been used elsewhere?
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Take a deep breath as you read this!! 70% to 80% of the Oxygen that you breathe-in is produced by microalgae. This principle is the backbone of the design of our air purifiers, helping it filter impurities and improve the quality of air you breathe at the same time.
                            </div>
                          </div>
                        </div>
                        <br></br>
                        <div className="accordion-item border border-success border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingFour">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              Why do I even need an air purifier?
                            </button>
                          </h2>
                          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Your health is one of the main reasons, the air you breath has a lot of toxins, thus deteriorating your lung capacity and thus making you feel out of breath or suffocated in your room in those situation to help you not feel those things, an air purifier is needed. Because the “fresh air” coming inside the window is not that fresh. Try checking out your AQI on https://www.aqi.in.
                            </div>
                          </div>
                        </div>
                        <br></br>
                        <div className="accordion-item border border-success border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingFive">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              How can you check if the air quality has improved in your surroundings after using our air purifier?
                            </button>
                          </h2>
                          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              The air quality  sensors will aid to update the AQI, PM2.5, VOC and CO2 both on the application and on the screen of Aerem. This in turn helps estimate the performance of the air purifier.
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={require("../Assets/Image/NewPurifier2.jpeg")} alt="" className="img-fluid1" style={{ borderRadius: '50%', margin: "auto", height: "18rem", width: "18rem" }} />
                    </div>
                  </div>
                </div>
                {/* Changes */}
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <div className="accordion" id="accordionExample" style={{ backgroundColor: "#fff7ec" }}>
                        <div className="accordion-item border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingOne">
                            <button className="accordion-button border border-success border-5 collapsed rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What's the Guarantee or the Warranty that we get?
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                              All our customers will receive 30 days of complete satisfaction or money back guarantee.
                              Pre-booking clients will receive a free 1 year warranty for your AEREM Air purifier covering all manufacturing defects, software issues, and electrical malfunctions or breakdowns.

                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border border-success border-5  rounded-3">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Do pre-booking customers get special treatment?
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Pre-booking owners will not only have the benefits of availing special discounts (with free lifetime supply of bio filters) but will also have a lifetime warrantee and a money back guarantee*.
                              <br />
                              Money back guarantee- Complete refund in case the product is unsatisfactory.
                              <br></br>
                              <strong>*terms and conditions apply</strong>

                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="accordion-item border border-success border border-success border-5  rounded-3">
                          <h2 className="accordion-header " id="headingThree">
                            <button className="accordion-button collapsed border border-success border-5  rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              How to schedule maintenance?
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Service will be scheduled every six months from the day of installation for the maintenance of the air purifier.

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={require("../Assets/Image/NewPurifier2.jpeg")} alt="" className="img-fluid1" style={{ borderRadius: '50%', margin: "auto", height: "18rem", width: "18rem" }} />
                    </div>
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

export default Special
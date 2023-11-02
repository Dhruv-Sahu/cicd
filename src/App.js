import React, { useEffect } from "react";
import Home from "./Components/Home";
import TermsAndConditions from "./Components/TC";

// import Prebook from "./Components/Prebook";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import CustomerInfo from "./Components/CustomerInfo/CustomerInfo";
import { hotjar } from 'react-hotjar';
import ReactGA from "react-ga4";



hotjar.initialize('3575186')
ReactGA.initialize("G-KMGRJZSFQK");

function App() {
  useEffect(() => {
    const trackPageView = () => {

      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
        title: "Home Page"
      });
    };

    trackPageView();
  }, []);
  return (
    <>
      {/* <GA4ReactProvider ga={ga4react}> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/TC" element={<TermsAndConditions />} />
          {/* <Route exact path="/customerInfo" element={<CustomerInfo />} /> */}
        </Routes>
      </Router>
      {/* </GA4ReactProvider> */}
    </>
  );
}

export default App;

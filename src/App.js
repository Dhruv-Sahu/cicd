import React from "react";
import Home from "./Components/Home";
import Prebook from "./Components/Prebook";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CustomerInfo from "./Components/CustomerInfo/CustomerInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/prebook" element={<Prebook />} />
          <Route exact path="/customerInfo" element={<CustomerInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

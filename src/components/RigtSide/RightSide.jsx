import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import Footer from "../Footer/Footer";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
       
        <Updates />
      </div>
      <div className="footer">
     
        <Footer />
      </div> 
    </div>
  );
};

export default RightSide;

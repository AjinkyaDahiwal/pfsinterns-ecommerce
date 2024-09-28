import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          
          <p>acxksahdkashdkasdjlkahsdalskadjlkaasjdlajdlasfjkashdkjhaskjhfnasasdsadasdasdasdasdadsadasdasdasddasdasdsa Data Usage: "The information collected is used to process orders, enhance user experience, and improve our services."</p>
          <p>Cookies: "Our platform uses cookies to provide a personalized shopping experience and track site activity."</p>
          <p>Data Protection: "We employ security measures to protect your personal data from unauthorized access, disclosure, or alteration."</p>
          <p>Third-Party Sharing: "We do not share your personal data with third parties except for trusted partners necessary to fulfill services like payment processing."</p>
  
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
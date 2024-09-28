import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          
          
          Welcome to Apni Dukan, the innovative e-commerce       Apni Dukan app is brought to you by Dahiwal InfoTech Pvt. Ltd. As a forward-thinking technology company, we've created Apni Dukan to revolutionize your online shopping experience. Our app offers a wide range of products, from everyday essentials to unique finds, all at your fingertips. Dahiwal InfoTech Pvt. Ltd. is committed to leveraging cutting-edge technology to make shopping convenient, secure, and enjoyable for our customers. With Apni Dukan, we bring the marketplace to your mobile device, offering competitive prices, reliable delivery, and exceptional customer service. Experience the future of e-commerce with Dahiwal InfoTech's Apni Dukan - your personal shop, anytime, anywhere.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="about-us py-5"> {/* ID matches href in navbar */}
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center mb-5">
          C.H.I has been a leader in the transportation industry for over 20 years. 
          We pride ourselves on delivering reliable, efficient, and professional services tailored 
          to meet the unique needs of our clients. Our dedicated team of professionals ensures that 
          every shipment is handled with the utmost care, commitment, and excellence.
        </p>
        <div className="row">
          <div className="col-md-6">
            <p>
              Our fleet of modern trucks is equipped with the latest technology to ensure that 
              your goods arrive on time, every time. We offer a range of services including 
              over-the-road (OTR) transportation, dedicated services, expedited shipping, and 
              24/7 dispatch support. At C.H.I, we understand the importance of 
              reliability and customer satisfaction, which is why we strive to exceed expectations 
              with every delivery.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Our mission is to be the transportation partner of choice, known for our commitment 
              to safety, sustainability, and service excellence. We are constantly innovating and 
              adapting to the evolving needs of the industry, and our team is always ready to 
              tackle new challenges. Join us on our journey as we continue to set the standard in 
              the trucking industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

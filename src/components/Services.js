// src/components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Expedited Shipping',
      description: 'Fast and reliable expedited shipping for urgent delivery needs across the country.',
      image: '/image2.png',
    },
    {
      title: '24/7 Dispatch',
      description: 'Round-the-clock dispatch services to ensure your shipments are on time, every time.',
      image: '/image3.png',
    },
    {
      title: 'Dedicated Services',
      description: 'Tailored services dedicated to your specific business needs, ensuring flexibility and control.',
      image: '/hero-banner.jpg',
    },
  ];

  return (
    <section id="services" className="services py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-heading">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="service-card card h-100 shadow">
                <img
                  src={service.image}
                  className="card-img-top service-img"
                  alt={service.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title service-title">{service.title}</h5>
                  <p className="card-text service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Areas Serviced Section */}
        <div className="areas-serviced">
          <h2 className="text-center">Areas Serviced</h2>
          <p className="text-center">
            We proudly serve all 48 contiguous states in the U.S., ensuring reliable and efficient transportation services across the nation.
          </p>
          <img src="/tealmap.png" alt="Serviced Areas Map" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Services;

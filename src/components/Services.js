// src/components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    { title: 'Dedicated', description: 'Tailored to meet your unique shipping needs.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Expedited Team', description: 'Swift and efficient delivery through dedicated teams.', image: 'https://via.placeholder.com/300x200' },
    { title: '24/7 Dispatch', description: 'Round-the-clock support for your shipments.', image: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 text-center">
                <img src={service.image} className="card-img-top" alt={service.title} />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <a href="#" className="btn btn-link">→</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

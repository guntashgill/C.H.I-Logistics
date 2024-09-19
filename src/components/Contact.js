// src/components/Contact.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-form py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <p className="text-center mb-4">For inquiries or to apply for a driving position, please <a href="#">click here</a>.</p>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name *</label>
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email *</label>
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Phone Number *</label>
                <input type="tel" className="form-control" placeholder="Phone" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Message *</label>
                <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">Send Message</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h5>Get in Touch</h5>
              <p className="text-muted mb-4">Feel free to reach out to us for any inquiries or information.</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <FaMapMarkerAlt className="me-2" /> 4616 S Cedar Ave, Fresno, CA 93725
                </li>
                <li className="mb-3">
                  <FaPhone className="me-2" /> Call or Text: (559) 497-1301
                </li>
                <li className="mb-3">
                  <FaEnvelope className="me-2" /> Email: accounts@chilogistic.com
                </li>
                <li className="mb-3">
                  <FaEnvelope className="me-2" /> Dispatch: accounts@chilogistic.com
                </li>
                <li className="mb-3">
                  <FaEnvelope className="me-2" /> Accounting: accounts@chilogistic.com
                </li>
                <li className="mb-3">
                  <FaEnvelope className="me-2" /> Safety: accounts@chilogistic.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

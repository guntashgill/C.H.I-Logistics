import React, { useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom'; // Import Link for routing

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mqvlr3a', // Replace with your EmailJS Service ID
      'template_4rwr0yo', // Replace with your EmailJS Template ID
      form.current,
      'n1brq6LJfINz3naGv' // Replace with your EmailJS User ID
    )
    .then(
      (result) => {
        alert('Message Sent Successfully!');
      },
      (error) => {
        alert('Message Failed to Send. Please Try Again.');
      }
    );
  };

  return (
    <section id="contact" className="contact-form py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <p className="text-center mb-4">
          For inquiries or to apply for a driving position, please{' '}
          <Link to="/apply" className="text-primary">
            click here
          </Link>.
        </p>
        <div className="row">
          {/* Contact Form Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Send Us a Message</h5>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label className="form-label">Your Name *</label>
                    <input type="text" className="form-control" name="from_name" placeholder="Name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Email *</label>
                    <input type="email" className="form-control" name="from_email" placeholder="Email" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Phone Number *</label>
                    <input type="tel" className="form-control" name="from_phone" placeholder="Phone" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Message *</label>
                    <textarea className="form-control" name="message" rows="4" placeholder="Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Get in Touch</h5>
                <p className="text-muted mb-4">Feel free to reach out to us for any inquiries or information.</p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      href="https://www.google.com/maps/place/4616+S+Cedar+Ave,+Fresno,+CA+93725"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark text-decoration-none"
                    >
                      <FaMapMarkerAlt className="me-2" /> 4616 S Cedar Ave, Fresno, CA 93725
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="tel:+15594971301"
                      className="text-dark text-decoration-none"
                    >
                      <FaPhone className="me-2" /> Call or Text: (559) 497-1301
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="mailto:accounts@chilogistic.com"
                      className="text-dark text-decoration-none"
                    >
                      <FaEnvelope className="me-2" /> Email: accounts@chilogistic.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

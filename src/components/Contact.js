// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-form">
      <div className="container">
        <h2 className="text-center mb-5">Contact</h2>
        <p className="text-center mb-4">To apply for a driving position, please click <a href="#">here</a></p>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Enter Your Name *</label>
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Your Email *</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Your Phone Number *</label>
                <input type="tel" className="form-control" placeholder="Phone" />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Your Message Here *</label>
                <textarea className="form-control" rows="4" placeholder="Add your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-success">Send</button>
            </form>
          </div>
          <div className="col-md-6">
            <h5>General Information</h5>
            <p><br />4616 S Cedar Ave, Fresno, CA 93725</p>
            <p>Call or Text: (559) 497-1301<br />Fax: (559) 497-1301</p>
            <p>Email Us: info@.com</p>
            <p>Dispatch: dispatch@t.com</p>
            <p>Accounting: accounting@tr.com</p>
            <p>Safety: claims@t.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

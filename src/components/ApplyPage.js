// src/components/ApplyPage.js
import React from 'react';

const ApplyPage = () => {
  return (
    <div className="apply-page py-5">
      <div className="container">
        <h2 className="text-center mb-4">Drive for C.H.I</h2>
        <p className="text-center mb-5">
          We are always looking for skilled and motivated drivers to join our team. At C.H.I
          Logistics, we offer competitive pay, great benefits, and the opportunity to be a part of 
          a dedicated and professional team.
        </p>
        <form className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label className="form-label">Full Name *</label>
            <input type="text" className="form-control" placeholder="Enter your full name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address *</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number *</label>
            <input type="tel" className="form-control" placeholder="Enter your phone number" />
          </div>
          <div className="mb-3">
            <label className="form-label">Experience *</label>
            <textarea className="form-control" rows="4" placeholder="Describe your driving experience"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;

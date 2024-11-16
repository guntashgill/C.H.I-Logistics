import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ApplyPage = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendApplication = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mqvlr3a', // Replace with your EmailJS Service ID
      'template_qmi6bqj', // Replace with your EmailJS Template ID
      form.current,
      'n1brq6LJfINz3naGv' // Replace with your EmailJS Public Key (User ID)
    )
    .then(
      (result) => {
        alert('Application Sent Successfully!');
        navigate('/'); // Redirect to the main page after success
      },
      (error) => {
        alert('Failed to Send Application. Please Try Again.');
      }
    );
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Apply for a Position</h2>
      <p className="text-center mb-4">
        We're excited to have you join our team. Please fill out the application form below with accurate details and submit it. 
        We will review your application and get back to you promptly. 
        Your driving experience and skills are vital to us, and we look forward to learning more about you.
      </p>
      <form ref={form} onSubmit={sendApplication} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            className="form-control"
            name="from_name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            className="form-control"
            name="from_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            className="form-control"
            name="from_phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Experience *</label>
          <textarea
            className="form-control"
            name="experience"
            rows="4"
            placeholder="Describe your driving experience"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyPage;

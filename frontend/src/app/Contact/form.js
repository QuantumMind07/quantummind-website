// main.js
"use client";
import { useState } from "react";
import React from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyEmail: "",
    companyName: "",
    jobTitle: "",
    country: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">What Can We Build for You?</h1>
      <p className="mb-6">Let’s discuss your ideas. We will send you an NDA before we talk. All the information is kept confidential.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name*" required className="p-2 border rounded" />
          <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name*" required className="p-2 border rounded" />
          <input name="companyEmail" value={formData.companyEmail} onChange={handleChange} type="email" placeholder="Company Email*" required className="p-2 border rounded col-span-2" />
          <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name*" required className="p-2 border rounded col-span-2" />
          <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title*" required className="p-2 border rounded col-span-2" />
          <select name="country" value={formData.country} onChange={handleChange} required className="p-2 border rounded col-span-2">
            <option value="">Select a country*</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments*" maxLength={255} required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Start a conversation</button>
      </form>
    </div>
  );
}
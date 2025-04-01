"use client";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4">
        By accessing or using the services provided by Quantum Mind, you agree to abide by these Terms and Conditions. 
        If you do not agree with these terms, you must immediately discontinue the use of our services.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
      <p className="mb-4">
        Quantum Mind offers AI-powered technology solutions, including but not limited to:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Conversational AI and chatbot development</li>
        <li>Mobile and web application development</li>
        <li>Financial and business automation solutions</li>
        <li>AI-driven analytics and consulting services</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">2. User Responsibilities</h2>
      <p className="mb-4">
        By using our services, you agree to:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Provide accurate and up-to-date information when required.</li>
        <li>Use our platform responsibly and in compliance with applicable laws.</li>
        <li>Not engage in fraudulent, abusive, or illegal activities.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. Fees and Payments</h2>
      <p className="mb-4">
        Certain services are offered on a subscription or pay-per-use basis. Users are responsible for timely payments.
      </p>

      <h2 className="text-2xl font-semibold mt-6">4. Contact Information</h2>
      <p className="mb-4">For any inquiries, please contact us at: <strong>info@quantummind.solutions</strong></p>
    </div>
  );
};

export default Page;

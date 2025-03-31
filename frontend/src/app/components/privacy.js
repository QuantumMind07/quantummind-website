'use client';

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>

      <section>
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p><strong>Personal Data:</strong> Name, phone number, email address, and preferences provided during registration.</p>
        <p><strong>Usage Data:</strong> User interactions with our services, activity logs, and feedback.</p>
        <p><strong>Device Data:</strong> IP address, operating system, device type, and browser details.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5">
          <li>Provide, operate, and improve our services.</li>
          <li>Personalize user experiences and offer AI-driven recommendations.</li>
          <li>Communicate updates, promotions, or technical notices.</li>
          <li>Analyze user behavior to enhance service quality.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. Data Sharing</h2>
        <p>We may share data with third-party service providers who comply with strict data protection standards.</p>
        <p>No data is sold or shared without user consent, except where legally required.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p>We implement encryption and security protocols to safeguard user data from unauthorized access or breaches.</p>
        <p>Regular security audits ensure compliance with industry standards.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. User Rights</h2>
        <ul className="list-disc pl-5">
          <li>Access, update, or correct their data.</li>
          <li>Request deletion of their data.</li>
          <li>Withdraw consent for specific data processing activities.</li>
        </ul>
        <p>Requests can be submitted via <a href="mailto:your@email.com" className="text-blue-500 underline">your@email.com</a>.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">6. Cookies and Tracking</h2>
        <p>Cookies are used to enhance user experience by tracking preferences and improving functionality.</p>
        <p>Users can manage cookie settings through their browser.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">7. Third-Party Links</h2>
        <p>Our services may link to external websites or platforms. Quantum Mind is not responsible for the privacy practices of third-party services.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">8. Data Retention</h2>
        <p>User data is retained only as long as necessary to provide services or as required by law.</p>
        <p>Data deletion requests will be processed as per applicable regulations.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">9. Updates to Privacy Policy</h2>
        <p>This policy may be updated periodically. Users will be notified of significant changes.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">10. Contact Information</h2>
        <p>For privacy-related inquiries, contact us at: <span className="font-semibold">918452034160</span></p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
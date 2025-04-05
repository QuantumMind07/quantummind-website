"use client";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <h1 className="text-7xl font-bold text-center text-gray-900 mb-6">
        Terms & Conditions
      </h1>

      <p className="text-base text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
        Please read these Terms & Conditions carefully before accessing or using the services provided by Quantum Mind. By continuing to use our services, you agree to be bound by these terms.
      </p>

      <section className="mb-10">
        <p className="text-base text-center leading-relaxed">
          By accessing or utilizing the services offered by Quantum Mind, you acknowledge and agree to comply with the following Terms & Conditions. If you do not agree with any part of these terms, you must discontinue use of our services immediately.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>Scope of Services:</strong> Quantum Mind provides innovative AI-based solutions. These include, but are not limited to, Conversational AI systems, mobile and web applications, business and financial automation tools, and AI-powered analytics and strategic consulting.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>Agreement:</strong> By using any of our services, you agree to be legally bound by the terms outlined herein.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">2. User Responsibilities</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>Accurate Information:</strong> You are required to provide complete and accurate details whenever requested during your use of Quantum Mind services.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>Compliance:</strong> All activities on the platform must comply with relevant laws, regulations, and industry standards.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>Prohibited Activities:</strong> Any fraudulent, malicious, or unauthorized activity is strictly forbidden and may result in service suspension or legal action.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">3. Fees and Payments</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>Billing Structure:</strong> Some services are billed on a subscription or pay-per-use basis. Payment terms will be clearly stated at the point of transaction or agreement.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>User Responsibility:</strong> It is your responsibility to ensure timely and accurate payments. Quantum Mind reserves the right to suspend or terminate services for non-payment.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">4. Contact Information</h2>
        <p className="text-base leading-relaxed">
          <strong>Inquiries:</strong> For any questions, concerns, or further clarification regarding these Terms & Conditions, please contact us at:{" "}
          <span className="font-medium text-gray-900">info@quantummind.solutions</span>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>Ownership:</strong> All content, including but not limited to logos, trademarks, source code, AI algorithms, and written materials, are the exclusive property of Quantum Mind.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>Restrictions:</strong> You may not reproduce, redistribute, or exploit any part of our intellectual property without explicit written consent.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>No Warranty:</strong> Our services are provided "as-is" without any warranties, express or implied.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>Liability Cap:</strong> Quantum Mind shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">7. Privacy Policy</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>Data Usage:</strong> We respect your privacy. Please refer to our <Link href={"/Privacy"} className="underline text-blue-600 cursor-pointer">Privacy Policy</Link> to understand how we collect, use, and store your personal data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">8. Termination</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>Breach:</strong> Quantum Mind reserves the right to suspend or terminate your access to our services for any violation of these terms without prior notice.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>Data Retention:</strong> Upon termination, your access to data or services may be revoked, and we may delete your information based on our data retention policy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">9. Modifications to Terms</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>Updates:</strong> Quantum Mind reserves the right to modify or update these Terms & Conditions at any time. Users will be notified of significant changes via email or platform notifications.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>Continued Use:</strong> Continued usage of the platform after such updates constitutes acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">10. Governing Law</h2>
        <p className="text-base leading-relaxed mb-4">
          <strong>Jurisdiction:</strong> These Terms & Conditions are governed by the laws of India. Any disputes arising out of the use of our services shall fall under the jurisdiction of the courts located in Mumbai, Maharashtra.
        </p>
      </section>

      <p className="text-sm text-center text-gray-500 mt-12">
        Last updated: April 5, 2025
      </p>
    </div>
  );
};

export default Page;

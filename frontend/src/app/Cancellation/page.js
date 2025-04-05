"use client";

import React from "react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h1 className="text-7xl font-bold text-center">
        Refund and Cancellation Policy
      </h1>
      <p className="text-base text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
        Please review this Refund & Cancellation Policy carefully before
        proceeding with any transactions with Quantum Mind. By purchasing or
        subscribing to our services, you acknowledge and agree to the terms
        outlined below.
      </p>

      <section className="mb-10">
        <p className="text-base text-center leading-relaxed">
          By initiating a transaction with Quantum Mind, you confirm that you
          understand and accept our Refund & Cancellation Policy. If you
          disagree with any portion of this policy, you are advised not to
          proceed with the transaction or may contact us for clarification
          before continuing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">1. Refund Policy</h2>
        <p>
          <strong>Refunds are granted under the following conditions:</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>
            Technical issues preventing access to premium services for more than
            5 consecutive days.
          </li>
          <li>Duplicate payments made for the same subscription or service.</li>
        </ul>
        <p>
          <strong>Refunds are not applicable for:</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Change of mind after purchase.</li>
          <li>Partial usage of subscription benefits.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. Cancellation Policy</h2>
        <p>
          Users can cancel their subscription at any time through their account
          settings or by contacting support.
        </p>
        <p>
          Cancellation stops recurring charges from the next billing cycle but
          does not provide refunds for the current billing cycle.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. Refund Request Process</h2>
        <p>
          Refund requests must be submitted via{" "}
          <a href="mailto:your@email.com" className="text-blue-500 underline">
          info@quantummind.solutions
          </a>{" "}
          with proof of payment and a detailed explanation of the issue.
        </p>
        <p>If approved, refunds will be processed within 7-10 business days.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Handling Disputes</h2>
        <p>
          For disputes regarding refunds or cancellations, please contact us at{" "}
          <a href="mailto:your@email.com" className="text-blue-500 underline">
          info@quantummind.solutions
          </a>
          .
        </p>
        <p>We aim to resolve all disputes within 5 working days.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. Contact Information</h2>
        <p>
          For any refund or cancellation queries, contact us at:{" "}
          <span className="font-semibold">918452034160</span>
        </p>
      </section>
    </div>
  );
};

export default Page;

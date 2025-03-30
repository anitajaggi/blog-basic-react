import React from "react";

export const Privacy = () => {
  return (
    <main>
      <div className="container mx-auto p-6">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="text-3xl my-4 font-bold mb-4">Privacy Policy</h1>
          </div>
        </div>
        <div className="row p-terms py-3">
          <div className="col-md-12">
            <p className="mb-4">
              Welcome to our blog. Your privacy is important to us. This policy
              explains how we collect, use, and protect your personal
              information.
            </p>
            <h4 className="text-xl font-semibold mt-4">
              1. Information We Collect
            </h4>
            <p className="mb-4">
              We collect different types of information in order to provide and
              improve our services:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Personal Data:</strong> Name, email, and other contact
                details you provide.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our blog (e.g., pages visited, time spent).
              </li>
              <li>
                <strong>Cookies & Tracking Data:</strong> We use cookies and
                similar tracking technologies.
              </li>
            </ul>

            <h4 className="text-xl font-semibold mt-4">
              2. How We Use Your Information
            </h4>
            <p className="mb-4">We use your data for the following purposes:</p>
            <ul className="list-disc list-inside mb-4">
              <li>
                To personalize your experience and provide relevant content.
              </li>
              <li>To send newsletters, updates, or promotional material.</li>
              <li>To improve our website and enhance security.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-4">
              3. Sharing Your Information
            </h4>
            <p className="mb-4">
              We do not sell or rent your personal data. However, we may share
              data with:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Third-party service providers who help operate our blog.</li>
              <li>Legal authorities if required by law.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-4">
              4. Cookies and Tracking Technologies
            </h4>
            <p className="mb-4">
              We use cookies to improve your browsing experience. You can
              disable cookies in your browser settings.
            </p>

            <h4 className="text-xl font-semibold mt-4">5. Your Rights</h4>
            <p className="mb-4">
              You have the right to access, modify, or delete your personal
              data. Contact us to exercise these rights.
            </p>

            <h4 className="text-xl font-semibold mt-4">6. Data Security</h4>
            <p className="mb-4">
              We use industry-standard security measures to protect your data
              from unauthorized access.
            </p>

            <h4 className="text-xl font-semibold mt-4">
              7. Changes to This Policy
            </h4>
            <p className="mb-4">
              We may update this privacy policy from time to time. Please review
              it periodically.
            </p>

            <p className="mt-6 mb-0 pb-2 text-gray-600">
              Last updated: March 2025
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

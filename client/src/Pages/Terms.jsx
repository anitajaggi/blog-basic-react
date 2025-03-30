import React from "react";

export const Terms = () => {
  return (
    <main>
      <div className="container mx-auto p-6">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="text-3xl my-4 font-bold mb-4">
              Terms and Conditions
            </h1>
          </div>
        </div>
        <div className="row p-terms py-3">
          <div className="col-md-12">
            <p className="mb-4">
              Welcome to our blog! By using our website, you agree to the
              following terms and conditions.
            </p>

            <h4 className="text-xl font-semibold mt-4">
              1. Acceptance of Terms
            </h4>
            <p className="mb-4">
              By accessing our blog, you agree to comply with these terms. If
              you do not agree, please do not use our site.
            </p>

            <h4 className="text-xl font-semibold mt-4">2. Use of Content</h4>
            <p className="mb-4">
              All content on this site, including articles, images, and
              graphics, is owned by us. You may not:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Copy, modify, or distribute content without permission.</li>
              <li>
                Use content for commercial purposes without authorization.
              </li>
            </ul>

            <h4 className="text-xl font-semibold mt-4">3. User Conduct</h4>
            <p className="mb-4">
              Users are expected to interact respectfully. You agree not to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Post spam, offensive, or illegal content.</li>
              <li>Attempt to hack or disrupt our website.</li>
            </ul>

            <h4 className="text-xl font-semibold mt-4">4. Disclaimers</h4>
            <p className="mb-4">
              We provide content "as is" without guarantees. We are not
              responsible for errors or third-party links.
            </p>

            <h4 className="text-xl font-semibold mt-4">
              5. Limitation of Liability
            </h4>
            <p className="mb-4">
              We are not liable for damages arising from the use of our website.
            </p>

            <h4 className="text-xl font-semibold mt-4">6. Changes to Terms</h4>
            <p className="mb-4">
              We reserve the right to update these terms at any time. Please
              review them periodically.
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

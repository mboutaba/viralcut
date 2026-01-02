"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-bold">ShortGen</a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 2, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to ShortGen ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service at shortgen.com (the "Service").
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed">We collect the following personal information when you register and use our Service:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>Name and email address</li>
              <li>Payment information (processed securely by 2Checkout)</li>
              <li>Account credentials (encrypted passwords)</li>
              <li>Profile information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Usage Information</h3>
            <p className="text-gray-700 leading-relaxed">We automatically collect certain information about your device and how you interact with our Service:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and features used</li>
              <li>Videos generated and templates used</li>
              <li>Date and time of visits</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Cookies and Tracking</h3>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our Service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>To provide and maintain our Service</li>
              <li>To process your payments and manage your subscription</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support and respond to your requests</li>
              <li>To monitor usage and improve our Service</li>
              <li>To detect and prevent technical issues and fraud</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To enforce our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed">We may share your information with third parties in the following situations:</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Service Providers</h3>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li><strong>2Checkout:</strong> Payment processing</li>
              <li><strong>Email Service Provider:</strong> Transactional and marketing emails</li>
              <li><strong>Analytics Providers:</strong> Usage analytics and monitoring</li>
              <li><strong>Cloud Storage:</strong> Video and data hosting</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose your information if required by law or in response to valid requests by public authorities (e.g., court orders or government agencies).
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              If we are involved in a merger, acquisition, or sale of assets, your information may be transferred. We will provide notice before your information is transferred.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted password storage</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Secure payment processing through 2Checkout</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed">You have the following rights regarding your personal information:</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Access and Correction</h3>
            <p className="text-gray-700 leading-relaxed">
              You can access and update your personal information through your account settings.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Data Portability</h3>
            <p className="text-gray-700 leading-relaxed">
              You have the right to request a copy of your data in a structured, commonly used format.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Deletion</h3>
            <p className="text-gray-700 leading-relaxed">
              You can request deletion of your account and personal information at any time through your account settings or by contacting us.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.4 Marketing Communications</h3>
            <p className="text-gray-700 leading-relaxed">
              You can opt-out of marketing emails by clicking the "unsubscribe" link in any marketing email or through your account settings.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.5 GDPR Rights (EU Users)</h3>
            <p className="text-gray-700 leading-relaxed">
              If you are in the European Economic Area, you have additional rights including the right to object to processing and the right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide our Service and comply with legal obligations. When you delete your account, we will delete or anonymize your information within 30 days, except where we are required to retain it for legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700"><strong>Email:</strong> boutabamohammed2@gmail.com</p>
              <p className="text-gray-700 mt-2"><strong>Address:</strong> [BD HAY RIADI H20 NR5]</p>
              <p className="text-gray-700 mt-2"><strong>Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t">
          <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <a href="/terms" className="hover:text-gray-900">Terms of Service</a>
          </div>
          <p className="text-sm text-gray-500 mt-4">© 2026 ShortGen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
"use client";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 2, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and ShortGen ("Company," "we," "us," or "our") concerning your access to and use of the shortgen.com website and our video generation service (collectively, the "Service").
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed">
              To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and current.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Account Security</h3>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>Use a strong, unique password</li>
              <li>Not share your account credentials with others</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Account Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account at any time if you violate these Terms or engage in conduct that we determine, in our sole discretion, is inappropriate or harmful to the Service or other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Service Description</h2>
            <p className="text-gray-700 leading-relaxed">
              ShortGen provides an AI-powered video generation service that allows users to create short-form videos for platforms like YouTube Shorts and TikTok. The Service includes:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>Multiple video templates and niches</li>
              <li>Automated video generation and editing</li>
              <li>Various export quality options based on subscription tier</li>
              <li>Cloud storage for generated videos</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Subscription Plans and Pricing</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Plan Types</h3>
            <p className="text-gray-700 leading-relaxed">We offer the following subscription plans:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li><strong>Free Plan:</strong> 3 videos per month with watermark</li>
              <li><strong>Starter Plan:</strong> $19/month - 30 videos per month, no watermark</li>
              <li><strong>Pro Plan:</strong> $49/month - 150 videos per month, premium features</li>
              <li><strong>Unlimited Plan:</strong> $149/month - Unlimited videos, all features</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Billing</h3>
            <p className="text-gray-700 leading-relaxed">
              Subscription fees are billed in advance on a monthly or annual basis (if applicable) and are non-refundable except as required by law or as stated in our Refund Policy. Payment processing is handled securely by 2Checkout.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Usage Limits</h3>
            <p className="text-gray-700 leading-relaxed">
              Each plan has specific usage limits that reset monthly on your billing date. If you exceed your plan's limits, you must upgrade to continue generating videos or wait until the next billing cycle.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.4 Price Changes</h3>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to change our pricing at any time. Price changes will not affect your current billing cycle and will take effect at the next renewal. We will provide at least 30 days' notice of any price increases.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.5 Cancellation</h3>
            <p className="text-gray-700 leading-relaxed">
              You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of your current billing period. You will retain access to paid features until the end of your billing period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We offer a 14-day money-back guarantee for first-time subscribers. If you are not satisfied with the Service within 14 days of your initial purchase, contact us for a full refund. Refunds are not available if:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>You have generated more than 10 videos</li>
              <li>You are requesting a refund after 14 days</li>
              <li>You have previously received a refund</li>
              <li>Your account has been terminated for violation of these Terms</li>
            </ul>
            
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Your Content</h3>
            <p className="text-gray-700 leading-relaxed">
              You retain all ownership rights to the videos you generate using our Service. By using the Service, you grant us a limited license to host, store, and process your content solely to provide the Service.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Our Service</h3>
            <p className="text-gray-700 leading-relaxed">
              The Service, including all software, text, graphics, logos, and other content (excluding user-generated content), is owned by us and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of the Service without our written permission.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Watermarks</h3>
            <p className="text-gray-700 leading-relaxed">
              Videos generated on the Free Plan will include a "Made with ShortGen" watermark. This watermark is removed for paid subscribers. You may not remove or obscure the watermark on free videos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Prohibited Uses</h2>
            <p className="text-gray-700 leading-relaxed">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Create content that is harmful, offensive, defamatory, or discriminatory</li>
              <li>Create sexually explicit content involving minors</li>
              <li>Spread misinformation or engage in deceptive practices</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to abuse the Service</li>
              <li>Resell or redistribute the Service without permission</li>
              <li>Create spam or unsolicited commercial content</li>
              <li>Violate the terms of service of third-party platforms (YouTube, TikTok, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Content Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You are solely responsible for the content you create using our Service. We do not review, approve, or endorse user-generated content. You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>You have all necessary rights to the content you input</li>
              <li>Your content does not violate any laws or third-party rights</li>
              <li>Your content complies with these Terms and our Acceptable Use Policy</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to remove any content that violates these Terms or is reported as inappropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">10.1 Service "As Is"</h3>
            <p className="text-gray-700 leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">10.2 Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">10.3 Maximum Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless ShortGen and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Content you create using the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">12.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">12.2 Arbitration</h3>
            <p className="text-gray-700 leading-relaxed">
              Any dispute arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of [Arbitration Body]. The arbitration shall take place in [Location].
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">12.3 Exceptions</h3>
            <p className="text-gray-700 leading-relaxed">
              You may assert claims in small claims court if they qualify. Additionally, either party may seek injunctive relief in court for intellectual property disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through a prominent notice on the Service. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you do not agree to the modified Terms, you must stop using the Service and may cancel your subscription.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>Your right to use the Service will cease immediately</li>
              <li>We may delete your account and content (subject to backup retention)</li>
              <li>No refunds will be provided for partial months</li>
              <li>Sections that by their nature should survive termination will continue to apply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Miscellaneous</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">15.1 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms constitute the entire agreement between you and ShortGen regarding the Service and supersede all prior agreements.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">15.2 Severability</h3>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">15.3 Waiver</h3>
            <p className="text-gray-700 leading-relaxed">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">15.4 Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700"><strong>Email:</strong> boutabamohammed2@gmail.com</p>
              
              <p className="text-gray-700 mt-2"><strong>Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <p className="text-gray-800 font-semibold mb-2">Acceptance of Terms</p>
            <p className="text-gray-700">
              By clicking "Sign Up," creating an account, or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </div>
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
            <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-900">Terms of Service</a>
            <a href="/refund" className="hover:text-gray-900">Refund Policy</a>
          </div>
          <p className="text-sm text-gray-500 mt-4">© 2026 ShortGen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
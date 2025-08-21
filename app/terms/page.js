import Link from "next/link";

export const metadata = {
  title: "Terms & Policies",
  description: "Send us a message and we will be right with you.",
};

export default function Contact() {
  return (
    <main>
      <section className="min-h-screen w-screen bg-[url('/.png')] bg-no-repeat bg-center bg-contain pt-16 lg:pt-24">
        <div className="w-full lg:w-2/3 mx-auto mb-4 lg:mb-12 font-light px-8 lg:px-0">
          <span className="block text-[8px] lg:text-xs border-2 border-[#70E000] drop-shadow-xl mx-auto p-3 lg:p-4 rounded-md lg:-skew-x-12">
            <span className="block font-normal">Disclaimers:</span>
            Users are expected to exercise reasonable judgment and common sense
            when using Hooky products. Always operate our devices in a safe
            environment, away from hazards, and ensure you fully understand how
            to use them before starting. Hooky Inc. cannot be held liable for
            injuries, damages, or losses caused by improper use of our products.
            It is your responsibility to read and follow all product
            instructions and use them in a safe, responsible manner. Hooky Inc.
            is not liable for any damage, injury, or harm caused to you, your
            property, others, or their property as a result of using our
            products or services. Our products are designed to meet high safety
            standards, but users are expected to exercise general common sense
            during operation. Misuse, negligence, or failure to follow usage
            guidelines voids all warranties and liability. By using Hooky
            products, you acknowledge that you are assuming all risks associated
            with their use, including risks of personal injury, property damage,
            or harm to others. Products bought from third-party platforms, such
            as Amazon, are subject to their respective return and warranty
            policies. Warranty is valid only for purchases made directly from
            our website. While we aim to deliver high-quality, reliable
            products, Hooky Inc. cannot guarantee uninterrupted performance.
            Regular maintenance and responsible use are required to ensure
            safety.
          </span>
        </div>
        <hr className="mb-16" />
        <div className="max-w-4xl mx-auto pb-12 mb-12 px-8 lg:px-0">
          <header className="mb-4 lg:mb-8">
            <h1 className="text-lg lg:text-3xl font-bold mb-2">Terms of Use</h1>
            <p className="text-xs lg:text-sm text-gray-600">
              Effective Date: January 22, 2025
            </p>
          </header>

          <section className="mb-12">
            <p className="mb-2 lg:mb-4 text-xs lg:text-base">
              Welcome to Hooky Inc. (“Hooky,” “we,” or “us”). By accessing and
              using our website or purchasing our products, you agree to comply
              with and be bound by these Terms of Use. If you do not agree with
              any of these terms, please do not use our website or purchase our
              products.
            </p>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">1. Use of Website</h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">1.1. Eligibility</h3>
              <p className="ml-4 text-xs lg:text-base">
                You must be at least 18 years of age to access or use our
                website, purchase products, or engage in any activities on the
                site. By using our website, you affirm that you are 18 years of
                age or older.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">1.2. Lawful Use</h3>
              <p className="ml-4 text-xs lg:text-base">
                You agree to use our website only for lawful purposes and in a
                manner consistent with all applicable local, state, and national
                laws. You must not use our website for any illegal activity,
                infringement of third-party rights, or any conduct that could
                harm Hooky or other users.
              </p>
            </div>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
              2. Product Purchases
            </h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">
                2.1. Product Availability and Changes
              </h3>
              <p className="ml-4 text-xs lg:text-base">
                Hooky electric hookahs (“Products”) are available for purchase
                through our website. We reserve the right to modify, update, or
                remove product listings, including pricing, descriptions, and
                availability, without prior notice. We make no guarantees
                regarding product availability.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">2.2. Returns and Warranty</h3>
              <p className="ml-4 text-xs lg:text-base">
                Purchases made directly through our website are covered by our{" "}
                <strong>30-day free return policy</strong>. The product must be
                returned in its original, undamaged condition, and returns will
                not be accepted for products that have been damaged
                intentionally. Products purchased through third-party platforms
                (e.g., Amazon) are subject to the return and warranty policies
                of those platforms.{" "}
                <strong>
                  Warranty coverage is only available for purchases made
                  directly from our website
                </strong>
                .
              </p>
            </div>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
              3. Intellectual Property
            </h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">3.1. Ownership</h3>
              <p className="ml-4 text-xs lg:text-base">
                All content available on the Hooky website, including but not
                limited to text, images, graphics, logos, trademarks, software,
                and design elements, is owned by Hooky Inc. and protected under
                applicable intellectual property laws.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">3.2. Restrictions on Use</h3>
              <p className="ml-4 text-xs lg:text-base">
                You may not copy, modify, reproduce, distribute, or otherwise
                use any content from our website without obtaining prior written
                consent from Hooky Inc. Unauthorized use of our content may
                result in legal consequences.
              </p>
            </div>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
              4. Limitation of Liability
            </h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">
                4.1. Exclusion of Liability
              </h3>
              <p className="ml-4 text-xs lg:text-base">
                To the maximum extent permitted by law, Hooky Inc. shall not be
                liable for any indirect, incidental, special, or consequential
                damages that arise from the use or inability to use our products
                or website, including but not limited to loss of profits, data,
                or business.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">4.2. Assumption of Risk</h3>
              <p className="ml-4 text-xs lg:text-base">
                By using our products, you acknowledge and accept all risks
                associated with their use. We recommend that you read and follow
                all usage instructions, warnings, and guidelines provided with
                the product.
              </p>
            </div>

            <div className="mb-3 lg:mb-6">
              <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
                5. Customer Support
              </h2>
              <p className="ml-4 text-xs lg:text-base">
                For any inquiries or issues regarding our products, website, or
                services, please contact our dedicated support team at{" "}
                <a
                  href="mailto:support@buyhooky.com"
                  className="text-blue-600 underline"
                >
                  support@buyhooky.com
                </a>
                . We aim to respond to all queries promptly and assist with any
                product-related concerns.
              </p>
            </div>

            <div className="mb-3 lg:mb-6">
              <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">6. Governing Law</h2>
              <p className="ml-4 text-xs lg:text-base">
                These Terms of Use shall be governed by, and construed in
                accordance with, the laws of the state of California, USA,
                without regard to its conflict of law principles. Any dispute
                arising under these Terms of Use will be resolved exclusively in
                the appropriate courts of California.
              </p>
            </div>

            <div className="mb-3 lg:mb-6">
              <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
                7. Modifications to Terms
              </h2>
              <p className="ml-4 text-xs lg:text-base">
                We reserve the right to modify these Terms of Use at any time
                without prior notice. Any changes will be posted on this page
                with a revised effective date. Your continued use of the website
                after the effective date of changes constitutes your acceptance
                of the modified terms.
              </p>
            </div>
          </section>

          <section>
            <header className="mb-4 lg:mb-8">
              <h1 className="text-lg lg:text-3xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Effective Date: January 22, 2025
              </p>
            </header>

            <p className="mb-2 lg:mb-4 text-xs lg:text-base">
              Hooky Inc. (“we,” “us,” or “our”) is committed to protecting and
              respecting your privacy. This Privacy Policy explains how we
              collect, use, and safeguard your personal information when you use
              our website and services.
            </p>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
              1. Information We Collect
            </h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">
                1.1. Website Browsing Data
              </h3>
              <p className="ml-4 text-xs lg:text-base">
                While we do not directly collect cookies or tracking data,
                third-party tools and technologies integrated into our website
                may collect certain browsing information such as IP addresses,
                browser type, and site usage data. We encourage you to review
                the privacy policies of these third-party services for more
                information.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">1.2. Transaction Data</h3>
              <p className="ml-4 text-xs lg:text-base">
                All financial transactions, including purchases made through our
                website, are processed through secure third-party platforms such
                as Stripe. We do not store any payment information. Please refer
                to Stripe's Privacy Policy for further details about their data
                practices.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">
                1.3. Customer Service Data
              </h3>
              <p className="ml-4 text-xs lg:text-base">
                If you contact us for support, we may collect personal
                information including your name, email address, and the nature
                of your inquiry. We do not collect physical addresses unless
                necessary for order processing.
              </p>
            </div>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
              2. How We Use Your Information
            </h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">2.1. Customer Support</h3>
              <p className="ml-4 text-xs lg:text-base">
                We use the personal information you provide to assist with
                inquiries, resolve issues, and ensure a positive experience with
                our products and services.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">2.2. Warranty and Returns</h3>
              <p className="ml-4 text-xs lg:text-base">
                We may use your information to process warranty claims, product
                returns, or exchanges, ensuring that the products you purchase
                from us meet the quality standards we set.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">2.3. Communications</h3>
              <p className="ml-4 text-xs lg:text-base">
                We may use your email address to communicate important updates
                about our products, services, and any changes to our policies.
                You can opt out of marketing communications at any time by
                following the unsubscribe instructions in our emails.
              </p>
            </div>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
              3. Sharing Your Information
            </h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">3.1. Third-Party Services</h3>
              <p className="ml-4 text-xs lg:text-base">
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. However, we may share your
                data with trusted third-party service providers (such as Stripe
                for payment processing) to facilitate the services you have
                requested.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">3.2. Legal Compliance</h3>
              <p className="ml-4 text-xs lg:text-base">
                We may disclose your information to authorities or third parties
                if required by law, in response to legal processes, or to
                protect our rights or the safety of others.
              </p>
            </div>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
              4. Email Communication
            </h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">
                4.1. Retention of Correspondence
              </h3>
              <p className="ml-4 text-xs lg:text-base">
                We may retain the email correspondence you send us for
                record-keeping, troubleshooting, and customer service purposes.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">
                4.2. Email Communication Consent
              </h3>
              <p className="ml-4 text-xs lg:text-base">
                By contacting us via email or engaging with our services, you
                consent to receive communications from us, including product
                updates and support messages, in accordance with our privacy
                practices.
              </p>
            </div>

            <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">5. Data Security</h2>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">
                5.1. Protecting Your Information
              </h3>
              <p className="ml-4 text-xs lg:text-base">
                We implement reasonable security measures to protect your
                personal data from unauthorized access, alteration, or
                disclosure.
              </p>
            </div>
            <div className="mb-3 lg:mb-6">
              <h3 className="text-sm lg:text-lg font-medium">5.2. Inherent Risks</h3>
              <p className="ml-4 text-xs lg:text-base">
                While we strive to protect your information, no data
                transmission over the internet can be guaranteed as completely
                secure. By using our services, you acknowledge and accept this
                risk.
              </p>
            </div>

            <div className="mb-3 lg:mb-6">
              <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
                6. Third-Party Links
              </h2>
              <p className="ml-4 text-xs lg:text-base">
                Our website may contain links to third-party websites, including
                advertisers or partners. We are not responsible for the privacy
                practices or content of these websites. We encourage you to
                review the privacy policies of these third-party sites.
              </p>
            </div>

            <div className="mb-3 lg:mb-6">
              <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">
                7. Changes to This Privacy Policy
              </h2>
              <p className="ml-4 text-xs lg:text-base">
                We may update this Privacy Policy periodically. Any changes will
                be reflected on this page, with the revised effective date
                indicated. We encourage you to review this Privacy Policy
                periodically to stay informed about how we are protecting your
                personal information.
              </p>
            </div>

            <div className="mb-3 lg:mb-6">
              <h2 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4">8. Contact Us</h2>
              <p className="ml-4 text-xs lg:text-base">
                If you have any questions or concerns regarding this Privacy
                Policy, please feel free to contact us at{" "}
                <a
                  href="mailto:support@buyhooky.com"
                  className="text-blue-600 underline"
                >
                  support@buyhooky.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for SAVOR & CO. website.',
}

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-charcoal-950 pt-32">
      <div className="container-narrow">
        <h1 className="heading-lg text-cream-50">Privacy Policy</h1>
        <p className="mt-4 text-cream-100/60">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="mt-10 space-y-8 text-body">
          <div>
            <h2 className="font-serif text-xl text-cream-50">Information We Collect</h2>
            <p className="mt-3">
              We collect information you provide directly to us, such as when you make a reservation,
              sign up for our newsletter, or contact us. This may include your name, email address,
              phone number, and any other information you choose to provide.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">How We Use Your Information</h2>
            <p className="mt-3">
              We use the information we collect to process your reservations, send you updates
              about our restaurant, respond to your inquiries, and improve our services. We do not
              sell, trade, or otherwise transfer your personal information to outside parties
              without your consent.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Data Security</h2>
            <p className="mt-3">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Third-Party Services</h2>
            <p className="mt-3">
              We may employ third-party companies and individuals to facilitate our services,
              provide services on our behalf, or assist us in analyzing how our services are used.
              These third parties have access to your personal information only to perform these
              tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the
              &ldquo;Last updated&rdquo; date.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@savorandco.com" className="text-gold-400 hover:underline">
                privacy@savorandco.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

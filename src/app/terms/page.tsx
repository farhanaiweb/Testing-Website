import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Haveli Restaurant website.',
}

export default function TermsPage() {
  return (
    <section className="section-padding bg-charcoal-950 pt-32">
      <div className="container-narrow">
        <h1 className="heading-lg text-cream-50">Terms &amp; Conditions</h1>
        <p className="mt-4 text-cream-100/60">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="mt-10 space-y-8 text-body">
          <div>
            <h2 className="font-serif text-xl text-cream-50">Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above, please
              do not use this service.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Reservations</h2>
            <p className="mt-3">
              Reservations are subject to availability and confirmation. We reserve the right
              to cancel or modify reservations due to unforeseen circumstances. A valid credit
              card may be required to secure reservations for large parties or special events.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Cancellation Policy</h2>
            <p className="mt-3">
              We kindly ask that you provide at least 24 hours notice for cancellations.
              Late cancellations or no-shows may be subject to a fee. Special events and
              private dining may have different cancellation terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Intellectual Property</h2>
            <p className="mt-3">
              All content on this website, including text, graphics, logos, images, and software,
              is the property of Haveli Restaurant and is protected by copyright, trademark, and other
              intellectual property laws. You may not reproduce, distribute, or create derivative
              works from any content without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Limitation of Liability</h2>
            <p className="mt-3">
              Haveli Restaurant shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use of or inability to use our services or
              this website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Governing Law</h2>
            <p className="mt-3">
              These terms shall be governed by and construed in accordance with the laws of the
              state in which our restaurant operates, without regard to its conflict of law
              provisions.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-cream-50">Contact</h2>
            <p className="mt-3">
              For questions about these Terms &amp; Conditions, please contact us at{' '}
              <a href="mailto:info@haveli.com.pk" className="text-gold-400 hover:underline">
                info@haveli.com.pk
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

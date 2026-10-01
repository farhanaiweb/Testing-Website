import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'
import { restaurantInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact & Reservations',
  description:
    'Reserve your table at Haveli Restaurant. Contact us for reservations and general inquiries.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&auto=format&fit=crop"
            alt="Restaurant table setting with candles"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Get in Touch
          </p>
          <h1 className="heading-xl text-cream-50">Reserve Your Table</h1>
          <p className="mx-auto mt-4 max-w-xl text-body">
            We look forward to hosting you. Request a reservation or reach out with any questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeading
                align="left"
                eyebrow="Contact Us"
                title="We Would Love to Hear from You"
              />

              <div className="mt-10 space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-gold-500/10">
                    <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-cream-50">Phone</h3>
                    <a
                      href={`tel:${restaurantInfo.phone}`}
                      className="mt-1 block text-cream-100/70 transition-colors hover:text-gold-400"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-gold-500/10">
                    <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-cream-50">Email</h3>
                    <a
                      href={`mailto:${restaurantInfo.email}`}
                      className="mt-1 block text-cream-100/70 transition-colors hover:text-gold-400"
                    >
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-gold-500/10">
                    <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-cream-50">Address</h3>
                    <p className="mt-1 text-cream-100/70">
                      {restaurantInfo.address.street}
                      <br />
                      {restaurantInfo.address.city}, {restaurantInfo.address.state}{' '}
                      {restaurantInfo.address.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-gold-500/10">
                    <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-cream-50">Hours</h3>
                    <div className="mt-1 space-y-1 text-cream-100/70">
                      {restaurantInfo.hours.map((h) => (
                        <p key={h.days}>
                          <span className="text-cream-100/90">{h.days}:</span> {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="lg:col-span-3">
              <div className="rounded-sm border border-cream-100/10 bg-charcoal-900/30 p-8 sm:p-10">
                <SectionHeading
                  align="left"
                  eyebrow="Reservations"
                  title="Request a Table"
                />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-charcoal-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/cta-background.png')`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-charcoal-950/70" />

      <div className="container-narrow relative z-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
          Reserve Your Experience
        </p>
        <h2 className="heading-lg text-cream-50">
          Ready to Create an Unforgettable Evening?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-body">
          Whether it is an intimate dinner for two, a celebration with friends, or a private
          event, we would be honored to host you. Reserve your table today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Reserve a Table
          </Link>
          <Link href="/menu" className="btn-secondary">
            Explore Our Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

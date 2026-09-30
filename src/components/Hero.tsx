import Link from 'next/link'
import { heroImages } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImages.main}
          alt="Elegant restaurant interior with warm lighting"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/50 to-charcoal-950" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 text-center">
        <div className="animate-fade-in-down">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400 sm:text-base">
            Est. 2024
          </p>
        </div>

        <h1 className="heading-xl animate-fade-in-up text-cream-50 sm:text-6xl lg:text-7xl" style={{ animationDelay: '200ms' }}>
          Where Every Meal
          <br />
          <span className="text-gold-400">Becomes a Memory</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-body sm:text-lg" style={{ animationDelay: '400ms' }}>
          Seasonal ingredients, bold flavors, and an atmosphere that invites you to linger.
          Experience dining that engages all your senses.
        </p>

        <div className="mt-10 flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '600ms' }}>
          <Link href="/contact" className="btn-primary">
            Reserve Your Table
          </Link>
          <Link href="/menu" className="btn-secondary">
            View Menu
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cream-100/30 p-1">
          <div className="h-2 w-1 rounded-full bg-cream-100/50" />
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background with red/black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-red-950/40 to-charcoal-950" />
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 text-center">
        <div className="animate-fade-in-down">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400 sm:text-base">
            Fort Road Food Street
          </p>
        </div>

        <h1 className="heading-xl animate-fade-in-up text-cream-50 sm:text-6xl lg:text-7xl" style={{ animationDelay: '200ms' }}>
          Lahore's Iconic
          <br />
          <span className="text-red-500">Heritage Dining</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-body sm:text-lg" style={{ animationDelay: '400ms' }}>
          Experience the grandeur of Mughal-era architecture while savoring authentic Lahori cuisine
          in the heart of Lahore's historic Walled City.
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

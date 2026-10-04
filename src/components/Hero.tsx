import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden overflow-x-hidden bg-charcoal-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-red-950/30 to-charcoal-950" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ===== CINEMATIC EFFECTS (behind food image) ===== */}

      {/* Warm amber glow — top right */}
      <div
        className="absolute top-[10%] right-[5%] h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)' }}
      />

      {/* Deep red glow — center right */}
      <div
        className="absolute top-[30%] right-[15%] h-[400px] w-[400px] rounded-full opacity-25 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, transparent 70%)' }}
      />

      {/* Warm orange glow — bottom right */}
      <div
        className="absolute right-[8%] bottom-[10%] h-[350px] w-[350px] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)' }}
      />

      {/* Soft golden accent — mid right */}
      <div
        className="absolute top-[50%] right-[25%] h-[200px] w-[200px] rounded-full opacity-15 blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(253, 224, 71, 0.5) 0%, transparent 70%)' }}
      />

      {/* Floating light particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particle 1 */}
        <div
          className="absolute top-[20%] right-[12%] h-2 w-2 animate-pulse rounded-full bg-amber-400/60"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        />
        {/* Particle 2 */}
        <div
          className="absolute top-[35%] right-[28%] h-1.5 w-1.5 animate-pulse rounded-full bg-red-400/50"
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        />
        {/* Particle 3 */}
        <div
          className="absolute top-[15%] right-[35%] h-1 w-1 animate-pulse rounded-full bg-amber-300/40"
          style={{ animationDelay: '2s', animationDuration: '3.5s' }}
        />
        {/* Particle 4 */}
        <div
          className="absolute right-[18%] bottom-[25%] h-2 w-2 animate-pulse rounded-full bg-orange-400/50"
          style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}
        />
        {/* Particle 5 */}
        <div
          className="absolute top-[45%] right-[8%] h-1 w-1 animate-pulse rounded-full bg-yellow-300/40"
          style={{ animationDelay: '1.5s', animationDuration: '3s' }}
        />
        {/* Particle 6 */}
        <div
          className="absolute top-[60%] right-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-red-300/30"
          style={{ animationDelay: '2.5s', animationDuration: '4.5s' }}
        />
      </div>

      {/* Subtle smoke/haze layer */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 opacity-[0.04]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)',
        }}
      />

      {/* ===== MAIN CONTENT ===== */}
      <div className="container-wide relative z-10 grid items-center gap-6 py-20 lg:grid-cols-2 lg:gap-4 lg:py-0">

        {/* LEFT — Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400 sm:text-base">
            Fort Road Food Street
          </p>

          <h1 className="heading-xl text-cream-50 sm:text-6xl lg:text-7xl">
            Lahore's Iconic
            <br />
            <span className="text-red-500">Heritage Dining</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-body sm:text-lg lg:mx-0">
            Experience the grandeur of Mughal-era architecture while savoring authentic Lahori cuisine
            in the heart of Lahore's historic Walled City.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center">
            <Link
              href="/contact"
              className="btn-primary group relative overflow-hidden px-10 py-4 text-lg font-semibold tracking-wider"
            >
              <span className="relative z-10">BOOK A TABLE</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link href="/menu" className="btn-secondary">
              View Menu
            </Link>
          </div>
        </div>

        {/* RIGHT — Food Image */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Soft shadow beneath the food image */}
          <div
            className="absolute bottom-[5%] right-[10%] h-[80px] w-[70%] rounded-[100%] opacity-40 blur-[40px]"
            style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 70%)' }}
          />

          {/* Warm glow directly behind the food image */}
          <div
            className="absolute top-1/2 right-[15%] h-[80%] w-[80%] -translate-y-1/2 rounded-full opacity-40 blur-[80px]"
            style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(220, 38, 38, 0.15) 50%, transparent 70%)' }}
          />

          {/* The food image */}
          <img
            src="/images/hero-food.png"
            alt="Signature dish — metal skillet tossing food"
            className="relative z-10 w-full max-w-md object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:max-w-lg lg:max-w-xl xl:max-w-2xl origin-center"
            style={{ transform: 'scale(1.5)' }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cream-100/30 p-1">
          <div className="h-2 w-1 rounded-full bg-cream-100/50" />
        </div>
      </div>
    </section>
  )
}

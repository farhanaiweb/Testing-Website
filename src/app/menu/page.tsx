import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import { menuCategories } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Explore authentic Lahori cuisine at Haveli Restaurant, located in the historic Haveli Khalil Khan on Fort Road Food Street, Lahore.',
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80&auto=format&fit=crop"
            alt="Beautifully plated dishes on a table"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Our Menu
          </p>
          <h1 className="heading-xl text-cream-50">Authentic Lahori Cuisine</h1>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Our menu evolves with the seasons, celebrating the finest ingredients from local
            farmers and artisans.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-wide">
          {menuCategories.map((category, catIndex) => (
            <div key={category.name} className={catIndex > 0 ? 'mt-20' : ''}>
              <SectionHeading
                eyebrow={`Category ${catIndex + 1}`}
                title={category.name}
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group rounded-sm border border-cream-100/10 bg-charcoal-900/30 p-6 transition-all duration-300 hover:border-gold-500/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl text-cream-50 transition-colors group-hover:text-gold-400">
                        {item.name}
                      </h3>
                      <span className="flex-shrink-0 font-serif text-lg text-gold-400">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-cream-100/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}

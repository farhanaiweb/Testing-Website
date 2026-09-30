import SectionHeading from './SectionHeading'
import { heroImages } from '@/lib/data'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-charcoal-950">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImages.secondary}
                  alt="Restaurant interior with warm ambient lighting"
                  className="aspect-[3/4] w-full rounded-sm object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImages.tertiary}
                  alt="Chef preparing a dish in the kitchen"
                  className="aspect-[3/4] w-full rounded-sm object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-sm border border-gold-500/20" />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="A Passion for Flavor & Hospitality"
            />
            <div className="mt-6 space-y-4 text-body">
              <p>
                Founded with a simple belief — that dining is more than sustenance, it is an
                experience to be savored. Our chef-driven menu celebrates the finest seasonal
                ingredients, sourced from local farmers and artisans who share our commitment
                to quality.
              </p>
              <p>
                Every dish tells a story. From the careful selection of ingredients to the
                artful presentation on your plate, we strive to create moments that bring
                people together and linger in memory long after the last bite.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-cream-100/10 pt-8">
              <div>
                <p className="font-serif text-3xl text-gold-400 sm:text-4xl">10+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/60">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-400 sm:text-4xl">50+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/60">
                  Seasonal Dishes
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-400 sm:text-4xl">100%</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/60">
                  Local Sourcing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

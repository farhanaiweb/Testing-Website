import SectionHeading from './SectionHeading'

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
                  src="/images/heritage-1.jpg"
                  alt="Haveli Restaurant interior with warm ambient lighting"
                  className="aspect-[3/4] w-full rounded-sm object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/heritage-2.jpg"
                  alt="Chef preparing a dish in the kitchen"
                  className="aspect-[3/4] w-full rounded-sm object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-sm border border-red-500/20" />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Heritage"
              title="A Historic Haveli in Lahore's Walled City"
            />
            <div className="mt-6 space-y-4 text-body">
              <p>
                Haveli Restaurant is located in the historic Haveli Khalil Khan on Fort Road
                Food Street in Lahore's Walled City. The haveli features wooden balconies
                and jharokas, hand-carved doors and windows, wrought iron railings, and
                handmade tiles — a unique representation of Lahore's rich heritage.
              </p>
              <p>
                When the Punjab government announced its intention to develop a Food Street
                on Fort Road in 2010, Habib Khan voluntarily assisted in the project execution,
                helping deliver a dining experience that celebrates Lahore's culinary and
                architectural heritage.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-cream-100/10 pt-8">
              <div>
                <p className="font-serif text-3xl text-red-500 sm:text-4xl">2010</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/60">
                  Food Street Established
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-red-500 sm:text-4xl">1</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/60">
                  Historic Haveli
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-red-500 sm:text-4xl">3</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/60">
                  Iconic Landmarks Nearby
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

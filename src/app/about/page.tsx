import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import { heroImages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about our story, our passion for seasonal ingredients, and the team behind SAVOR & CO.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80&auto=format&fit=crop"
            alt="Restaurant interior with elegant decor"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Our Story
          </p>
          <h1 className="heading-xl text-cream-50">About SAVOR &amp; CO.</h1>
          <p className="mx-auto mt-4 max-w-xl text-body">
            A celebration of flavor, hospitality, and the joy of gathering around the table.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-charcoal-950">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Who We Are"
                title="More Than a Restaurant"
              />
              <div className="mt-6 space-y-4 text-body">
                <p>
                  SAVOR & CO. was born from a simple belief: that a meal has the power to
                  bring people together, to celebrate life&apos;s moments, and to create
                  memories that last a lifetime.
                </p>
                <p>
                  Our chef-driven menu celebrates the finest seasonal ingredients, sourced
                  from local farmers and artisans who share our commitment to quality and
                  sustainability. Every dish is a reflection of our passion — thoughtfully
                  prepared, beautifully presented, and meant to be savored.
                </p>
                <p>
                  From the moment you walk through our doors, we want you to feel the warmth
                  of genuine hospitality. Our team is dedicated to ensuring every visit is
                  exceptional, whether you are joining us for a quick lunch, a romantic
                  dinner, or a celebration with friends and family.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImages.secondary}
                alt="Elegant table setting in our dining room"
                className="aspect-[4/3] w-full rounded-sm object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-sm border border-gold-500/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Us"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Seasonal & Local',
                description:
                  'We source the finest ingredients from local farmers and producers, ensuring every dish reflects the best of each season.',
              },
              {
                title: 'Craft & Care',
                description:
                  'Every plate is prepared with meticulous attention to detail, from the initial preparation to the final presentation.',
              },
              {
                title: 'Warm Hospitality',
                description:
                  'We believe in creating an atmosphere where every guest feels welcome, valued, and cared for from the moment they arrive.',
              },
              {
                title: 'Sustainability',
                description:
                  'We are committed to responsible sourcing, minimizing waste, and supporting practices that protect our environment.',
              },
              {
                title: 'Community',
                description:
                  'We are proud to be part of our local community, supporting local businesses and giving back to the neighborhood we call home.',
              },
              {
                title: 'Memorable Experiences',
                description:
                  'We strive to create moments that linger — the perfect meal, the right atmosphere, and the company that makes it all worthwhile.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-sm border border-cream-100/10 bg-charcoal-950/50 p-8 transition-all duration-300 hover:border-gold-500/30"
              >
                <h3 className="font-serif text-xl text-gold-400">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

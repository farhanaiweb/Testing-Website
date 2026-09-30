import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import MenuPreview from '@/components/MenuPreview'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'SAVOR & CO. | Modern Dining Experience',
  description:
    'Experience modern dining at SAVOR & CO. Seasonal menus, craft cocktails, and an unforgettable atmosphere. Reserve your table today.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MenuPreview />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}

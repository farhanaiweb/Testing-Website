import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Haveli Restaurant | Heritage Dining in Lahore',
  description:
    "Lahore's premier heritage dining destination — where Mughal grandeur meets unforgettable hospitality. Located on Fort Road Food Street.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}

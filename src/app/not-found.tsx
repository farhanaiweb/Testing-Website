import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-charcoal-950 pt-20">
      <div className="container-narrow text-center">
        <p className="font-serif text-8xl text-gold-400">404</p>
        <h1 className="heading-lg mt-4 text-cream-50">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-body">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-10">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { restaurantInfo, navLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-cream-100/10 bg-charcoal-950">
      <div className="container-wide py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl tracking-wider text-cream-50"
            >
              {restaurantInfo.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/60">
              {restaurantInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100/70 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
              <li>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="transition-colors hover:text-cream-50"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="transition-colors hover:text-cream-50"
                >
                  {restaurantInfo.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {restaurantInfo.address.street}
                <br />
                {restaurantInfo.address.city}, {restaurantInfo.address.state}{' '}
                {restaurantInfo.address.zip}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
              {restaurantInfo.hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="font-medium text-cream-100/90">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-cream-100/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream-100/50">
            &copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-cream-100/50 transition-colors hover:text-cream-50"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-cream-100/50 transition-colors hover:text-cream-50"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

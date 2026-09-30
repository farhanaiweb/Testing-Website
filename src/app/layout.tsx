import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'SAVOR & CO. | Modern Dining Experience',
    template: '%s | SAVOR & CO.',
  },
  description:
    'Experience modern dining at SAVOR & CO. Seasonal menus, craft cocktails, and an unforgettable atmosphere. Reserve your table today.',
  keywords: [
    'restaurant',
    'fine dining',
    'modern cuisine',
    'seasonal menu',
    'craft cocktails',
    'reserve table',
  ],
  openGraph: {
    title: 'SAVOR & CO. | Modern Dining Experience',
    description:
      'Experience modern dining at SAVOR & CO. Seasonal menus, craft cocktails, and an unforgettable atmosphere.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

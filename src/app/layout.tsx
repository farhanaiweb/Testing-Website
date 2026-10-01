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
  metadataBase: new URL('https://www.haveli.com.pk'),
  title: {
    default: 'Haveli Restaurant | Heritage Dining in Lahore',
    template: '%s | Haveli Restaurant',
  },
  description:
    "Lahore's premier heritage dining destination — where Mughal grandeur meets unforgettable hospitality. Located on Fort Road Food Street.",
  keywords: [
    'Haveli Restaurant',
    'Lahore',
    'heritage dining',
    'Food Street',
    'Fort Road',
    'Walled City',
    'Badshahi Mosque',
    'Lahori cuisine',
    'Pakistan',
  ],
  openGraph: {
    title: 'Haveli Restaurant | Heritage Dining in Lahore',
    description:
      "Lahore's premier heritage dining destination — where Mughal grandeur meets unforgettable hospitality.",
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
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

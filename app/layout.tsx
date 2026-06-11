import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Asingura Rose Desire | Full-Stack & Mobile Developer',
  description: 'Professional portfolio of Asingura Rose Desire — Full-Stack and Mobile App Developer based in Uganda.',
  keywords: ['React Native', 'Next.js', 'NestJS', 'Full-Stack Developer', 'Uganda'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${syne.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
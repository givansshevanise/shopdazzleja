import type { Metadata, Viewport } from 'next'
import { Quicksand, Pacifico, Lilita_One } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand',
});

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-pacifico',
});

const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-lilita',
});

export const metadata: Metadata = {
  title: 'Dazzle | Handmade Mirrors & Décor',
  description: 'Custom foam clay mirrors perfect for gifts and room décor. Handmade with love.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FBF9F6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${pacifico.variable} ${lilitaOne.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

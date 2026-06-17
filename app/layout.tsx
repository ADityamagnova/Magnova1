import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Magnova — Advanced Permanent Magnet Manufacturing',
    template: '%s | Magnova',
  },
  description:
    'Magnova is developing next-generation rare-earth permanent magnet manufacturing capabilities to support strategic industries including electric mobility, clean energy, defense, and advanced industrial systems.',
  keywords: [
    'rare earth magnets',
    'permanent magnets',
    'NdFeB magnets',
    'India manufacturing',
    'electric mobility',
    'clean energy',
    'defense',
    'industrial automation',
    'advanced manufacturing',
    'supply chain',
  ],
  authors: [{ name: 'Magnova' }],
  creator: 'Magnova',
  publisher: 'Magnova',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Magnova — Advanced Permanent Magnet Manufacturing',
    description:
      'Developing next-generation rare-earth permanent magnet manufacturing capabilities for strategic industries.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Magnova',
    url: 'https://www.magnova.asia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magnova — Advanced Permanent Magnet Manufacturing',
    description:
      'Developing next-generation rare-earth permanent magnet manufacturing capabilities for strategic industries.',
  },
  metadataBase: new URL('https://www.magnova.asia'),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

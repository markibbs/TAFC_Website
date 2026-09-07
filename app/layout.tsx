import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teddington Athletic FC | Community Football in Teddington',
  description: 'Join TAFC, find your team, manage subscriptions and access essential club information.',
  icons: {
    icon: '/tafc-logo.png',
    shortcut: '/tafc-logo.png',
    apple: '/tafc-logo.png',
  },
  openGraph: {
    title: 'Teddington Athletic FC',
    description: 'Football for our whole community.',
    images: [{ url: 'https://teddingtonathleticfc.com/og.png', width: 1200, height: 630, alt: 'Teddington Athletic FC — Football for our whole community.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teddington Athletic FC',
    description: 'Football for our whole community.',
    images: ['https://teddingtonathleticfc.com/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

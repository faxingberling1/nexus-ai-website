import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';


import './globals.css';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '700', '900']
});

export const metadata: Metadata = {
  title: 'Neon Byte AI | Mission Control 3.0',
  description: 'Next-generation AI solutions, neural infrastructure, and autonomous marketing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className={`font-sans antialiased bg-[#020202] text-white selection:bg-[#00f3ff]/30`}>
        {children}
      </body>
    </html>
  );
}

// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from '@/app/components/JsonLd';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CustomCursor from '@/app/components/CustomCursor';
import ScrollToTop from '@/app/components/ScrollToTop';
import MobileCallBanner from '@/app/components/MobileCallBanner';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: {
    default: "Maître Manon FONTAINE | Avocate au Barreau d'ARRAS",
    template: '%s | Maître Manon FONTAINE'
  },
  description: 'Cabinet d’avocat de Maître Manon FONTAINE à Arras. Expertise en droit de la famille, droit du travail et droit immobilier. Défense de vos droits et conseils juridiques.',
  other: {
    'geo.region': 'FR',
    'geo.placename': 'Arras',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <body>
        <JsonLd />
        <Navbar />
        
        {/* C'est ici que Next.js va injecter dynamiquement le contenu de la page sur laquelle on se trouve */}
        {children} 
        
        <Footer />
        <CustomCursor />
        <ScrollToTop />
        <MobileCallBanner />
      </body>
    </html>
  );
}

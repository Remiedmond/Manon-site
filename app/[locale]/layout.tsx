// app/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./../globals.css";
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



// Génération automatique des balises SEO hreflang pour Google
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.manonfontaine-avocat.fr'; // Remplace par ton vrai domaine

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/fr`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <body>
        <JsonLd />
        <NextIntlClientProvider messages={messages}>
        <Navbar />
        
        {/* C'est ici que Next.js va injecter dynamiquement le contenu de la page sur laquelle on se trouve */}
        {children} 
        
        <Footer />
        <CustomCursor />
        <ScrollToTop />
        <MobileCallBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

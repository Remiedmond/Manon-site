"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

type AccordionSectionProps = {
  title: string;
  children: React.ReactNode;
};

function AccordionSection({ title, children }: AccordionSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:contents">
      {/* Trigger — visible uniquement mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-full flex justify-between items-center py-3 border-b border-white/10 text-left"
        aria-expanded={open}
      >
        <span className="font-serif font-semibold text-lawyer-gold tracking-tight text-base">
          {title}
        </span>
        <svg
          className={`w-4 h-4 text-lawyer-gold shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Contenu — toujours visible desktop, toggle mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:overflow-visible md:block ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="pt-3 md:pt-0 flex flex-col gap-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  
  const t = useTranslations('Footer');
  return (
    <footer aria-label="Pied de page" className="bg-lawyer-black py-10">

      <div className="max-w-[85%] mx-auto">

        {/* === DESKTOP : 4 colonnes === */}
        <div className="hidden md:flex flex-row justify-between items-start gap-8">

          {/* Logo + description */}
          <div className="w-[25%] flex flex-col gap-3">
            <Link href="/" className="flex flex-row items-center gap-3">
              <Image src="/logo blanc.svg" alt="Logo Maître Manon FONTAINE" width={16} height={16} className="h-12 w-auto" />
              <span className="text-xl font-serif font-semibold text-white tracking-tight">
                Maître Manon FONTAINE
              </span>
            </Link>
            <p className="font-sans text-sm text-white/80 leading-relaxed">
             {t('Onfo')}
            </p>
            <Link
              href="https://www.linkedin.com/in/manon-fontaine-avocate/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 group w-fit"
            >
              <Image src="/linkedin.svg" alt="" aria-hidden="true" width={16} height={16} className="h-5 w-5" />
              <span className="text-lawyer-gold group-hover:text-white text-sm transition-colors duration-200">LinkedIn</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="w-[18%] flex flex-col gap-2" aria-label="Navigation secondaire">
            <span className="font-serif font-semibold text-lawyer-gold tracking-tight text-lg mb-1">Navigation</span>
            {[
              { href: '/', label: t('home') },
              { href: '/cabinet', label: t('cabinet') },
              { href: '/domaines-d-intervention', label: t('domaines') },
              { href: '/honoraires', label: t('fees') },
              { href: '/contact', label: t('contact') },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-white/80 hover:text-white text-sm transition-colors duration-200">{label}</Link>
            ))}
          </nav>

          {/* Domaines */}
          <nav className="w-[22%] flex flex-col gap-2" aria-label="Domaines d'intervention">
            <span className="font-serif font-semibold text-lawyer-gold tracking-tight text-lg mb-1">{t('domainesinfo')}</span>
            {[
              { href: '/droit-de-la-famille', label: 'Droit de la famille' },
              { href: '/droit-du-travail', label: 'Droit du travail' },
              { href: '/droit-des-contrats', label: 'Droit des contrats' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-white/80 hover:text-white text-sm transition-colors duration-200">{label}</Link>
            ))}
          </nav>

          {/* Contact */}
          <address className="w-[25%] flex flex-col gap-3 not-italic">
            <span className="font-serif font-semibold text-lawyer-gold tracking-tight text-lg">{t('contact2')}</span>
            <div className="flex gap-3 items-start">
              <Image src="/loc.svg" alt="" aria-hidden="true" width={16} height={16} className="h-5 w-5 mt-0.5 shrink-0" />
              <span className="text-white/80 text-sm leading-snug">{t('adresse')}</span>
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/telephone.svg" alt="" aria-hidden="true" width={14} height={14} className="h-5 w-5 shrink-0" />
              <a href="tel:+33123456789" className="text-white/80 text-sm hover:text-white transition-colors duration-200">{t('phone')}</a>
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/mail.svg" alt="" aria-hidden="true" width={16} height={16} className="h-5 w-5 shrink-0" />
              <a href="mailto:contact@manonfontaine-avocate.fr" className="text-white/80 text-sm hover:text-white transition-colors duration-200 break-all">
                {t('email')}
              </a>
            </div>
          </address>
        </div>

        {/* === MOBILE : Logo + accordions === */}
        <div className="md:hidden flex flex-col">

          {/* Logo centré */}
          <Link href="/" className="flex flex-row items-center justify-center gap-3 mb-6">
            <Image src="/logo blanc.svg" alt="Logo Maître Manon FONTAINE" width={16} height={16} className="h-10 w-auto" />
            <span className="text-lg font-serif font-semibold text-white tracking-tight">
              Maître Manon FONTAINE
            </span>
          </Link>

          {/* Description */}
          <p className="text-center text-xs text-white/70 leading-relaxed mb-6 px-2">
            {t('Onfo')}
          </p>

          {/* Accordion : Navigation */}
          <AccordionSection title="Navigation">
            {[
              { href: '/', label: t('home') },
              { href: '/le-cabinet', label: t('cabinet') },
              { href: '/domaines-d-intervention', label: t('domaines') },
              { href: '/honoraires', label: t('fees') },
              { href: '/contact', label: t('contact') },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-white/80 hover:text-white text-sm transition-colors duration-200">
                {label}
              </Link>
            ))}
          </AccordionSection>

          {/* Accordion : Domaines */}
          <AccordionSection title={t('domainesinfo')}>
            {[
              { href: '/droit-de-la-famille', label: 'Droit de la famille' },
              { href: '/droit-du-travail', label: 'Droit du travail' },
              { href: '/droit-des-contrats', label: 'Droit des contrats' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-white/80 hover:text-white text-sm transition-colors duration-200">
                {label}
              </Link>
            ))}
          </AccordionSection>

          {/* Accordion : Contact */}
          <AccordionSection title={t('contact2')}>
            <div className="flex gap-3 items-start">
              <Image src="/loc.svg" alt="" aria-hidden="true" width={16} height={16} className="h-5 w-5 mt-0.5 shrink-0" />
              <span className="text-white/80 text-sm leading-snug">{t('adresse')}</span>
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/telephone.svg" alt="" aria-hidden="true" width={14} height={14} className="h-5 w-5 shrink-0" />
              <a href="tel:+33123456789" className="text-white/80 text-sm hover:text-white transition-colors duration-200">{t('phone')}</a>
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/mail.svg" alt="" aria-hidden="true" width={16} height={16} className="h-5 w-5 shrink-0" />
              <a href="mailto:contact@manonfontaine-avocate.fr" className="text-white/80 text-sm hover:text-white transition-colors duration-200 break-all">
                {t('email')}
              </a>
            </div>
          </AccordionSection>

          {/* LinkedIn centré */}
          <Link
            href="https://www.linkedin.com/in/manon-fontaine-avocate/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-6 group"
          >
            <Image src="/linkedin.svg" alt="" aria-hidden="true" width={16} height={16} className="h-5 w-5" />
            <span className="text-lawyer-gold group-hover:text-white text-sm transition-colors duration-200">LinkedIn</span>
          </Link>
        </div>

        {/* Séparateur */}
        <div className="mt-8 mb-6 border-t border-white/10" />

        {/* Bas de page */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-center md:text-left">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Maître Manon FONTAINE. {t('toutdroitsreserves')}.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            <Link href="/mentions-legales" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
              {t('mentionslegales')}
            </Link>
            <Link href="/politique-de-confidentialite" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
              {t('politiqueconfidentialite')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
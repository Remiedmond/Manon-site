"use client"; 

import { useState } from 'react';
import Image from 'next/image'; 
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navbar');

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[85%] mx-auto ">
        <div className="flex justify-between h-20">
          
          {/* Logo / Nom */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex flex-row items-center gap-3">
             <Image 
                src="/logo_manon.svg" 
                alt="Logo Maître Manon FONTAINE" 
                width={16}   
                height={16} 
                className="h-12 w-auto" 
               
              />
            </Link>
              <div className="flex flex-col leading-tight">
                 <Link href="/" className="flex flex-col leading-tight">
              <span className="text-l md:text-xl font-serif font-semibold text-slate-900 tracking-tight">
                Maître Manon FONTAINE
              </span>
              <span className="text-xs md:text-s tracking-widest text-lawyer-green max-w-[200px] truncate">
                {t('barreau')}
              </span>
            </Link>
              <LanguageSwitcher />
              </div>
           
          </div>

          {/* Liens Desktop (cachés sur mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition font-medium">
              {t('home')}
            </Link>
            <Link href="/cabinet" className="text-slate-600 hover:text-slate-900 transition font-medium">
              {t('cabinet')}
            </Link>
             <Link href="/domaines-d-intervention" className="text-slate-600 hover:text-slate-900 transition font-medium">
              {t('domaines')}
            </Link>
            <Link href="/honoraires" className="text-slate-600 hover:text-slate-900 transition font-medium">
              {t('fees')}
            </Link>
            <Link 
              href="/contact" 
              className="bg-lawyer-green text-white px-5 py-2.5 rounded-sm hover:bg-lawyer-green-dark transition font-medium shadow-sm"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Bouton Mobile */}
          <div className="md:hidden gap-1.5 flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/cabinet" className="block px-3 py-2 text-slate-600 font-medium">{t('cabinet')}</Link>
            <Link href="/domaines-d-intervention" className="block px-3 py-2 text-slate-600 font-medium">{t('domaines')}</Link>
            <Link href="/honoraires" className="block px-3 py-2 text-slate-600 font-medium">{t('fees')}</Link>
            <Link href="/contact" className="block px-3 py-2 text-lawyer-green font-bold text-lg">{t('contact')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: 'fr' | 'en' | 'it') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2 text-[10px] ">
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'fr'
            ? 'bg-lawyer-green text-white font-bold'
            : 'text-gray-600 hover:text-lawyer-green'
        }`}
      >
        FR
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'bg-lawyer-green text-white font-bold'
            : 'text-gray-600 hover:text-lawyer-green'
        }`}
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchLanguage('it')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'it'
            ? 'bg-lawyer-green text-white shadow-sm'
            : 'text-gray-600 hover:text-lawyer-green'
        }`}
      >
        IT
      </button>
    </div>
  );
}

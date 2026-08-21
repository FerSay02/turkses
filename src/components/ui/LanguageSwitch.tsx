import * as React from 'react';
import type { Locale } from '../../locales/types';

type LanguageSwitchProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  label: string;
};

export function LanguageSwitch({ locale, setLocale, label }: LanguageSwitchProps) {
  return (
    <div className="language-switch" role="group" aria-label={label}>
      <button
        className={`language-option ${locale === 'tr' ? 'is-active' : ''}`}
        type="button"
        onClick={() => setLocale('tr')}
      >
        TR
      </button>
      <button
        className={`language-option ${locale === 'en' ? 'is-active' : ''}`}
        type="button"
        onClick={() => setLocale('en')}
      >
        EN
      </button>
    </div>
  );
}

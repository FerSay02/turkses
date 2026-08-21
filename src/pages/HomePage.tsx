import * as React from 'react';
import type { Locale, TranslationMap } from '../locales/types';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';

type HomePageProps = {
  locale: Locale;
  copy: TranslationMap;
};

export function HomePage({ locale, copy }: HomePageProps) {
  return (
    <>
      <Hero locale={locale} copy={copy} />
      <TrustStrip copy={copy} />
    </>
  );
}

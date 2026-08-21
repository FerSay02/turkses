import * as React from 'react';
import type { TranslationMap } from '../../locales/types';
import { ScrollTextReveal } from '../ui/ScrollTextReveal';

type TrustStripProps = {
  copy: TranslationMap;
};

export function TrustStrip({ copy }: TrustStripProps) {
  return (
    <section className="trust-strip" aria-label="Scientific trust strip">
      <div className="trust-strip-inline">
        {copy.trust.map((item, index) => (
          <span className="trust-chip" key={item}>
            <span className="trust-dot" aria-hidden="true" />
            <ScrollTextReveal delay={index * 90}>{item}</ScrollTextReveal>
          </span>
        ))}
      </div>
    </section>
  );
}

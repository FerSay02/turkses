import * as React from 'react';
import type { TranslationMap } from '../locales/types';
import { AnimatedPageHeader } from '../components/ui/AnimatedPageHeader';
import { OrbitBorderCard } from '../components/ui/OrbitBorderCard';
import { ScrollTextReveal } from '../components/ui/ScrollTextReveal';

type PageProps = {
  copy: TranslationMap;
};

export function DataEthicsPage({ copy }: PageProps) {
  const { ethics } = copy.sections;

  return (
    <section className="content-section" id={ethics.id}>
      <AnimatedPageHeader
        align="center"
        eyebrow={ethics.kicker}
        eyebrowTone="green"
        title={ethics.title}
        description={ethics.lead}
      />

      <div className="governance-grid">
        {ethics.pillars.map((item, index) => (
          <OrbitBorderCard className="governance-card" key={item.title} phase={index * 60}>
            <span className="governance-line" aria-hidden="true" />
            <strong>
              <ScrollTextReveal delay={index * 50}>{item.title}</ScrollTextReveal>
            </strong>
            <p>
              <ScrollTextReveal delay={index * 70 + 20}>{item.body}</ScrollTextReveal>
            </p>
          </OrbitBorderCard>
        ))}
      </div>
    </section>
  );
}

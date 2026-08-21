import * as React from 'react';
import type { TranslationMap } from '../locales/types';
import { AnimatedPageHeader } from '../components/ui/AnimatedPageHeader';
import { OrbitBorderCard } from '../components/ui/OrbitBorderCard';
import { ScrollTextReveal } from '../components/ui/ScrollTextReveal';

type PageProps = {
  copy: TranslationMap;
};

export function ProjectPage({ copy }: PageProps) {
  const { about } = copy.sections;

  return (
    <section className="content-section section-split" id={about.id}>
      <AnimatedPageHeader eyebrow={about.kicker} title={about.title} description={about.lead} />

      <div className="section-split-grid">
        <OrbitBorderCard className="section-panel" phase={0}>
          <h2 className="section-panel-title">
            <ScrollTextReveal>{about.needsTitle}</ScrollTextReveal>
          </h2>
          <div className="section-list">
            {about.needs.map((item, index) => (
              <div className="section-list-item" key={item}>
                <span className="section-list-marker" aria-hidden="true" />
                <p>
                  <ScrollTextReveal delay={index * 70}>{item}</ScrollTextReveal>
                </p>
              </div>
            ))}
          </div>
        </OrbitBorderCard>

        <OrbitBorderCard className="section-panel" phase={120}>
          <h2 className="section-panel-title">
            <ScrollTextReveal>{about.objectivesTitle}</ScrollTextReveal>
          </h2>
          <div className="objective-grid">
            {about.objectives.map((item, index) => (
              <div className="objective-card" key={item.title}>
                <strong>
                  <ScrollTextReveal delay={index * 70}>{item.title}</ScrollTextReveal>
                </strong>
                <p>
                  <ScrollTextReveal delay={index * 90 + 40}>{item.body}</ScrollTextReveal>
                </p>
              </div>
            ))}
          </div>
        </OrbitBorderCard>
      </div>
    </section>
  );
}

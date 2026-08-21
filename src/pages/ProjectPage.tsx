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

      <div className="section-split-grid project-intro-grid">
        <OrbitBorderCard className="section-panel project-intro-panel project-needs-panel" phase={0}>
          <h2 className="section-panel-title project-panel-title">
            <ScrollTextReveal>{about.needsTitle}</ScrollTextReveal>
          </h2>
          <div className="section-list project-needs-list">
            {about.needs.map((item, index) => (
              <div className="section-list-item project-need-item" key={item}>
                <span className="section-list-marker" aria-hidden="true" />
                <p>
                  <ScrollTextReveal delay={index * 70}>{item}</ScrollTextReveal>
                </p>
              </div>
            ))}
          </div>
        </OrbitBorderCard>

        <OrbitBorderCard className="section-panel project-intro-panel project-objectives-panel" phase={120}>
          <h2 className="section-panel-title project-panel-title">
            <ScrollTextReveal>{about.objectivesTitle}</ScrollTextReveal>
          </h2>
          <div className="objective-grid project-objective-grid">
            {about.objectives.map((item, index) => (
              <OrbitBorderCard
                as="div"
                className={`objective-card project-objective-card orbit-border-card--inner ${
                  index === about.objectives.length - 1 ? 'project-objective-card-wide' : ''
                }`}
                key={item.title}
                phase={index * 90 + 40}
                speed={11}
                hoverFill={72}
              >
                <strong>
                  <ScrollTextReveal delay={index * 70}>{item.title}</ScrollTextReveal>
                </strong>
                <p>
                  <ScrollTextReveal delay={index * 90 + 40}>{item.body}</ScrollTextReveal>
                </p>
              </OrbitBorderCard>
            ))}
          </div>
        </OrbitBorderCard>
      </div>
    </section>
  );
}

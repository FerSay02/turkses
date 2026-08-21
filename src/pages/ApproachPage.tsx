import * as React from 'react';
import type { TranslationMap } from '../locales/types';
import { AnimatedPageHeader } from '../components/ui/AnimatedPageHeader';
import { OrbitBorderCard } from '../components/ui/OrbitBorderCard';
import { SectionJumpNav } from '../components/ui/SectionJumpNav';
import { ScrollTextReveal } from '../components/ui/ScrollTextReveal';

type PageProps = {
  copy: TranslationMap;
};

export function ApproachPage({ copy }: PageProps) {
  const { approach, technology } = copy.sections;

  return (
    <>
      <section className="content-section" id={approach.id}>
        <AnimatedPageHeader
          align="center"
          eyebrow={approach.kicker}
          title={approach.title}
          description={approach.lead}
        />

        <SectionJumpNav
          ariaLabel="Yaklaşım sayfası bölümleri"
          items={[
            { href: `#${approach.id}`, label: approach.title },
            { href: `#${technology.id}`, label: technology.title },
          ]}
        />

        <div className="flow-strip" aria-label={approach.title}>
          {approach.flow.map((item, index) => (
            <React.Fragment key={item}>
              <OrbitBorderCard
                as="div"
                className="flow-chip orbit-border-card--inner"
                phase={index * 72}
                speed={11}
                hoverFill={78}
              >
                <ScrollTextReveal delay={index * 70}>{item}</ScrollTextReveal>
              </OrbitBorderCard>
              {index < approach.flow.length - 1 ? (
                <span className="flow-arrow" aria-hidden="true">
                  {'→'}
                </span>
              ) : null}
            </React.Fragment>
          ))}
        </div>

        <div className="section-block">
          <div className="section-subhead">
            <h2 className="section-panel-title">
              <ScrollTextReveal>{approach.researchAreasTitle}</ScrollTextReveal>
            </h2>
          </div>
          <div className="structured-grid">
            {approach.researchAreas.map((item, index) => (
              <OrbitBorderCard className="structured-card" key={item.title} phase={index * 90}>
                <strong>
                  <ScrollTextReveal delay={index * 60}>{item.title}</ScrollTextReveal>
                </strong>
                <p>
                  <ScrollTextReveal delay={index * 80 + 30}>{item.body}</ScrollTextReveal>
                </p>
              </OrbitBorderCard>
            ))}
          </div>
        </div>

        <div className="section-block">
          <div className="section-subhead">
            <h2 className="section-panel-title">
              <ScrollTextReveal>{approach.processTitle}</ScrollTextReveal>
            </h2>
          </div>
          <div className="timeline-grid">
            {approach.process.map((item, index) => (
              <OrbitBorderCard className="timeline-card" key={item.index} phase={index * 60}>
                <span className="timeline-index">
                  <ScrollTextReveal delay={index * 50}>{item.index}</ScrollTextReveal>
                </span>
                <strong>
                  <ScrollTextReveal delay={index * 70 + 20}>{item.title}</ScrollTextReveal>
                </strong>
                <p>
                  <ScrollTextReveal delay={index * 90 + 40}>{item.body}</ScrollTextReveal>
                </p>
              </OrbitBorderCard>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-split" id={technology.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{technology.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{technology.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{technology.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="structured-grid">
          {technology.areas.map((item, index) => (
            <OrbitBorderCard className="structured-card" key={item.title} phase={index * 72}>
              <strong>
                <ScrollTextReveal delay={index * 60}>{item.title}</ScrollTextReveal>
              </strong>
              <p>
                <ScrollTextReveal delay={index * 80 + 30}>{item.body}</ScrollTextReveal>
              </p>
            </OrbitBorderCard>
          ))}
        </div>
      </section>
    </>
  );
}

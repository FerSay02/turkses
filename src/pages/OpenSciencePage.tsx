import * as React from 'react';
import type { TranslationMap } from '../locales/types';
import { AnimatedPageHeader } from '../components/ui/AnimatedPageHeader';
import { OrbitBorderCard } from '../components/ui/OrbitBorderCard';
import { SectionJumpNav } from '../components/ui/SectionJumpNav';
import { ScrollTextReveal } from '../components/ui/ScrollTextReveal';

type PageProps = {
  copy: TranslationMap;
};

export function OpenSciencePage({ copy }: PageProps) {
  const { openScience, news } = copy.sections;

  return (
    <>
      <section className="content-section section-split" id={openScience.id}>
        <AnimatedPageHeader
          eyebrow={openScience.kicker}
          title={openScience.title}
          description={openScience.lead}
        />

        <SectionJumpNav
          ariaLabel="Açık bilim sayfası bölümleri"
          items={[
            { href: `#${openScience.id}`, label: openScience.title },
            { href: `#${news.id}`, label: news.title },
          ]}
        />

        <div className="section-split-grid">
          <OrbitBorderCard className="section-panel" phase={0}>
            <div className="publication-grid">
              {openScience.catalogue.map((item, index) => (
                <div className="publication-row" key={item.title}>
                  <strong>
                    <ScrollTextReveal delay={index * 55}>{item.title}</ScrollTextReveal>
                  </strong>
                  <span className="publication-status">
                    <ScrollTextReveal delay={index * 65 + 20}>{item.status}</ScrollTextReveal>
                  </span>
                </div>
              ))}
            </div>
          </OrbitBorderCard>

          <OrbitBorderCard className="section-panel section-panel-note" phase={180}>
            <p className="section-note">
              <ScrollTextReveal>{openScience.privacyNote}</ScrollTextReveal>
            </p>
          </OrbitBorderCard>
        </div>
      </section>

      <section className="content-section" id={news.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{news.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{news.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{news.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="section-split-grid">
          <OrbitBorderCard className="section-panel" phase={90}>
            <div className="team-grid">
              {news.categories.map((item, index) => (
                <OrbitBorderCard
                  as="div"
                  className="team-chip team-chip-blue orbit-border-card--inner"
                  key={item}
                  phase={index * 52}
                  speed={10}
                  hoverFill={72}
                >
                  <ScrollTextReveal delay={index * 50}>{item}</ScrollTextReveal>
                </OrbitBorderCard>
              ))}
            </div>
          </OrbitBorderCard>

          <OrbitBorderCard className="section-panel section-panel-note" phase={270}>
            <strong className="empty-state-title">
              <ScrollTextReveal>{news.emptyTitle}</ScrollTextReveal>
            </strong>
            <p className="section-note">
              <ScrollTextReveal delay={60}>{news.emptyBody}</ScrollTextReveal>
            </p>
          </OrbitBorderCard>
        </div>
      </section>
    </>
  );
}

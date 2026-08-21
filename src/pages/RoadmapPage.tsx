import * as React from 'react';
import type { TranslationMap } from '../locales/types';
import { AnimatedPageHeader } from '../components/ui/AnimatedPageHeader';
import { OrbitBorderCard } from '../components/ui/OrbitBorderCard';
import { SectionJumpNav } from '../components/ui/SectionJumpNav';
import { ScrollTextReveal } from '../components/ui/ScrollTextReveal';

type PageProps = {
  copy: TranslationMap;
};

export function RoadmapPage({ copy }: PageProps) {
  const { roadmap, consortium } = copy.sections;

  return (
    <>
      <section className="content-section section-split" id={roadmap.id}>
        <AnimatedPageHeader eyebrow={roadmap.kicker} title={roadmap.title} description={roadmap.lead} />

        <SectionJumpNav
          ariaLabel="Yol haritası sayfası bölümleri"
          items={[
            { href: `#${roadmap.id}`, label: roadmap.title },
            { href: `#${consortium.id}`, label: consortium.title },
          ]}
        />

        <div className="roadmap-shell">
          <div className="roadmap-years">
            {roadmap.years.map((item, index) => (
              <OrbitBorderCard className="roadmap-year" key={item.year} phase={index * 120}>
                <h2>
                  <ScrollTextReveal delay={index * 70}>{item.year}</ScrollTextReveal>
                </h2>
                <div className="section-list">
                  {item.milestones.map((milestone, milestoneIndex) => (
                    <div className="section-list-item" key={milestone}>
                      <span className="section-list-marker section-list-marker-green" aria-hidden="true" />
                      <p>
                        <ScrollTextReveal delay={index * 90 + milestoneIndex * 60}>
                          {milestone}
                        </ScrollTextReveal>
                      </p>
                    </div>
                  ))}
                </div>
              </OrbitBorderCard>
            ))}
          </div>

          <div className="section-block">
            <div className="section-subhead">
              <h2 className="section-panel-title">
                <ScrollTextReveal>{roadmap.outputsTitle}</ScrollTextReveal>
              </h2>
            </div>
            <div className="structured-grid">
              {roadmap.outputs.map((item, index) => (
                <OrbitBorderCard className="structured-card" key={item.title} phase={index * 72}>
                  <strong>
                    <ScrollTextReveal delay={index * 50}>{item.title}</ScrollTextReveal>
                  </strong>
                  <p>
                    <ScrollTextReveal delay={index * 70 + 20}>{item.body}</ScrollTextReveal>
                  </p>
                </OrbitBorderCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-split" id={consortium.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{consortium.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{consortium.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{consortium.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="section-split-grid consortium-grid">
          <div className="institution-list">
            {consortium.organizations.map((item, index) => (
              <OrbitBorderCard
                className="institution-row orbit-border-card--inner"
                key={item.title}
                phase={index * 80 + 45}
                speed={11}
                hoverFill={76}
              >
                  <strong>
                    <ScrollTextReveal delay={index * 60}>{item.title}</ScrollTextReveal>
                  </strong>
                  <p>
                    <ScrollTextReveal delay={index * 80 + 20}>{item.body}</ScrollTextReveal>
                  </p>
              </OrbitBorderCard>
            ))}
          </div>

          <OrbitBorderCard className="section-panel workgroup-panel" phase={180} speed={14}>
            <h2 className="section-panel-title">
              <ScrollTextReveal>{consortium.teamsTitle}</ScrollTextReveal>
            </h2>
            <div className="team-grid">
              {consortium.teams.map((item, index) => (
                <OrbitBorderCard
                  as="div"
                  className="team-chip orbit-border-card--inner"
                  key={item}
                  phase={index * 60}
                  speed={10}
                  hoverFill={72}
                >
                  <ScrollTextReveal delay={index * 55}>{item}</ScrollTextReveal>
                </OrbitBorderCard>
              ))}
            </div>
          </OrbitBorderCard>
        </div>
      </section>
    </>
  );
}

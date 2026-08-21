import * as React from 'react';
import type { TranslationMap } from '../../locales/types';
import { ScrollTextReveal } from '../ui/ScrollTextReveal';

type ContentSectionsProps = {
  copy: TranslationMap;
};

export function ContentSections({ copy }: ContentSectionsProps) {
  const [logoFailed, setLogoFailed] = React.useState(false);
  const { sections } = copy;

  return (
    <>
      <section className="content-section section-split" id={sections.about.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{sections.about.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.about.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{sections.about.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="section-split-grid">
          <article className="section-panel">
            <h3 className="section-panel-title">
              <ScrollTextReveal>{sections.about.needsTitle}</ScrollTextReveal>
            </h3>
            <div className="section-list">
              {sections.about.needs.map((item, index) => (
                <div className="section-list-item" key={item}>
                  <span className="section-list-marker" aria-hidden="true" />
                  <p>
                    <ScrollTextReveal delay={index * 70}>{item}</ScrollTextReveal>
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="section-panel">
            <h3 className="section-panel-title">
              <ScrollTextReveal>{sections.about.objectivesTitle}</ScrollTextReveal>
            </h3>
            <div className="objective-grid">
              {sections.about.objectives.map((item, index) => (
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
          </article>
        </div>
      </section>

      <section className="content-section" id={sections.approach.id}>
        <div className="section-heading section-heading-center">
          <p className="section-kicker">
            <ScrollTextReveal>{sections.approach.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.approach.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{sections.approach.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="flow-strip" aria-label={sections.approach.title}>
          {sections.approach.flow.map((item, index) => (
            <React.Fragment key={item}>
              <div className="flow-chip">
                <ScrollTextReveal delay={index * 70}>{item}</ScrollTextReveal>
              </div>
              {index < sections.approach.flow.length - 1 ? (
                <span className="flow-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </React.Fragment>
          ))}
        </div>

        <div className="section-block">
          <div className="section-subhead">
            <h3 className="section-panel-title">
              <ScrollTextReveal>{sections.approach.researchAreasTitle}</ScrollTextReveal>
            </h3>
          </div>
          <div className="structured-grid">
            {sections.approach.researchAreas.map((item, index) => (
              <article className="structured-card" key={item.title}>
                <strong>
                  <ScrollTextReveal delay={index * 60}>{item.title}</ScrollTextReveal>
                </strong>
                <p>
                  <ScrollTextReveal delay={index * 80 + 30}>{item.body}</ScrollTextReveal>
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-block">
          <div className="section-subhead">
            <h3 className="section-panel-title">
              <ScrollTextReveal>{sections.approach.processTitle}</ScrollTextReveal>
            </h3>
          </div>
          <div className="timeline-grid">
            {sections.approach.process.map((item, index) => (
              <article className="timeline-card" key={item.index}>
                <span className="timeline-index">
                  <ScrollTextReveal delay={index * 50}>{item.index}</ScrollTextReveal>
                </span>
                <strong>
                  <ScrollTextReveal delay={index * 70 + 20}>{item.title}</ScrollTextReveal>
                </strong>
                <p>
                  <ScrollTextReveal delay={index * 90 + 40}>{item.body}</ScrollTextReveal>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-split" id={sections.technology.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{sections.technology.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.technology.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{sections.technology.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="structured-grid">
          {sections.technology.areas.map((item, index) => (
            <article className="structured-card" key={item.title}>
              <strong>
                <ScrollTextReveal delay={index * 60}>{item.title}</ScrollTextReveal>
              </strong>
              <p>
                <ScrollTextReveal delay={index * 80 + 30}>{item.body}</ScrollTextReveal>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id={sections.ethics.id}>
        <div className="section-heading section-heading-center">
          <p className="section-kicker section-kicker-ethics">
            <ScrollTextReveal>{sections.ethics.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.ethics.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{sections.ethics.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="governance-grid">
          {sections.ethics.pillars.map((item, index) => (
            <article className="governance-card" key={item.title}>
              <span className="governance-line" aria-hidden="true" />
              <strong>
                <ScrollTextReveal delay={index * 50}>{item.title}</ScrollTextReveal>
              </strong>
              <p>
                <ScrollTextReveal delay={index * 70 + 20}>{item.body}</ScrollTextReveal>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-split" id={sections.roadmap.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{sections.roadmap.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.roadmap.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{sections.roadmap.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="roadmap-shell">
          <div className="roadmap-years">
            {sections.roadmap.years.map((item, index) => (
              <article className="roadmap-year" key={item.year}>
                <h3>
                  <ScrollTextReveal delay={index * 70}>{item.year}</ScrollTextReveal>
                </h3>
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
              </article>
            ))}
          </div>

          <div className="section-block">
            <div className="section-subhead">
              <h3 className="section-panel-title">
                <ScrollTextReveal>{sections.roadmap.outputsTitle}</ScrollTextReveal>
              </h3>
            </div>
            <div className="structured-grid">
              {sections.roadmap.outputs.map((item, index) => (
                <article className="structured-card" key={item.title}>
                  <strong>
                    <ScrollTextReveal delay={index * 50}>{item.title}</ScrollTextReveal>
                  </strong>
                  <p>
                    <ScrollTextReveal delay={index * 70 + 20}>{item.body}</ScrollTextReveal>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-split" id={sections.consortium.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{sections.consortium.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.consortium.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{sections.consortium.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="section-split-grid">
          <article className="section-panel">
            <div className="institution-list">
              {sections.consortium.organizations.map((item, index) => (
                <div className="institution-row" key={item.title}>
                  <strong>
                    <ScrollTextReveal delay={index * 60}>{item.title}</ScrollTextReveal>
                  </strong>
                  <p>
                    <ScrollTextReveal delay={index * 80 + 20}>{item.body}</ScrollTextReveal>
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="section-panel">
            <h3 className="section-panel-title">
              <ScrollTextReveal>{sections.consortium.teamsTitle}</ScrollTextReveal>
            </h3>
            <div className="team-grid">
              {sections.consortium.teams.map((item, index) => (
                <div className="team-chip" key={item}>
                  <ScrollTextReveal delay={index * 55}>{item}</ScrollTextReveal>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="content-section section-split" id={sections.openScience.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{sections.openScience.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.openScience.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{sections.openScience.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="section-split-grid">
          <article className="section-panel">
            <div className="publication-grid">
              {sections.openScience.catalogue.map((item, index) => (
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
          </article>

          <article className="section-panel section-panel-note">
            <p className="section-note">
              <ScrollTextReveal>{sections.openScience.privacyNote}</ScrollTextReveal>
            </p>
          </article>
        </div>
      </section>

      <section className="content-section section-split" id={sections.news.id}>
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollTextReveal>{sections.news.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.news.title}</ScrollTextReveal>
          </h2>
          <p className="section-lead">
            <ScrollTextReveal delay={120}>{sections.news.lead}</ScrollTextReveal>
          </p>
        </div>

        <div className="section-split-grid">
          <article className="section-panel">
            <div className="team-grid">
              {sections.news.categories.map((item, index) => (
                <div className="team-chip team-chip-blue" key={item}>
                  <ScrollTextReveal delay={index * 50}>{item}</ScrollTextReveal>
                </div>
              ))}
            </div>
          </article>

          <article className="section-panel section-panel-note">
            <strong className="empty-state-title">
              <ScrollTextReveal>{sections.news.emptyTitle}</ScrollTextReveal>
            </strong>
            <p className="section-note">
              <ScrollTextReveal delay={60}>{sections.news.emptyBody}</ScrollTextReveal>
            </p>
          </article>
        </div>
      </section>

      <section className="content-section content-section-contact" id={sections.contact.id}>
        <div className="section-heading section-heading-center">
          <p className="section-kicker section-kicker-ethics">
            <ScrollTextReveal>{sections.contact.kicker}</ScrollTextReveal>
          </p>
          <h2 className="section-title">
            <ScrollTextReveal delay={60}>{sections.contact.title}</ScrollTextReveal>
          </h2>
        </div>

        <article className="contact-card">
          <div className="contact-logo-shell">
            {!logoFailed ? (
              <img
                className="contact-logo"
                src="/images/deepzeka-logo.png"
                alt={sections.contact.logoAlt}
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span className="contact-logo-placeholder">{sections.contact.logoPlaceholder}</span>
            )}
          </div>

          <p className="contact-label">
            <ScrollTextReveal>{sections.contact.emailLabel}</ScrollTextReveal>
          </p>
          <a className="contact-email" href={`mailto:${sections.contact.email}`}>
            <ScrollTextReveal delay={80}>{sections.contact.email}</ScrollTextReveal>
          </a>
          <p className="contact-body">
            <ScrollTextReveal delay={120}>{sections.contact.body}</ScrollTextReveal>
          </p>
        </article>
      </section>
    </>
  );
}

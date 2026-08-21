import * as React from 'react';
import type { TranslationMap } from '../locales/types';
import { AnimatedPageHeader } from '../components/ui/AnimatedPageHeader';
import { OrbitBorderCard } from '../components/ui/OrbitBorderCard';
import { ScrollTextReveal } from '../components/ui/ScrollTextReveal';
import deepLogo from '../../images/deep_logo.png';

type PageProps = {
  copy: TranslationMap;
};

export function ContactPage({ copy }: PageProps) {
  const { contact } = copy.sections;
  const [logoFailed, setLogoFailed] = React.useState(false);

  return (
    <section className="content-section content-section-contact" id={contact.id}>
      <AnimatedPageHeader
        align="center"
        eyebrow={contact.kicker}
        eyebrowTone="green"
        title={contact.title}
      />

      <OrbitBorderCard className="contact-card" phase={90}>
        <OrbitBorderCard
          as="div"
          className="contact-logo-shell orbit-border-card--inner"
          phase={210}
          speed={11}
          hoverFill={72}
        >
          {!logoFailed ? (
            <a
              className="contact-logo-link"
              href="https://www.deepzeka.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DeepZeka web sitesini aç"
            >
              <img
                className="contact-logo"
                src={deepLogo}
                alt={contact.logoAlt}
                onError={() => setLogoFailed(true)}
              />
            </a>
          ) : (
            <span className="contact-logo-placeholder">{contact.logoPlaceholder}</span>
          )}
        </OrbitBorderCard>

        <p className="contact-label">
          <ScrollTextReveal>{contact.emailLabel}</ScrollTextReveal>
        </p>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          <ScrollTextReveal delay={80}>{contact.email}</ScrollTextReveal>
        </a>
        <p className="contact-body">
          <ScrollTextReveal delay={120}>{contact.body}</ScrollTextReveal>
        </p>
      </OrbitBorderCard>
    </section>
  );
}

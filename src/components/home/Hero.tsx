import * as React from 'react';
import type { Locale, TranslationMap } from '../../locales/types';
import { MagneticButton } from '../ui/MagneticButton';
import { ScrollTextReveal } from '../ui/ScrollTextReveal';
import StrokeText from '../ui/StrokeText';
import { VoiceField } from './VoiceField';

type HeroProps = {
  locale: Locale;
  copy: TranslationMap;
};

export function Hero({ locale, copy }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-header">
        <div className="hero-title-stack" aria-label={copy.heroTitleLines.join(' ')}>
          <StrokeText
            className="hero-stroke hero-stroke-line"
            text={`${copy.heroTitleLines[0]} ${copy.heroTitleLines[1]}`.trim()}
            strokeColor="#4285F4"
            fillColor="#174EA6"
            strokeWidth={1.1}
            drawDuration={0.75}
            fillDelay={0.08}
            stagger={0.01}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={86}
            fontWeight={400}
            letterSpacing={-3}
          />
        </div>
      </div>

      <div className="hero-body">
        <div className="hero-copy">
          <p className="hero-lead">
            <ScrollTextReveal>{copy.heroLead}</ScrollTextReveal>
          </p>
          <p className="hero-secondary">
            <ScrollTextReveal delay={60}>{copy.heroSecondary}</ScrollTextReveal>
          </p>

          <div className="hero-actions">
            <MagneticButton className="button button-primary" tone="solid" href={copy.ctas.primary.href}>
              <span className="button-label">{copy.ctas.primary.label}</span>
            </MagneticButton>
            <MagneticButton className="button button-secondary" tone="ghost" href={copy.ctas.secondary.href}>
              <span className="button-label">{copy.ctas.secondary.label}</span>
            </MagneticButton>
          </div>

          <div className="hero-note" aria-live="polite">
            <span className="hero-note-label" aria-hidden="true" />
            <span className="hero-note-text">
              <ScrollTextReveal delay={120}>
                {locale === 'tr'
                  ? 'Araştırma platformu, erken risk desteği sunar; tıbbi tanının yerini almaz.'
                  : 'Research-focused early risk support; not a substitute for medical diagnosis.'}
              </ScrollTextReveal>
            </span>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <VoiceField copy={copy} />
        </div>
      </div>
    </section>
  );
}

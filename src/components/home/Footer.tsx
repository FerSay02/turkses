import * as React from 'react';
import { Link } from 'react-router-dom';
import type { TranslationMap } from '../../locales/types';
import { OrbitBorderCard } from '../ui/OrbitBorderCard';
import { ScrollTextReveal } from '../ui/ScrollTextReveal';
import turksesLogo from '../../assets/turkses-logo.png';

type FooterProps = {
  copy: TranslationMap;
};

export function Footer({ copy }: FooterProps) {
  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <OrbitBorderCard
        as="div"
        className="footer-shell orbit-border-card--green orbit-border-card--footer"
        phase={180}
        speed={18}
        hoverFill={74}
      >
        <div className="footer-top">
          <div className="footer-brand-block">
            <div className="footer-brand" id="site-footer-title">
              <span className="footer-brand-mark" aria-hidden="true">
                <img className="footer-logo" src={turksesLogo} alt="" />
                <span className="footer-brand-mark-text">TS</span>
              </span>
              <span className="footer-brand-name">
                <ScrollTextReveal>{copy.brand}</ScrollTextReveal>
              </span>
            </div>
            <p className="footer-description">
              <ScrollTextReveal delay={80}>{copy.footer.description}</ScrollTextReveal>
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {copy.footer.links.map((item) => (
              <Link key={item.label} className="footer-link" to={item.href}>
                <ScrollTextReveal delay={120}>{item.label}</ScrollTextReveal>
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-legal" aria-label="Legal">
          {copy.footer.legalLinks.map((item) => (
            <Link key={item.label} className="footer-link footer-link-legal" to={item.href}>
              <ScrollTextReveal delay={140}>{item.label}</ScrollTextReveal>
            </Link>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            <ScrollTextReveal delay={140}>{copy.footer.bottom.copyright}</ScrollTextReveal>
          </p>
          <p>
            <ScrollTextReveal delay={160}>{copy.footer.bottom.notice}</ScrollTextReveal>
          </p>
        </div>

        <p className="footer-disclaimer">
          <ScrollTextReveal delay={180}>{copy.footer.disclaimer}</ScrollTextReveal>
        </p>
      </OrbitBorderCard>
    </footer>
  );
}

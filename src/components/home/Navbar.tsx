import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LanguageSwitch } from '../ui/LanguageSwitch';
import { OrbitBorderCard } from '../ui/OrbitBorderCard';
import type { Locale, TranslationMap } from '../../locales/types';
import turksesLogo from '../../assets/turkses-logo.png';

type NavbarProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: TranslationMap;
};

export function Navbar({ locale, setLocale, copy }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      const next = window.scrollY > 32;
      setIsScrolled((current) => (current === next ? current : next));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <OrbitBorderCard
      as="nav"
      className={`navbar orbit-border-card--green orbit-border-card--nav ${isScrolled ? 'is-scrolled' : ''}`}
      phase={0}
      speed={14}
      hoverFill={68}
      aria-label="Ana navigasyon"
    >
        <Link className="brand" to="/" aria-label={copy.brand}>
        <span className="brand-mark" aria-hidden="true">
          <img className="brand-logo" src={turksesLogo} alt="" />
          <span className="brand-mark-text">TS</span>
        </span>
        <span className="brand-copy">
          <span className="brand-name">{copy.brand}</span>
          <span className="brand-tag">{copy.brandTag}</span>
        </span>
        </Link>

        <div className="navbar-center" aria-label="Navigasyon">
        {copy.nav.map((item) => (
          <NavLink
            key={item.label}
            className={({ isActive }) => `nav-pill ${isActive ? 'is-active' : ''}`}
            to={item.href}
            end
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
        </div>

        <div className="navbar-actions">
          <LanguageSwitch locale={locale} setLocale={setLocale} label={copy.localeLabel} />
        </div>
    </OrbitBorderCard>
  );
}

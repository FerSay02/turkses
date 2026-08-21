import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import type { Locale, TranslationMap } from '../../locales/types';
import { Footer } from '../home/Footer';
import { Navbar } from '../home/Navbar';

type SiteLayoutProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: TranslationMap;
};

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useLayoutEffect(() => {
    const scrollToPageTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    scrollToPageTop();
    const frame = window.requestAnimationFrame(() => {
      scrollToPageTop();
    });
    const settleTimer = window.setTimeout(scrollToPageTop, 80);
    const finalSettleTimer = window.setTimeout(scrollToPageTop, 260);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.clearTimeout(finalSettleTimer);
    };
  }, [pathname]);

  return null;
}

export function SiteLayout({ locale, setLocale, copy }: SiteLayoutProps) {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <header className="site-header">
        <div className="navbar-shell">
          <Navbar locale={locale} setLocale={setLocale} copy={copy} />
        </div>
      </header>

      <main className="page-main">
        <div key={pathname} className="page-route">
          <Outlet />
        </div>
      </main>

      <Footer copy={copy} />
    </>
  );
}

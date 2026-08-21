import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { CursorRingField } from './components/home/CursorRingField';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { ApproachPage } from './pages/ApproachPage';
import { DataEthicsPage } from './pages/DataEthicsPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { OpenSciencePage } from './pages/OpenSciencePage';
import { ContactPage } from './pages/ContactPage';
import { tr } from './locales/tr';
import { en } from './locales/en';
import type { Locale, TranslationMap } from './locales/types';

const translations: Record<Locale, TranslationMap> = { tr, en };
const { useMemo, useState } = React;

export default function App() {
  const [locale, setLocale] = useState<Locale>('tr');

  const copy = useMemo(() => translations[locale], [locale]);

  return (
    <BrowserRouter>
      <div className="page-shell">
        <div className="page-backdrop" aria-hidden="true">
          <CursorRingField
            background="#ffffff"
            colors={{ items: ['#4285F4', '#174EA6', '#D2E3FC', '#34A853'] }}
            density={660}
            dotSize={46}
            speed={5}
            cameraDistance={160}
            ring={{ push: 38, width: 9, radius: 12, turbulence: 70 }}
          />
        </div>

        <Routes>
          <Route element={<SiteLayout locale={locale} setLocale={setLocale} copy={copy} />}>
            <Route path="/" element={<HomePage locale={locale} copy={copy} />} />
            <Route path="/proje" element={<ProjectPage copy={copy} />} />
            <Route path="/yaklasim" element={<ApproachPage copy={copy} />} />
            <Route path="/veri-etik" element={<DataEthicsPage copy={copy} />} />
            <Route path="/yol-haritasi" element={<RoadmapPage copy={copy} />} />
            <Route path="/acik-bilim" element={<OpenSciencePage copy={copy} />} />
            <Route path="/iletisim" element={<ContactPage copy={copy} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

'use client';
import React, { useEffect } from 'react';
import { useAccessibility } from '../hooks/useAccessibility';
import { useTTS } from '../hooks/useTTS';
import { useSTT } from '../hooks/useSTT';
import { AccessibilityToolbar } from './AccessibilityToolbar';
import { useLanguage } from '../contexts/LanguageContext';

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const a11y = useAccessibility();
  const tts = useTTS({ defaultRate: a11y.ttsSpeed });
  const stt = useSTT();

  const lang = (locale === 'en' ? 'en' : 'tr') as 'tr' | 'en';

  /* ── Font size scaling ── */
  useEffect(() => {
    const scale = a11y.fontSize / 13;
    document.documentElement.style.setProperty('--a11y-font-scale', String(scale));
    document.documentElement.style.setProperty('--a11y-font-size', `${a11y.fontSize}px`);
  }, [a11y.fontSize]);

  /* ── Spacing styles ── */
  useEffect(() => {
    document.documentElement.style.setProperty('--a11y-line-height', String(a11y.lineSpacing));
    document.documentElement.style.setProperty('--a11y-letter-spacing', `${a11y.letterSpacing}px`);
    document.documentElement.style.setProperty('--a11y-word-spacing', `${a11y.wordSpacing}px`);
  }, [a11y.lineSpacing, a11y.letterSpacing, a11y.wordSpacing]);

  return (
    <>
      <style>{`
        :root {
          --a11y-font-scale: 1;
          --a11y-font-size: 13px;
        }
        body p, body li, body h1, body h2, body h3, body h4, body h5, body h6,
        body span, body a, body td, body th, body label, body input, body textarea,
        body button, body select {
          line-height: var(--a11y-line-height, inherit);
          letter-spacing: var(--a11y-letter-spacing, normal);
          word-spacing: var(--a11y-word-spacing, normal);
        }
      `}</style>

      <div
        id="main-content"
        style={a11y.containerStyle}
        {...a11y.containerDataAttrs(lang)}
      >
        {children}
      </div>

      <AccessibilityToolbar
        lang={lang}
        tts={tts}
        stt={stt}
        {...a11y}
      />
    </>
  );
}

'use client';
import React, { useEffect } from 'react';
import { useAccessibility } from '../hooks/useAccessibility';
import { useTTS, TTSLocale } from '../hooks/useTTS';
import { useSTT } from '../hooks/useSTT';
import { AccessibilityToolbar } from './AccessibilityToolbar';
import { useLanguage } from '../contexts/LanguageContext';

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const a11y = useAccessibility();
  const tts = useTTS({ defaultRate: a11y.ttsSpeed });
  const stt = useSTT();

  // Dynamically map locale to partner languages
  const lang = (['en', 'pl', 'ro', 'cz', 'et'].includes(locale) ? locale : 'en') as TTSLocale;

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

  // Wrap TTS speak to pass the current project locale (UK accent for EN, partner voices for PL, RO, CZ, ET)
  const wrappedTTS = {
    ...tts,
    speak: (text: string) => tts.speak(text, lang),
    speakSelection: () => tts.speakSelection(lang),
  };

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
        {...a11y.containerDataAttrs(lang === 'en' ? 'en' : 'tr')}
      >
        {children}
      </div>

      <AccessibilityToolbar
        lang={lang}
        tts={wrappedTTS}
        stt={stt}
        {...a11y}
      />
    </>
  );
}

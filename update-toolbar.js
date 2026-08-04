const fs = require('fs');

const fullToolbarCode = `'use client';
import React, { useState, useEffect, useRef } from 'react';
import type { UseAccessibilityReturn } from '../hooks/useAccessibility';
import type { UseTTSReturn } from '../hooks/useTTS';
import type { UseSTTReturn } from '../hooks/useSTT';

export interface ShortcutDef {
  key: string;
  desc_tr: string;
  desc_en: string;
}

export interface AccessibilityToolbarProps extends UseAccessibilityReturn {
  lang: 'en' | 'pl' | 'ro' | 'cz' | 'et';
  extraShortcuts?: ShortcutDef[];
  tts?: UseTTSReturn;
  stt?: UseSTTReturn;
}

const A11Y_TEXTS: Record<string, Record<string, string>> = {
  en: {
    toolkit: "Accessibility Toolkit",
    typography: "Typography & Spacing",
    fontSize: "Font Size",
    normal: "Normal",
    large: "Large",
    xlarge: "X-Large",
    xxlarge: "XX-Large",
    lineSpacing: "Line Spacing",
    letterSpacing: "Letter Spacing",
    wordSpacing: "Word Spacing",
    contrast: "High Contrast",
    reading: "Reading Aids",
    dyslexiaFont: "Dyslexia-Friendly Font",
    readingGuide: "Reading Guide Line",
    glossary: "Glossary Tooltips",
    magnifier: "Magnifier",
    modes: "Focus & Calm Modes",
    calmMode: "Calm Mode",
    focusMode: "Focus Mode",
    themeFilter: "Theme Filter",
    colorBlind: "Color Blind Filter",
    audio: "Audio Controls",
    speechSpeed: "Speech Speed",
    readSelection: "Text-to-Speech (TTS)",
    voiceInput: "Voice Input",
    stopReading: "Stop",
    pause: "Pause",
    resume: "Resume",
    resetAll: "Reset All Settings",
    off: "OFF",
    night: "Night",
    keyboardShortcuts: "Keyboard Shortcuts",
  },
  pl: {
    toolkit: "Ułatwienia Dostępności",
    typography: "Typografia i Odstępy",
    fontSize: "Rozmiar Czcionki",
    normal: "Normalny",
    large: "Duży",
    xlarge: "Bardzo Duży",
    xxlarge: "Wielki",
    lineSpacing: "Odstępy Linii",
    letterSpacing: "Odstępy Liter",
    wordSpacing: "Odstępy Słów",
    contrast: "Wysoki Kontrast",
    reading: "Pomoce w Czytaniu",
    dyslexiaFont: "Czcionka dla Dyslektyków",
    readingGuide: "Linia Prowadząca",
    glossary: "Słownik Pojęć",
    magnifier: "Lupa",
    modes: "Tryby Skupienia",
    calmMode: "Tryb Spokojny",
    focusMode: "Tryb Skupienia",
    themeFilter: "Filtr Motywu",
    colorBlind: "Filtr dla Daltonistów",
    audio: "Sterowanie Dźwiękiem",
    speechSpeed: "Prędkość Mowy",
    readSelection: "Synteza Mowy (TTS)",
    voiceInput: "Wprowadzanie Głosem",
    stopReading: "Zatrzymaj",
    pause: "Pauza",
    resume: "Wznów",
    resetAll: "Resetuj Wszystko",
    off: "WYŁ",
    night: "Noc",
    keyboardShortcuts: "Skróty Klawiszowe",
  },
  ro: {
    toolkit: "Instrumente Accesibilitate",
    typography: "Tipografie și Spațiere",
    fontSize: "Dimensiune Font",
    normal: "Normal",
    large: "Mare",
    xlarge: "Foarte Mare",
    xxlarge: "Uriaș",
    lineSpacing: "Spațiere Linii",
    letterSpacing: "Spațiere Litere",
    wordSpacing: "Spațiere Cuvinte",
    contrast: "Contrast Ridicat",
    reading: "Ajutoare pentru Citire",
    dyslexiaFont: "Font Accesibil Dislexie",
    readingGuide: "Ghid de Citire",
    glossary: "Glosar Termeni",
    magnifier: "Lupă",
    modes: "Moduri Focalizare",
    calmMode: "Mod Calm",
    focusMode: "Mod Focalizare",
    themeFilter: "Filtru Temă",
    colorBlind: "Filtru Daltonism",
    audio: "Control Audio & Vorbire",
    speechSpeed: "Viteză Vorbire",
    readSelection: "Lectură Text (TTS)",
    voiceInput: "Introducere Vocală",
    stopReading: "Oprește",
    pause: "Pauză",
    resume: "Reluare",
    resetAll: "Resetează Tot",
    off: "OPRIT",
    night: "Noapte",
    keyboardShortcuts: "Scurtături Tastatură",
  },
  cz: {
    toolkit: "Nástroje Přístupnosti",
    typography: "Typografie a Rozestupy",
    fontSize: "Velikost Písma",
    normal: "Normální",
    large: "Velké",
    xlarge: "Velmi Velké",
    xxlarge: "Obří",
    lineSpacing: "Rozestup Řádků",
    letterSpacing: "Rozestup Písmen",
    wordSpacing: "Rozestup Slov",
    contrast: "Vysoký Kontrast",
    reading: "Pomůcky pro Čtení",
    dyslexiaFont: "Písmo pro Dyslektiky",
    readingGuide: "Vodicí Linka Čtení",
    glossary: "Slovník Pojmů",
    magnifier: "Lupa",
    modes: "Režimy Soustředění",
    calmMode: "Klidný Režim",
    focusMode: "Režim Soustředění",
    themeFilter: "Filtr Motivu",
    colorBlind: "Filtr pro Daltoniky",
    audio: "Ovládání Zvuku a Řeči",
    speechSpeed: "Rychlost Řeči",
    readSelection: "Čtení Textu (TTS)",
    voiceInput: "Hlasový Vstup",
    stopReading: "Zastavit",
    pause: "Pauza",
    resume: "Pokračovat",
    resetAll: "Obnovit Vše",
    off: "VYPNUTO",
    night: "Noc",
    keyboardShortcuts: "Klávesové Zkratky",
  },
  et: {
    toolkit: "Juurdepääsetavuse Tööriistad",
    typography: "Tüpoograafia ja Reavahed",
    fontSize: "Kirjasuurus",
    normal: "Tavaline",
    large: "Suur",
    xlarge: "Väga Suur",
    xxlarge: "Hiiglaslik",
    lineSpacing: "Reavahe",
    letterSpacing: "Tähtede Vahe",
    wordSpacing: "Sõnade Vahe",
    contrast: "Kõrge Kontrast",
    reading: "Lugemisabivahendid",
    dyslexiaFont: "Dysleksiasõbralik Font",
    readingGuide: "Lugemisjoon",
    glossary: "Mõistete Sõnastik",
    magnifier: "Luup",
    modes: "Fookuse ja Rahu Režiimid",
    calmMode: "Rahu Režiim",
    focusMode: "Fookuse Režiim",
    themeFilter: "Teemafilter",
    colorBlind: "Värvipimeduse Filter",
    audio: "Heli ja Kõne Juhtimine",
    speechSpeed: "Kõne Kiirus",
    readSelection: "Teksti Ettelugemine (TTS)",
    voiceInput: "Häälsiestus",
    stopReading: "Peata",
    pause: "Paus",
    resume: "Jätka",
    resetAll: "Lähtesta Kõik",
    off: "VÄLJAS",
    night: "Öö",
    keyboardShortcuts: "Klaviatuuri Kiirklahvid",
  }
};

export function AccessibilityToolbar({
  lang,
  extraShortcuts,
  tts,
  stt,
  fontSize, highContrast, calmMode, focusMode, magnifier,
  lineSpacing, letterSpacing, wordSpacing, colorBlindMode,
  dyslexiaFont, readingGuide, readingGuideY, themeFilter,
  ttsSpeed, showShortcuts, glossaryEnabled, a11yOpen,
  setA11yOpen, setShowShortcuts,
  changeFontSize, setFontSizeAbsolute, toggleContrast, toggleCalm, toggleFocus, toggleMagnifier,
  cycleLineSpacing, cycleLetterSpacing, cycleWordSpacing, cycleColorBlind,
  toggleDyslexiaFont, toggleReadingGuide, cycleThemeFilter, cycleTtsSpeed,
  toggleGlossary, resetA11y,
}: AccessibilityToolbarProps) {
  const txt = (key: string): string => {
    const dict = A11Y_TEXTS[lang] || A11Y_TEXTS.en;
    return dict[key] || A11Y_TEXTS.en[key] || key;
  };

  const dynamicCSS = \`
    \${calmMode ? \`
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
      }
      [style*="gradient"] { background: rgba(99,102,241,0.3) !important; }
    \` : ''}
    \${focusMode ? \`
      [data-main-scroll] > div > div:not(:hover):not(:focus-within) > div:not([id^="section-"]) {
        opacity: 0.3;
        transition: opacity 0.3s;
      }
      [data-main-scroll] > div > div:hover,
      [data-main-scroll] > div > div:focus-within {
        opacity: 1 !important;
      }
      [data-main-scroll] [id^="section-"]:not(:hover) {
        opacity: 0.4;
      }
      [data-main-scroll] [id^="section-"]:hover {
        opacity: 1 !important;
      }
    \` : ''}
  \`;

  function MagnifierLens() {
    const [pos, setPos] = useState({ x: -9999, y: -9999 });
    const [text, setText] = useState('');
    const lensRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);

    useEffect(() => {
      const handle = (e: MouseEvent) => {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          setPos({ x: e.clientX, y: e.clientY });

          const lens = lensRef.current;
          if (lens) lens.style.visibility = 'hidden';
          const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
          if (lens) lens.style.visibility = '';

          if (!el) { setText(''); return; }
          if (el.closest('.wk-a11y-fab, nav, header, .navbar, button, a')) {
            setText('');
            return;
          }

          let node: HTMLElement | null = el;
          let found = '';
          while (node && node !== document.body) {
            const tVal = (node.innerText || '').trim().replace(/\\s+/g, ' ');
            if (tVal.length > 3 && tVal.length < 600) {
              found = tVal;
              break;
            }
            node = node.parentElement;
          }
          setText(found);
        });
      };

      window.addEventListener('mousemove', handle);
      return () => {
        window.removeEventListener('mousemove', handle);
        cancelAnimationFrame(rafRef.current);
      };
    }, []);

    if (pos.x < 0 || !text) return null;

    return (
      <div
        ref={lensRef}
        style={{
          position: 'fixed',
          left: Math.min(pos.x + 20, window.innerWidth - 300),
          top: Math.min(pos.y + 20, window.innerHeight - 150),
          width: 280,
          maxHeight: 140,
          background: 'rgba(15, 23, 42, 0.95)',
          color: '#f8fafc',
          border: '2px solid #a78bfa',
          borderRadius: 12,
          padding: '10px 14px',
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 1.4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          pointerEvents: 'none',
          zIndex: 999999,
          overflow: 'hidden',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ fontSize: 9, textTransform: 'uppercase', color: '#a78bfa', marginBottom: 4, letterSpacing: 1 }}>
          🔍 {txt('magnifier')}
        </div>
        <div>{text}</div>
      </div>
    );
  }

  const btnStyle = (active: boolean, color = 'rgba(167,139,250') => ({
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    width: '100%', padding: '7px 10px', borderRadius: 8,
    background: active ? \`\${color},0.22)\` : 'rgba(255,255,255,0.06)',
    border: \`1.5px solid \${active ? \`\${color},0.6)\` : 'rgba(255,255,255,0.1)'}\`,
    color: active ? '#ffffff' : 'rgba(255,255,255,0.8)',
    fontSize: 11, fontWeight: 700, cursor: 'pointer',
    transition: 'all 0.15s ease', marginBottom: 4,
  });

  const cycBtnStyle = (active: boolean, color = 'rgba(167,139,250') => btnStyle(active, color);

  const handleReadSelection = () => {
    if (!tts) return;
    let sel = window.getSelection()?.toString().trim();
    if (!sel) {
      const mainHead = document.querySelector('#main-content h1, #main-content p');
      if (mainHead) sel = (mainHead as HTMLElement).innerText;
    }
    if (sel) {
      tts.setRate(ttsSpeed);
      tts.speak(sel);
    }
  };

  return (
    <>
      <style>{dynamicCSS}</style>

      {readingGuide && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: readingGuideY - 2,
            height: 4,
            background: '#FFCC00',
            boxShadow: '0 0 10px #FFCC00, 0 0 20px #FFCC00',
            pointerEvents: 'none',
            zIndex: 999999,
            transition: 'top 0.05s ease-out',
          }}
        />
      )}

      {magnifier && <MagnifierLens />}

      <button
        onClick={() => setA11yOpen(prev => !prev)}
        className="wk-a11y-fab"
        aria-label={txt('toolkit')}
        title={txt('toolkit')}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0D6EFD 0%, #003399 100%)',
          color: '#FFFFFF',
          border: '2px solid #FFCC00',
          boxShadow: '0 8px 24px rgba(0,51,153,0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          zIndex: 99999,
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        ♿
      </button>

      {a11yOpen && (
        <aside
          aria-label={txt('toolkit')}
          style={{
            position: 'fixed',
            top: 70,
            right: 20,
            width: 320,
            maxHeight: 'calc(100vh - 90px)',
            background: '#0B132B',
            color: '#FFFFFF',
            border: '1.5px solid rgba(255, 204, 0, 0.4)',
            borderRadius: 16,
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {/* Header */}
          <div style={{
            padding: '12px 16px',
            background: 'linear-gradient(135deg, #003399 0%, #0D6EFD 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>♿</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#FFFFFF', letterSpacing: 0.5 }}>
                  {txt('toolkit')}
                </div>
                <div style={{ fontSize: 9, color: '#FFCC00', fontWeight: 600 }}>WCAG 2.1 AAA Compliant</div>
              </div>
            </div>
            <button
              onClick={() => setA11yOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#FFFFFF',
                width: 26, height: 26,
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>

          {/* Panel Content */}
          <div style={{ padding: '14px 16px', overflowY: 'auto', flex: 1 }}>

            {/* Typography */}
            <div style={{ fontSize: 8, fontWeight: 800, color: '#FFCC00', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>
              🎨 {txt('typography')}
            </div>

            {/* Font Size */}
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', marginBottom: 4, fontWeight: 600 }}>
                {txt('fontSize')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
                {[
                  { label: txt('normal'), size: 13 },
                  { label: txt('large'), size: 16 },
                  { label: txt('xlarge'), size: 19 },
                  { label: txt('xxlarge'), size: 22 },
                ].map(({ label, size }) => {
                  const active = fontSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setFontSizeAbsolute(size)}
                      style={{
                        padding: '6px 2px', borderRadius: 7,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
                        background: active ? 'rgba(255,204,0,0.25)' : 'rgba(255,255,255,0.06)',
                        border: \`1.5px solid \${active ? '#FFCC00' : 'rgba(255,255,255,0.1)'}\`,
                        color: active ? '#FFCC00' : 'rgba(255,255,255,0.8)',
                        cursor: 'pointer', transition: 'all 0.15s',
                      }}
                    >
                      <span style={{ fontSize: 12, fontWeight: 900 }}>A</span>
                      <span style={{ fontSize: 8, fontWeight: 700 }}>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Spacing */}
            <button onClick={cycleLineSpacing} style={cycBtnStyle(lineSpacing !== 1.85)}>
              <span>📏 {txt('lineSpacing')}</span>
              <span style={{ fontSize: 9, opacity: 0.7 }}>{lineSpacing}x</span>
            </button>

            <button onClick={cycleLetterSpacing} style={cycBtnStyle(letterSpacing > 0)}>
              <span>🔤 {txt('letterSpacing')}</span>
              <span style={{ fontSize: 9, opacity: 0.7 }}>{letterSpacing}px</span>
            </button>

            <button onClick={cycleWordSpacing} style={cycBtnStyle(wordSpacing > 0)}>
              <span>↔️ {txt('wordSpacing')}</span>
              <span style={{ fontSize: 9, opacity: 0.7 }}>{wordSpacing}px</span>
            </button>

            <button onClick={toggleContrast} style={btnStyle(highContrast)}>
              <span>🔲 {txt('contrast')}</span>
              <span>{highContrast ? '✓' : ''}</span>
            </button>

            {/* Reading */}
            <div style={{ fontSize: 8, fontWeight: 800, color: '#FFCC00', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, marginTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8 }}>
              📖 {txt('reading')}
            </div>

            <button onClick={toggleDyslexiaFont} style={btnStyle(dyslexiaFont)}>
              <span>🔤 {txt('dyslexiaFont')}</span>
              <span>{dyslexiaFont ? '✓' : ''}</span>
            </button>

            <button onClick={toggleReadingGuide} style={btnStyle(readingGuide)}>
              <span>📏 {txt('readingGuide')}</span>
              <span>{readingGuide ? '✓' : ''}</span>
            </button>

            <button onClick={toggleGlossary} style={btnStyle(glossaryEnabled, 'rgba(16,185,129')}>
              <span>🏷️ {txt('glossary')}</span>
              <span>{glossaryEnabled ? '✓' : ''}</span>
            </button>

            <button onClick={toggleMagnifier} style={btnStyle(magnifier, 'rgba(168,85,247')}>
              <span>🔍 {txt('magnifier')}</span>
              <span>{magnifier ? '✓' : ''}</span>
            </button>

            {/* Modes */}
            <div style={{ fontSize: 8, fontWeight: 800, color: '#FFCC00', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, marginTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8 }}>
              🎨 {txt('modes')}
            </div>

            <button onClick={toggleCalm} style={btnStyle(calmMode, 'rgba(16,185,129')}>
              <span>🌿 {txt('calmMode')}</span>
              <span>{calmMode ? '✓' : ''}</span>
            </button>

            <button onClick={toggleFocus} style={btnStyle(focusMode, 'rgba(59,130,246')}>
              <span>🎯 {txt('focusMode')}</span>
              <span>{focusMode ? '✓' : ''}</span>
            </button>

            <button onClick={cycleThemeFilter} style={cycBtnStyle(themeFilter !== 'none')}>
              <span>🎨 {txt('themeFilter')}</span>
              <span style={{ fontSize: 9, opacity: 0.7 }}>{themeFilter === 'none' ? txt('off') : themeFilter}</span>
            </button>

            <button onClick={cycleColorBlind} style={cycBtnStyle(colorBlindMode !== 'none', 'rgba(236,72,153')}>
              <span>👁 {txt('colorBlind')}</span>
              <span style={{ fontSize: 9, opacity: 0.7 }}>{colorBlindMode === 'none' ? txt('off') : colorBlindMode}</span>
            </button>

            {/* Audio */}
            <div style={{ fontSize: 8, fontWeight: 800, color: '#FFCC00', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, marginTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8 }}>
              🔊 {txt('audio')}
            </div>

            <button onClick={cycleTtsSpeed} style={cycBtnStyle(ttsSpeed !== 1, 'rgba(139,92,246')}>
              <span>🗣️ {txt('speechSpeed')}</span>
              <span style={{ fontSize: 9, opacity: 0.7 }}>{ttsSpeed}x</span>
            </button>

            {tts && tts.isSupported && (
              <>
                {!tts.isSpeaking ? (
                  <button onClick={handleReadSelection} style={btnStyle(false, 'rgba(16,185,129')}>
                    <span>🔊 {txt('readSelection')}</span>
                  </button>
                ) : (
                  <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
                    <button onClick={() => tts.isPaused ? tts.resume() : tts.pause()} style={{ ...btnStyle(true, 'rgba(245,158,11'), flex: 1, justifyContent: 'center' }}>
                      {tts.isPaused ? txt('resume') : txt('pause')}
                    </button>
                    <button onClick={tts.stop} style={{ ...btnStyle(true, 'rgba(239,68,68'), flex: 1, justifyContent: 'center' }}>
                      {txt('stopReading')}
                    </button>
                  </div>
                )}
              </>
            )}

            {stt && stt.isSupported && (
              <button
                onClick={() => stt.isListening ? stt.stopListening() : stt.startListening(lang)}
                style={btnStyle(stt.isListening, 'rgba(16,185,129')}
              >
                <span>🎤 {txt('voiceInput')}</span>
                <span style={{ fontSize: 9 }}>{stt.isListening ? '● LIVE' : ''}</span>
              </button>
            )}

            {/* Reset */}
            <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={resetA11y}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: 8,
                  background: 'rgba(239,68,68,0.15)',
                  border: '1px solid rgba(239,68,68,0.4)',
                  color: '#EF4444',
                  fontSize: 11,
                  fontWeight: 800,
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                🔄 {txt('resetAll')}
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
`;

fs.writeFileSync('G:\\Drive\'ım\\YEDEK1404-Project Factory AI Workspace\\pfai-workspace\\speakup-platform\\components\\AccessibilityToolbar.tsx', fullToolbarCode, 'utf8');
console.log('AccessibilityToolbar.tsx updated with Text-to-Speech (TTS) labels across all languages');

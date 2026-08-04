'use client';
import { useState, useCallback, useRef, useEffect } from 'react';

export type TTSLocale = 'en' | 'pl' | 'ro' | 'cz' | 'et';

export interface UseTTSOptions {
  /** Default speech rate (0.5 – 2). Default: 1 */
  defaultRate?: number;
}

export interface UseTTSReturn {
  /** Read text aloud in partner language (UK accent for English) */
  speak: (text: string, lang?: TTSLocale) => void;
  /** Read the currently selected text on the page */
  speakSelection: (lang?: TTSLocale) => void;
  /** Stop speaking */
  stop: () => void;
  /** Pause speaking */
  pause: () => void;
  /** Resume speaking */
  resume: () => void;
  /** Whether the browser is currently speaking */
  isSpeaking: boolean;
  /** Whether the browser is paused */
  isPaused: boolean;
  /** Whether TTS is supported in this browser */
  isSupported: boolean;
  /** Current speech rate */
  rate: number;
  /** Set speech rate */
  setRate: (r: number) => void;
}

const LANG_MAP: Record<TTSLocale, string> = {
  en: 'en-GB', // UK Accent as explicitly requested
  pl: 'pl-PL', // Polish
  ro: 'ro-RO', // Romanian
  cz: 'cs-CZ', // Czech
  et: 'et-EE', // Estonian
};

export function useTTS(opts?: UseTTSOptions): UseTTSReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(opts?.defaultRate ?? 1);
  const [isSupported, setIsSupported] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
  }, []);

  const speak = useCallback((text: string, lang: TTSLocale = 'en') => {
    if (!isSupported || !text.trim()) return;

    // Stop any in-progress speech
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    const bcp47 = LANG_MAP[lang] || 'en-GB';
    utter.lang = bcp47;
    utter.rate = rate;
    utter.pitch = 1;
    utter.volume = 1;

    // Voice matching: Prioritize UK accent for English and native partner voices
    const voices = window.speechSynthesis.getVoices();
    let match = voices.find(v => v.lang === bcp47 || v.lang === bcp47.replace('-', '_'));

    if (!match && lang === 'en') {
      match = voices.find(v =>
        v.lang.toLowerCase().includes('gb') ||
        v.lang.toLowerCase().includes('uk') ||
        v.name.toLowerCase().includes('united kingdom') ||
        v.name.toLowerCase().includes('uk english')
      );
    }

    if (!match) {
      const primaryLang = bcp47.split('-')[0];
      match = voices.find(v => v.lang.toLowerCase().startsWith(primaryLang));
    }

    if (match) {
      utter.voice = match;
    }

    utter.onstart = () => { setIsSpeaking(true); setIsPaused(false); };
    utter.onend = () => { setIsSpeaking(false); setIsPaused(false); };
    utter.onerror = () => { setIsSpeaking(false); setIsPaused(false); };

    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, [isSupported, rate]);

  const speakSelection = useCallback((lang: TTSLocale = 'en') => {
    const sel = window.getSelection()?.toString().trim();
    if (sel) speak(sel, lang);
  }, [speak]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, [isSupported]);

  const pause = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, [isSupported]);

  return {
    speak, speakSelection, stop, pause, resume,
    isSpeaking, isPaused, isSupported, rate, setRate,
  };
}

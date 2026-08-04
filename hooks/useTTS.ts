'use client';
import { useState, useCallback, useRef, useEffect } from 'react';

/* ═══════════════════════════════════════════════════════════════
   useTTS — Text-to-Speech hook using Web Speech API
   Supports bilingual speech (tr-TR / en-US)
   ═══════════════════════════════════════════════════════════════ */

export interface UseTTSOptions {
  /** Default speech rate (0.5 – 2). Default: 1 */
  defaultRate?: number;
}

export interface UseTTSReturn {
  /** Read text aloud */
  speak: (text: string, lang?: 'tr' | 'en') => void;
  /** Read the currently selected text on the page */
  speakSelection: (lang?: 'tr' | 'en') => void;
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

const LANG_MAP: Record<string, string> = {
  tr: 'tr-TR',
  en: 'en-US',
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

  const speak = useCallback((text: string, lang: 'tr' | 'en' = 'tr') => {
    if (!isSupported || !text.trim()) return;

    // Stop any in-progress speech
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = LANG_MAP[lang] || 'en-US';
    utter.rate = rate;
    utter.pitch = 1;
    utter.volume = 1;

    // Try to find a matching voice
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(v => v.lang.startsWith(lang === 'tr' ? 'tr' : 'en'));
    if (match) utter.voice = match;

    utter.onstart = () => { setIsSpeaking(true); setIsPaused(false); };
    utter.onend = () => { setIsSpeaking(false); setIsPaused(false); };
    utter.onerror = () => { setIsSpeaking(false); setIsPaused(false); };

    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, [isSupported, rate]);

  const speakSelection = useCallback((lang: 'tr' | 'en' = 'tr') => {
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

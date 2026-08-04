'use client';
import { useState, useCallback, useRef, useEffect } from 'react';

/* ═══════════════════════════════════════════════════════════════
   useSTT — Speech-to-Text hook using Web Speech API
   Supports bilingual recognition (tr-TR / en-US)
   ═══════════════════════════════════════════════════════════════ */

export interface UseSTTOptions {
  /** Enable continuous recognition (default: true) */
  continuous?: boolean;
  /** Enable interim results (default: true) */
  interimResults?: boolean;
}

export interface UseSTTReturn {
  /** Start listening */
  startListening: (lang?: 'tr' | 'en') => void;
  /** Stop listening */
  stopListening: () => void;
  /** Whether the microphone is active */
  isListening: boolean;
  /** Final recognized transcript */
  transcript: string;
  /** Interim (in-progress) transcript */
  interimTranscript: string;
  /** Reset the transcript buffer */
  resetTranscript: () => void;
  /** Whether STT is supported in this browser */
  isSupported: boolean;
  /** Last error message */
  error: string | null;
}

const LANG_MAP: Record<string, string> = {
  tr: 'tr-TR',
  en: 'en-US',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpeechRecognitionType = any;

export function useSTT(opts?: UseSTTOptions): UseSTTReturn {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionType>(null);

  useEffect(() => {
    const supported = typeof window !== 'undefined' &&
      ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
    setIsSupported(supported);
  }, []);

  const startListening = useCallback((lang: 'tr' | 'en' = 'tr') => {
    if (!isSupported) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }

    // Stop any existing recognition
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch { /* ignore */ }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = LANG_MAP[lang] || 'tr-TR';
    recognition.continuous = opts?.continuous ?? true;
    recognition.interimResults = opts?.interimResults ?? true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onresult = (event: SpeechRecognitionType) => {
      let finalText = '';
      let interimText = '';

      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalText += result[0].transcript + ' ';
        } else {
          interimText += result[0].transcript;
        }
      }

      if (finalText) {
        setTranscript(prev => (prev + finalText).trim());
      }
      setInterimTranscript(interimText);
    };

    recognition.onerror = (event: SpeechRecognitionType) => {
      if (event.error === 'no-speech') return; // Ignore no-speech errors
      setError(event.error || 'Recognition error');
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      setInterimTranscript('');
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [isSupported, opts?.continuous, opts?.interimResults]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch { /* ignore */ }
    }
    setIsListening(false);
    setInterimTranscript('');
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch { /* ignore */ }
      }
    };
  }, []);

  return {
    startListening, stopListening,
    isListening, transcript, interimTranscript,
    resetTranscript, isSupported, error,
  };
}

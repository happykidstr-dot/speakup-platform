'use client';
import { useState, useCallback, useRef, useEffect } from 'react';

export interface UseSTTOptions {
  /** Enable continuous recognition (default: true) */
  continuous?: boolean;
  /** Enable interim results (default: true) */
  interimResults?: boolean;
}

export interface UseSTTReturn {
  /** Start listening */
  startListening: (lang?: string) => void;
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
  en: 'en-GB', // UK English
  pl: 'pl-PL',
  ro: 'ro-RO',
  cz: 'cs-CZ',
  et: 'et-EE',
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

  const startListening = useCallback((lang: string = 'en') => {
    if (!isSupported) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }

    try {
      const SpeechRecognition = (window as unknown as Record<string, SpeechRecognitionType>).SpeechRecognition ||
        (window as unknown as Record<string, SpeechRecognitionType>).webkitSpeechRecognition;

      const recognition = new SpeechRecognition();
      recognition.continuous = opts?.continuous ?? true;
      recognition.interimResults = opts?.interimResults ?? true;
      recognition.lang = LANG_MAP[lang] || 'en-GB';

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event: SpeechRecognitionType) => {
        let final = '';
        let interim = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        if (final) {
          setTranscript(prev => (prev ? prev + ' ' + final : final));
        }
        setInterimTranscript(interim);
      };

      recognition.onerror = (event: SpeechRecognitionType) => {
        if (event.error !== 'no-speech') {
          setError(`Speech recognition error: ${event.error}`);
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
        setInterimTranscript('');
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      setError('Failed to start speech recognition.');
      setIsListening(false);
    }
  }, [isSupported, opts?.continuous, opts?.interimResults]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
  }, []);

  return {
    startListening, stopListening, isListening,
    transcript, interimTranscript, resetTranscript,
    isSupported, error,
  };
}

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

const SCRIPT_ID = 'cf-turnstile-script';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

let scriptPromise: Promise<void> | null = null;

const loadTurnstile = (): Promise<void> => {
  if (typeof window === 'undefined') return Promise.reject(new Error('Turnstile requires a browser'));
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const handleLoad = () => {
      if (window.turnstile) resolve();
      else reject(new Error('Turnstile failed to initialise'));
    };
    const handleError = () => reject(new Error('Turnstile script failed to load'));

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', handleLoad);
      existing.addEventListener('error', handleError);
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);
    document.head.appendChild(script);
  });

  return scriptPromise;
};

export interface CloudflareTurnstileHandle {
  reset: () => void;
}

interface CloudflareTurnstileProps {
  siteKey: string;
  onVerify?: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  theme?: 'auto' | 'light' | 'dark';
  className?: string;
}

const CloudflareTurnstile = forwardRef<CloudflareTurnstileHandle, CloudflareTurnstileProps>(
  function CloudflareTurnstile({ siteKey, onVerify, onExpire, onError, theme = 'auto', className }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const callbacksRef = useRef({ onVerify, onExpire, onError });
    callbacksRef.current = { onVerify, onExpire, onError };

    useEffect(() => {
      let cancelled = false;

      loadTurnstile()
        .then(() => {
          if (cancelled || !containerRef.current || !window.turnstile) return;
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme,
            callback: (token) => callbacksRef.current.onVerify?.(token),
            'expired-callback': () => callbacksRef.current.onExpire?.(),
            'error-callback': () => callbacksRef.current.onError?.(),
          });
        })
        .catch(() => {
          if (!cancelled) callbacksRef.current.onError?.();
        });

      return () => {
        cancelled = true;
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      };
    }, [siteKey, theme]);

    useImperativeHandle(
      ref,
      () => ({
        reset: () => {
          if (widgetIdRef.current && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current);
          }
        },
      }),
      [],
    );

    return <div ref={containerRef} className={className} />;
  },
);

export default CloudflareTurnstile;

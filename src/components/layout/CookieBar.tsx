import { AnimatePresence, motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

const STORAGE_KEY = 'odevico-cookie-consent';

type Consent = 'accepted' | 'declined';

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== 'accepted' && stored !== 'declined') setVisible(true);
  }, []);

  const handleChoice = (choice: Consent) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[70] p-4 sm:p-6"
        >
          <Container className="max-w-4xl">
            <div className="flex flex-col gap-5 rounded-panel border border-line/80 bg-panel/95 p-5 shadow-lift backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-card text-accent">
                  <Cookie className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-medium text-paper">We use cookies</p>
                  <p className="mt-1 text-sm leading-[1.5] text-mute">
                    We use cookies to improve your experience and analyze site traffic. Read our{' '}
                    <Link to="/privacy" className="text-paper underline underline-offset-4 hover:text-accent">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-3">
                <Button variant="secondary" size="sm" onClick={() => handleChoice('declined')}>
                  Decline
                </Button>
                <Button size="sm" onClick={() => handleChoice('accepted')}>
                  Accept all
                </Button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

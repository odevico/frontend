import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import Logo from '@/components/layout/Logo';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { NAV_LINKS, SECTION_IDS } from '@/utils/navigation';
import { cn } from '@/utils/classNames';

type NavLink = (typeof NAV_LINKS)[number];

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isProduct = pathname === '/product';
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(SECTION_IDS, isHome);
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = scrollY > 24;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isLinkActive = (link: NavLink) =>
    isHome && (link.sectionId ? activeSection === link.sectionId : activeSection === null);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        isScrolled || menuOpen
          ? 'border-b border-line/60 bg-canvas/90 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link);
            return (
              <Link
                key={link.label}
                to={link.to}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm transition-colors duration-300',
                  active ? 'text-paper' : 'text-mute hover:text-paper'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-4 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500',
                    active ? 'scale-x-100' : 'scale-x-0'
                  )}
                />
              </Link>
            );
          })}
          <div className="ml-4">
            <Button
              to="/product"
              size="sm"
              variant="primary"
              aria-current={isProduct ? 'page' : undefined}
              className="px-5"
            >
              Odevora
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-mute lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6 pt-2">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link);
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      'rounded-xl px-4 py-3 text-base transition-colors',
                      active ? 'bg-raised text-paper' : 'text-mute hover:bg-raised/60 hover:text-paper'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button to="/product" className="mt-3 w-full">
                Odevora
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

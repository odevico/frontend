import { MotionConfig } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import CookieBar from '@/components/layout/CookieBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function MainLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col overflow-x-clip bg-canvas">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CookieBar />
      </div>
    </MotionConfig>
  );
}

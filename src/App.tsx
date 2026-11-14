import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/common/ScrollToTop';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import LegalPage from '@/pages/LegalPage';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="privacy" element={<LegalPage document="privacy" />} />
          <Route path="terms" element={<LegalPage document="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

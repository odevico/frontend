import GovernanceSection from '@/components/product/GovernanceSection';
import LocalizationWorkflow from '@/components/product/LocalizationWorkflow';
import ProductCTA from '@/components/product/ProductCTA';
import ProductDashboardPreview from '@/components/product/ProductDashboardPreview';
import ProductHero from '@/components/product/ProductHero';
import ProductOverview from '@/components/product/ProductOverview';
import ProductRoadmap from '@/components/product/ProductRoadmap';

export default function Product() {
  return (
    <>
      <ProductHero />
      <ProductOverview />
      <LocalizationWorkflow />
      <ProductDashboardPreview />
      <ProductRoadmap />
      <GovernanceSection />
      <ProductCTA />
    </>
  );
}

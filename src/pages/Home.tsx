import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import FAQSection from '@/components/home/FAQSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import PlatformHighlights from '@/components/home/PlatformHighlights';
import PlatformStats from '@/components/home/PlatformStats';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import UseCasesSection from '@/components/home/UseCasesSection';
import WorkflowSection from '@/components/home/WorkflowSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PlatformHighlights />
      <PlatformStats />
      <AboutSection />
      <FeaturesSection />
      <WorkflowSection />
      <UseCasesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

import Header from './components/common/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import LuxuryCategorySection from './components/LuxuryCategorySection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <LuxuryCategorySection />
      </main>
    </>
  );
}
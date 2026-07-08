import Header from './components/common/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
      </main>
    </>
  );
}
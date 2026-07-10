import Header from './components/common/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import LuxuryCategorySection from './components/LuxuryCategorySection';
import BestSellersSection from './components/BestSellersSection';
import StoryVideoSection from './components/StoryVideoSection';
import ProductShowcaseSection from './components/ProductShowcaseSection';
import FooterSection from './components/FooterSection';
import InstagramSection from './components/InstagramSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <LuxuryCategorySection />
        <BestSellersSection />
        <StoryVideoSection />
        <ProductShowcaseSection />
        <InstagramSection />
        <FooterSection />
      </main>
     
    </>
  );
}


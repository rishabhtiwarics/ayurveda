'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Leaf } from 'lucide-react';

const categories = [
  { title: 'Virvex', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Venora', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
  { title: 'Pressova', image: '/images/WhatsApp Image 2026-07-20 at 6.14.44 PM.jpeg' },
  { title: 'Nestara', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Livera', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
  { title: 'Flexora', image: '/images/WhatsApp Image 2026-07-20 at 6.14.44 PM.jpeg' },
  { title: 'Femiva', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Cardiva', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
];

function getCardsPerView() {
  if (typeof window === 'undefined') return 4;
  if (window.matchMedia('(max-width: 640px)').matches) return 2;
  if (window.matchMedia('(max-width: 1023px)').matches) return 3;
  return 4;
}

export default function LuxuryCategorySection() {
  const [activePage, setActivePage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView());
      setActivePage(0);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);

    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalPages = Math.ceil(categories.length / cardsPerView);
  const visibleCategories = categories.slice(
    activePage * cardsPerView,
    activePage * cardsPerView + cardsPerView
  );

  const showPrevious = () => {
    setActivePage((page) => (page === 0 ? totalPages - 1 : page - 1));
  };

  const showNext = () => {
    setActivePage((page) => (page === totalPages - 1 ? 0 : page + 1));
  };

  useEffect(() => {
    if (totalPages <= 1) return undefined;

    const autoplay = window.setInterval(() => {
      setActivePage((page) => (page === totalPages - 1 ? 0 : page + 1));
    }, 3500);

    return () => window.clearInterval(autoplay);
  }, [totalPages]);

  return (
    <section className="luxury-category-section" aria-label="Ayurvedic care categories">
      <div className="luxury-category-grid">
        <article className="luxury-category-promise">
          <img className="luxury-category-leaf" src="/images/leftleaf.png" alt="" aria-hidden="true" />
          <div className="luxury-category-promise-content">
            <span className="luxury-category-kicker"><Leaf aria-hidden="true" /><span>Our Promise</span></span>
            <h2>Nature is our luxury.</h2>
            <p>Pure botanical care blended with Ayurvedic science for visible, lasting wellness.</p>
            <a href="#" aria-label="Learn more about AyurVeda promise">Learn More <ArrowRight aria-hidden="true" /></a>
          </div>

          <div className="luxury-category-swiper-controls" aria-label="Category slider controls">
            <button type="button" aria-label="Previous categories" onClick={showPrevious}>
              <ArrowLeft aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next categories" onClick={showNext}>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </article>

        <div className="luxury-category-cards-track" key={`${activePage}-${cardsPerView}`}>
          {visibleCategories.map((category) => (
            <a className="luxury-category-card" href="#" key={category.title}>
              <span className="luxury-category-image" style={{ backgroundImage: `url('${category.image}')` }} />
              <span className="luxury-category-content">
                <strong>{category.title}</strong>
                <span>Shop Now <ArrowRight aria-hidden="true" /></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

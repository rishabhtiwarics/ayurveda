'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

const slides = [
  {
    badge: 'New Ayurveda Launch',
    eyebrow: 'Herbal Daily Wellness',
    title: 'AyurVeda Complete Wellness Care',
    price: '\u20b9749',
    oldPrice: '\u20b9999',
    save: 'You Save 25%',
    image: '/images/herobnner1.png',
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);


  const goToSlide = (index) => setActiveSlide((index + slides.length) % slides.length);
  const slide = slides[activeSlide];

  return (
    <section className="hero">
      <div className="hero-bg-stack" aria-hidden="true">
        {slides.map((item, index) => (
          <div
            className={`hero-slide-bg${index === activeSlide ? ' active' : ''}`}
            key={item.title}
            style={{ backgroundImage: `linear-gradient(180deg, rgba(6,15,4,0.34) 0%, rgba(6,15,4,0.22) 40%, rgba(6,15,4,0.54) 100%), url('${item.image}')` }}
          />
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-content" key={slide.title}>
          <div className="offer-badge">
            <Leaf aria-hidden="true" />
            <span>{slide.badge}</span>
          </div>
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <div className="price-row">
            <span className="price-new">{slide.price}</span>
            <span className="price-old">{slide.oldPrice}</span>
            <span className="price-save">{slide.save}</span>
          </div>
          <div className="hero-buttons">
            <a href="#" className="btn btn-shop">Shop Now</a>
          </div>
        </div>
      </div>

      <div className="hero-swiper-controls" aria-label="Hero slider controls">
        <button type="button" aria-label="Previous slide" onClick={() => goToSlide(activeSlide - 1)}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <div className="hero-pagination" aria-label="Hero slider pagination">
          {slides.map((item, index) => (
            <button
              type="button"
              aria-label={`Go to ${item.title}`}
              aria-current={index === activeSlide}
              className={index === activeSlide ? 'active' : ''}
              key={item.title}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button type="button" aria-label="Next slide" onClick={() => goToSlide(activeSlide + 1)}>
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

    </section>
  );
}
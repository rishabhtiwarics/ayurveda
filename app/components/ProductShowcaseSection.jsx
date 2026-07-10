'use client';

import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Droplets, Leaf, Minus, Plus, ShoppingCart, Sparkles, Star } from 'lucide-react';

const galleryImages = [
  { src: '/images/product1.png', alt: 'Nourish facial oil bottle' },
  { src: '/images/product2.png', alt: 'Herbal skincare serum bottle' },
  { src: '/images/product1.png', alt: 'Ayurvedic facial oil detail' },
  { src: '/images/product2.png', alt: 'Botanical serum label detail' },
  { src: '/images/product1.png', alt: 'Complete Ayurvedic oil lineup' },
];

const showcaseProducts = [
  {
    name: 'AHA Rosaline Serum 10%',
    subtitle: 'Target dullness, refine texture, and boost radiance.',
    rating: '4.9/5 (1,245 reviews)',
    price: '\u20B91099',
    oldPrice: '\u20B91499',
  },
  {
    name: 'Renew Herbal Serum',
    subtitle: 'Restore glow with lightweight botanicals for fresh, balanced skin.',
    rating: '4.8/5 (986 reviews)',
    price: '\u20B9749',
    oldPrice: '\u20B9999',
  },
];

export default function ProductShowcaseSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((current) => (current + 1) % showcaseProducts.length);
  const previousSlide = () => setActiveSlide((current) => (current - 1 + showcaseProducts.length) % showcaseProducts.length);

  return (
    <section className="product-showcase-section" aria-label="Featured Ayurvedic serum">
      <div className="product-showcase-wrap">
        <div className="product-showcase-layout">
          <div className="product-showcase-viewport">
            <div className="product-showcase-track" style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}>
              {showcaseProducts.map((product, slideIndex) => (
                <div className="product-showcase-slide" key={product.name} aria-hidden={activeSlide !== slideIndex}>
                  <div className="product-showcase-product">
                    <div className="product-gallery" aria-label="Product gallery">
                      <div className="product-gallery-stage">
                        <img src={galleryImages[activeImage].src} alt={galleryImages[activeImage].alt} />

                        <div className="product-gallery-thumbs">
                          {galleryImages.map((image, index) => (
                            <button
                              className={`product-gallery-thumb ${activeImage === index ? 'active' : ''}`}
                              type="button"
                              aria-label={`View product image ${index + 1}`}
                              aria-current={activeImage === index}
                              key={`${image.src}-${index}`}
                              onClick={() => setActiveImage(index)}
                            >
                              <img src={image.src} alt="" aria-hidden="true" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <article className="product-detail-panel">
                      <h2>{product.name}</h2>
                      <p className="product-detail-subtitle">{product.subtitle}</p>

                      <div className="product-rating" aria-label={`Rated ${product.rating}`}>
                        <span className="product-rating-stars" aria-hidden="true">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star fill="currentColor" key={index} />
                          ))}
                        </span>
                        <span>{product.rating}</span>
                      </div>

                      <div className="product-price-row">
                        <strong>{product.price}</strong>
                        <span>{product.oldPrice}</span>
                      </div>
                      <p className="product-shipping-note">Free shipping on orders over {'\u20B9'}999</p>

                      <div className="product-options" aria-label="Choose size">
                        <span>Size:</span>
                        <button type="button">Travel (15ml)</button>
                        <button className="active" type="button">Full (50ml)</button>
                        <button type="button">Value (100ml)</button>
                      </div>

                      <div className="product-quantity" aria-label="Choose quantity">
                        <span>Quantity:</span>
                        <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>
                          <Minus aria-hidden="true" />
                        </button>
                        <strong>{quantity}</strong>
                        <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}>
                          <Plus aria-hidden="true" />
                        </button>
                      </div>

                      <div className="product-action-row">
                        <button className="product-add-cart" type="button">
                          <ShoppingCart aria-hidden="true" />
                          Add To Cart
                        </button>

                        <div className="product-showcase-pagination" aria-label="Product showcase slider controls">
                          <button type="button" aria-label="Previous product showcase" onClick={previousSlide}>
                            <ChevronLeft aria-hidden="true" />
                          </button>
                          <button type="button" aria-label="Next product showcase" onClick={nextSlide}>
                            <ChevronRight aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="product-feature-badges">
                        <div className="product-feature-badge">
                          <Leaf aria-hidden="true" />
                          <span>Natural<br />Ingredients</span>
                        </div>
                        <div className="product-feature-badge">
                          <Sparkles aria-hidden="true" />
                          <span>Balance<br />&amp; Harmony</span>
                        </div>
                        <div className="product-feature-badge">
                          <Droplets aria-hidden="true" />
                          <span>Efficacy<br />&amp; Gentleness</span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="product-ayurveda-panel" aria-label="Pure Ayurveda promotion">
            <img className="product-ayurveda-leaf" src="/images/rightleaf.png" alt="" aria-hidden="true" />
            <div className="product-ayurveda-content">
              <span className="product-ayurveda-kicker">
                <Leaf aria-hidden="true" />
                Pure Ayurveda
              </span>
              <h3>Fresh botanical care for daily glow.</h3>
              <p>Explore clean formulas made for balanced skin and mindful rituals.</p>
              <a href="#">
                Shop Now <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}



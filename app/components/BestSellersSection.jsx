import { ArrowRight, Leaf, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Nourish Facial Oil',
    badge: 'Best Seller',
    price: '\u20B9749',
    oldPrice: '\u20B9999',
    save: '25% OFF',
    image: '/images/product1.png',
    hoverImage: '/images/product2.png',
  },
  {
    name: 'Gentle Glow Cleanser',
    badge: 'New',
    price: '\u20B9599',
    oldPrice: '\u20B9799',
    save: '25% OFF',
    image: '/images/product1.png',
    hoverImage: '/images/product2.png',
  },
  {
    name: 'Radiance Clay Mask',
    badge: 'Ayurvedic',
    price: '\u20B9899',
    oldPrice: '\u20B91199',
    save: '25% OFF',
    image: '/images/product1.png',
    hoverImage: '/images/product2.png',
  },
  {
    name: 'Renew Herbal Serum',
    badge: 'Trending',
    price: '\u20B91099',
    oldPrice: '\u20B91499',
    save: '27% OFF',
    image: '/images/product1.png',
    hoverImage: '/images/product2.png',
  },
];

const carouselProducts = [...products, ...products];

const press = ['Vogue', 'Goop', 'Bazaar', 'Well+Good', 'The Franklin Journal'];

export default function BestSellersSection() {
  return (
    <section className="best-sellers-section" aria-label="Best selling Ayurvedic skincare">
      <div className="best-sellers-grid">
        <div className="best-sellers-main">
          <div className="best-sellers-header">
            <span>Shop Best Sellers</span>
            <a href="#">View All <ArrowRight aria-hidden="true" /></a>
          </div>

          <div className="best-sellers-products">
            <div className="best-sellers-products-track">
              {carouselProducts.map((product, index) => (
                <article className="best-seller-card" key={`${product.name}-${index}`} aria-hidden={index >= products.length}>
                  <a className="best-seller-product-link" href="#" aria-label={`View ${product.name}`}>
                    <span className="best-seller-image">
                      <span className="best-seller-photo primary" style={{ backgroundImage: `url('${product.image}')` }} />
                      <span className="best-seller-photo hover" style={{ backgroundImage: `url('${product.hoverImage}')` }} />
                      <span className="best-seller-badge">{product.badge}</span>
                    </span>
                    <span className="best-seller-meta">
                      <strong>{product.name}</strong>
                      <span className="best-seller-prices">
                        <span className="best-seller-price-new">{product.price}</span>
                      </span>
                    </span>
                  </a>
                  <button className="best-seller-cart" type="button" aria-label={`Add ${product.name} to cart`}>
                    <ShoppingCart aria-hidden="true" />
                    <span>Add to Cart</span>
                  </button>
                </article>
              ))}
            </div>
          </div>

          <a className="best-sellers-mobile-view-all" href="#">
            View All <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <aside className="best-sellers-press" aria-label="Best sellers promotion">
          <img className="best-sellers-press-leaf" src="/images/rightleaf.png" alt="" aria-hidden="true" />
          <div className="best-sellers-press-content">
            <span className="best-sellers-press-kicker"><Leaf aria-hidden="true" /><span>Pure Ayurveda</span></span>
            <strong>Fresh botanical care for daily glow.</strong>
            <p>Explore clean formulas made for balanced skin and mindful rituals.</p>
            <a href="#">Shop Now <ArrowRight aria-hidden="true" /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}

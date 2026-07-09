import { ArrowRight, Leaf, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Nourish Facial Oil',
    badge: 'Best Seller',
    price: '₹749',
    oldPrice: '₹999',
    save: '25% OFF',
    image: '/images/product1.png',
    hoverImage: '/images/product2.png',
  },
  {
    name: 'Gentle Glow Cleanser',
    badge: 'New',
    price: '₹599',
    oldPrice: '₹799',
    save: '25% OFF',
    image: '/images/product1.png',
    hoverImage: '/images/product2.png',
  },
  {
    name: 'Radiance Clay Mask',
    badge: 'Ayurvedic',
    price: '₹899',
    oldPrice: '₹1199',
    save: '25% OFF',
    image: '/images/product1.png',
    hoverImage: '/images/product2.png',
  },
  {
    name: 'Renew Herbal Serum',
    badge: 'Trending',
    price: '₹1099',
    oldPrice: '₹1499',
    save: '27% OFF',
    image: '/images/product1.png',
    hoverImage: '/images/product2.png',
  },
];

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
            {products.map((product) => (
              <article className="best-seller-card" key={product.name}>
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
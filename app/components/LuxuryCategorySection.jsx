import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Face Care',
    image: '/images/herobnner1.png',
  },
  {
    title: 'Serums',
    image: '/images/herobnner2.png',
  },
  {
    title: 'Body Care',
    image: '/images/herobnner1.png',
  },
  {
    title: 'Daily Rituals',
    image: '/images/herobnner2.png',
  },
];

export default function LuxuryCategorySection() {
  return (
    <section className="luxury-category-section" aria-label="Ayurvedic care categories">
      <div className="luxury-category-grid">
        <article className="luxury-category-promise">
          <img className="luxury-category-leaf" src="/images/leaf.png" alt="" aria-hidden="true" />
          <div className="luxury-category-promise-content">
            <span className="luxury-category-kicker">Our Promise</span>
            <h2>Nature is our luxury.</h2>
            <p>Pure botanical care blended with Ayurvedic science for visible, lasting wellness.</p>
            <a href="#" aria-label="Learn more about AyurVeda promise">Learn More <ArrowRight aria-hidden="true" /></a>
          </div>
        </article>

        {categories.map((category) => (
          <a className="luxury-category-card" href="#" key={category.title}>
            <span className="luxury-category-image" style={{ backgroundImage: `url('${category.image}')` }} />
            <span className="luxury-category-content">
              <strong>{category.title}</strong>
              <span>Shop Now <ArrowRight aria-hidden="true" /></span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
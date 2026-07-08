import { ArrowRight } from 'lucide-react';

const concerns = [
  {
    title: 'Dandruff',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Acne-Prone Skin',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Dark Circles',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Dull, Dry Skin',
    image: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Sun Protection',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Anti-Ageing',
    image: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=600&auto=format&fit=crop',
  },
];

export default function ShopByConcern() {
  return (
    <section className="shop-concern" aria-labelledby="shop-concern-title">
      <h2 id="shop-concern-title">Shop By Concern</h2>
      <div className="concern-grid">
        {concerns.map((concern) => (
          <a className="concern-card" href="#" key={concern.title}>
            <div className="concern-image" style={{ backgroundImage: `url('${concern.image}')` }}>
              <span className="concern-arrow"><ArrowRight aria-hidden="true" /></span>
            </div>
            <span className="concern-title">{concern.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
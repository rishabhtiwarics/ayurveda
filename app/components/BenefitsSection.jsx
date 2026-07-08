import { BadgeCheck, Leaf, PackageCheck, ShieldCheck, Sparkles, Truck } from 'lucide-react';

const benefits = [
  { label: '100% Ayurvedic Ingredients', icon: Leaf },
  { label: 'Clean & Safe Formulas', icon: ShieldCheck },
  { label: 'Fresh Herbal Wellness', icon: Sparkles },
  { label: 'Quality Checked Products', icon: BadgeCheck },
  { label: 'Secure Eco Packaging', icon: PackageCheck },
  { label: 'Fast Doorstep Delivery', icon: Truck },
];

const marqueeItems = [
  'Ayurveda Wellness',
  'Pure Herbs',
  'Daily Care',
  'Clean Beauty',
  'Natural Healing',
  'Eco Conscious',
];

export default function BenefitsSection() {
  return (
    <section className="benefits-section" aria-label="AyurVeda ecommerce benefits">
      <div className="benefits-marquee" aria-hidden="true">
        <div className="benefits-marquee-track">
          {[0, 1].map((group) => (
            <div className="benefits-marquee-group" key={group}>
              {marqueeItems.map((item) => (
                <span key={`${group}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="benefits-grid">
        {benefits.slice(0, 4).map(({ label, icon: Icon }) => (
          <div className="benefit-card" key={label}>
            <span className="benefit-icon"><Icon aria-hidden="true" /></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
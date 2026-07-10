import { ArrowRight } from 'lucide-react';

const galleryItems = [
  { title: 'Ayurveda Ritual', image: '/images/herobnner1.png' },
  { title: 'Herbal Wellness', image: '/images/herobnner2.png' },
];

const loopItems = Array.from({ length: 8 }, () => galleryItems).flat();
const topRow = loopItems;
const bottomGalleryItems = galleryItems.slice().reverse();
const bottomRow = Array.from({ length: 8 }, () => bottomGalleryItems).flat();

function InstagramBadge() {
  return (
    <span className="instagram-tile-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    </span>
  );
}

export default function InstagramSection() {
  return (
    <section className="instagram-section sf-white" aria-label="Follow Ayurveda on Instagram">
      <div className="instagram-follow-panel best-sellers-header">
        <span>Follow Us On Instagram</span>
        <a href="#" aria-label="Follow us on Instagram">@ayurveda <ArrowRight aria-hidden="true" /></a>
      </div>

      <div className="instagram-marquee" aria-hidden="true">
        <div className="instagram-marquee-track">
          {[0, 1].map((groupIndex) => (
            <div className="instagram-marquee-group" key={`top-group-${groupIndex}`}>
              {topRow.map((item, index) => (
                <div className="instagram-tile" key={`${item.title}-top-${groupIndex}-${index}`}>
                  <img src={item.image} alt="" />
                  <span className="instagram-tile-overlay" />
                  <InstagramBadge />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="instagram-marquee instagram-marquee-reverse" aria-hidden="true">
        <div className="instagram-marquee-track">
          {[0, 1].map((groupIndex) => (
            <div className="instagram-marquee-group" key={`bottom-group-${groupIndex}`}>
              {bottomRow.map((item, index) => (
                <div className="instagram-tile" key={`${item.title}-bottom-${groupIndex}-${index}`}>
                  <img src={item.image} alt="" />
                  <span className="instagram-tile-overlay" />
                  <InstagramBadge />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

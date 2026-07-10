import { Instagram, ArrowRight } from 'lucide-react';

const col1 = ['/images/herobnner1.png', '/images/product1.png'];
const col2 = ['/images/herobnner2.png', '/images/product2.png', '/images/herobnner1.png', '/images/product1.png'];
const col3 = ['/images/product2.png', '/images/herobnner1.png'];
const col4 = ['/images/product1.png', '/images/herobnner2.png', '/images/product2.png', '/images/herobnner1.png'];
const col5 = ['/images/herobnner2.png', '/images/product1.png'];

export default function InstagramSection() {
  return (
    <section className="instagram-section" aria-label="Follow us on Instagram">
      <div className="instagram-header">
        <span className="instagram-kicker">
          {/* <Instagram aria-hidden="true" /> */}
          <span>Follow Us</span>
        </span>
        <h2>@ayurveda on Instagram</h2>
        <p>Real rituals, real skin — tag us to be featured.</p>
        <a href="#" aria-label="Follow AyurVeda on Instagram">
          Follow Us <ArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="instagram-grid">
        <div className="instagram-col instagram-col-static">
          {col1.map((src, i) => (
            <a className="instagram-tile" href="#" key={`c1-${i}`}>
              <img src={src} alt="" />
              {/* <span className="instagram-tile-icon"><Instagram aria-hidden="true" /></span> */}
            </a>
          ))}
        </div>

        <div className="instagram-col instagram-col-scroll">
          <div className="instagram-col-track">
            {[...col2, ...col2].map((src, i) => (
              <a className="instagram-tile" href="#" key={`c2-${i}`} aria-hidden={i >= col2.length}>
                <img src={src} alt="" />
                {/* <span className="instagram-tile-icon"><Instagram aria-hidden="true" /></span> */}
              </a>
            ))}
          </div>
        </div>

        <div className="instagram-col instagram-col-static">
          {col3.map((src, i) => (
            <a className="instagram-tile" href="#" key={`c3-${i}`}>
              <img src={src} alt="" />
              {/* <span className="instagram-tile-icon"><Instagram aria-hidden="true" /></span> */}
            </a>
          ))}
        </div>

        <div className="instagram-col instagram-col-scroll instagram-col-scroll-alt">
          <div className="instagram-col-track">
            {[...col4, ...col4].map((src, i) => (
              <a className="instagram-tile" href="#" key={`c4-${i}`} aria-hidden={i >= col4.length}>
                <img src={src} alt="" />
                {/* <span className="instagram-tile-icon"><Instagram aria-hidden="true" /></span> */}
              </a>
            ))}
          </div>
        </div>

        <div className="instagram-col instagram-col-static">
          {col5.map((src, i) => (
            <a className="instagram-tile" href="#" key={`c5-${i}`}>
              <img src={src} alt="" />
              {/* <span className="instagram-tile-icon"><Instagram aria-hidden="true" /></span> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const collections = [
  { title: 'Virvex', href: '/collections/virvex', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Venora', href: '/collections/venora', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
  { title: 'Pressova', href: '/collections/pressova', image: '/images/WhatsApp Image 2026-07-20 at 6.14.44 PM.jpeg' },
  { title: 'Nestara', href: '/collections/nestara', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Livera', href: '/collections/livera', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
  { title: 'Flexora', href: '/collections/flexora', image: '/images/WhatsApp Image 2026-07-20 at 6.14.44 PM.jpeg' },
  { title: 'Femiva', href: '/collections/femiva', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Cardiva', href: '/collections/cardiva', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
];

export default function FooterSection() {
  return (
    <footer className="site-footer">
      <img className="footer-bg-leaf" src="/images/rightleaf.png" alt="" aria-hidden="true" />

      {/* Row 1: Collections */}
      <div className="footer-top">
        <nav className="footer-collections">
          {collections.map((item) => (
            <a className="footer-collection-item" href={item.href} key={item.title}>
              <span
                className="footer-collection-image"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <span>{item.title}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* White rounded card */}
      <div className="footer-card">
        <div className="footer-about">
          <Link href="/" className="brand-logo footer-about-brand" aria-label="pulp ayurveda home">
            <img src="/images/logo.png" alt="pulp ayurveda" className="brand-logo-image footer-logo" />
          </Link>
          <p>Rooted in Ayurveda, crafted with clean, natural ingredients to bring balance to your everyday skincare and wellness ritual.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 8h2V4h-2a4 4 0 0 0-4 4v2H9v4h2v6h4v-6h2.5l.5-4H15V8z" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.8A11.7 11.7 0 0 1 3.2 4.6a4.2 4.2 0 0 0 1.3 5.6c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.7 2 2.9 3.9 2.9A8.2 8.2 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.4 11.7-11.9v-.5c.8-.6 1.5-1.3 2-2.2z" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/privacy-policy">
            <span>Privacy Policy</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <a href="/terms-and-conditions">
            <span>Terms &amp; Conditions</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-icon"><MapPin aria-hidden="true" /></span>
            <span>221B Botanical Lane, New Delhi, India</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon"><Mail aria-hidden="true" /></span>
            <a href="mailto:hello@verdant.com">hello@verdant.com</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon"><Phone aria-hidden="true" /></span>
            <a href="tel:+911234567890">+91 12345 67890</a>
          </div>
        </div>
      </div>

      {/* Copyright, outside white card */}
      <div className="footer-copyright">
        <p>Â© {new Date().getFullYear()} pulp ayurveda. All rights reserved.</p>
      </div>
    </footer>
  );
}



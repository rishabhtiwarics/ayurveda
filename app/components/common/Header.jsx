'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Camera,
  ChevronDown,
  Globe2,
  LogIn,
  LogOut,
  Mail,
  Menu,
  Phone,
  PlayCircle,
  Search,
  ShoppingCart,
  User,
  UserPlus,
  X,
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];

const shopCategories = [
  { title: 'Virvex', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Venora', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
  { title: 'Pressova', image: '/images/WhatsApp Image 2026-07-20 at 6.14.44 PM.jpeg' },
  { title: 'Nestara', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Livera', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
  { title: 'Flexora', image: '/images/WhatsApp Image 2026-07-20 at 6.14.44 PM.jpeg' },
  { title: 'Femiva', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM (1).jpeg' },
  { title: 'Cardiva', image: '/images/WhatsApp Image 2026-07-20 at 6.11.31 PM.jpeg' },
];

const defaultUser = {
  name: 'Rishabh Tiwari',
  designation: 'Wellness Member',
  image: '/images/logo.png',
};

export default function Header() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('ayurvedaUser')
        : null;

    if (storedUser) {
      try {
        setUser({ ...defaultUser, ...JSON.parse(storedUser) });
      } catch {
        setUser(defaultUser);
      }
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('sidebar-open', menuOpen);

    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {showAnnouncement && (
        <div className="announcement-bar" aria-label="Store announcements">
          <p className="announcement-offer">Flat 30% OFF on Ayurvedic wellness essentials</p>
          <div className="announcement-socials" aria-label="Contact links">
            <a href="tel:+919876543210" aria-label="Call +91 98765 43210"><Phone aria-hidden="true" /><span>+91 98765 43210</span></a>
            <a href="mailto:care@ayurveda.com" aria-label="Email care@ayurveda.com"><Mail aria-hidden="true" /><span>care@ayurveda.com</span></a>
          </div>
          <button
            type="button"
            className="announcement-close"
            aria-label="Close announcement"
            onClick={() => setShowAnnouncement(false)}
          >
            <X aria-hidden="true" />
          </button>
        </div>
      )}

      <div className="header-container">
        <Link href="/" className="brand-logo" aria-label="pulp ayurveda home">
          <img src="/images/logo.png" alt="pulp ayurveda" className="brand-logo-image" />
        </Link>

        <nav className="header-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="header-actions" aria-label="Header actions">
          <button type="button" aria-label="Search"><Search aria-hidden="true" /></button>
          <button type="button" aria-label="Cart"><ShoppingCart aria-hidden="true" /></button>
          <button type="button" aria-label="Account"><User aria-hidden="true" /></button>
          <button
            type="button"
            className="header-menu-button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-sidebar-overlay${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <aside className={`mobile-sidebar${menuOpen ? ' is-open' : ''}`} aria-label="Mobile menu">
        <div className="mobile-sidebar-top">
          <Link href="/" className="mobile-sidebar-logo" aria-label="pulp ayurveda home" onClick={closeMenu}>
            <img src="/images/logo.png" alt="pulp ayurveda" />
          </Link>
          <button type="button" className="mobile-sidebar-close" aria-label="Close menu" onClick={closeMenu}>
            <X aria-hidden="true" />
          </button>
        </div>

        <div className="mobile-sidebar-body">
          <nav className="mobile-sidebar-menu" aria-label="Sidebar navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <span>{link.label}</span>
              </Link>
            ))}
            <button
              type="button"
              className={`mobile-sidebar-shop-toggle${shopOpen ? ' is-open' : ''}`}
              aria-expanded={shopOpen}
              aria-controls="mobile-sidebar-categories"
              onClick={() => setShopOpen((open) => !open)}
            >
              <span>Shop</span>
              <ChevronDown aria-hidden="true" />
            </button>
          </nav>

          <div className={`mobile-sidebar-shop${shopOpen ? ' is-open' : ''}`} id="mobile-sidebar-categories">
            <div className="mobile-sidebar-section-title">
              <span>Shop Categories</span>
              <Link href="/shop" onClick={closeMenu}>View all</Link>
            </div>
            <div className="mobile-sidebar-category-grid">
              {shopCategories.map((category) => (
                <Link href="/shop" key={category.title} onClick={closeMenu}>
                  <img src={category.image} alt="" aria-hidden="true" />
                  <span>{category.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mobile-sidebar-auth">
            {user ? (
              <>
                <div className="mobile-sidebar-user">
                  <img src={user.image} alt={user.name} />
                  <span>
                    <strong>{user.name}</strong>
                    <small>{user.designation}</small>
                  </span>
                </div>
                <button type="button" className="mobile-sidebar-logout">
                  <LogOut aria-hidden="true" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="mobile-sidebar-auth-actions">
                <Link href="/login" onClick={closeMenu}>
                  <LogIn aria-hidden="true" />
                  <span>Login</span>
                </Link>
                <Link href="/register" onClick={closeMenu}>
                  <UserPlus aria-hidden="true" />
                  <span>Registration</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mobile-sidebar-footer">
          <div className="mobile-sidebar-socials" aria-label="Social links">
            <a href="#" aria-label="Instagram"><Camera aria-hidden="true" /></a>
            <a href="#" aria-label="Facebook"><Globe2 aria-hidden="true" /></a>
            <a href="#" aria-label="YouTube"><PlayCircle aria-hidden="true" /></a>
          </div>
          <p>Pure Ayurvedic care, delivered fresh.</p>
        </div>
      </aside>
    </header>
  );
}



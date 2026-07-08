import Link from 'next/link';
import { AtSign, Leaf, Mail, Phone, Search, ShoppingCart, User } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];


export default function Header() {
  return (
    <header className="site-header">
      <div className="announcement-bar" aria-label="Store announcements">
        <p className="announcement-offer">Flat 30% OFF on Ayurvedic wellness essentials</p>
        <div className="announcement-socials" aria-label="Contact links">
          <a href="tel:+919876543210" aria-label="Call +91 98765 43210"><Phone aria-hidden="true" /><span>+91 98765 43210</span></a>
          <a href="mailto:care@ayurveda.com" aria-label="Email care@ayurveda.com"><Mail aria-hidden="true" /><span>care@ayurveda.com</span></a>
          <a href="#" aria-label="Instagram"><AtSign aria-hidden="true" /></a>
        </div>
      </div>

      <div className="header-container">
        <Link href="/" className="brand-logo" aria-label="AyurVeda home">
          <span className="brand-mark"><Leaf aria-hidden="true" /></span>
          <span>AyurVeda</span>
        </Link>

        <nav className="header-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions" aria-label="Header actions">
          <button type="button" aria-label="Search"><Search aria-hidden="true" /></button>
          <button type="button" aria-label="Cart"><ShoppingCart aria-hidden="true" /></button>
          <button type="button" aria-label="Account"><User aria-hidden="true" /></button>
        </div>
      </div>
    </header>
  );
}
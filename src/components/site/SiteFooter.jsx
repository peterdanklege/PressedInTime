import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <p>Keeping Morningside fresh since 2025.</p>
          <div className="socials">
            <a href="https://www.facebook.com/PressedInTimeTheWedge/" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.instagram.com/pitthewedge/" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/services">Services &amp; Pricing</Link>
          <Link to="/about">About &amp; Contact</Link>
        </div>
        <div>
          <h3>Visit us</h3>
          <p><MapPin />The Wedge, 255 Rivonia Rd, Morningside</p>
          <a href="tel:+27761324527" className="footer-phone"><Phone />076 132 4527</a>
          <a href="mailto:thewedge@pressedintime.co.za"><Mail />thewedge@pressedintime.co.za</a>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Pressed in Time — The Wedge</span>
        <span>Garment care, precisely delivered.</span>
      </div>
    </footer>
  );
}

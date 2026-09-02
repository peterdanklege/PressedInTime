import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const heroImg = 'https://media.base44.com/images/public/6a69c8ab5a3d20a81865d7e6/c43b0ea03_generated_7b1a8d75.png';

export default function HomeHero() {
  return (
    <section className="home-hero">
      <img
        src={heroImg}
        alt="Steam rising from the weave of a pristine white cotton shirt"
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="site-container hero-content">
        <span className="eyebrow">Morningside's trusted garment care</span>
        <h1>Pressed in time.<br /><em>The Wedge.</em></h1>
        <p>Professional laundry, dry cleaning and garment care — handled with precision and returned ready to wear.</p>
        <div className="hero-actions">
          <a className="glass-button" href="#services">Explore services <ArrowRight /></a>
          <div className="delivery-option-block">
            <p className="delivery-option-sub">
              We support Courier &amp; e-Hailing delivery services for pick-ups and drop-offs
            </p>
          </div>
        </div>
        <div className="trust-row">
          {['24hr turnaround', 'Serving since 2025'].map(x => (
            <span key={x}><Check /> {x}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

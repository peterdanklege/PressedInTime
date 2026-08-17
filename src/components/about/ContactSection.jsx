import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const info = [
  [MapPin, 'Location', 'The Wedge Shopping Centre, 255 Rivonia Rd, Morningside'],
  [Phone, 'Phone', '076 132 4527'],
  [Mail, 'Email', 'thewedge@pressedintime.co.za'],
  [Clock, 'Hours', ['Mon – Fri: 8 am – 6 pm', 'Saturday: 8 am – 4 pm', 'Sunday: 8 am – 3 pm']],
];

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="site-container">
        <span className="eyebrow">Enquiries</span>
        <h2 className="mb-10">WhatsApp us to get started.</h2>
        <div className="contact-cards">
          {info.map(([Icon, l, v]) => (
            <article key={l}>
              <Icon />
              <div>
                <small>{l}</small>
                {Array.isArray(v)
                  ? <ul className="hours-list">{v.map(line => <li key={line}>{line}</li>)}</ul>
                  : <p>{v}</p>
                }
              </div>
            </article>
          ))}
          <a className="wa-button" href="https://wa.me/27761324527" target="_blank" rel="noopener noreferrer">WhatsApp us directly</a>
        </div>
      </div>
    </section>
  );
}

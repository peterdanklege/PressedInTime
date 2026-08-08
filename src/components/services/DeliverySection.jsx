import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from '../site/SectionTitle';

const steps = [
  'Message us with your collection area',
  'Choose your garment service',
  'A driver collects from your door',
  'Fresh laundry returns ready to wear',
];

export default function DeliverySection() {
  return (
    <section className="delivery-section">
      <div className="site-container delivery-grid">
        <div>
          <SectionTitle
            eyebrow="Delivery service"
            title="We come to you."
            body="Can't make it in store? Arrange trusted collection and return directly with our team."
          />
          <ol>
            {steps.map((x, i) => (
              <li key={x}><b>0{i + 1}</b>{x}</li>
            ))}
          </ol>
          <a
            className="ink-button"
            href="https://wa.me/27761324527"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arrange collection <ArrowUpRight />
          </a>
        </div>
        <img
          src="https://media.base44.com/images/public/6a69c8ab5a3d20a81865d7e6/3eab11b9f_generated_9c02597a.png"
          alt="Pressed white garment on a fine wooden hanger"
          className="delivery-image"
          loading="lazy"
        />
      </div>
    </section>
  );
}

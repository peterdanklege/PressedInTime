import React from 'react';
import { Shirt, Waves, Sparkles, BedDouble, Footprints, Gem, Building2, PanelsTopLeft, CircleDot } from 'lucide-react';
import { trackWhatsAppClick } from '@/utils/googleAdsConversion';
const data = [['Wash & Fold', 'Everyday laundry washed, tumble-dried and folded by garment type.', 'R45/kg', '24hrs · Delivery', Waves], ['Dry Cleaning', 'Specialist care for suits, dresses and delicate fabrics.', 'R85/item', '48hrs · Delivery', Shirt], ['Carpet Cleaning', 'Deep extraction removes embedded dirt, stains and odours.', 'R12/m²', '3–5 days', Sparkles], ['Curtain Cleaning', 'Professional curtain cleaning.', 'POA', '3–5 days', PanelsTopLeft], ['Linen Cleaning', 'Professional cleaning for bedding, linen and household fabrics.', 'R350', '1 day', BedDouble], ['Stain Removal', 'Targeted treatment for wine, oil, ink, rust and more.', 'R35/stain', '24–48hrs', CircleDot], ['Shoe Repairs & Cleaning', 'Cleaning, conditioning, polishing and minor repairs.', 'R80/pair', '48hrs', Footprints], ['Wedding Dress', 'Expert cleaning, hand-finishing and preservation.', 'POA', '5–7 days', Gem], ['Hospitality & Salons', 'Reliable bulk laundry with a service level built for you.', 'POA', 'Custom SLA', Building2]];

// Maps a service card to its matching tab in the Full Price List.
// Items with no direct price-table equivalent (Carpet Cleaning, Stain Removal,
// Shoe Repairs & Cleaning, Wedding Dress, Hospitality & Salons) keep the
// original "Get a quote" WhatsApp behaviour instead.
const priceTabMap = {
  'Wash & Fold': 'Laundry',
  'Dry Cleaning': 'Dry-Cleaning',
  'Curtain Cleaning': 'Curtains',
  'Linen Cleaning': 'Bedding & Linen',
};

export default function ServiceGrid({ onSelectPriceTab }) {
  return (
    <div className="pricing-grid">
      {data.map(([name, desc, price, tags, Icon], i) => {
        const id = `price-${i}`;
        const matchedTab = priceTabMap[name];
        return (
          <article key={name} aria-describedby={id}>
            <div className="service-icon"><Icon /></div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <div className="price"><span className="hidden">FROM</span><strong id={id} className="hidden">{price}</strong></div>
            <small className="hidden">{tags}</small>
            {matchedTab && onSelectPriceTab ? (
              <button type="button" className="quote-link" onClick={() => onSelectPriceTab(matchedTab)}>
                Get a quote
              </button>
            ) : (
              <a href={`https://wa.me/27761324527?text=${encodeURIComponent(`Hi, I'd like a quote for ${name}.`)}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                Get a quote
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}
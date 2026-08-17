import React, { useEffect, useState } from 'react';
import PageHero from '@/components/site/PageHero';
import SectionTitle from '@/components/site/SectionTitle';
import ServiceGrid from '@/components/services/ServiceGrid';
import TurnaroundTable from '@/components/services/TurnaroundTable';
import DeliverySection from '@/components/services/DeliverySection';
import PriceList from '@/components/services/PriceList';

export default function Services() {
  useEffect(() => { document.title = 'Services & Pricing | Pressed in Time Morningside'; }, []);

  const [priceTab, setPriceTab] = useState('Laundry');

  const goToPriceTab = (tabName) => {
    setPriceTab(tabName);
    const el = document.getElementById('price-list');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHero eyebrow="What we offer" title="Services & Pricing" body="Specialist garment care with transparent starting prices and no hidden surprises." />
      <section className="pricing-section">
        <div className="site-container">
          <SectionTitle eyebrow="Care, itemised" title="Choose your service." body="Every order is assessed before care begins. We will always confirm specialist pricing with you first." />
          <ServiceGrid onSelectPriceTab={goToPriceTab} />
        </div>
      </section>
      <PriceList activeTab={priceTab} onTabChange={setPriceTab} />
      <TurnaroundTable />
      <DeliverySection />
      <section className="quote-strip">
        <h2>Not sure what you need?</h2>
        <p>Send us a photo or description and we will guide you.</p>
        <a className="ochre-button" href="https://wa.me/27761324527">WhatsApp for a quote</a>
      </section>
    </>
  );
}
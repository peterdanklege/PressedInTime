import React from 'react';
import { Clock } from 'lucide-react';

const hours = [
  ['Sunday', '8 am – 3 pm'],
  ['Monday', '8 am – 6 pm'],
  ['Tuesday', '8 am – 6 pm'],
  ['Wednesday', '8 am – 6 pm'],
  ['Thursday', '8 am – 6 pm'],
  ['Friday', '8 am – 6 pm'],
  ['Saturday', '8 am – 4 pm']
];

export default function BusinessHours() {
  return (
    <section className="delivery-section">
      <div className="site-container delivery-grid">
        <div>
          <span className="eyebrow">When we're open</span>
          <h2 className="font-heading text-[clamp(38px,5vw,64px)] leading-tight text-[#1d3369]">Open 7 days a week.</h2>
          <p className="mt-5 text-[#3b4a6b] leading-relaxed max-w-md">Convenient hours at The Wedge Shopping Centre, Morningside — so your garment care fits around your schedule.</p>
          <a className="wa-button mt-8" href="https://wa.me/27761324527" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
        </div>
        <div className="bg-white border border-[#d8e0ea] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-[#44aadd]" />
            <span className="font-bold text-[#1d3369] uppercase tracking-[0.18em] text-xs">Opening hours</span>
          </div>
          <ul>
            {hours.map(([day, time]) => (
              <li key={day} className="flex justify-between items-center py-3 border-t border-[#eef2f7] first:border-t-0">
                <span className="text-[#202124] font-medium">{day}</span>
                <span className="text-[#3b4a6b]">{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
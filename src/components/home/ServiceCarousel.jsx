import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { name: 'Wash & Fold',     price: 'From R45/kg',    img: 'https://media.base44.com/images/public/6a69c8ab5a3d20a81865d7e6/02704b4ee_generated_ed97ba0c.png' },
  { name: 'Dry Cleaning',    price: 'From R85/item',  img: 'https://media.base44.com/images/public/6a69c8ab5a3d20a81865d7e6/1b70fc8cb_generated_1e2e4da7.png' },
  { name: 'Specialist Care', price: 'Tailored quote', img: 'https://media.base44.com/images/public/6a69c8ab5a3d20a81865d7e6/88789ac52_generated_106baf70.png' },
];

export default function ServiceCarousel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveIndex(Math.min(index, services.length - 1));
  };

  return (
    <div className="service-carousel-wrap">
      <div className="service-carousel" ref={scrollRef} onScroll={handleScroll}>
        {services.map((s, i) => (
          <article className="service-visual" key={s.name}>
            <img
              src={s.img}
              alt={`${s.name} fabric detail`}
              className="service-photo"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="service-caption">
              <div>
                <span>0{i + 1}</span>
                <h3>{s.name}</h3>
              </div>
              <a href="/services" aria-label={`View ${s.name}`}><ArrowUpRight /></a>
            </div>
          </article>
        ))}
      </div>

      {isMobile && (
        <div className="carousel-hint">
          <span className="carousel-swipe-label">Swipe to explore</span>
          <div className="carousel-dots">
            {services.map((_, i) => (
              <span key={i} className={`carousel-dot${i === activeIndex ? ' active' : ''}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import SectionTitle from '../site/SectionTitle';

const reviews = [
  { quote: "I just want to say a huge thank you to the team — they really came through for us! We had two bridesmaids' dresses that needed urgent tailoring, and they handled it so quickly and efficiently. By the end of the day, everything was sorted, which we truly appreciated. The team was so friendly, helpful, and just absolutely lovely to deal with. Their effort and sense of urgency made all the difference. Highly recommend!", name: "Nicole Potgieter", meta: "Local Guide · 58 reviews", when: "3 months ago" },
  { quote: "I highly recommend Pressed In Time – The Wedge. I needed a laundry urgently and was met with genuine friendliness and a clear desire to provide outstanding service. The team are welcoming, professional and will do what they can to help. The quality of the work is excellent — garments come back beautifully cleaned and handled with real care. Turnaround times are reliable and communication is clear. It's refreshing to find a business that values its customers and takes pride in what they do.", name: "Hilton", meta: "5 reviews", when: "7 months ago" },
  { quote: "Brilliant service! Super quick and efficient, and prices are so reasonable. I won't use any other dry cleaner / laundromat from now on! They also do sneaker cleaning, tailoring and repairs — 10/10!", name: "Gina Karam", meta: "14 reviews · 1 photo", when: "8 months ago" }
];

const CLAMP_THRESHOLD = 180;

const mapsUrl = "https://www.google.com/maps/place/Pressed+In+Time+The+Wedge,+Morningside/@-26.0746882,28.0637162,19z/data=!3m1!4b1!4m6!3m5!1s0x1e95734ae6ed2e03:0xec038b27406b1187!8m2!3d-26.0746882!4d28.0643599!16s%2Fg%2F11zhz5r34p";

function ReviewCard({ quote, name, meta, when }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > CLAMP_THRESHOLD;
  return (
    <blockquote>
      <b>&ldquo;</b>
      <p className={isLong && !expanded ? 'review-clamped' : ''}>
        {quote}
      </p>
      {isLong && (
        <button
          className="review-expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less \u2191' : 'Read more \u2193'}
        </button>
      )}
      <footer>
        <span>{name}</span>
        <small>{meta} &middot; {when}</small>
      </footer>
    </blockquote>
  );
}

export default function Testimonials() {
  return (
    <section className="light-section">
      <div className="site-container">
        <SectionTitle eyebrow="Client notes" title="Trusted by Morningside." body="★★★★★  5.0 on Google · 5 reviews" />
        <div className="reviews-grid">
          {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
        </div>
        <div className="mt-12 text-center">
          <a className="ochre-button" href={mapsUrl} target="_blank" rel="noopener noreferrer">Read more on Google</a>
        </div>
      </div>
    </section>
  );
}

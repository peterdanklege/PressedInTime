import React, { useState } from 'react';

const TABS = ['Laundry', 'Bedding & Linen', 'Blankets & Duvets', 'Curtains', 'Dry-Cleaning', 'Tailoring'];

const DATA = {
  'Laundry': {
    note: 'Per kg · Minimum load 3 kg · Excludes Bedding and Linen',
    buffer: 'Fair-weight buffer: All bulk specials include a grace weight allowance. Standard per-kg rates apply to weight exceeding the buffer.',
    sections: [
      {
        heading: 'Standard (per kg)',
        rows: [
          ['Wash Only', 'R 48', 'Dry Only', 'R 45'],
          ['Wash, Dry & Fold', 'R 52', 'Dry & Iron', 'R 55'],
          ['Wash, Dry & Iron', 'R 60', 'Iron Only', 'R 52'],
          ['Sneaker Cleaning – Normal', 'R 150', 'Sneaker Cleaning – Suede/Delicate', 'R 200'],
        ],
      },
      {
        heading: 'Bulk Specials',
        rows: [
          ['5 kg Express Wash, Dry & Fold', 'R 235', 'Save R 25', ''],
          ['10 kg Family Wash, Dry & Fold', 'R 395', 'Save R 125', ''],
        ],
      },
    ],
  },
  'Bedding & Linen': {
    note: 'Per kg · Minimum load 3 kg',
    sections: [
      {
        heading: '',
        rows: [
          ['Wash Only', 'R 61', 'Dry Only', 'R 56'],
          ['Wash, Dry & Fold', 'R 64', 'Dry & Iron', 'R 68'],
          ['Wash, Dry & Iron', 'R 70', 'Iron Only', 'R 65'],
        ],
      },
    ],
  },
  'Blankets & Duvets': {
    note: 'Fixed item pricing',
    sections: [
      {
        heading: '',
        rows: [
          ['Blanket – Single', 'R 220', 'Duvet – Single', 'R 220'],
          ['Blanket – Double', 'R 260', 'Duvet – Double', 'R 260'],
          ['Blanket – Queen', 'R 275', 'Duvet – Queen', 'R 275'],
          ['Blanket – King', 'R 292', 'Duvet – King', 'R 292'],
          ['', '', 'Feather Duvet – Single', 'R 305'],
          ['', '', 'Feather Duvet – Double', 'R 378'],
        ],
      },
    ],
  },
  'Curtains': {
    note: 'Per kg · Minimum load 3 kg',
    sections: [
      {
        heading: '',
        rows: [
          ['Wash, Dry & Iron', 'R 105', 'Minimum Weight', '3 kg'],
        ],
      },
    ],
  },
  'Dry-Cleaning': {
    note: 'Fixed item pricing',
    sections: [
      {
        heading: '',
        rows: [
          ['Two Piece Suit', 'R 279', 'Three Piece Suit', 'R 356'],
          ['Dress – Plain Short', 'R 163', 'Dress – Plain Long', 'R 205'],
          ['Dress – Beaded Short', 'R 350', 'Dress – Beaded Full Length', 'R 440'],
          ['Skirt – Plain Knee Length', 'R 140', 'Skirt – Knee Length Pleated', 'R 231'],
          ['Skirt – Plain Floor Length', 'R 172', 'Skirt – Pleated Floor Length', 'R 275'],
          ['Jersey / Sweater', 'R 129', 'Trouser / Jean', 'R 140'],
          ['Jacket – Normal', 'R 163', 'Waistcoat', 'R 129'],
          ['School Blazer', 'R 128', 'Tie', 'R 88'],
          ['Short Coat', 'R 210', 'Coat – Knee Length', 'R 231'],
          ['Coat – Mid Calf / Floor', 'R 286', 'Shirt', 'R 99'],
          ['Scarf – Large', 'R 122', 'Scarf – Small', 'R 105'],
        ],
      },
    ],
  },
  'Tailoring': {
    note: 'Prices from — final cost confirmed before work begins',
    sections: [
      {
        heading: '',
        rows: [
          ['Shortening Trousers', 'R 137', 'Trouser Tapering', 'R 152'],
          ['Shortening Dress', 'R 158', 'Trouser Waist', 'R 137'],
          ['Shortening Jacket Sleeves', 'R 263', 'Stitching – from', 'R 70'],
          ['Patching – from', 'R 82', 'Replace Zipper – from', 'R 130'],
        ],
      },
    ],
  },
};

export default function PriceList() {
  const [active, setActive] = useState(TABS[0]);
  const tab = DATA[active];

  return (
    <section className="price-list-section">
      <div className="site-container">
        <div className="pl-header">
          <span className="eyebrow">Transparent pricing</span>
          <h2>Full Price List</h2>
          <p>Download our complete price list or browse by category below.</p>
          <a
            href="/src/assets/price-list.pdf"
            download="Pressed-In-Time-Price-List.pdf"
            className="pl-download-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Price List (PDF)
          </a>
        </div>

        <div className="pl-tabs" role="tablist" aria-label="Price list categories">
          {TABS.map(t => (
            <button
              key={t}
              role="tab"
              aria-selected={active === t}
              onClick={() => setActive(t)}
              className={`pl-tab ${active === t ? 'pl-tab--active' : ''}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="pl-panel" role="tabpanel">
          {tab.note && <p className="pl-note">{tab.note}</p>}
          {tab.sections.map((sec, si) => (
            <div key={si}>
              {sec.heading && <h4 className="pl-sec-heading">{sec.heading}</h4>}
              <div className="pl-table-wrap">
                <table className="pl-table">
                  <tbody>
                    {sec.rows.map((row, ri) => (
                      <tr key={ri}>
                        <td className="pl-item">{row[0]}</td>
                        <td className="pl-price">{row[1]}</td>
                        {row[2] !== undefined && <td className="pl-item pl-item--right">{row[2]}</td>}
                        {row[3] !== undefined && <td className="pl-price">{row[3]}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          {tab.buffer && <p className="pl-buffer">{tab.buffer}</p>}
        </div>

        <p className="pl-discount">
          ★ &nbsp;<strong>10% discount</strong> on Laundry &amp; Tailoring (Mon–Thu) for customers 60+ years. Valid ID required.
        </p>
      </div>
    </section>
  );
}

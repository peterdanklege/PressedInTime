import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/utils/googleAdsConversion';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#121212]">
      <SiteNav />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <a
        href="https://wa.me/27761324527"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat with Pressed in Time on WhatsApp"
        onClick={trackWhatsAppClick}
      >
        <span>Chat with us</span>
        <MessageCircle />
      </a>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import { trackWhatsAppClick } from '@/utils/googleAdsConversion';

const links = [['Home','/'],['Services & Pricing','/services'],['About & Contact','/about']];
export default function SiteNav(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{ const onScroll=()=>setScrolled(window.scrollY>60); onScroll(); window.addEventListener('scroll',onScroll); return()=>window.removeEventListener('scroll',onScroll)},[]);
  return <header className={`site-nav ${scrolled?'is-scrolled':''}`}>
    <div className="site-container flex h-20 items-center justify-between">
      <Link to="/" className="brand" aria-label="Pressed in Time home"><img src={logo} alt="Pressed in Time – The Wedge" className="nav-logo" /></Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {links.map(([label,to])=><NavLink key={to} to={to} end={to==='/'} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}
        <a className="wa-button" href="https://wa.me/27761324527" target="_blank" rel="noreferrer" onClick={trackWhatsAppClick}><MessageCircle size={18}/> WhatsApp Us</a>
      </nav>
      <button className="nav-toggle md:hidden" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="mobile-menu md:hidden">{links.map(([label,to])=><NavLink onClick={()=>setOpen(false)} key={to} to={to}>{label}</NavLink>)}<a className="wa-button" href="https://wa.me/27761324527" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>WhatsApp Us</a></div>}
  </header>
}
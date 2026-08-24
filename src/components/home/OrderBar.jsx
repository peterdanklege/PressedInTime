import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { trackWhatsAppClick } from '@/utils/googleAdsConversion';
export default function OrderBar(){ const [zip,setZip]=useState(''); const [result,setResult]=useState('');
  const check=e=>{e.preventDefault(); setResult(zip.trim()?`Collection enquiries are available for ${zip.trim()}.`: 'Please enter your area or postal code.');};
  return <div className="order-bar-wrap"><form className="order-bar" onSubmit={check}><label><MapPin/><span>Collection area</span><input value={zip} onChange={e=>setZip(e.target.value)} placeholder="Enter suburb or postal code" aria-label="Suburb or postal code"/></label><button type="submit">Check collection times <ArrowRight/></button></form>{result&&<p className="order-result" role="status">{result} <a href="https://wa.me/27761324527" onClick={trackWhatsAppClick}>Confirm on WhatsApp</a></p>}</div> }
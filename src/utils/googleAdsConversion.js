// Fires the Google Ads "WhatsApp Enquiry" click conversion, then continues
// on to WhatsApp. Used as the onClick handler on every WhatsApp link/button.
export function trackWhatsAppClick(event) {
  const url = event.currentTarget.href;
  event.preventDefault();

  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url);
  } else {
    // If the Google tag hasn't loaded (e.g. ad blocker), still send the
    // visitor to WhatsApp rather than leaving the click doing nothing.
    window.location.href = url;
  }
}

// Fires the Google Ads "Contact" click conversion, then continues on to the
// mailto link. Used as the onClick handler on the footer email link.
export function trackEmailClick(event) {
  const url = event.currentTarget.href;
  event.preventDefault();

  if (typeof window.gtag_report_contact_conversion === 'function') {
    window.gtag_report_contact_conversion(url);
  } else {
    // If the Google tag hasn't loaded (e.g. ad blocker), still open the
    // visitor's mail client rather than leaving the click doing nothing.
    window.location.href = url;
  }
}

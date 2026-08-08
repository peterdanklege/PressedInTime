import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from '@/components/site/SiteLayout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import PageNotFound from './lib/PageNotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

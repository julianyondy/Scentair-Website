import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Service } from './pages/Service';
import { Fragrances } from './pages/Fragrances';
import { Machines } from './pages/Machines';
import { ScentAirSplash } from './pages/machines/ScentAirSplash';
import { ScentAirBreeze } from './pages/machines/ScentAirBreeze';
import { ScentAirStream } from './pages/machines/ScentAirStream';
import { ScentAirDirect } from './pages/machines/ScentAirDirect';
import { OurPartners } from './pages/OurPartners';
import { ScrollToTop } from './components/layout/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/fragrances" element={<Fragrances />} />
              <Route path="/products/machines" element={<Machines />} />
              <Route path="/products/machines/scentair-splash" element={<ScentAirSplash />} />
              <Route path="/products/machines/scentair-breeze" element={<ScentAirBreeze />} />
              <Route path="/products/machines/scentair-stream" element={<ScentAirStream />} />
              <Route path="/products/machines/scentair-direct" element={<ScentAirDirect />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/our-partners" element={<OurPartners />} />
            </Routes>
    </Layout>
  );
}

export default App;

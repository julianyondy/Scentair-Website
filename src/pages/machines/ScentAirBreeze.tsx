import React from 'react';
import { Container } from '../../components/ui/Container';
import { Link } from 'react-router-dom';

export const ScentAirBreeze: React.FC = () => {
  return (
    <div className="pt-[180px] min-h-screen py-20 bg-transparent">
      <Container>
        {/* Back link */}
        <div className="mb-8">
          <Link
            to="/products/machines"
            className="text-primary hover:text-primary/80 flex items-center mb-6 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Machines
          </Link>
        </div>

        {/* HERO / SUMMARY */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center p-8">
              <img
                src="/assets/machines/breeze.png"
                alt="ScentAir Breeze"
                className="max-h-64 object-contain"
              />
            </div>

            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                ScentAir Breeze
              </h1>

              <p className="text-secondary mb-6 text-lg">
                ScentAir Breeze™ dengan Wi-Fi & Bluetooth adalah sistem terhubung yang
                menebarkan aroma konsisten tanpa pudar dalam kabut halus tak terlihat.
                Kartrid mudah diganti dan kontrol jadwal/intensitas dari perangkat mana pun
                membuat pengelolaan aroma menjadi mudah.
              </p>

              {/* KEY FEATURES */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary mb-3">Key Features</h2>
                <ul className="space-y-3">
                  {[
                    'Wi-Fi Control — buat jadwal & kendalikan via ScentAir App atau alat manajemen cloud',
                    'Smart Cloud Management — atur jadwal kapan saja & di mana saja',
                    'Vertical Diffusion — teknologi dengan paten menghadirkan pengalaman aroma mulus',
                    'Advanced Atomized Technology — menyebar sebagai kabut halus tak terlihat',
                    'Long-lasting Cartridges — 30 hari aroma yang konsisten',
                    'Covers up to 2,000 sq ft — skalabel untuk berbagai ukuran bisnis',
                  ].map((t) => (
                    <li key={t} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-secondary">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  Request a Demo
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary/10 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* BENEFIT BAND (SVG icons) */}
          <div className="bg-slate-50 border-t border-slate-100 px-6 md:px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Atomized Technology */}
              <div>
                <div className="flex justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12 text-sky-500">
                    <g fill="currentColor">
                      <circle cx="8" cy="20" r="2" />
                      <circle cx="16" cy="12" r="2" />
                      <circle cx="24" cy="8" r="2" />
                      <circle cx="36" cy="10" r="2" />
                      <circle cx="46" cy="16" r="2" />
                      <circle cx="52" cy="26" r="2" />
                      <circle cx="54" cy="38" r="2" />
                      <circle cx="48" cy="48" r="2" />
                      <circle cx="38" cy="54" r="2" />
                      <circle cx="26" cy="54" r="2" />
                      <circle cx="14" cy="48" r="2" />
                      <circle cx="8" cy="36" r="2" />
                    </g>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800">Atomized Technology</h4>
                <p className="text-slate-600 text-sm">Consistent fragrance for 30 days</p>
              </div>

              {/* Wi-Fi Device Control */}
              <div>
                <div className="flex justify-center mb-3">
                  {/* Phone + WiFi waves */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12 text-sky-500">
                    <g fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="20" y="10" width="24" height="44" rx="4" />
                      <circle cx="32" cy="46" r="2" fill="currentColor" />
                      <path d="M40 22c6 0 10 4 10 10" />
                      <path d="M40 18c8 0 14 6 14 14" />
                      <path d="M40 26c4 0 6 2 6 6" />
                    </g>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800">Wi-Fi Device Control</h4>
                <p className="text-slate-600 text-sm">
                  Controllable anytime, anywhere from any internet-connected device
                </p>
              </div>

              {/* Revolutionary Vertical Design */}
              <div>
                <div className="flex justify-center mb-3">
                  {/* Cylinder + upward flow arrow */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12 text-sky-500">
                    <g fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="22" y="12" width="20" height="40" rx="10" />
                      <path d="M32 18v18" />
                      <path d="M28 26l4-6 4 6" />
                      <path d="M22 44h20" />
                    </g>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800">Revolutionary Vertical Design</h4>
                <p className="text-slate-600 text-sm">Vertical diffusion delivers even, seamless scent</p>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT FEATURES */}
        <section className="mt-10 bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <dl className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {[
                ['Fragrance Technology', 'Advanced Atomization'],
                ['Fragrance Selection', 'Full ScentAir Library'],
                ['Color(s)', 'Black or White'],
                ['Cartridge Replacement', 'Monthly'],
                ['Shipment Frequency', 'Quarterly'],
                ['ScentAir Install', 'SelfInstall'],
                ['Service Available', 'SelfService'],
                ['Mounting Options', 'Wall Mount & Freestanding'],
                ['Freestanding Placement', 'Yes'],
                ['Product Maintenance', 'None'],
                ['Protected Technology', 'Patented Atomization Technology'],
                ['Regional Availability', 'EMEA and APAC'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-slate-500 text-sm">{k}</dt>
                  <dd className="font-medium text-slate-800">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="md:col-span-1 flex items-center justify-center">
              <img
                src="/assets/machines/breeze.png"
                alt="ScentAir Breeze"
                className="max-h-56 object-contain"
              />
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section className="mt-10 bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Technical Specifications</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {[
              ['Coverage', 'Up to 2,000 sq ft (186 sq m)'],
              ['Fragrance Output Location', 'Top output fragrance delivery'],
              ['Scent Settings', '24/7 programmable weekly events'],
              ['Max Run Hours', 'Up to 300 hours of scenting per month'],
              ['Dimensions', '8.25" (20.9cm) H × 6.25" (15.8cm) Dia'],
              ['Weight', 'Machine & Cartridge – 2.9 lbs (1.315 kg)'],
              ['Power Requirements', '100–240V AC, 50–60 Hz'],
              ['Power Consumption', '< 15 Watts'],
              ['Materials / Finishes', 'Black or White'],
              ['User Manual', 'https://ebooks.scentair.com/view/6027770436/'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-slate-500 text-sm">{k}</dt>
                <dd className="font-medium text-slate-800 break-words">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CONTROL DETAILS */}
        <section className="mt-10 bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Control Details</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { name: 'Connected & Manual Control', on: true },
              { name: 'Wi-Fi Enabled', on: true },
              { name: 'Bluetooth Enabled', on: true },
              { name: 'Control with ScentAir App', on: true },
              { name: 'Control with ScentConnect.com', on: true },
              { name: 'Wi-Fi Details', on: true },
              { name: 'Smart System Control', on: true },
            ].map((c) => (
              <div
                key={c.name}
                className={`rounded-xl border p-4 text-center ${
                  c.on ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200 opacity-75'
                }`}
                title={c.on ? 'Available' : 'Not available'}
              >
                <div
                  className={`mx-auto mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full ${
                    c.on ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-white'
                  }`}
                >
                  {c.on ? (
                    <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="text-sm font-medium text-slate-800">{c.name}</div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

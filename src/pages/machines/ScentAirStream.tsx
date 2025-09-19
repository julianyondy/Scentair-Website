import React from 'react';
import { Container } from '../../components/ui/Container';
import { Link } from 'react-router-dom';

export const ScentAirStream: React.FC = () => {
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
                src="/assets/machines/stream.png"
                alt="ScentAir Stream"
                className="max-h-64 object-contain"
              />
            </div>

            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                ScentAir Stream
              </h1>

              <p className="text-secondary mb-6 text-lg">
                ScentAir Stream™ is an invisible, high-performance system, best for large spaces. 
                Advanced diffusion technology releases fragrance through existing HVAC systems. 
                Customizable scheduling and intensity settings make it easy to tailor scent experiences in any environment.
              </p>

              {/* KEY FEATURES */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary mb-3">Key Features</h2>
                <ul className="space-y-3">
                  {[
                    'Advanced Atomized Technology — Patented technology diffuses fragrance in a fine, invisible spray',
                    'HVAC Connected Fragrance — Professional quality fragrance delivered invisibly through existing HVAC systems',
                    'Floor-to-Ceiling Coverage — Blanket coverage for a seamless fragrance experience',
                    'Adjustable Settings — Customizable with adjustable date, time and scent intensity settings',
                    'Full-Service Maintenance — Professional installation and service',
                    'Covers over 3,000 sq ft — Coverage for large or challenging indoor spaces',
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
              </div>
            </div>
          </div>

          {/* BENEFIT BAND (SVG icons) */}
          <div className="bg-slate-50 border-t border-slate-100 px-6 md:px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Scalable Scent Solution */}
              <div>
                <div className="flex justify-center mb-3">
                  {/* grid of modules */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12 text-sky-500">
                    <g fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="8" y="8" width="16" height="16" rx="2" />
                      <rect x="28" y="8" width="16" height="16" rx="2" />
                      <rect x="8" y="28" width="16" height="16" rx="2" />
                      <rect x="28" y="28" width="16" height="16" rx="2" />
                      <rect x="48" y="18" width="8" height="28" rx="2" />
                    </g>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800">Scalable Scent Solution</h4>
                <p className="text-slate-600 text-sm">
                  A solution designed for complex and large scale environments
                </p>
              </div>

              {/* Advanced Atomized Technology */}
              <div>
                <div className="flex justify-center mb-3">
                  {/* dotted spray */}
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
                <h4 className="font-semibold text-slate-800">Advanced Atomized Technology</h4>
                <p className="text-slate-600 text-sm">
                  Releases fragrance in particles 1/50th the size of aerosol 
                </p>
              </div>

              {/* Flexible Scheduling Options */}
              <div>
                <div className="flex justify-center mb-3">
                  {/* calendar + clock */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-12 h-12 text-sky-500">
                    <g fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="8" y="12" width="48" height="44" rx="4" />
                      <line x1="8" y1="24" x2="56" y2="24" />
                      <line x1="20" y1="6" x2="20" y2="18" />
                      <line x1="44" y1="6" x2="44" y2="18" />
                      <circle cx="42" cy="42" r="8" />
                      <line x1="42" y1="42" x2="42" y2="38" />
                      <line x1="42" y1="42" x2="46" y2="42" />
                    </g>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800">Flexible Scheduling Options</h4>
                <p className="text-slate-600 text-sm">
                  Create custom scent schedules and adjust scent intensity
                </p>
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
                ['Color(s)', 'Black Only'],
                ['Cartridge Replacement', 'Yes'],
                ['ScentAir Install', 'ScentAir Full-Service HVAC (harus dipasang ke HVAC)'],
                ['Service Available', 'ScentAir Full-Service'],
                ['Mounting Options', 'HVAC mount'],
                ['Freestanding Placement', 'No (must be mounted to HVAC)'],
                ['Product Maintenance', 'ScentAir Full-Service Maintenance'],
                ['Protected Technology', 'Patented Atomization Technology & Cloud Platform'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-slate-500 text-sm">{k}</dt>
                  <dd className="font-medium text-slate-800">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="md:col-span-1 flex items-center justify-center">
              <img
                src="/assets/machines/stream.png"
                alt="ScentAir Stream"
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
              ['Coverage', 'Over 3,000 sq ft (279 sq m) — any space HVAC covers'],
              ['Fragrance Output Location', 'HVAC fragrance delivery'],
              ['Scent Settings', '24/7 programmable weekly events'],
              ['Max Run Hours', 'Up to 16 hours per day, 7 days a week (some exceptions apply)'],
              [
                'Dimensions',
                `Control Unit: 6.0" (15.2cm) H × 11.0" (27.9cm) W × 5.1" (12.9cm) D — Fragrance Bottle: 11.0" (27.9cm) H × 8.0" (20.3cm) W × 4.4" (11.3cm) D`,
              ],
              ['Weight', 'Control Unit – 8.7 lbs (3.9 kg) / Fragrance Bottle – 14.0 lbs (6.4 kg)'],
              ['Power Requirements', '100–240V AC, 50–60 Hz'],
              ['Power Consumption', '35 Watts'],
              ['Partner(s)', 'Visit scentair.com'],
              ['User Manual', 'https://ebooks.scentair.com/view/929601545/'],
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
              { name: 'Manual Control', on: true },
              { name: 'Wi-Fi Enabled', on: false },
              { name: 'Bluetooth Enabled', on: false },
              { name: 'Control with ScentAir App', on: false },
              { name: 'Control with ScentConnect.com', on: false },
              { name: 'Wi-Fi Details', on: false },
              { name: 'Smart System Control', on: false },
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

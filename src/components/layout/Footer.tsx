import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SocialIcon } from 'react-social-icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <img src="/assets/footerlogo.png" alt="ScentAir Logo" className="h-35 mb-4" />
              <p className="text-white mb-5 text-2xl">
                Differentiate your space with scent.
              </p>
              <div className="flex space-x-4">
                <div className="transition-colors duration-300 filter invert-0 hover:invert">
                  <SocialIcon url="https://www.instagram.com/scentair.id/" network="instagram" style={{ height: 30, width: 30 }} fgColor="white" bgColor="transparent" target="_blank" />
                </div>
                <div className="transition-colors duration-300 filter invert-0 hover:invert">
                  <SocialIcon url="https://www.youtube.com/@scentairindonesia152" network="youtube" style={{ height: 30, width: 30 }} fgColor="white" bgColor="transparent" target="_blank" />
                </div>
                <div className="transition-colors duration-300 filter invert-0 hover:invert">
                  <SocialIcon url="https://wa.me/628172368247" network="whatsapp" style={{ height: 30, width: 30 }} fgColor="white" bgColor="transparent" target="_blank" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/service" className="text-white hover:text-accent transition-colors">Services</Link></li>
                <li><Link to="/products" className="text-white hover:text-accent transition-colors">Products</Link></li>
                <li><Link to="/our-partners" className="text-white hover:text-accent transition-colors">Our Partners</Link></li>
                <li><Link to="/about" className="text-white hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-white hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-white">
                <li>PT. Graha Lestari Agung Makmur</li>
                <li>Komplek Duta Merlin Blok D No. 2</li>
                <li>Jl. Gajah Mada No. 3-5,</li>
                <li>Phone: (021) 6306979/081-SCENTAIR (081-7236824)</li>
                <li>Email: sales@scentair.co.id</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white mt-8 pt-8 text-center text-white">
            <p>&copy; 2025 ScentAir. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ContactForm } from '../../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    purpose: 'home',
    companyName: '',
    address: '',
    reason: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      purpose: e.target.value as 'home' | 'business'
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      purpose: 'home',
      companyName: '',
      address: '',
      reason: ''
    });
  };

  return (
    <section id="contact" className="pt-5 pb-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Have questions about our fragrances or need personalized recommendations? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-white w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Purpose
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="purpose"
                        value="home"
                        checked={formData.purpose === 'home'}
                        onChange={handlePurposeChange}
                        className="accent-[#60c4dc] border-custom rounded focus:ring-[#60c4dc]"
                      />
                      <span className="ml-2 text-secondary">For Home</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="purpose"
                        value="business"
                        checked={formData.purpose === 'business'}
                        onChange={handlePurposeChange}
                        className="accent-[#60c4dc] border-custom rounded focus:ring-[#60c4dc]"
                      />
                      <span className="ml-2 text-secondary">For Business</span>
                    </label>
                  </div>
                </div>
                
                {formData.purpose === 'business' && (
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName || ''}
                      onChange={handleInputChange}
                      className="bg-white w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-primary mb-2">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-white w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Your full address"
                  />
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-primary mb-2">
                    Reason for Contact (Please describe your reason in detail, up to 500 words)
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="bg-white w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your reason for contacting us..."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.reason.length}/500 characters
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p className="text-secondary">
                        PT. Graha Lestari Agung Makmur<br />
                        Komplek Duta Merlin Blok D No. 2<br />
                        Jl. Gajah Mada No. 3-5, Jakarta Pusat, Indonesia<br />
                        10130
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p className="text-secondary">
                        (021) 6306979/081-SCENTAIR (081-7236824)<br />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p className="text-secondary">
                        sales@scentair.co.id<br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-custom">
                  <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {/* Instagram */}
                    <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:scale-105 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 3.684a6.153 6.153 0 100 12.306 6.153 6.153 0 000-12.306zm7.406-1.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0zM12 7.838a4.162 4.162 0 110 8.324 4.162 4.162 0 010-8.324z" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:scale-105 transition-colors">
                      <span className="sr-only">YouTube</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a2.974 2.974 0 00-2.095-2.104C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.403.582a2.974 2.974 0 00-2.095 2.104A31.27 31.27 0 000 12a31.27 31.27 0 00.502 5.814 2.974 2.974 0 002.095 2.104C4.5 20.5 12 20.5 12 20.5s7.5 0 9.403-.582a2.974 2.974 0 002.095-2.104A31.27 31.27 0 0024 12a31.27 31.27 0 00-.502-5.814zM9.75 15.5v-7l6.25 3.5-6.25 3.5z" />
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:scale-105 transition-colors">
                      <span className="sr-only">WhatsApp</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.04 2C6.5 2 2 6.5 2 12.07c0 2.13.56 4.1 1.64 5.88L2 22l4.21-1.57A10.06 10.06 0 0012.04 22C17.57 22 22 17.5 22 12.07 22 6.5 17.57 2 12.04 2zm0 18.38c-1.87 0-3.64-.55-5.15-1.59l-.37-.25-2.49.93.89-2.43-.26-.4a8.14 8.14 0 01-1.25-4.48c0-4.48 3.64-8.12 8.18-8.12 2.18 0 4.23.85 5.76 2.38a8.04 8.04 0 012.42 5.74c0 4.48-3.64 8.12-8.13 8.12zm4.59-6.13c-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.13-.56.13-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.13-1.06-.39-2.01-1.25-.74-.66-1.25-1.47-1.4-1.72-.15-.25-.02-.39.11-.52.12-.12.25-.29.38-.43.13-.14.18-.25.26-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.7 2.59 4.12 3.63.58.25 1.04.39 1.4.5.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

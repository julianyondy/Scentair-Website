import React, { useMemo, useState } from "react";
import { Container } from "../ui/Container";

type RequestType =
  | "account_help"
  | "diffuser_recommendations"
  | "fragrance_suggestion"
  | "order_tracking"
  | "return"
  | "additional_questions";

const COUNTRIES = [
  { code: "+1", label: "US/CA" },
  { code: "+62", label: "ID" },
  { code: "+65", label: "SG" },
  { code: "+60", label: "MY" },
];

export const Contact: React.FC = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+1",
    phone: "",
    address: "",
    zip: "",
    request: "" as RequestType | "",
    message: "",
  });

  // ===== word-limit helpers (500 words) =====
  const words = useMemo(
    () =>
      data.message
        .trim()
        .split(/\s+/)
        .filter(Boolean),
    [data.message]
  );
  const wordCount = words.length;
  const wordsLeft = Math.max(0, 500 - wordCount);
  const overLimit = wordCount > 500;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as any;
    setData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (overLimit) return; // simple guard
    console.log("Form submitted:", data);
    // reset (optional)
    setData({
      firstName: "",
      lastName: "",
      email: "",
      phoneCode: "+1",
      phone: "",
      address: "",
      zip: "",
      request: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-white pt-8 pb-10 md:pt-12 md:pb-16">
      <Container>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* ===== Header (kept) ===== */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              Have questions or want to learn more about our scent solutions? Reach out to our team.
            </p>
          </div>

          {/* ===== "Image content" → Exact-looking form ===== */}
          <div className="rounded-2xl p-6 md:p-8 shadow-lg bg-white border border-gray-100">
            <form
              onSubmit={onSubmit}
              className="bg-transparent text-[#111]"
            >
            {/* 2 columns like the screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              {/* First/Last Name */}
              <div>
                <label className="block text-[14px] mb-1">First Name <span className="text-[#111]">*</span></label>
                <input
                  name="firstName"
                  value={data.firstName}
                  onChange={onChange}
                  required
                  className="w-full bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary placeholder-gray-500 text-[14px] py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-[14px] mb-1">Last Name <span className="text-[#111]">*</span></label>
                <input
                  name="lastName"
                  value={data.lastName}
                  onChange={onChange}
                  required
                  className="w-full bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary placeholder-gray-500 text-[14px] py-2 rounded"
                />
              </div>

              {/* Email / Phone (+ code) */}
              <div>
                <label className="block text-[14px] mb-1">Email <span className="text-[#111]">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={onChange}
                  required
                  className="w-full bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary placeholder-gray-500 text-[14px] py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-[14px] mb-1">Phone Number</label>
                <div className="flex items-center gap-3">
                  <div className="min-w-[84px]">
                    <div className="relative">
                      <select
                        name="phoneCode"
                        value={data.phoneCode}
                        onChange={onChange}
                        className="appearance-none w-full bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary text-[14px] py-2 pr-6 rounded"
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.code}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-black/70">▾</span>
                    </div>
                  </div>
                  <input
                    name="phone"
                    value={data.phone}
                    onChange={onChange}
                    className="flex-1 bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary text-[14px] py-2 rounded"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              {/* Address / Zip */}
              <div>
                <label className="block text-[14px] mb-1">Address</label>
                <input
                  name="address"
                  value={data.address}
                  onChange={onChange}
                  className="w-full bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary text-[14px] py-2 rounded"
                  placeholder="Street, City, State"
                />
              </div>
              <div>
                <label className="block text-[14px] mb-1">Zip <span className="text-[#111]">*</span></label>
                <div className="relative">
                  <input
                    name="zip"
                    value={data.zip}
                    onChange={onChange}
                    required
                    className="w-full bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary text-[14px] py-2 rounded"
                  />
                  <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-black/70">▾</span>
                </div>
              </div>

              {/* Request type (dropdown spans full width like screenshot’s next row) */}
              <div className="md:col-span-2">
                <label className="block text-[14px] mb-1">
                  Your requests is for… <span className="text-[#111]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    name="request"
                    value={data.request}
                    onChange={onChange}
                    className="appearance-none w-full bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-primary text-[14px] py-2 pr-6 rounded"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="account_help">Account help</option>
                    <option value="diffuser_recommendations">Diffuser recommendations</option>
                    <option value="fragrance_suggestion">Fragrance suggestion</option>
                    <option value="order_tracking">Order tracking</option>
                    <option value="return">Return</option>
                    <option value="additional_questions">Additional questions</option>
                  </select>
                  <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-black/70">▾</span>
                </div>
              </div>

              {/* Message box */}
              <div className="md:col-span-2">
                <label className="block text-[14px] mb-1">How can we help you?</label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={onChange}
                  rows={4}
                  className={`w-full bg-gray-50 border-0 border-b ${
                    overLimit ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-0 focus:border-primary text-[14px] p-2 rounded`}
                  placeholder="How can we help you?"
                />
                <div
                  className={`mt-2 text-sm ${
                    overLimit ? "text-red-600" : "text-black/70"
                  }`}
                >
                  {overLimit
                    ? `Over limit by ${wordCount - 500} word${wordCount - 500 > 1 ? "s" : ""} (max 500 words)`
                    : `${wordsLeft} word${wordsLeft !== 1 ? "s" : ""} remaining (max 500)`}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-4 space-y-2">
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={overLimit}
                  className="px-8 py-3 rounded-full text-[16px] font-semibold bg-primary text-white disabled:opacity-60 disabled:cursor-not-allowed transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>

          {/* ===== Contact Information (below the content form) ===== */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Address</h4>
                    <p className="text-secondary font-semibold">
                      PT. Graha Lestari Agung Makmur<br />
                      Komplek Duta Merlin Blok D No. 2<br />
                      Jl. Gajah Mada No. 3-5, Jakarta Pusat, Indonesia<br />
                      10130
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Phone</h4>
                    <p className="text-secondary font-semibold">
                      (021) 6306979<br />
                      Hotline : 081-SCENTAIR (081-7236824)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <p className="text-secondary font-semibold">sales@scentair.co.id</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-light transition duration-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 3.684a6.153 6.153 0 100 12.306 6.153 6.153 0 000-12.306zm7.406-1.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0zM12 7.838a4.162 4.162 0 110 8.324 4.162 4.162 0 010-8.324z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-light transition duration-300">
                    <span className="sr-only">YouTube</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.974 2.974 0 00-2.095-2.104C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.403.582a2.974 2.974 0 00-2.095 2.104A31.27 31.27 0 000 12a31.27 31.27 0 00.502 5.814 2.974 2.974 0 002.095 2.104C4.5 20.5 12 20.5 12 20.5s7.5 0 9.403-.582a2.974 2.974 0 002.095-2.104A31.27 31.27 0 0024 12a31.27 31.27 0 00-.502-5.814zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-light transition duration-300">
                    <span className="sr-only">WhatsApp</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.5 2 2 6.5 2 12.07c0 2.13.56 4.1 1.64 5.88L2 22l4.21-1.57A10.06 10.06 0 0012.04 22C17.57 22 22 17.5 22 12.07 22 6.5 17.57 2 12.04 2zm0 18.38c-1.87 0-3.64-.55-5.15-1.59l-.37-.25-2.49.93.89-2.43-.26-.4a8.14 8.14 0 01-1.25-4.48c0-4.48 3.64-8.12 8.18-8.12 2.18 0 4.23.85 5.76 2.38a8.04 8.04 0 012.42 5.74c0 4.48-3.64 8.12-8.13 8.12zm4.59-6.13c-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.13-.56.13-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.13-1.06-.39-2.01-1.25-.74-.66-1.25-1.47-1.4-1.72-.15-.25-.02-.39.11-.52.12-.12.25-.29.38-.43.13-.14.18-.25.26-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.7 2.59 4.12 3.63.58.25 1.04.39 1.4.5.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

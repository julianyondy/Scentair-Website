import React, { useEffect, useRef, useState } from "react";
import { Container } from "../components/ui/Container";
import { Link } from "react-router-dom";

export const Machines: React.FC = () => {
  // Hover state (mini cards)
  const [hovered, setHovered] = useState<string | null>(null);

  // Plan sizing + scaling
  const planRef = useRef<HTMLDivElement | null>(null);
  const [k, setK] = useState(2); // radius px = k * sqrt(sqft)
  const [planDims, setPlanDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!planRef.current) return;
    const compute = () => {
      const rect = planRef.current!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height || rect.width;
      setPlanDims({ w, h });

      // 3000 ft² ≈ 55% sisi terpendek
      const shortest = Math.min(w, h);
      const targetMaxDiameter = 0.55 * shortest;
      setK(targetMaxDiameter / (2 * Math.sqrt(3000)));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(planRef.current!);
    return () => ro.disconnect();
  }, []);

  // Data mesin — posisi mengikuti mockup (mengabaikan semua lingkaran "W")
  const machines = [
    {
      id: 1,
      key: "splash", // S (kecil di kiri-atas)
      name: "ScentAir Splash",
      image: "/assets/machines/splash.png",
      sqft: 500,
      color: "#bee7d7",
      textColor: "#0b1b2b",
      xPct: 12,  // << posisi contoh
      yPct: 18,  // << posis contoh
      z: 40,
      slug: "scentair-splash",
      description:
        "ScentAir Splash™ is a discreet, battery-powered system, best for scenting small and micro-spaces. Create scent schedules directly from the device. Easy-change cartridges release mess-free, even fragrance for up to 300 hours.",
      features: [
        "TARGETED EXPERIENCE CONTROL — Atomized fragrance delivers precise, consistent coverage",
        "SELECT SCENT LIBRARY — Choose from a select fragrance library with Odor Neutralizing fragrances",
        "COMPACT & BATTERY POWERED — Discreetly fights odors anywhere - no power outlet needed",
        "SIMPLE MAINTENANCE — Easy-change cartridges & full warranty",
        "300 HOURS OF SCENT — Long-lasting cartridges contain up to 300 hours of odor-fighting fragrance",
        "COVERS UP TO 500 SQ FT - neutralizing coverage for small, hard to reach spaces",
      ],
    },
    {
      id: 2,
      key: "breeze", // B (kiri-bawah)
      name: "ScentAir Breeze",
      image: "/assets/machines/breeze.png",
      sqft: 2000,
      color: "#0e4d73",
      textColor: "#ffffff",
      xPct: 22,  // << contoh
      yPct: 72,  // << contoh
      z: 30,
      slug: "scentair-breeze",
      description:
        "ScentAir BreezeTM with Wi-Fi & Bluetooth is a connected system that releases consistent, no-fade fragrance in a fine, invisible mist. Easy-change cartridges and simple schedule and intensity control from any internet- connected device make system management a breeze.",
      features: [
        "BLUETOOTH CONTROL - Create schedules and control with your phone using the ScentAir app or cloud-based management tool",
        "SMART CLOUD MANAGEMENT - Adjust your schedule anytime and anywhere",
        "VERTICAL DIFFUSION - Patent-pending technology creates a seamless scent experience",
        "ADVANCED ATOMIZED TECHNOLOGY - Patented technology diffuses fragrance in a fine, invisible spray",
        "LONG-LASTING CARTRIDGES - 30 days of consistently vibrant fragrance",
        "COVERS UP TO 2,000 SQ FT - Scalable for any size business",
      ],
    },
    {
      id: 3,
      key: "direct", // D (kanan-atas/kanan-tengah)
      name: "ScentAir Direct",
      image: "/assets/machines/direct.png",
      sqft: 3000,
      color: "#6fb6bb",
      textColor: "#ffffff",
      xPct: 82,  // << contoh
      yPct: 40,  // << contoh
      z: 20,
      slug: "scentair-direct",
      description:
        "ScentAir Direct™ is a flexible system that maximizes scent delivery over medium-sized target areas. Advanced atomization technology releases a fine, invisible mist that can create fragrance zones or an all-over fragrance experience.",
      features: [
        "ADVANCED ATOMIZED TECHNOLOGY - Patented technology diffuses fragrance in a fine, invisible spray",
        "DISCREET PLACEMENT - Ceiling, wall, ledge, and track lighting mounts",
        "PRECISE FRAGRANCE - Creates fragrancezones or even, blanket coverage",
        "ADJUSTABLE SETTINGS - Customizable withadjustable date, time and scent intensity settings",
        "180° ROTATIONAL MOUNT - Endless placementand coverage options",
        "COVERS UP TO 3,000 SQ FT - Scalable for any size business",
      ],
    },
    {
      id: 4,
      key: "stream", // S (tengah-bawah)
      name: "ScentAir Stream",
      image: "/assets/machines/stream.png",
      sqft: 3000,
      color: "#c7d6e7",
      textColor: "#0b1b2b",
      xPct: 52,  // << contoh
      yPct: 58,  // << contoh
      z: 10,
      slug: "scentair-stream",
      description:
        "ScentAir Stream™ is an invisible, high-performance system, best for large spaces. Advanced diffusion technology releases fragrance through existing HVAC systems. Customizable scheduling and intensity settings make it easy to tailor scent experiences in any environment.",
      features: [
        "ADVANCED ATOMIZED TECHNOLOGY - Patented technology diffuses fragrance in a fine, invisible spray",
        "HVAC CONNECTED FRAGRANCE - Professional quality fragrance delivered invisibly through existing HVAC systems",
        "FLOOR-TO-CEILING COVERAGE - Blanket coverage for a seamless fragrance experience",
        "ADJUSTABLE SETTINGS - Customizable with adjustable date, time and scent intensity settings",
        "FULL-SERVICE MAINTENANCE & WARRANTY - Professional installation and service",
        "COVERS OVER 3,000 SQ FT - Coverage for large or challenging indoor spaces",
      ],
    },
  ] as const;

  // (opsional) klik untuk bantu ambil koordinat persentase saat fine-tuning
  // const handlePlanClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = planRef.current!.getBoundingClientRect();
  //   const xPct = ((e.clientX - rect.left) / rect.width) * 100;
  //   const yPct = ((e.clientY - rect.top) / rect.height) * 100;
  //   console.log('xPct:', xPct.toFixed(1), 'yPct:', yPct.toFixed(1));
  // };

  return (
    <div className="pt-[160px] min-h-screen bg-transparent">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Scenting Machines
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            Hover a machine to preview its coverage on the floor plan.
          </p>
        </div>

        {/* LEFT list | RIGHT plan */}
        <div className="flex flex-col lg:flex-row items-start gap-6 mb-16">
          {/* LEFT: mini cards */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-3">
            {machines.map((m) => (
              <button
                key={m.key}
                type="button"
                onMouseEnter={() => setHovered(m.key)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(m.key)}
                onBlur={() => setHovered(null)}
                className="group inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 text-left w-full hover:border-cyan-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-slate-50 p-2 flex-shrink-0">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="max-h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-slate-800 truncate text-lg">
                    {m.name}
                  </div>
                  <div className="text-sm text-cyan-600 font-medium mt-1">
                    {m.sqft.toLocaleString()} ft²
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: plan (overflow hidden supaya coverage tidak keluar) */}
          <div className="flex-1 relative rounded-2xl bg-white shadow-xl border border-slate-200">
            <div
              ref={planRef}
              // onClick={handlePlanClick}
              className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl"
            >
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg z-50">
                <h3 className="font-bold text-slate-800">Coverage Preview</h3>
                <p className="text-sm text-slate-600">Hover list on the left</p>
              </div>

              <img
                src="/assets/houseplan.png"
                alt="House plan"
                className="absolute inset-0 w-full h-full object-contain object-right"
              />

              {/* Overlay coverage: clamp agar tetap di dalam plan */}
              {machines.map((m) => {
                const visible = hovered === m.key;
                if (!visible) return null;

                const rPx = k * Math.sqrt(m.sqft);
                const d = 2 * rPx;

                let leftPx = (m.xPct / 100) * planDims.w - rPx;
                let topPx = (m.yPct / 100) * planDims.h - rPx;
                leftPx = Math.max(0, Math.min(leftPx, planDims.w - d));
                topPx = Math.max(0, Math.min(topPx, planDims.h - d));

                return (
                  <div
                    key={m.key}
                    className="absolute rounded-full flex items-center justify-center transition-all duration-500 ease-out pointer-events-none"
                    style={{
                      width: d,
                      height: d,
                      left: `${leftPx}px`,
                      top: `${topPx}px`,
                      backgroundColor: m.color,
                      opacity: 0.85,
                      zIndex: m.z,
                      boxShadow:
                        "0 10px 30px rgba(0,0,0,.15), inset 0 0 0 2px rgba(255,255,255,.5)",
                    }}
                  >
                    <div className="text-center px-2" style={{ color: m.textColor }}>
                      <div className="text-sm font-bold uppercase tracking-wide">
                        {m.name}
                      </div>
                      <div className="text-xs opacity-90 font-medium">
                        {m.sqft.toLocaleString()} ft²
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sections bawah (tetap) */}
        <div className="space-y-16 mb-24">
          {machines.map((m, idx) => {
            const isTextLeft = idx % 2 !== 0;
            return (
              <div
                key={m.id}
                className={`flex flex-col md:flex-row items-stretch gap-10 p-8 rounded-2xl bg-white shadow-xl ${
                  isTextLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 flex">
                  <div className="rounded-xl bg-slate-50 p-10 flex items-center justify-center w-full h-full">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="max-h-[28rem] w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {m.name}
                    </h2>
                    <p className="text-secondary mb-6">{m.description}</p>
                    <ul className="space-y-3 mb-6 max-w-prose">
                      {m.features.map((f, i) => (
                        <li
                          key={i}
                          className="grid grid-cols-[1.25rem_1fr] gap-3 items-start"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-slate-700 leading-6">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flex ${isTextLeft ? "justify-start" : "justify-end"}`}>
                    <Link
                      to={`/products/machines/${m.slug}`}
                      className="bg-primary text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

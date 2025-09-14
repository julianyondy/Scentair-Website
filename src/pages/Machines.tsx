import React, { useEffect, useRef, useState } from "react";
import { Container } from "../components/ui/Container";
import { Link } from "react-router-dom";

export const Machines: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  // Auto scale k based on rendered plan size (r = k * sqrt(sqft))
  const planRef = useRef<HTMLDivElement | null>(null);
  const [k, setK] = useState(2);

  useEffect(() => {
    if (!planRef.current) return;
    const compute = () => {
      const rect = planRef.current!.getBoundingClientRect();
      const shortest = Math.min(rect.width, rect.height || rect.width);
      const targetMaxDiameter = 0.55 * shortest; // 3,000 ft² ≈ 55% of plan
      setK(targetMaxDiameter / (2 * Math.sqrt(3000)));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(planRef.current!);
    return () => ro.disconnect();
  }, []);

  const machines = [
    {
      id: 1,
      key: "splash",
      name: "ScentAir Splash",
      image: "/assets/machines/splash.png",
      sqft: 500,
      color: "#bee7d7",
      textColor: "#0b1b2b",
      xPct: 15,
      yPct: 78,
      z: 30,
      slug: "scentair-splash",
      description:
        "ScentAir Splash™ is a discreet, battery-powered system—ideal for small and micro-spaces. Create custom scent schedules directly on the device. Easy-change cartridges deliver even, mess-free fragrance for up to 300 hours.",
      features: [
        "Targeted experience control: atomized fragrance for precise, consistent coverage",
        "Select scent library, including Odor Neutralizing fragrances",
        "Compact & battery powered—no power outlet needed; discreet anywhere",
        "Simple maintenance with easy-change cartridges and full warranty",
        "Up to 300 hours of scent per long-lasting cartridge",
        "Covers up to 500 ft²—great for small, hard-to-reach spaces",
      ],
    },
    {
      id: 2,
      key: "breeze",
      name: "ScentAir Breeze",
      image: "/assets/machines/breeze.png",
      sqft: 2000,
      color: "#0e4d73",
      textColor: "#ffffff",
      xPct: 40,
      yPct: 80,
      z: 20,
      slug: "scentair-breeze",
      description:
        "ScentAir Breeze™ with Wi-Fi & Bluetooth is a connected system that releases consistent, no-fade fragrance in a fine, invisible mist. Easy-change cartridges and simple schedule/intensity control from any internet-connected device make management a breeze.",
      features: [
        "Wi-Fi control via ScentAir app or cloud—create schedules and control from your phone",
        "Smart cloud management—adjust schedules anytime, anywhere",
        "Vertical diffusion design for a seamless scent experience",
        "Advanced atomized technology: fine, invisible spray",
        "Long-lasting cartridges—30 days of consistently vibrant fragrance",
        "Covers up to 2,000 ft²—scalable for any size business",
      ],
    },
    {
      id: 3,
      key: "direct",
      name: "ScentAir Direct",
      image: "/assets/machines/direct.png",
      sqft: 3000,
      color: "#6fb6bb",
      textColor: "#ffffff",
      xPct: 56,
      yPct: 56,
      z: 10,
      slug: "scentair-direct",
      description:
        "ScentAir Direct™ is a flexible system that maximizes scent delivery over medium-sized target areas. Advanced atomization releases a fine, invisible mist to create fragrance zones or an even, all-over experience.",
      features: [
        "Advanced atomized technology: patented, fine invisible spray",
        "Discreet placement options—ceiling, wall, ledge, and track-lighting mounts",
        "Precise fragrance—create zones atau blanket coverage",
        "Adjustable settings—customize date, time, and scent intensity",
        "180° rotational mount for endless placement and coverage options",
        "Covers up to 3,000 ft²—scalable for any size business",
      ],
    },
    {
      id: 4,
      key: "stream",
      name: "ScentAir Stream",
      image: "/assets/machines/stream.png",
      sqft: 3000,
      color: "#c7d6e7",
      textColor: "#0b1b2b",
      xPct: 86,
      yPct: 22,
      z: 5,
      slug: "scentair-stream",
      description:
        "ScentAir Stream™ is an invisible, high-performance system for large spaces. Advanced diffusion delivers fragrance through existing HVAC systems, with customizable scheduling and intensity to tailor experiences in any environment.",
      features: [
        "Advanced atomized technology: patented, fine invisible spray",
        "HVAC-connected fragrance—professional quality delivered invisibly through existing systems",
        "Floor-to-ceiling coverage for a seamless experience",
        "Adjustable settings—customizable date, time, and scent intensity",
        "Full-service maintenance & warranty—professional installation and service",
        "Covers over 3,000 ft²—ideal for challenging indoor spaces",
      ],
    },
  ] as const;

  return (
    <div className="pt-[160px] min-h-screen bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Our Scenting Machines
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            Hover a machine to preview its coverage on the house plan.
          </p>
        </div>

        {/* ===== SIDE-BY-SIDE: LEFT (machines) | RIGHT (plan) ===== */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          {/* LEFT: vertical cards; sempit supaya plan lebih besar */}
          <div className="w-full md:w-[280px] shrink-0 flex flex-col gap-4">
            {machines.map((m) => (
              <button
                key={m.key}
                type="button"
                onMouseEnter={() => setHovered(m.key)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(m.key)}
                onBlur={() => setHovered(null)}
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm hover:shadow transition text-left self-start"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="max-h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-slate-800 truncate">{m.name}</div>
                  <div className="text-sm text-slate-500">{m.sqft.toLocaleString()} ft²</div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: house plan diperbesar */}
          <div className="flex-1 relative overflow-hidden rounded-2xl bg-white shadow">
            <div ref={planRef} className="relative w-full">
              <img
                src="/assets/houseplan.png"
                alt="House plan"
                className="w-full h-auto block max-h-[560px] lg:max-h-[640px]"
              />
              {machines.map((m) => {
                const rPx = k * Math.sqrt(m.sqft);
                const d = 2 * rPx;
                const visible = hovered === m.key;
                return (
                  <div
                    key={m.key}
                    className="absolute rounded-full flex items-center justify-center transition-opacity duration-300 ease-out pointer-events-none"
                    style={{
                      width: d,
                      height: d,
                      left: `calc(${m.xPct}% - ${rPx}px)`,
                      top: `calc(${m.yPct}% - ${rPx}px)`,
                      backgroundColor: m.color,
                      opacity: visible ? 0.9 : 0,
                      zIndex: m.z,
                      boxShadow: visible
                        ? "0 10px 30px rgba(0,0,0,.12), inset 0 0 0 1px rgba(0,0,0,.1)"
                        : "none",
                    }}
                  >
                    {visible && (
                      <div className="text-center" style={{ color: m.textColor }}>
                        <div className="text-sm font-semibold uppercase">{m.name[0]}</div>
                        <div className="text-xs opacity-80">{m.sqft.toLocaleString()} ft²</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== Machine Spec Sections ===== */}
        <div className="space-y-16 mb-24">
          {machines.map((m, idx) => {
            const isTextLeft = idx % 2 !== 0; // jika text kiri (row dibalik)
            return (
              <div
                key={m.id}
                className={`flex flex-col md:flex-row items-stretch gap-10 p-8 rounded-2xl bg-white shadow-xl ${
                  isTextLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* LEFT */}
                <div className="w-full md:w-1/2 flex">
                  <div className="rounded-xl bg-slate-50 p-10 flex items-center justify-center w-full h-full">
                    <img src={m.image} alt={m.name} className="max-h-[28rem] w-auto object-contain" />
                  </div>
                </div>

                {/* RIGHT — tombol mengikuti sisi text */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{m.name}</h2>
                    <p className="text-secondary mb-6">{m.description}</p>

                    {/* PERFECTLY ALIGNED BULLETS */}
                    <ul className="space-y-3 mb-6 max-w-prose">
                      {m.features.map((f, i) => (
                        <li key={i} className="grid grid-cols-[1.25rem_1fr] gap-3 items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
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
                      className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
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

import React, { useState, useRef } from 'react';

// ====== Kategori (tetap) ======
const fragranceCategories = [
  { id: 'crisp',       name: 'Crisp & Invigorating',     image: '/assets/fragrance/Crisp & Invigorating.png',     points: ['Bold','Lively','Stimulating'] },
  { id: 'lux',         name: 'Lux & Sophisticated',      image: '/assets/fragrance/Lux & Sophisticated.png',      points: ['Extravagance','Opulence','Refinement'] },
  { id: 'passionate',  name: 'Passionate & Sensual',     image: '/assets/fragrance/Passionate & Sensual.png',     points: ['Seductive','Lavish','Irresistible'] },
  { id: 'relaxing',    name: 'Relaxing & Soothing',      image: '/assets/fragrance/Relaxing & Soothing.png',      points: ['Calming','Peaceful','Serene'] },
  { id: 'savory',      name: 'Savory & Gourmand',        image: '/assets/fragrance/Savoury & Gourmand.png',       points: ['Delicious','Comforting','Indulgent'] },
  { id: 'timeless',    name: 'Timeless & Floral',        image: '/assets/fragrance/Timeless & Floral.png',        points: ['Classic','Elegant','Enduring'] },
  { id: 'voyage',      name: 'Voyage & Escape',          image: '/assets/fragrance/Voyage & Escape.png',          points: ['Exotic','Adventurous','Escapist'] },
  { id: 'warm',        name: 'Warm & Inviting',          image: '/assets/fragrance/Warm & Inviting.png',          points: ['Cozy','Comforting','Inviting'] },
];

// ====== Default fallback ======
const FRONT = '/assets/cardfrag/agavefront.png';
const BACK  = '/assets/cardfrag/agaveback.png';

// ====== Mapping gambar per kategori (boleh kurang dari 6; akan di-loop) ======
const imagesByCategory: Record<string, { front: string; back: string }[]> = {
  crisp: [
    { front: '/assets/crisp/AGAVEFRONT.png', back: '/assets/crisp/AGAVEBACK.png' },
    { front: '/assets/crisp/FRESHLINENFRONT.png', back: '/assets/crisp/FRESHLINENBACK.png' },
    { front: '/assets/crisp/GREENTEA&LEMONGRASSFRONT.png', back: '/assets/crisp/GREENTEA&LEMONGRASSBACK.png' },
    { front: '/assets/crisp/LEMONVERBENAFRONT.png', back: '/assets/crisp/LEMONVERBENABACK.png' },
    { front: '/assets/crisp/TUSCANORANGEFRONT.png', back: '/assets/crisp/TUSCANORANGEBACK.png' },
    { front: '/assets/crisp/WHITETEA&THYMEFRONT.png', back: '/assets/crisp/WHITETEA&THYMEBACK.png' }
  ],
  lux: [
    { front: '/assets/lux/AMALFICOASTFRONT.png', back: '/assets/lux/AMALFICOASTBACK.png' },
    { front: '/assets/lux/ASIANGARDENFRONT.png',   back: '/assets/lux/ASIANGARDENBACK.png' },
    { front: '/assets/lux/AWALKINTHEWOODSFRONT.png',    back: '/assets/lux/AWALKINTHEWOODSBACK.png' },
    { front: '/assets/lux/DARKVANILLAPOMELOFRONT.png',    back: '/assets/lux/DARKVANILLAPOMELOBACK.png' },
    { front: '/assets/lux/GOLDENBAMBOOFRONT.png',    back: '/assets/lux/GOLDENBAMBOOBACK.png' },
    { front: '/assets/lux/OUDHFRONT.png',    back: '/assets/lux/OUDHBACK.png' },
  ],
  passionate: [
    { front: '/assets/passionate/BLACKMINKFRONT.png',  back: '/assets/passionate/BLACKMINKBACK.png' },
    { front: '/assets/passionate/BLACKORCHIDFRONT.png',  back: '/assets/passionate/BLACKORCHIDBACK.png' },
    { front: '/assets/passionate/BLACKTEAFIGFRONT.png',  back: '/assets/passionate/BLACKTEAFIGBACK.png' },
    { front: '/assets/passionate/COBALTFRONT.png',  back: '/assets/passionate/COBALTBACK.png' },
    { front: '/assets/passionate/MEDITERRANEANFIGFRONT.png',  back: '/assets/passionate/MEDITERRANEANFIGBACK.png' },
    { front: '/assets/passionate/SAGE&POMEGRANATEFRONT.png',  back: '/assets/passionate/SAGE&POMEGRANATEBACK.png' },
  ],
  relaxing: [
    { front: '/assets/relaxing/GREENBAMBOOFRONT.png',  back: '/assets/relaxing/GREENBAMBOOBACK.png' },
    { front: '/assets/relaxing/GREENCLOVER&ALOEFRONT.png',  back: '/assets/relaxing/GREENCLOVER&ALOEBACK.png' },
    { front: '/assets/relaxing/LAVENDERLEMONVERBENAFRONT.png',  back: '/assets/relaxing/LAVENDERLEMONVERBENABACK.png' },
    { front: '/assets/relaxing/SEASALTFRONT.png',  back: '/assets/relaxing/SEASALTBACK.png' },
    { front: '/assets/relaxing/TRANQUILWATERSFRONT.png',  back: '/assets/relaxing/TRANQUILWATERSBACK.png' },
    { front: '/assets/relaxing/VETIVERNOIRFRONT.png',  back: '/assets/relaxing/VETIVERNOIRBACK.png' },
  ],
  savory: [
    { front: '/assets/savory/CORNUCOPIAFRONT.png',  back: '/assets/savory/CORNUCOPIABACK.png' },
    { front: '/assets/savory/CRANBERRYAPPLEMARMALADEFRONT.png',  back: '/assets/savory/CRANBERRYAPPLEMARMALADEBACK.png' },
    { front: '/assets/savory/HOTAPPLEPIEFRONT.png',  back: '/assets/savory/HOTAPPLEPIEBACK.png' },
    { front: '/assets/savory/PUMPKINPIEFRONT.png',  back: '/assets/savory/PUMPKINPIEBACK.png' },
    { front: '/assets/savory/SUGARCOOKIEFRONT.png',  back: '/assets/savory/SUGARCOOKIEBACK.png' },
    { front: '/assets/savory/VANILLABOURBONFRONT.png',  back: '/assets/savory/VANILLABOURBONBACK.png' },
  ],
  timeless: [
    { front: '/assets/timeless/GARDENIAFRONT.png',  back: '/assets/timeless/GARDENIABACK.png' },
    { front: '/assets/timeless/GINGERLILYFRONT.png',  back: '/assets/timeless/GINGERLILYBACK.png' },
    { front: '/assets/timeless/KAIJASMINEFRONT.png',  back: '/assets/timeless/KAIJASMINEBACK.png' },
    { front: '/assets/timeless/ROSEGARDENFRONT.png',  back: '/assets/timeless/ROSEGARDENBACK.png' },
    { front: '/assets/timeless/WHITEBLOSSOMTEAFRONT.png',  back: '/assets/timeless/WHITEBLOSSOMTEABACK.png' },
    { front: '/assets/timeless/WHITETEA&FIGFRONT.png',  back: '/assets/timeless/WHITETEA&FIGBACK.png' },
  ],
  voyage: [
    { front: '/assets/voyage/AUSTRALIANCOASTFRONT.png',  back: '/assets/voyage/AUSTRALIANCOASTBACK.png' },
    { front: '/assets/voyage/ISLANDBREEZEFRONT.png',  back: '/assets/voyage/ISLANDBREEZEBACK.png' },
    { front: '/assets/voyage/ISLEOFCAPRIFRONT.png',  back: '/assets/voyage/ISLEOFCAPRIBACK.png' },
    { front: '/assets/voyage/OCEANFRONT.png',  back: '/assets/voyage/OCEANBACK.png' },
    { front: '/assets/voyage/PINEFORESTFRONT.png',  back: '/assets/voyage/PINEFORESTBACK.png' },
    { front: '/assets/voyage/TROPICALCOCONUTFRONT.png',  back: '/assets/voyage/TROPICALCOCONUTBACK.png' },
  ],
  warm: [
    { front: '/assets/warm/APPLE&OAKFRONT.png',  back: '/assets/warm/APPLE&OAKBACK.png' },
    { front: '/assets/warm/CEDARWOODFRONT.png',  back: '/assets/warm/CEDARWOODBACK.png' },
    { front: '/assets/warm/FRESHBREWEDCOFFEEFRONT.png',  back: '/assets/warm/FRESHBREWEDCOFFEEBACK.png' },
    { front: '/assets/warm/MAHOGANYFRONT.png',  back: '/assets/warm/MAHOGANYBACK.png' },
    { front: '/assets/warm/SEASONSGREETINGSFRONT.png',  back: '/assets/warm/SEASONSGREETINGSBACK.png' },
    { front: '/assets/warm/VANILLAWOODSFRONT.png',  back: '/assets/warm/VANILLAWOODSBACK.png' },
  ],
};

const CARDS_PER_CATEGORY = 6;

export const Fragrances: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const cardsSectionRef = useRef<HTMLDivElement>(null);

  const toggleFlip = (id: string) => {
    setFlipped(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleCategorySelect = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setIsVisible(false);
      setTimeout(() => setSelectedCategory(null), 300);
    } else {
      setSelectedCategory(categoryId);
      setIsVisible(true);
      setTimeout(() => cardsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  };

  const selectedCategoryData = fragranceCategories.find(c => c.id === selectedCategory);

  // helper ambil pasangan gambar per kartu
  const getPair = (catId: string | null, idx: number) => {
    if (!catId) return { front: FRONT, back: BACK };
    const arr = imagesByCategory[catId];
    if (arr && arr.length > 0) {
      const use = arr[idx % arr.length]; // loop kalau kurang
      return { front: use.front || FRONT, back: use.back || BACK };
    }
    return { front: FRONT, back: BACK };
  };

  return (
    <div className="pt-[180px] min-h-screen py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Fragrance choices & Exclusives
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed mb-4">
            Every brand has a story to tell, and fragrance offers a unique way to bring that story to life. 
            Experience the endless possibilities of fragrance and discover a new way to tell your brand story.
            <br />
            <span className="font-semibold">
              650 active fragrances with 350 signature fragrances and more than 2,400 fragrances to choose from.
            </span>
          </p>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Choose a category below to view our fragrances.
          </p>
        </div>

        {/* Category buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center mb-20">
          {fragranceCategories.map((category) => (
            <div key={category.id} className="relative group">
              <button
                onClick={() => handleCategorySelect(category.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCategorySelect(category.id);
                  }
                }}
                className={`flex flex-col items-center transition-all duration-300 ${selectedCategory === category.id ? 'scale-110' : 'hover:scale-105'}`}
                aria-pressed={selectedCategory === category.id}
                tabIndex={0}
              >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 mb-3 ${
                  selectedCategory === category.id ? 'bg-primary border-4 border-accent shadow-xl' : 'bg-white border-4 border-primary/20 hover:border-primary hover:shadow-xl'
                }`}>
                  <img src={category.image} alt={category.name} className="w-16 h-16 object-contain rounded-full" />
                </div>
                <span className="text-center text-sm font-medium text-primary">{category.name}</span>
              </button>

              {/* small tooltip */}
              <div className="absolute left-full top-0 ml-4 w-36 bg-white rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <ul className="space-y-2">
                  {category.points.map((p) => (
                    <li key={p} className="text-primary font-medium">{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Cards row (right aligned) */}
        <div
          ref={cardsSectionRef}
          className={`transition-[max-height,opacity] duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'}`}
          style={{ maxHeight: isVisible ? 4000 : 0 }}
        >
          {selectedCategoryData && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                {selectedCategoryData.name} Fragrances
              </h2>

              {/* Rata kanan + wrap */}
              <div className="flex flex-wrap gap-6 justify-end">
                {Array.from({ length: CARDS_PER_CATEGORY }, (_, idx) => {
                  const id = `${selectedCategoryData.id}-${idx + 1}`;
                  const isFlipped = flipped.has(id);
                  const pair = getPair(selectedCategory, idx);

                  return (
                    <div key={id} className="flex flex-col items-center">
                      {/* Hint block above card — shown only for first 3 cards */}
                      {idx < 3 && (
                        <div className="mb-3 text-xs md:text-sm font-medium text-primary/90 animate-pulse">
                          Tap / Click to flip
                        </div>
                      )}

                      {/* Card */}
                      <div className="relative [perspective:1500px] w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[650/1122] rounded-2xl">
                        <div
                          className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                            isFlipped ? 'rotate-y-180' : ''
                          }`}
                        >
                          {/* FRONT */}
                          <button
                            type="button"
                            onClick={() => toggleFlip(id)}
                            className="absolute inset-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl [backface-visibility:hidden] focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Flip card"
                          >
                            <img
                              src={pair.front}
                              alt={`${selectedCategoryData.name} card front ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </button>

                          {/* BACK */}
                          <button
                            type="button"
                            onClick={() => toggleFlip(id)}
                            className="absolute inset-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl rotate-y-180 [backface-visibility:hidden] bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Flip card back"
                          >
                            <img
                              src={pair.back}
                              alt={`${selectedCategoryData.name} card back ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Always show this text under the 6 cards */}
                <div className="w-full text-center mt-6">
                  <span className="text-2xl md:text-3xl font-semibold text-primary">
                    ...and many more
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

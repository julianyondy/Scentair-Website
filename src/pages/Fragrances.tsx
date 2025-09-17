import React, { useState, useRef } from 'react';

// kategori tetap, tapi isi fragrances hanya perlu id (karena semua kartu pakai gambar yang sama)
const fragranceCategories = [
  { id: 'crisp', name: 'Crisp & Invigorating', image: '/assets/fragrance/Crisp & Invigorating.png', points: ['Bold','Lively','Stimulating'], fragrances: [{id:'1'},{id:'2'},{id:'3'}] },
  { id: 'lux', name: 'Lux & Sophisticated', image: '/assets/fragrance/Lux & Sophisticated.png', points: ['Extravagance','Opulence','Refinement'], fragrances: [{id:'1'},{id:'2'},{id:'3'}] },
  { id: 'passionate', name: 'Passionate & Sensual', image: '/assets/fragrance/Passionate & Sensual.png', points: ['Seductive','Lavish','Irresistible'], fragrances: [{id:'1'},{id:'2'},{id:'3'}] },
  { id: 'relaxing', name: 'Relaxing & Soothing', image: '/assets/fragrance/Relaxing & Soothing.png', points: ['Calming','Peaceful','Serene'], fragrances: [{id:'1'},{id:'2'},{id:'3'}] },
  { id: 'savoury', name: 'Savoury & Gourmand', image: '/assets/fragrance/Savoury & Gourmand.png', points: ['Delicious','Comforting','Indulgent'], fragrances: [{id:'1'},{id:'2'},{id:'3'}] },
  { id: 'timeless', name: 'Timeless & Floral', image: '/assets/fragrance/Timeless & Floral.png', points: ['Classic','Elegant','Enduring'], fragrances: [{id:'1'},{id:'2'},{id:'3'}] },
  { id: 'voyage', name: 'Voyage & Escape', image: '/assets/fragrance/Voyage & Escape.png', points: ['Exotic','Adventurous','Escapist'], fragrances: [{id:'1'},{id:'2'},{id:'3'}] },
  { id: 'warm', name: 'Warm & Inviting', image: '/assets/fragrance/Warm & Inviting.png', points: ['Cozy','Comforting','Inviting'], fragrances: [{id:'1'},{id:'2'},{id:'3'}] },
];

const FRONT = '/assets/cardfrag/ecoserenityfront.jpg';
const BACK  = '/assets/cardfrag/ecoserenityback.jpg';

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

  return (
    <div className="pt-[180px] min-h-screen py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Fragrance choices & Exclusives
          </h1>
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
                <ul className="space-y-2">{category.points.map((p) => (<li key={p} className="text-primary font-medium">{p}</li>))}</ul>
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
                {selectedCategoryData.fragrances.map((f, idx) => {
                  const id = `${selectedCategoryData.id}-${f.id}-${idx}`;
                  const isFlipped = flipped.has(id);
                  return (
                    <div
                      key={id}
                      className="relative [perspective:1500px] w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[650/1122] rounded-2xl"
                    >
                      <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? 'rotate-y-180' : ''}`}>
                        {/* FRONT */}
                        <button
                          type="button"
                          onClick={() => toggleFlip(id)}
                          className="absolute inset-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl [backface-visibility:hidden] focus:outline-none focus:ring-2 focus:ring-primary"
                          aria-label="Flip card"
                        >
                          <img src={FRONT} alt="Fragrance card front" className="h-full w-full object-cover" />
                        </button>

                        {/* BACK */}
                        <button
                          type="button"
                          onClick={() => toggleFlip(id)}
                          className="absolute inset-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl rotate-y-180 [backface-visibility:hidden] bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                          aria-label="Flip card back"
                        >
                          <img src={BACK} alt="Fragrance card back" className="h-full w-full object-cover" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
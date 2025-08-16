import React, { useState, useEffect, useRef } from 'react';

// Sample data for fragrance categories and fragrances
const fragranceCategories = [
  {
    id: 'crisp',
    name: 'Crisp & Invigorating',
    image: '/assets/fragrance/Crisp & Invigorating.png',
    points: ['Bold', 'Lively', 'Stimulating'],
    fragrances: [
      {
        id: 'crisp-1',
        name: 'Agave',
        bgImage: '/assets/cardfrag/agave.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Restore your senses with fresh air, dewy aloe, leafy greens and watery melon with a base of white woods and musk..',
        notes: ['Citrus', 'Mint', 'Ozone']
      },
      {
        id: 'crisp-2',
        name: 'Lemongrass',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Cool mountain air with fresh greens and white musk.',
        notes: ['Mountain Air', 'Greens', 'Musk']
      },
      {
        id: 'crisp-3',
        name: 'White Tea & Thyme',
        bgImage: '/assets/cardfrag/whitetea.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Salt spray with sea greens and driftwood.',
        notes: ['Salt', 'Sea Greens', 'Driftwood']
      }
    ]
  },
  {
    id: 'lux',
    name: 'Lux & Sophisticated',
    image: '/assets/fragrance/Lux & Sophisticated.png',
    points: ['Extravagance', 'Opulence', 'Refinement'],
    fragrances: [
      {
        id: 'lux-1',
        name: 'Royal Amber',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Rich amber with saffron and precious woods.',
        notes: ['Amber', 'Saffron', 'Precious Woods'],
        intensity: 'Strong'
      },
      {
        id: 'lux-2',
        name: 'Velvet Rose',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Luxurious rose with oud and vanilla bean.',
        notes: ['Rose', 'Oud', 'Vanilla Bean'],
        intensity: 'Strong'
      },
      {
        id: 'lux-3',
        name: 'Platinum Musk',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Sophisticated musk with white flowers and cashmere.',
        notes: ['Musk', 'White Flowers', 'Cashmere'],
        intensity: 'Medium'
      }
    ]
  },
  {
    id: 'passionate',
    name: 'Passionate & Sensual',
    image: '/assets/fragrance/Passionate & Sensual.png',
    points: ['Seductive', 'Lavish', 'Irresistible'],
    fragrances: [
      {
        id: 'passionate-1',
        name: 'Midnight Desire',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Dark chocolate with red berries and patchouli.',
        notes: ['Chocolate', 'Berries', 'Patchouli'],
        intensity: 'Strong'
      },
      {
        id: 'passionate-2',
        name: 'Velvet Vanilla',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Creamy vanilla with exotic spices and sandalwood.',
        notes: ['Vanilla', 'Spices', 'Sandalwood'],
        intensity: 'Medium'
      },
      {
        id: 'passionate-3',
        name: 'Sensual Musk',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Warm musk with jasmine and amber.',
        notes: ['Musk', 'Jasmine', 'Amber'],
        intensity: 'Medium'
      }
    ]
  },
  {
    id: 'relaxing',
    name: 'Relaxing & Soothing',
    image: '/assets/fragrance/Relaxing & Soothing.png',
    points: ['Calming', 'Peaceful', 'Serene'],
    fragrances: [
      {
        id: 'relaxing-1',
        name: 'Zen Garden',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Bamboo with white tea and soft woods.',
        notes: ['Bamboo', 'White Tea', 'Soft Woods'],
        intensity: 'Light'
      },
      {
        id: 'relaxing-2',
        name: 'Lavender Dreams',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'French lavender with chamomile and vanilla.',
        notes: ['Lavender', 'Chamomile', 'Vanilla'],
        intensity: 'Light'
      },
      {
        id: 'relaxing-3',
        name: 'Ocean Calm',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Sea salt with coconut and white flowers.',
        notes: ['Sea Salt', 'Coconut', 'White Flowers'],
        intensity: 'Light'
      }
    ]
  },
  {
    id: 'savoury',
    name: 'Savoury & Gourmand',
    image: '/assets/fragrance/Savoury & Gourmand.png',
    points: ['Delicious', 'Comforting', 'Indulgent'],
    fragrances: [
      {
        id: 'savoury-1',
        name: 'Vanilla Caramel',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Rich caramel with Madagascar vanilla and brown sugar.',
        notes: ['Caramel', 'Vanilla', 'Brown Sugar'],
        intensity: 'Medium'
      },
      {
        id: 'savoury-2',
        name: 'Chocolate Truffle',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Dark chocolate with hazelnut and cocoa.',
        notes: ['Chocolate', 'Hazelnut', 'Cocoa'],
        intensity: 'Strong'
      },
      {
        id: 'savoury-3',
        name: 'Cinnamon Brioche',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Warm cinnamon with buttery brioche and nutmeg.',
        notes: ['Cinnamon', 'Brioche', 'Nutmeg'],
        intensity: 'Medium'
      }
    ]
  },
  {
    id: 'timeless',
    name: 'Timeless & Floral',
    image: '/assets/fragrance/Timeless & Floral.png',
    points: ['Classic', 'Elegant', 'Enduring'],
    fragrances: [
      {
        id: 'timeless-1',
        name: 'Rose de Mai',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Classic rose with jasmine and sandalwood.',
        notes: ['Rose', 'Jasmine', 'Sandalwood'],
        intensity: 'Medium'
      },
      {
        id: 'timeless-2',
        name: 'White Lily',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Pure lily with white musk and orange blossom.',
        notes: ['Lily', 'White Musk', 'Orange Blossom'],
        intensity: 'Light'
      },
      {
        id: 'timeless-3',
        name: 'Tuberose Noir',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Rich tuberose with gardenia and vanilla.',
        notes: ['Tuberose', 'Gardenia', 'Vanilla'],
        intensity: 'Strong'
      }
    ]
  },
  {
    id: 'voyage',
    name: 'Voyage & Escape',
    image: '/assets/fragrance/Voyage & Escape.png',
    points: ['Exotic', 'Adventurous', 'Escapist'],
    fragrances: [
      {
        id: 'voyage-1',
        name: 'Tropical Escape',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Coconut with tropical flowers and sea breeze.',
        notes: ['Coconut', 'Tropical Flowers', 'Sea Breeze'],
        intensity: 'Light'
      },
      {
        id: 'voyage-2',
        name: 'Moroccan Spice',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Saffron with cardamom and amber.',
        notes: ['Saffron', 'Cardamom', 'Amber'],
        intensity: 'Medium'
      },
      {
        id: 'voyage-3',
        name: 'Bamboo Forest',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Bamboo leaves with green tea and moss.',
        notes: ['Bamboo', 'Green Tea', 'Moss'],
        intensity: 'Light'
      }
    ]
  },
  {
    id: 'warm',
    name: 'Warm & Inviting',
    image: '/assets/fragrance/Warm & Inviting.png',
    points: ['Cozy', 'Comforting', 'Inviting'],
    fragrances: [
      {
        id: 'warm-1',
        name: 'Spiced Woods',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Cinnamon with cedarwood and vanilla.',
        notes: ['Cinnamon', 'Cedarwood', 'Vanilla'],
        intensity: 'Medium'
      },
      {
        id: 'warm-2',
        name: 'Honey Amber',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Warm honey with amber and benzoin.',
        notes: ['Honey', 'Amber', 'Benzoin'],
        intensity: 'Strong'
      },
      {
        id: 'warm-3',
        name: 'Cashmere Musk',
        bgImage: '/assets/cardfrag/Lemongrass.png',
        image: '/assets/objek/White Tea and Thyme.png',
        description: 'Soft cashmere with white musk and sandalwood.',
        notes: ['Cashmere', 'White Musk', 'Sandalwood'],
        intensity: 'Medium'
      }
    ]
  }
];

// Intensity badge colors
const getIntensityColor = (intensity: string) => {
  switch (intensity) {
    case 'Light':
      return 'bg-blue-100 text-blue-800';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-red-100 text-red-800';
  }
};

export const Fragrances: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardsSectionRef = useRef<HTMLDivElement>(null);

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      // If same category is clicked again, hide the section
      setIsVisible(false);
      setTimeout(() => {
        setSelectedCategory(null);
      }, 300); // Match the transition duration
    } else {
      // Show the new category
      setSelectedCategory(categoryId);
      setIsVisible(true);
      
      // Scroll to the cards section with smooth behavior
      setTimeout(() => {
        if (cardsSectionRef.current) {
          cardsSectionRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  // Get selected category data
  const selectedCategoryData = fragranceCategories.find(
    category => category.id === selectedCategory
  );

  return (
    <div className="pt-[180px] min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Fragrance choices & Exclusives
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Every brand has a story to tell, and fragrance offers a unique way to bring that story to life. Experience the endless possibilities of fragrance and discover a new way to tell your brand story
            650 active fragrances with 350 signature fragrances and more than 2.400 fragrances to choose from.
          </p>
        </div>

        {/* Category Buttons Grid */}
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
                className={`flex flex-col items-center transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'scale-110'
                    : 'hover:scale-105'
                }`}
                aria-pressed={selectedCategory === category.id}
                tabIndex={0}
              >
                {/* Circular Icon Button */}
                <div className={`
                  w-24 h-24 rounded-full flex items-center justify-center text-3xl
                  shadow-lg transition-all duration-300 mb-3
                  ${
                    selectedCategory === category.id
                      ? 'bg-primary border-4 border-accent shadow-xl'
                      : 'bg-white border-4 border-primary/20 hover:border-primary hover:shadow-xl'
                  }
                `}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>
                {/* Category Label */}
                <span className="text-center text-sm font-medium text-primary">
                  {category.name}
                </span>
              </button>
              
              {/* Dropdown on hover */}
              <div className="absolute left-full top-0 ml-4 w-35 bg-white rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <ul className="space-y-2">
                  {category.points.map((point, index) => (
                    <li key={index} className="text-primary font-medium">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Fragrance Cards Section */}
        <div
            ref={cardsSectionRef}
            className={`
              transition-[max-height,opacity] duration-700 ease-in-out
              ${isVisible ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'}
            `}
            style={{ maxHeight: isVisible ? 4000 : 0 }}  // big enough to fit all cards
                    >
          {selectedCategoryData && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                {selectedCategoryData.name} Fragrances
              </h2>
              
{/* Fragrance Cards */}
<div className="space-y-8">
  {selectedCategoryData.fragrances.map((fragrance, index) => {
    // If you haven't added bgImage on each fragrance yet,
    // this fallback will use a single default image:
    const bg = fragrance.bgImage ?? "/assets/cardfrag/Lemongrass.png";

    return (
      <div
        key={fragrance.id}
        className="relative w-full max-w-6xl mx-auto min-h-[320px] rounded-2xl overflow-hidden
                   bg-cover bg-center bg-no-repeat shadow-md transition-all duration-300 hover:shadow-lg
                   animate-fadeInSlide p-10"
        style={{
          animationDelay: `${index * 150}ms`,
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* ONE overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-black/25" />

{/* Card content (INSIDE the card) */}
<div className="relative z-10">
  <div className="flex flex-col md:flex-row md:items-center gap-6">
    
    {/* Left: Name */}
    <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
      <h3 className="text-7xl font-extrabold text-light text-center md:text-left leading-tight tracking-tight drop-shadow-lg">
        {fragrance.name}
      </h3>
    </div>

    {/* Middle: Object/Image */}
    <div className="md:w-2/4 flex items-center justify-center mb-4 md:mb-0">
      <img
        src={fragrance.image}
        alt={`${fragrance.name} fragrance`}
        className="w-96 h-96 object-contain drop-shadow-md"
      />
    </div>

    {/* Right: Info */}
    <div className="md:w-1/4 md:pl-6">
      <p className="text-3xl text-light mb-6 text-center md:text-left leading-relaxed tracking-wide drop-shadow-sm">
        {fragrance.description}
      </p>

      <h4 className="font-semibold text-4xl text-light mb-4 text-center md:text-left">
        Notes:
      </h4>
      <ul className="space-y-3">
        {fragrance.notes.map((note, i) => (
          <li
            key={i}
            className="flex items-center justify-center md:justify-start"
          >
            <span className="w-3.5 h-3.5 rounded-full bg-primary mr-3" />
            <span className="text-3xl text-light">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
      </div>
    );
  })}
</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

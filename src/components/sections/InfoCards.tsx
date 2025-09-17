import React from 'react';

interface CardItemWithLogo {
  id: number;
  description: string;
  logo: string;
  title?: string;
}

interface CardItemWithText {
  id: number;
  description: string;
  logoText: string;
  title?: string;
}

type CardItem = CardItemWithLogo | CardItemWithText;

interface Card {
  id: number;
  title: string;
  logo: string;
  items: CardItem[];
}

export const InfoCards: React.FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Scent makes an emotional impact",
      logo: "/assets/infocard/smell.png",
      items: [
        {
          id: 2,
          description: "Studies show a 40% increase in mood when exposed to a please fragrance.",
          logoText: "40%"
        },
        {
          id: 3,
          description: "Of our emotions generated everyday are due to what we smell, not by what we see.",
          logoText: "75%"
        },
        {
          id: 4,
          description: "people are 100x more likely to remember what they smell vs. what they.",
          logoText: "100x"
        },
      ]
    },
    {
      id: 5,
      title: "The experience of scent drives customer behavior",
      logo: "/assets/infocard/behavior.png",
      items: [
        {
          id: 6,
          description: "of consumers were significantly more inclined to purchase.",
          logoText: "60%"
        },
        {
          id: 7,
          description: "more products purchase.",
          logoText: "22%"
        },
        {
          id: 8,
          description: "increased linger time.",
          logoText: "18%"
        },
      ]
    }
  ];

  const isTextItem = (item: CardItem): item is CardItemWithText => {
    return (item as CardItemWithText).logoText !== undefined;
  };

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-lg"
              >
                <div className="flex flex-col items-center p-4 border-b border-gray-200">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {card.title}
                  </h3>
                </div>
                <div className="p-4">
                  {card.items.map((item) => (
                    <div key={item.id} className="mb-4 last:mb-0">
                      <div className="flex flex-col items-center text-center mb-3">
                        {isTextItem(item) ? (
                          <div className="w-16 h-16 flex items-center justify-center mb-2">
                            <span className="text-2xl font-bold text-primary">{item.logoText}</span>
                          </div>
                        ) : (
                          <img
                            src={item.logo}
                            alt={item.title || ""}
                            className="w-16 h-16 object-contain mb-2"
                          />
                        )}
                        {item.title && (
                          <h4 className="text-md font-semibold text-gray-800">
                            {item.title}
                          </h4>
                        )}
                      </div>
                      <p className={`${[2, 3, 4, 6, 7, 8].includes(item.id) ? 'text-base' : 'text-sm'} text-gray-600 text-center`}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute -inset-6 bg-primary/10 rounded-3xl rotate-3 transform-gpu blur-2xl opacity-75"></div>
              <img
                src="/assets/homepage/pioneer.jpg"
                alt="ScentAir Pioneer"
                className="relative w-full max-w-7xl h-auto rounded-3xl shadow-2xl border-[12px] border-white"
              />
            </div>
            <div className="max-w-4xl backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
              <p className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed">
                ScentAir is the <span className="font-bold text-primary">PIONEER</span> in environmental scenting, as it was first created in 1994 by a Walt Disney's imagineer to present the 5<sup className="text-primary font-bold text-2xl">th</sup> dimensional experience for its visitors
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-32 h-1.5 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute -inset-6 bg-primary/10 rounded-3xl rotate-3 transform-gpu blur-2xl opacity-75"></div>
              <img
                src="/assets/homepage/prestigious.jpg"
                alt="ScentAir Prestigious"
                className="relative w-full max-w-7xl h-auto rounded-3xl shadow-2xl border-[12px] border-white"
              />
            </div>
            <div className="max-w-4xl backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
              <p className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed">
                Nearly all the famous and top tiers international hotel chains, leading corporations, airports, as well as government institutions are proudly using the products and services of ScentAir to enhance their corporate identity and customer experience.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-32 h-1.5 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

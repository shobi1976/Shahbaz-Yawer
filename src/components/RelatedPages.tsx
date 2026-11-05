import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEADER_CARDS_DATA, AnimatedCardVisual } from './HeaderCardsShowcase';
import { getDarkNeonCardBackground } from '../data/rulesData';
import { sound } from '../utils/audio';

interface RelatedPagesProps {
  currentPath: string;
}

export const RelatedPages: React.FC<RelatedPagesProps> = ({ currentPath }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const otherPages = HEADER_CARDS_DATA.filter((p) => p.to !== currentPath);

  return (
    <section className="cv-auto mt-20 pt-12 border-t border-[#0297DE]/25">
      <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-85" />
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-white uppercase tracking-wider">
            Explore Pages
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {otherPages.map((card) => {
          const isHovered = hoveredId === card.id;

          return (
            <Link
              key={card.to}
              to={card.to}
              onMouseEnter={() => {
                setHoveredId(card.id);
                sound.playHover(340 + card.id * 25);
              }}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => sound.playClick(450)}
              style={{
                background: isHovered
                  ? getDarkNeonCardBackground(card.surfaceId, true)
                  : 'rgba(2, 7, 10, 0.80)',
                borderColor: isHovered ? card.hex : 'rgba(2, 151, 222, 0.34)',
                boxShadow: isHovered
                  ? `0 0 28px ${card.hex}, 0 0 54px ${card.hex}70, inset 0 0 20px ${card.hex}45`
                  : '0 14px 32px -10px rgba(0, 0, 0, 0.72), inset 0 1px 0 rgba(2, 151, 222, 0.12)',
              }}
              className={`group relative p-3 rounded-2xl border-2 backdrop-blur-md shadow-2xl ${
                isHovered ? 'text-white' : 'text-slate-100'
              } transition-all duration-200 flex flex-col justify-between overflow-hidden transform hover:-translate-y-1 text-center`}
            >
              <div
                style={
                  isHovered
                    ? { backgroundColor: card.hex, boxShadow: `0 0 12px ${card.hex}` }
                    : undefined
                }
                className={`absolute top-0 left-0 right-0 transition-all duration-200 ${
                  isHovered ? 'h-1 opacity-100' : 'h-0 opacity-0'
                }`}
              />

              <div className="relative z-10">
                <AnimatedCardVisual card={card} isHovered={isHovered} compact />

                <h3
                  className={`font-['Chakra_Petch'] font-black text-sm transition-colors truncate ${
                    isHovered ? 'text-white' : 'text-slate-100'
                  }`}
                >
                  {card.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

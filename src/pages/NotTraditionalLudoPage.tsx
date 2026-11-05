import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GitCompare } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { NOT_TRADITIONAL_LUDO_CARDS } from '../components/VisitorGuidance';
import { sound } from '../utils/audio';

export const NotTraditionalLudoPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="Not Traditional Ludo | Ludo Dethroned 5 Way & 4 Way Two Dice"
        description="The board looks familiar, but Ludo Dethroned 3D plays very differently from traditional Ludo: five players, two dice, compulsory captures, win on the coloured path, Lucky 7, and Lucky Wish."
        canonicalPath="/not-traditional-ludo"
      />

      {/* Unified Midnight Black Frosted Glass Header Card */}
      <div className="text-center mb-10 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-4">
            <GitCompare className="w-4 h-4 text-[#0297DE] shrink-0" />
            <span>TRADITIONAL LUDO VS LUDO DETHRONED 3D</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-white tracking-tight leading-tight">
            Not traditional <span className="text-[#FC734D]">Ludo</span>
          </h1>

          <p className="text-slate-200 font-medium text-base sm:text-lg mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            The board looks familiar, but the game plays very differently. Traditional Ludo has many house rules, so this compares the usual ones.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/how-to-play"
              onClick={() => sound.playClick(500)}
              className="min-h-[48px] px-6 py-3 rounded-2xl bg-[#FC734D] hover:bg-[#ff8866] text-[#02070A] font-black font-['Chakra_Petch'] text-base tracking-wide shadow-[0_0_20px_rgba(252,115,77,0.48)] transition-all cursor-pointer inline-flex items-center gap-2.5 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE]"
            >
              <BookOpen className="w-5 h-5 shrink-0" />
              <span>Read How to Play</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* 8 Comparison Cards */}
      <section aria-label="Differences from traditional Ludo" className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {NOT_TRADITIONAL_LUDO_CARDS.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#0297DE] transition-all duration-300 shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-start group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <h2 className="text-white text-lg sm:text-xl font-['Chakra_Petch'] font-black tracking-wide mb-2.5 leading-snug group-hover:text-[#FC734D] transition-colors">
                  {card.title}
                </h2>
                <p className="text-base text-slate-200 font-['Outfit'] leading-relaxed font-medium">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/not-traditional-ludo" />
    </div>
  );
};

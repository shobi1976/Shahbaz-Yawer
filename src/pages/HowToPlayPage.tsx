import React from 'react';
import { BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { HOW_TO_PLAY_SECTIONS } from '../data/canonicalContent';
import { sound } from '../utils/audio';

interface HowToPlayPageProps {
  onOpenTutorial: () => void;
}

export const HowToPlayPage: React.FC<HowToPlayPageProps> = ({ onOpenTutorial }) => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="How to Play Ludo Dethroned 5 Way & 4 Way Two Dice | 3D Ludo-style strategy game"
        description="Learn how to play Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game. Master two-dice split movement, compulsory captures, safe star squares, pairs, and Lucky 7."
        canonicalPath="/how-to-play"
      />

      {/* Header & Single H1 — Unified Frosted Glass Header Card */}
      <div className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-[#0077be]/80 text-[#0077be] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <BookOpen className="w-4 h-4 text-[#0077be]" />
            <span>OFFICIAL RULEBOOK • STEP-BY-STEP TUTORIAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
            How to Play <span className="text-[#0077be]" style={{ color: '#0077be' }}>Ludo Dethroned 5 Way & 4 Way Two Dice</span>
          </h1>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Ludo Dethroned 5 Way & 4 Way Two Dice is a 5 Way & 4 Way (five-player and four-player), 3D Ludo-style strategy game played with two dice (also popular as 2 dice, double dice, or 2 dies). Each player has four tokens. The first player to get all four tokens onto their coloured home path wins, and the match ends as soon as someone wins. Think of it as a T20 match rather than a Test match: the match is over once a winner is decided. Matches can include AI opponents.
          </p>

          {/* Action Button: Open Interactive Slide Guide Modal */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                sound.playClick(500);
                onOpenTutorial();
              }}
              className="px-6 py-3 rounded-2xl bg-[#0077be] hover:bg-[#00609a] text-white font-black font-['Chakra_Petch'] text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(0,119,190,0.4)] transition-all cursor-pointer flex items-center gap-2.5 transform hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Visual Slide Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Complete Step-by-Step Sections Grid (Frosted Glass — Landing Page Shows Through) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {HOW_TO_PLAY_SECTIONS.map((sec) => (
          <div 
            key={sec.num}
            className="p-6 sm:p-7 rounded-2xl bg-white/24 hover:bg-white/38 border-2 border-white/65 hover:border-[#0077be] transition-all duration-300 shadow-xl backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center gap-2.5 mb-3 font-mono text-xs font-bold text-[#0077be]">
              <span className="px-2.5 py-0.5 rounded-lg bg-[#0077be] font-black text-white shadow-xs">
                {sec.num}
              </span>
              <span className="text-slate-950 text-base sm:text-lg font-['Chakra_Petch'] font-black">
                {sec.title}
              </span>
            </div>
            <ul className="relative z-10 space-y-2 text-xs sm:text-sm text-slate-900 font-['Outfit'] leading-relaxed font-medium">
              {sec.items.map((it, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#0077be] mt-1 shrink-0 font-bold">•</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/how-to-play" />
    </div>
  );
};

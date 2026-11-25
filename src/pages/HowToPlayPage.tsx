import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { TUTORIAL_SLIDES } from '../components/HowToPlayModal';
import { HOW_TO_PLAY_SECTIONS } from '../data/canonicalContent';
import { sound } from '../utils/audio';

interface HowToPlayPageProps {
  onOpenTutorial: () => void;
}

export const HowToPlayPage: React.FC<HowToPlayPageProps> = ({ onOpenTutorial }) => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="How to Play Ludo Dethroned 5 Way & 4 Way Two Dice | 12-Card Official Play Guide"
        description="Learn how to play Ludo Dethroned 5 Way & 4 Way Two Dice with our 12-card official play guide in English and Roman Urdu: two-dice movement, compulsory captures, safe places, pairs, and Lucky 7."
        canonicalPath="/how-to-play"
      />

      {/* Header & Single H1 — Unified Midnight Black Frosted Glass Header Card */}
      <div className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/60 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <BookOpen className="w-4 h-4 text-[#0297DE]" />
            <span>OFFICIAL PLAY GUIDE • 12 SEPARATE GUIDE CARDS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-white uppercase tracking-tight leading-tight">
            How to Play <span className="text-[#FC734D]">Ludo Dethroned 5 Way & 4 Way Two Dice</span>
          </h1>

          {/* Intro copy & Core Battleground & Vibe */}
          <div className="mt-5 space-y-4">
            <p className="text-slate-100 font-semibold text-base sm:text-lg leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
              Ludo Dethroned is an intense, nail-biting 3D strategy board game designed for 5 players (5-Way) and 4 players (4-Way), played using two dice (double dice).
            </p>

            <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
              Set in the same legendary arenas and competing empires you know, this is traditional Ludo turned upside down with brutal, high-stakes dethrone rules.
            </p>

            <div className="pt-5 border-t border-[#0297DE]/20 text-left">
              <h2 className="text-[#FC734D] font-['Chakra_Petch'] font-black text-lg sm:text-xl uppercase tracking-wider text-center mb-4">
                The Core Battleground &amp; Vibe:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#02070A]/85 border border-[#0297DE]/35 hover:border-[#0297DE] transition-all">
                  <h3 className="text-[#0297DE] font-['Chakra_Petch'] font-bold text-sm sm:text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0297DE]" />
                    <span>Nail-Biting Emotion &amp; Leg-Pulling</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-['Outfit'] leading-relaxed">
                    This is full of tension, laughter, and high emotion. It’s not just about running forward—it’s about the pure joy of pulling the leader’s legs right when they think they've won!
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#02070A]/85 border border-[#FC734D]/35 hover:border-[#FC734D] transition-all">
                  <h3 className="text-[#FC734D] font-['Chakra_Petch'] font-bold text-sm sm:text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FC734D]" />
                    <span>Dethrone the Frontrunner</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-['Outfit'] leading-relaxed">
                    To claim ultimate victory, you can't just cruise ahead; you have to outsmart and capture the winner. Once someone rushes toward the finish line, everyone else becomes the ultimate blockades and hunters.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#02070A]/85 border border-[#FC734D]/35 hover:border-[#FC734D] transition-all">
                  <h3 className="text-[#FC734D] font-['Chakra_Petch'] font-bold text-sm sm:text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FC734D]" />
                    <span>Tactical Split-Movement</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-['Outfit'] leading-relaxed">
                    Roll two dice and choose your destiny—combine them for a heavy push or split them across two tokens to corner your rivals.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#02070A]/85 border border-[#0297DE]/35 hover:border-[#0297DE] transition-all">
                  <h3 className="text-[#0297DE] font-['Chakra_Petch'] font-bold text-sm sm:text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0297DE]" />
                    <span>T20 Match Intensity</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-['Outfit'] leading-relaxed">
                    The match ends the immediate second a winner is crowned. It's fast, fierce, and unforgiving—once the crown is taken, the battle is over!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button: Open Interactive Slide Guide Modal */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                sound.playClick(500);
                onOpenTutorial();
              }}
              className="px-6 py-3 rounded-2xl bg-[#FC734D] hover:bg-[#ff8866] text-[#02070A] font-black font-['Chakra_Petch'] text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(252,115,77,0.48)] transition-all cursor-pointer flex items-center gap-2.5 transform hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open 12-Slide Visual Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* 12 Separate Play Guide Cards (Guide 1 to Guide 12 — English + Roman Urdu) */}
      <div className="mb-6 flex items-center justify-between gap-3 px-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02070A]/85 backdrop-blur-md border border-[#FC734D]/75 text-[#FC734D] text-xs font-mono font-black tracking-widest uppercase shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#0297DE]" />
          <span>COMPLETE 12 PLAY GUIDES (GUIDE 1 – GUIDE 12)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {TUTORIAL_SLIDES.map((guide) => (
          <div
            key={guide.id}
            className="p-6 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#0297DE] transition-all duration-300 shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              {/* Top Row: Silver Guide Badge + Silver Icon Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="dice-silver-badge px-3 py-1 rounded-lg font-mono text-[11px] font-black tracking-wider uppercase">
                  GUIDE {guide.id}
                </span>
                <span
                  className="dice-silver-badge w-10 h-10 rounded-xl flex items-center justify-center text-lg select-none"
                  aria-hidden="true"
                >
                  {guide.icon}
                </span>
              </div>

              {/* Guide Title */}
              <h2 className="text-white text-lg sm:text-xl font-['Chakra_Petch'] font-black uppercase tracking-wide mb-2.5 group-hover:text-[#FC734D] transition-colors">
                {guide.title}
              </h2>

              {/* English Guide Explanation */}
              <p className="text-xs sm:text-sm text-slate-200 font-['Outfit'] leading-relaxed font-medium mb-3.5">
                {guide.desc}
              </p>
            </div>

            {/* Roman Urdu Guide Explanation */}
            <div
              lang="ur-Latn"
              dir="ltr"
              className="relative z-10 mt-auto p-3 rounded-xl bg-[#05121d]/85 border border-[#0297DE]/30 text-xs text-slate-100 font-['Outfit'] font-bold leading-relaxed"
            >
              <span className="block text-[10px] font-mono uppercase tracking-wider text-[#0297DE] mb-1">
                Roman Urdu Guide
              </span>
              {guide.urduDesc}
            </div>
          </div>
        ))}
      </div>

      {/* Step-by-Step Match Flow, Examples & Checklist */}
      <div className="mb-6 flex items-center justify-between gap-3 px-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02070A]/85 backdrop-blur-md border border-[#0297DE]/75 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase shadow-xs">
          <BookOpen className="w-3.5 h-3.5" />
          <span>STEP-BY-STEP MATCH WALKTHROUGH & EXAMPLES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {HOW_TO_PLAY_SECTIONS.map((sec) => (
          <div 
            key={sec.num}
            className={`p-6 sm:p-7 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#0297DE] transition-all duration-300 shadow-2xl backdrop-blur-md relative overflow-hidden group ${
              sec.num === 'STEP 4' ? 'md:col-span-2' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center gap-2.5 mb-3 font-mono text-xs font-bold text-[#0297DE]">
              <span className="px-2.5 py-0.5 rounded-lg bg-[#FC734D] font-black text-[#02070A] shadow-xs">
                {sec.num}
              </span>
              <span className="text-white text-base sm:text-lg font-['Chakra_Petch'] font-black">
                {sec.title}
              </span>
            </div>
            <ul className="relative z-10 space-y-2 text-xs sm:text-sm text-slate-200 font-['Outfit'] leading-relaxed font-medium">
              {sec.items.map((it, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#0297DE] mt-1 shrink-0 font-bold">•</span>
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


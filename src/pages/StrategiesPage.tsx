import React from 'react';
import { Sparkles, Target } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { CANONICAL_STRATEGIES, CAPTAIN_STRATEGY_SECTION } from '../data/canonicalContent';

export const StrategiesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="Ludo Dethroned 5 Way & 4 Way Two Dice Strategy & Tactics | 3D Ludo-style strategy game"
        description="Master tactical strategies for Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game. Learn opening plays, safe-square pair defense, turn-timer pressure, and targeting the match leader."
        canonicalPath="/strategies"
      />

      {/* Header & Single H1 — Unified Midnight Black Frosted Glass Header Card */}
      <div className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#FC734D]/65 text-[#FC734D] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#FC734D]" />
            <span>TACTICAL DOCTRINES • SECTION 6</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-white uppercase tracking-tight leading-tight">
            Ludo Dethroned 5 Way & 4 Way Two Dice <span className="text-[#FC734D]">Strategy & Tactics</span>
          </h1>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            These tactics follow directly from the rules. The dice decide what is possible on a turn, and your choices decide what you do with it: which token to move, when to capture and when to protect your tokens.
          </p>
        </div>
      </div>

      {/* Strategy Grid (Midnight Black Frosted Glass) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {CANONICAL_STRATEGIES.map((strat) => (
          <div 
            key={strat.id}
            className="p-6 sm:p-7 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#0297DE] transition-all duration-300 shadow-2xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3 font-mono text-xs font-bold">
                <span className="px-2.5 py-0.5 rounded-lg bg-[#FC734D] font-black text-[#02070A] shadow-xs">
                  {strat.num}
                </span>
                <span className="text-white text-base sm:text-lg font-['Chakra_Petch'] font-black">
                  {strat.title}
                </span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200 font-['Outfit'] leading-relaxed font-medium">
                {strat.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-5 pt-3 border-t border-[#0297DE]/25 flex items-center gap-2 text-[11px] font-mono text-slate-400 font-black">
              <Target className="w-3.5 h-3.5 text-[#0297DE]" />
              <span>DOCTRINE {strat.num}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Play like a captain: when to defend and when to attack — Added at the end in existing style */}
      <section
        id={CAPTAIN_STRATEGY_SECTION.id}
        aria-labelledby="captain-strategy-heading"
        className="mb-16 p-6 sm:p-8 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#FC734D] transition-all duration-300 shadow-2xl backdrop-blur-md relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FC734D]/12 via-transparent to-[#0297DE]/10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 space-y-5">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold">
            <span className="px-2.5 py-0.5 rounded-lg bg-[#FC734D] font-black text-[#02070A] shadow-xs">
              {CAPTAIN_STRATEGY_SECTION.num}
            </span>
            <h2
              id="captain-strategy-heading"
              className="text-white text-lg sm:text-2xl font-['Chakra_Petch'] font-black"
            >
              {CAPTAIN_STRATEGY_SECTION.title}
            </h2>
          </div>

          <p className="text-base text-slate-200 font-['Outfit'] leading-relaxed font-medium">
            {CAPTAIN_STRATEGY_SECTION.intro}
          </p>

          <p className="text-base text-slate-200 font-['Outfit'] leading-relaxed font-medium">
            {CAPTAIN_STRATEGY_SECTION.readingRisk}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-1">
            <div className="p-5 rounded-2xl bg-[#05121d]/85 border border-[#0297DE]/35 space-y-3">
              <h3 className="text-base sm:text-lg font-black font-['Chakra_Petch'] text-[#0297DE]">
                {CAPTAIN_STRATEGY_SECTION.defendHeading}
              </h3>
              <ul className="space-y-2.5 text-base text-slate-200 font-['Outfit'] leading-relaxed font-medium">
                {CAPTAIN_STRATEGY_SECTION.defendItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#0297DE] font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-base text-slate-200 font-['Outfit'] leading-relaxed font-medium border-t border-[#0297DE]/25">
                {CAPTAIN_STRATEGY_SECTION.defendNote}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#05121d]/85 border border-[#FC734D]/35 space-y-3">
              <h3 className="text-base sm:text-lg font-black font-['Chakra_Petch'] text-[#FC734D]">
                {CAPTAIN_STRATEGY_SECTION.attackHeading}
              </h3>
              <ul className="space-y-2.5 text-base text-slate-200 font-['Outfit'] leading-relaxed font-medium">
                {CAPTAIN_STRATEGY_SECTION.attackItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#FC734D] font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-base text-slate-100 font-['Outfit'] leading-relaxed font-medium pt-1">
            {CAPTAIN_STRATEGY_SECTION.closing}
          </p>
        </div>

        <div className="relative z-10 mt-6 pt-3 border-t border-[#0297DE]/25 flex items-center gap-2 text-[11px] font-mono text-slate-400 font-black">
          <Target className="w-3.5 h-3.5 text-[#FC734D]" />
          <span>DOCTRINE {CAPTAIN_STRATEGY_SECTION.num}</span>
        </div>
      </section>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/strategies" />
    </div>
  );
};

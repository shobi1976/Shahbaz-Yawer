import React from 'react';
import { Sparkles, Target } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { CANONICAL_STRATEGIES } from '../data/canonicalContent';

export const StrategiesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="Ludo Dethroned 5 Way & 4 Way Two Dice Strategy & Tactics | 3D Ludo-style strategy game"
        description="Master tactical strategies for Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game. Learn opening plays, safe-square pair defense, turn-timer pressure, and targeting the match leader."
        canonicalPath="/strategies"
      />

      {/* Header & Single H1 — Unified Frosted Glass Header Card */}
      <div className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-amber-500/80 text-amber-800 text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>TACTICAL DOCTRINES • SECTION 6</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
            Ludo Dethroned 5 Way & 4 Way Two Dice <span className="text-amber-600">Strategy & Tactics</span>
          </h1>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            These tactics follow directly from the rules. The dice decide what is possible on a turn, and your choices decide what you do with it: which token to move, when to capture and when to protect your tokens.
          </p>
        </div>
      </div>

      {/* Strategy Grid (Frosted Glass — Landing Page Shows Through) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {CANONICAL_STRATEGIES.map((strat) => (
          <div 
            key={strat.id}
            className="p-6 sm:p-7 rounded-2xl bg-white/24 hover:bg-white/38 border-2 border-white/65 hover:border-amber-500 transition-all duration-300 shadow-xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3 font-mono text-xs font-bold">
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-400 font-black text-black shadow-xs">
                  {strat.num}
                </span>
                <span className="text-slate-950 text-base sm:text-lg font-['Chakra_Petch'] font-black">
                  {strat.title}
                </span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-900 font-['Outfit'] leading-relaxed font-medium">
                {strat.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-5 pt-3 border-t border-white/60 flex items-center gap-2 text-[11px] font-mono text-slate-800 font-black">
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span>DOCTRINE {strat.num}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/strategies" />
    </div>
  );
};

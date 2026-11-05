import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RuleCardGrid } from '../components/RuleCardGrid';
import { RelatedPages } from '../components/RelatedPages';
import { RuleCard } from '../types';

interface RulesPageProps {
  onHoverRule?: (color: string | null) => void;
  onSelectRule: (rule: RuleCard) => void;
}

export const RulesPage: React.FC<RulesPageProps> = ({ onHoverRule, onSelectRule }) => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="The 12 Canonical Rules of Ludo Dethroned 5 Way & 4 Way Two Dice | 3D Ludo-style strategy game"
        description="The 12 canonical rules of Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game confirmed by the game's creator. Learn the 5 Way & 4 Way board, two dice, pairs, missed capture penalty, and Lucky 7."
        canonicalPath="/rules"
      />

      {/* Header & Single H1 — Unified Midnight Black Frosted Glass Header Card */}
      <div className="text-center mb-10 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/60 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <ShieldAlert className="w-4 h-4 text-[#0297DE]" />
            <span>CANONICAL CODEX • SECTION 5</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-white uppercase tracking-tight leading-tight">
            The 12 Canonical Rules of <span className="text-[#FC734D]">Ludo Dethroned 5 Way & 4 Way Two Dice</span>
          </h1>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Ludo Dethroned 5 Way & 4 Way Two Dice is governed by 12 canonical rules confirmed by the game’s creator. Master the 5 Way & 4 Way board, dual-dice movement, Lucky 7 boosts, pairs, and the compulsory missed capture penalty.
          </p>
        </div>
      </div>

      {/* The 12 Interactive Rule Cards */}
      <RuleCardGrid
        onHoverRule={onHoverRule}
        onSelectRule={onSelectRule}
      />

      {/* Related Pages Block */}
      <RelatedPages currentPath="/rules" />
    </div>
  );
};

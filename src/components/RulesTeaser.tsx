import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';
import { getDarkNeonCardBackground } from '../data/rulesData';

const TEASER_RULES = [
  { id: 1, label: 'The Goal', hex: '#ffb703' },
  { id: 2, label: 'Two Dice', hex: '#00ff66' },
  { id: 7, label: 'Missed Capture', hex: '#ff007f' },
  { id: 9, label: 'Lucky 7 Surge', hex: '#ffe600' },
] as const;

export const RulesTeaser: React.FC = () => {
  const [hoveredRuleId, setHoveredRuleId] = useState<number | null>(null);

  return (
    <section id="rules-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/35 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        {/* Specular Midnight + Electric Blue & Cantaloupe Sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-90" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#02070A]/85 backdrop-blur-md border border-[#0297DE]/70 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-sm">
              <ShieldAlert className="w-4 h-4 text-[#FC734D]" />
              <span>12 CANONICAL RULES • CORE CODEX</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white uppercase tracking-tight leading-tight">
              Master the 12 Canonical Rules of <span className="text-[#FC734D]">Ludo Dethroned 5 Way & 4 Way Two Dice</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] font-medium">
              Played on a 3D board with 3D tokens and animated 3D dice.
            </p>

            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] font-medium">
              Ludo Dethroned 5 Way & 4 Way Two Dice is governed by 12 canonical rules confirmed by the game's creator. Master the 5 Way & 4 Way board, dual-dice split movement, Lucky 7 boosts, pairs, and compulsory missed capture penalties.
            </p>

            {/* Quick Rule Highlights — Colorless Midnight Black Glass at Rest, Dark Neon on Hover */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 font-mono text-xs">
              {TEASER_RULES.map((item) => {
                const isHovered = hoveredRuleId === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => {
                      setHoveredRuleId(item.id);
                      sound.playHover(360 + item.id * 20);
                    }}
                    onMouseLeave={() => setHoveredRuleId(null)}
                    style={{
                      background: isHovered
                        ? getDarkNeonCardBackground(item.id, true)
                        : 'rgba(2, 7, 10, 0.82)',
                      borderColor: isHovered ? item.hex : 'rgba(2, 151, 222, 0.35)',
                      boxShadow: isHovered
                        ? `0 0 22px ${item.hex}, 0 0 40px ${item.hex}65, inset 0 0 14px ${item.hex}40`
                        : '0 8px 20px -6px rgba(0, 0, 0, 0.72), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                    }}
                    className="p-2.5 rounded-xl border-2 backdrop-blur-md shadow-md text-center transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <span className="dice-silver-badge inline-block px-2 py-0.5 rounded font-black text-[11px] mb-1">
                      Rule {item.id}
                    </span>
                    <span
                      className={`text-[11px] font-bold block transition-colors ${
                        isHovered ? 'text-white' : 'text-slate-100'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Link to Dedicated /rules Page — Cantaloupe Orange Primary */}
          <div className="flex flex-col items-center lg:items-end shrink-0">
            <Link
              to="/rules"
              onClick={() => sound.playClick(500)}
              className="px-8 py-4 rounded-2xl bg-[#FC734D] hover:bg-[#ff8866] border border-[#ff9d80]/70 text-[#02070A] font-black font-['Chakra_Petch'] text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(252,115,77,0.48)] transition-all cursor-pointer flex items-center gap-3 transform hover:scale-105"
            >
              <span>Explore All 12 Canonical Rules</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <span className="text-slate-400 font-mono font-bold text-xs mt-3">
              Full cards, interactive filters & modal rulebook
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

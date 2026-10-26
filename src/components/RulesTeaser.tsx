import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

export const RulesTeaser: React.FC = () => {
  return (
    <section id="rules-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="p-8 sm:p-12 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        {/* Specular Frosted Sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-md border border-[#0077be]/80 text-[#0077be] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-sm">
              <ShieldAlert className="w-4 h-4 text-[#0077be]" style={{ color: '#0077be' }} />
              <span>12 CANONICAL RULES • CORE CODEX</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
              Master the 12 Canonical Rules of <span className="text-[#0077be]" style={{ color: '#0077be' }}>Ludo Dethroned 5 Way & 4 Way Two Dice</span>
            </h2>

            <p className="text-slate-800 text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] font-medium">
              Played on a 3D board with 3D tokens and animated 3D dice.
            </p>

            <p className="text-slate-800 text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] font-medium">
              Ludo Dethroned 5 Way & 4 Way Two Dice is governed by 12 canonical rules confirmed by the game's creator. Master the 5 Way & 4 Way board, dual-dice split movement, Lucky 7 boosts, pairs, and compulsory missed capture penalties.
            </p>

            {/* Quick Rule Highlights — Frosted Glass + Black Font in Card-Colored Box */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-white/25 hover:bg-white/40 border border-white/70 backdrop-blur-md shadow-sm text-center transition-colors">
                <span className="inline-block px-2 py-0.5 rounded font-black text-[11px] mb-1" style={{ backgroundColor: '#eab308', color: '#000000' }}>Rule 1</span>
                <span className="text-slate-950 text-[11px] font-bold block">The Goal</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/25 hover:bg-white/40 border border-white/70 backdrop-blur-md shadow-sm text-center transition-colors">
                <span className="inline-block px-2 py-0.5 rounded font-black text-[11px] mb-1" style={{ backgroundColor: '#00ff66', color: '#000000' }}>Rule 2</span>
                <span className="text-slate-950 text-[11px] font-bold block">Two Dice</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/25 hover:bg-white/40 border border-white/70 backdrop-blur-md shadow-sm text-center transition-colors">
                <span className="inline-block px-2 py-0.5 rounded font-black text-[11px] mb-1" style={{ backgroundColor: '#ff007f', color: '#000000' }}>Rule 7</span>
                <span className="text-slate-950 text-[11px] font-bold block">Missed Capture</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/25 hover:bg-white/40 border border-white/70 backdrop-blur-md shadow-sm text-center transition-colors">
                <span className="inline-block px-2 py-0.5 rounded font-black text-[11px] mb-1" style={{ backgroundColor: '#facc15', color: '#000000' }}>Rule 9</span>
                <span className="text-slate-950 text-[11px] font-bold block">Lucky 7 Surge</span>
              </div>
            </div>
          </div>

          {/* Action Link to Dedicated /rules Page */}
          <div className="flex flex-col items-center lg:items-end shrink-0">
            <Link
              to="/rules"
              onClick={() => sound.playClick(500)}
              className="px-8 py-4 rounded-2xl bg-[#0077be] hover:bg-[#00609a] text-white font-black font-['Chakra_Petch'] text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,119,190,0.45)] transition-all cursor-pointer flex items-center gap-3 transform hover:scale-105"
            >
              <span>Explore All 12 Canonical Rules</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <span className="text-slate-800 font-mono font-bold text-xs mt-3">
              Full cards, interactive filters & modal rulebook
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

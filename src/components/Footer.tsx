import React from 'react';
import { ArrowUp } from 'lucide-react';
import { sound } from '../utils/audio';
import { DeveloperDispatch } from './DeveloperDispatch';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick(400);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-850/80 bg-slate-950 pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Official Developer Dispatch #01 Manifesto */}
      <DeveloperDispatch />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-2">
          <div className="font-['Chakra_Petch'] font-black text-2xl text-white tracking-wider flex items-center justify-center md:justify-start gap-2">
            <span>LUDO EMPEROR 5 WAY</span>
            <span className="px-2 py-0.5 rounded bg-pink-600 text-white text-[10px] font-extrabold shadow-sm">
              ANTI-LEADER
            </span>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md font-['Outfit']">
            "Don't Let the Winner Win the Game" • The five-faction pentagonal strategy game featuring 2 dice mechanics, Lucky 7 warps, and 4v1 alliance hunting.
          </p>
        </div>

        {/* 5 Factions color badges */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
          <span className="px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-800/60 text-blue-300">BLUE</span>
          <span className="px-2.5 py-1 rounded-md bg-orange-950/40 border border-orange-800/60 text-orange-300">ORANGE</span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/60 text-emerald-300">GREEN</span>
          <span className="px-2.5 py-1 rounded-md bg-rose-950/40 border border-rose-800/60 text-rose-300">RED</span>
          <span className="px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-800/60 text-amber-300">YELLOW</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 font-mono text-xs font-bold shadow-xs"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400">
        <div>© {new Date().getFullYear()} LUDO EMPEROR 5 WAY. ALL RIGHTS RESERVED.</div>
        <div className="mt-2 sm:mt-0 flex gap-4">
          <span>5-PLAYER PENTAGONAL MATRIX</span>
          <span>•</span>
          <span>16 SACRED DECREES</span>
        </div>
      </div>
    </footer>
  );
};

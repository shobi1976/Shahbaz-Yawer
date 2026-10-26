import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { sound } from '../utils/audio';
import { DeveloperDispatch } from './DeveloperDispatch';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick(400);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/65 bg-white/20 backdrop-blur-xl pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Official Developer Dispatch #01 Manifesto */}
      <DeveloperDispatch />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-2">
          <div className="font-['Chakra_Petch'] font-black text-2xl text-slate-950 tracking-wider flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <img
              src="/assets/aistudio/image_745468f3_92e66563.jpg"
              alt="Ludo Dethroned 3D Logo"
              className="w-18 h-10 sm:w-20 sm:h-11 object-contain object-center rounded-lg border border-pink-500/70 bg-[#090c15] shadow-sm shrink-0"
            />
            <span>LUDO DETHRONED 5 WAY & 4 WAY TWO DICE</span>
            <span className="px-2 py-0.5 rounded bg-pink-600 text-white text-[10px] font-extrabold shadow-xs">
              ANTI-LEADER
            </span>
          </div>
          <p className="text-slate-800 font-medium text-xs sm:text-sm max-w-md font-['Outfit']">
            "Don't Let the Winner Win the Match" • The 5 Way & 4 Way strategy game featuring two dice mechanics, Lucky 7, and stopping the frontrunner.
          </p>
        </div>

        {/* 5 Factions Frosted Glass Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] font-black">
          <span className="px-2.5 py-1 rounded-md bg-blue-500/25 backdrop-blur-sm border border-blue-500 text-blue-950">BLUE</span>
          <span className="px-2.5 py-1 rounded-md bg-orange-500/25 backdrop-blur-sm border border-orange-500 text-orange-950">ORANGE</span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/25 backdrop-blur-sm border border-emerald-500 text-emerald-950">GREEN</span>
          <span className="px-2.5 py-1 rounded-md bg-rose-500/25 backdrop-blur-sm border border-rose-500 text-rose-950">RED</span>
          <span className="px-2.5 py-1 rounded-md bg-amber-400/30 backdrop-blur-sm border border-amber-500 text-amber-950">YELLOW</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-white/32 hover:bg-white/55 backdrop-blur-md border border-white/75 text-slate-950 transition-colors cursor-pointer flex items-center gap-2 font-mono text-xs font-black shadow-sm"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Links to Every Page */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono font-black tracking-wider uppercase text-slate-900">
        <Link to="/how-to-play" onClick={() => sound.playClick(400)} className="hover:text-[#0077be] transition-colors">
          How to Play
        </Link>
        <span className="text-slate-500">•</span>
        <Link to="/rules" onClick={() => sound.playClick(400)} className="hover:text-[#0077be] transition-colors">
          12 Rules
        </Link>
        <span className="text-slate-500">•</span>
        <Link to="/strategies" onClick={() => sound.playClick(400)} className="hover:text-[#0077be] transition-colors">
          Strategies
        </Link>
        <span className="text-slate-500">•</span>
        <Link to="/global-compendium" onClick={() => sound.playClick(400)} className="hover:text-[#0077be] transition-colors">
          Global Compendium
        </Link>
        <span className="text-slate-500">•</span>
        <Link to="/faq" onClick={() => sound.playClick(400)} className="hover:text-[#0077be] transition-colors">
          FAQ
        </Link>
        <span className="text-slate-500">•</span>
        <Link to="/about" onClick={() => sound.playClick(400)} className="hover:text-[#0077be] transition-colors">
          About
        </Link>
        <span className="text-slate-500">•</span>
        <Link to="/contact" onClick={() => sound.playClick(400)} className="hover:text-[#0077be] transition-colors">
          Contact
        </Link>
        <span className="text-slate-500">•</span>
        <Link to="/privacy" onClick={() => sound.playClick(400)} className="hover:text-[#0077be] transition-colors">
          Privacy
        </Link>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-slate-800">
        <div>© {new Date().getFullYear()} LUDO DETHRONED 5 WAY & 4 WAY TWO DICE. ALL RIGHTS RESERVED.</div>
        <div className="mt-2 sm:mt-0 flex gap-4">
          <span>5 WAY & 4 WAY</span>
          <span>•</span>
          <span>12 CANONICAL RULES</span>
        </div>
      </div>
    </footer>
  );
};

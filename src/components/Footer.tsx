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
    <footer className="cv-auto relative z-10 border-t border-[#0297DE]/30 bg-[#02070A]/88 backdrop-blur-xl pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Official Developer Dispatch #01 Manifesto */}
      <DeveloperDispatch />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-2">
          <div className="font-['Chakra_Petch'] font-black text-2xl text-white tracking-wider flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <picture className="shrink-0">
              <source srcSet="/assets/aistudio/ludo_dethroned_transparent_fixed_5330ff6c.webp" type="image/webp" />
              <img
                src="/assets/aistudio/ludo_dethroned_transparent_fixed_5330ff6c.png"
                alt="Ludo Dethroned 5 Way &amp; 4 Way Two Dice Brand Emblem"
                width={192}
                height={108}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-20 h-12 sm:w-24 sm:h-14 object-contain object-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)] shrink-0"
              />
            </picture>
            <span>LUDO DETHRONED 5 WAY & 4 WAY TWO DICE</span>
            <span className="px-2 py-0.5 rounded bg-[#FC734D] text-[#02070A] text-[10px] font-extrabold shadow-xs">
              ANTI-LEADER
            </span>
          </div>
          <p className="text-slate-300 font-medium text-xs sm:text-sm max-w-md font-['Outfit']">
            "Don't Let the Winner Win the Match" • The 5 Way & 4 Way strategy game featuring two dice mechanics, Lucky 7, and stopping the frontrunner.
          </p>
        </div>

        {/* 5 Factions Frosted Glass Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] font-black">
          <span className="px-2.5 py-1 rounded-md bg-blue-500/20 backdrop-blur-sm border border-blue-400/70 text-blue-200">BLUE</span>
          <span className="px-2.5 py-1 rounded-md bg-orange-500/20 backdrop-blur-sm border border-orange-400/70 text-orange-200">ORANGE</span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/70 text-emerald-200">GREEN</span>
          <span className="px-2.5 py-1 rounded-md bg-rose-500/25 backdrop-blur-sm border border-rose-400/75 text-rose-200">RED</span>
          <span className="px-2.5 py-1 rounded-md bg-amber-400/20 backdrop-blur-sm border border-amber-400/75 text-amber-200">YELLOW</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-[#05121d]/85 hover:bg-[#0297DE] backdrop-blur-md border border-[#0297DE]/40 hover:border-[#0297DE] text-slate-100 hover:text-white transition-colors cursor-pointer flex items-center gap-2 font-mono text-xs font-black shadow-md group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 text-[#FC734D] group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Links to Every Page */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#0297DE]/25 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono font-black tracking-wider uppercase text-slate-300">
        <Link to="/start-here" onClick={() => sound.playClick(400)} className="hover:text-[#FC734D] transition-colors">
          Start Here
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/not-traditional-ludo" onClick={() => sound.playClick(400)} className="hover:text-[#0297DE] transition-colors">
          Not Traditional Ludo
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/how-to-play" onClick={() => sound.playClick(400)} className="hover:text-[#0297DE] transition-colors">
          How to Play
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/rules" onClick={() => sound.playClick(400)} className="hover:text-[#0297DE] transition-colors">
          12 Rules
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/strategies" onClick={() => sound.playClick(400)} className="hover:text-[#FC734D] transition-colors">
          Strategies
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/global-compendium" onClick={() => sound.playClick(400)} className="hover:text-[#0297DE] transition-colors">
          Global Compendium
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/faq" onClick={() => sound.playClick(400)} className="hover:text-[#FC734D] transition-colors">
          FAQ
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/about" onClick={() => sound.playClick(400)} className="hover:text-[#0297DE] transition-colors">
          About
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/contact" onClick={() => sound.playClick(400)} className="hover:text-[#FC734D] transition-colors">
          Contact
        </Link>
        <span className="text-[#0297DE]/40">•</span>
        <Link to="/privacy" onClick={() => sound.playClick(400)} className="hover:text-[#0297DE] transition-colors">
          Privacy
        </Link>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-[#0297DE]/25 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-slate-400">
        <div>© {new Date().getFullYear()} LUDO DETHRONED 5 WAY & 4 WAY TWO DICE. ALL RIGHTS RESERVED.</div>
        <div className="mt-2 sm:mt-0 flex gap-4 text-[#0297DE] font-black">
          <span>5 WAY & 4 WAY</span>
          <span className="text-[#FC734D]">•</span>
          <span>12 CANONICAL RULES</span>
        </div>
      </div>
    </footer>
  );
};

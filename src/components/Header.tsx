import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, BookOpen, ShieldAlert, Table, HelpCircle, Radio } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMuted,
  onToggleMute,
  onOpenGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (callback?: () => void) => {
    setMobileMenuOpen(false);
    if (callback) callback();
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#030712]/95 border-b border-slate-800/90 transition-all shadow-2xl py-2 sm:py-3">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Triple Size Crest Presentation */}
        <a
          href="#"
          onClick={() => sound.playClick(500)}
          className="flex items-center gap-2.5 xs:gap-3 sm:gap-4 lg:gap-5 group cursor-pointer shrink min-w-0"
        >
          {/* Responsive Emblem Logo: Perfectly sized on mobile (48px) and 3X large on desktop (80px - 96px) */}
          <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-slate-950 border-2 border-pink-500/60 p-0.5 sm:p-1 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.45)] group-hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all duration-300 transform group-hover:scale-105 shrink-0">
            <img
              src="/ludo_emperor_logo.jpg"
              alt="Ludo Emperor Dual Dice Logo"
              className="w-full h-full object-cover rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Double-sized Brand Headings with Responsive Colorful Sub-Heading Badges */}
          <div className="flex flex-col justify-center min-w-0">
            {/* Main Title - Responsive text size so it never breaks on 360px-400px screens */}
            <div className="font-['Chakra_Petch'] font-black text-base xs:text-lg sm:text-2xl lg:text-4xl text-white tracking-wider sm:tracking-widest leading-none flex items-center gap-1.5 sm:gap-2.5 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <span className="truncate">LUDO EMPEROR</span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs lg:text-sm uppercase tracking-widest text-cyan-300 border border-cyan-400/50 px-1.5 py-0.5 rounded sm:rounded-lg bg-cyan-950/70 shadow-[0_0_10px_rgba(6,182,212,0.35)] shrink-0">
                5-WAY
              </span>
            </div>

            {/* Vibrant Colorful Sub-Heading Badges */}
            <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap sm:flex-wrap mt-1 overflow-x-hidden">
              <span className="px-1.5 py-0.5 rounded bg-pink-950/70 border border-pink-500/60 text-pink-400 text-[9px] sm:text-[11px] lg:text-xs font-mono font-black tracking-wide uppercase shrink-0">
                ANTI-LEADER
              </span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/60 text-cyan-300 text-[9px] sm:text-[11px] lg:text-xs font-mono font-black tracking-wide uppercase shrink-0">
                2 DICE
              </span>
              <span className="hidden xs:inline-block px-1.5 py-0.5 rounded bg-amber-950/70 border border-amber-500/60 text-amber-300 text-[9px] sm:text-[11px] lg:text-xs font-mono font-black tracking-wide uppercase shrink-0">
                LUCKY 7
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/60 text-emerald-300 text-[9px] sm:text-[11px] lg:text-xs font-mono font-black tracking-wide uppercase shrink-0">
                5 WINGS
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-mono font-bold tracking-[0.15em] uppercase text-slate-400">
          <button
            onClick={() => {
              sound.playClick(500);
              onOpenGuide();
            }}
            className="hover:text-amber-400 text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-lg bg-amber-950/30 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
          >
            <span>📖</span>
            <span>How to Play</span>
          </button>
          
          <a
            href="#rules-section"
            onClick={() => sound.playClick(400)}
            className="hover:text-cyan-400 text-cyan-300 transition-colors px-3 py-1.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          >
            <span>📜</span>
            <span>16 Decrees</span>
          </a>

          <a
            href="#comparison-table"
            onClick={() => sound.playClick(400)}
            className="hover:text-white transition-colors"
          >
            5-Way vs 4-Way
          </a>

          <a
            href="#faq-section"
            onClick={() => sound.playClick(400)}
            className="hover:text-white transition-colors"
          >
            FAQ
          </a>

          <a
            href="#features-hub"
            onClick={() => sound.playClick(400)}
            className="hover:text-white transition-colors"
          >
            Cyber Lounges
          </a>
        </nav>

        {/* Right Action Buttons (Mobile-tight & stable) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Sound Mute/Unmute Button */}
          <button
            onClick={() => {
              sound.playClick(400);
              onToggleMute();
            }}
            className="p-2 sm:p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer group shadow-xs shrink-0"
            title={isMuted ? 'Unmute Game Sounds' : 'Mute Game Sounds'}
            aria-label="Toggle Sound"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 group-hover:text-red-300" />
            ) : (
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:text-white" />
            )}
          </button>

          {/* Mobile Clean Hamburger Button */}
          <button
            onClick={() => {
              sound.playClick(450);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-4 mt-2 border-t border-slate-800/80 bg-slate-950/98 backdrop-blur-2xl rounded-b-2xl shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleMobileNavClick(onOpenGuide)}
            className="w-full text-left py-2.5 px-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-300 font-mono font-bold text-xs flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>📖 HOW TO PLAY (TUTORIAL)</span>
          </button>

          <a
            href="#rules-section"
            onClick={() => handleMobileNavClick()}
            className="block py-2.5 px-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs flex items-center gap-2"
          >
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span>📜 16 SACRED DECREES</span>
          </a>

          <a
            href="#comparison-table"
            onClick={() => handleMobileNavClick()}
            className="block py-2.5 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 text-slate-200 font-mono text-xs flex items-center gap-2"
          >
            <Table className="w-4 h-4 text-pink-400" />
            <span>5-WAY vs 4-WAY COMPARISON</span>
          </a>

          <a
            href="#faq-section"
            onClick={() => handleMobileNavClick()}
            className="block py-2.5 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 text-slate-200 font-mono text-xs flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </a>

          <a
            href="#features-hub"
            onClick={() => handleMobileNavClick()}
            className="block py-2.5 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 text-slate-200 font-mono text-xs flex items-center gap-2"
          >
            <Radio className="w-4 h-4 text-purple-400" />
            <span>CYBER LOUNGES & OST</span>
          </a>
        </div>
      )}
    </header>
  );
};

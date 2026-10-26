import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMuted,
  onToggleMute,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'How to Play', to: '/how-to-play' },
    { name: '12 Rules', to: '/rules' },
    { name: 'Strategies', to: '/strategies' },
    { name: 'Global Compendium', to: '/global-compendium' },
    { name: 'FAQ', to: '/faq' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Privacy', to: '/privacy' },
  ];

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    sound.playClick(400);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/22 border-b border-white/65 transition-all shadow-lg py-2 sm:py-3">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col gap-2 sm:gap-2.5">
        {/* TOP ROW: Brand Logo & LUDO DETHRONED Heading UP + Right Controls */}
        <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Crest Presentation */}
          <Link
            to="/"
            onClick={() => sound.playClick(500)}
            className="flex items-center gap-2.5 xs:gap-3 sm:gap-4 lg:gap-5 group cursor-pointer shrink min-w-0"
          >
            {/* Responsive Frosted Glass Emblem Frame showcasing the full Ludo Dethroned 3D Crest */}
            <div className="w-20 h-12 xs:w-24 xs:h-14 sm:w-32 sm:h-18 lg:w-36 lg:h-20 rounded-xl sm:rounded-2xl bg-[#090c15] backdrop-blur-md border-2 border-pink-500/70 p-0.5 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.3)] group-hover:border-cyan-500 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all duration-300 transform group-hover:scale-105 shrink-0">
              <img
                src="/assets/aistudio/image_745468f3_92e66563.jpg"
                alt="Ludo Dethroned 3D Dual Dice Logo"
                className="w-full h-full object-contain object-center rounded-lg sm:rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Brand Headings with Pure Crisp Font Styling */}
            <div className="flex flex-col justify-center min-w-0">
              <div className="font-['Chakra_Petch'] font-black text-base xs:text-xl sm:text-3xl lg:text-4xl text-slate-950 tracking-wider sm:tracking-widest leading-none flex items-center gap-1.5 sm:gap-2.5">
                <span className="truncate">LUDO DETHRONED</span>
                <span className="text-[10px] xs:text-xs sm:text-base lg:text-xl uppercase tracking-widest font-black shrink-0 font-['Chakra_Petch']" style={{ color: '#0077be' }}>
                  TWO DICE
                </span>
              </div>

              {/* Pure Typography Sub-Headings */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap sm:flex-wrap mt-1 overflow-x-hidden text-[9px] sm:text-xs lg:text-sm font-mono font-black tracking-wide uppercase">
                <span className="text-pink-700 shrink-0">
                  ANTI-LEADER
                </span>
                <span className="text-slate-600 font-bold">•</span>
                <span className="shrink-0" style={{ color: '#0077be' }}>
                  2 DICE
                </span>
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-emerald-700 shrink-0">
                  3D
                </span>
                <span className="text-slate-600 font-bold hidden xs:inline">•</span>
                <span className="text-amber-600 shrink-0 hidden xs:inline">
                  LUCKY 7
                </span>
              </div>
            </div>
          </Link>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Sound Mute/Unmute Button */}
            <button
              onClick={() => {
                sound.playClick(400);
                onToggleMute();
              }}
              className="p-2 sm:p-2.5 rounded-xl bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/70 text-slate-900 hover:text-black transition-all cursor-pointer group shadow-sm shrink-0"
              title={isMuted ? 'Unmute Game Sounds' : 'Mute Game Sounds'}
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 group-hover:text-red-700" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0077be] group-hover:text-black" style={{ color: '#0077be' }} />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sound.playClick(450);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 sm:p-2.5 rounded-xl bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/70 text-slate-900 hover:text-black transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#0077be]" style={{ color: '#0077be' }} /> : <Menu className="w-5 h-5 text-[#0077be]" style={{ color: '#0077be' }} />}
            </button>
          </div>
        </div>

        {/* SECOND ROW UNDERNEATH: Aligned Header Navigation Headings */}
        <nav className="hidden md:flex items-center justify-between gap-1.5 lg:gap-2.5 pt-2 border-t border-white/55">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => sound.playClick(400)}
                className={`px-2 lg:px-3.5 py-1.5 rounded-lg text-[11px] lg:text-xs font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer border text-center ${
                  isActive
                    ? 'bg-white/45 backdrop-blur-md border-[#0077be] text-[#0077be] shadow-[0_0_12px_rgba(0,119,190,0.25)] font-black'
                    : 'bg-white/15 hover:bg-white/40 backdrop-blur-sm border-white/45 hover:border-white/80 text-slate-900 hover:text-black'
                }`}
                style={isActive ? { color: '#0077be', borderColor: '#0077be' } : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Dropdown Menu — Frosted Glass */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-4 mt-2 border-t border-white/60 bg-white/35 backdrop-blur-2xl rounded-b-2xl shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleMobileNavClick}
                className={`w-full py-2.5 px-3.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-between border backdrop-blur-md ${
                  isActive
                    ? 'bg-white/50 border-[#0077be] text-[#0077be] shadow-xs font-black'
                    : 'bg-white/25 hover:bg-white/45 text-slate-900 hover:text-black border-white/60'
                }`}
                style={isActive ? { color: '#0077be', borderColor: '#0077be' } : undefined}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077be]" style={{ backgroundColor: '#0077be' }} />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

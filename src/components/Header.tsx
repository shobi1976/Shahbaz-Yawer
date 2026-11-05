import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { HEADER_NAV_ITEMS } from '../data/headerNavData';
import { getDarkNeonCardBackground } from '../data/rulesData';
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
  const [hoveredNavId, setHoveredNavId] = useState<number | null>(null);
  const location = useLocation();

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    sound.playClick(400);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#02070A]/86 border-b border-[#0297DE]/30 transition-all shadow-2xl py-2 sm:py-3">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col gap-2 sm:gap-2.5">
        {/* TOP ROW: Brand Logo & LUDO DETHRONED Heading + Right Controls */}
        <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
          <Link
            to="/"
            onClick={() => sound.playClick(500)}
            className="flex items-center gap-2.5 xs:gap-3 sm:gap-4 lg:gap-5 group cursor-pointer shrink min-w-0"
          >
            <div className="w-20 h-14 xs:w-24 xs:h-16 sm:w-32 sm:h-20 lg:w-40 lg:h-24 flex items-center justify-center shrink-0 transition-transform duration-300 transform group-hover:scale-105">
              <picture className="w-full h-full flex items-center justify-center">
                <source srcSet="/assets/aistudio/ludo_dethroned_transparent_fixed_5330ff6c.webp" type="image/webp" />
                <img
                  src="/assets/aistudio/ludo_dethroned_transparent_fixed_5330ff6c.png"
                  alt="Ludo Dethroned 5 Way &amp; 4 Way Two Dice Official Strategy Game Logo"
                  width={320}
                  height={180}
                  decoding="async"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)] group-hover:drop-shadow-[0_0_18px_rgba(2,151,222,0.65)] transition-all duration-300"
                />
              </picture>
            </div>

            <div className="flex flex-col justify-center min-w-0">
              <div className="font-['Chakra_Petch'] font-black text-base xs:text-xl sm:text-3xl lg:text-4xl text-white tracking-wider sm:tracking-widest leading-none flex items-center gap-1.5 sm:gap-2.5">
                <span className="truncate">LUDO DETHRONED</span>
                <span className="text-[10px] xs:text-xs sm:text-base lg:text-xl uppercase tracking-widest font-black shrink-0 font-['Chakra_Petch'] text-[#FC734D]">
                  TWO DICE
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap sm:flex-wrap mt-1 overflow-x-hidden text-[9px] sm:text-xs lg:text-sm font-mono font-black tracking-wide uppercase">
                <span className="text-[#0297DE] shrink-0">ANTI-LEADER</span>
                <span className="text-slate-500 font-bold">·</span>
                <span className="text-[#FC734D] shrink-0">2 DICE</span>
                <span className="text-slate-500 font-bold">·</span>
                <span className="text-slate-200 shrink-0">3D</span>
                <span className="text-slate-500 font-bold hidden xs:inline">·</span>
                <span className="text-[#0297DE] shrink-0 hidden xs:inline">LUCKY 7</span>
              </div>
            </div>
          </Link>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              onClick={() => {
                sound.playClick(400);
                onToggleMute();
              }}
              className="p-2 sm:p-2.5 rounded-xl bg-[#02070A]/85 hover:bg-[#071622] backdrop-blur-md border border-[#0297DE]/35 text-slate-200 hover:text-white transition-all cursor-pointer group shadow-sm shrink-0"
              title={isMuted ? 'Unmute Game Sounds' : 'Mute Game Sounds'}
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-[#FC734D]" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0297DE] group-hover:text-[#FC734D]" />
              )}
            </button>

            <button
              onClick={() => {
                sound.playClick(450);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 sm:p-2.5 rounded-xl bg-[#02070A]/85 hover:bg-[#071622] backdrop-blur-md border border-[#0297DE]/35 text-slate-200 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FC734D]" /> : <Menu className="w-5 h-5 text-[#0297DE]" />}
            </button>
          </div>
        </div>

        {/* SECOND ROW: 10 Header Mini-Cards (Midnight Black at Rest -> Rule-Style Neon Glow on Hover/Active) */}
        <nav className="hidden md:flex flex-wrap items-center justify-center xl:justify-between gap-1.5 pt-2 border-t border-[#0297DE]/20">
          {HEADER_NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            const isLit = isActive || hoveredNavId === item.id;

            return (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => {
                  setHoveredNavId(item.id);
                  sound.playHover(340 + item.id * 20);
                }}
                onMouseLeave={() => setHoveredNavId(null)}
                onClick={() => sound.playClick(400)}
                style={{
                  background: isLit
                    ? getDarkNeonCardBackground(item.surfaceId, true)
                    : 'rgba(2, 7, 10, 0.78)',
                  borderColor: isLit ? item.hex : 'rgba(2, 151, 222, 0.30)',
                  boxShadow: isLit
                    ? `0 0 16px ${item.hex}85, inset 0 0 10px ${item.hex}35`
                    : 'none',
                }}
                className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-[11px] xl:text-xs font-mono font-bold tracking-wide xl:tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer border text-center ${
                  isLit ? 'text-white font-black' : 'text-slate-200'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Dropdown Menu — Matching Rule-Card Neon Hover */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-4 mt-2 border-t border-[#0297DE]/30 bg-[#02070A]/95 backdrop-blur-2xl rounded-b-2xl shadow-2xl space-y-2">
          {HEADER_NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleMobileNavClick}
                style={
                  isActive
                    ? {
                        background: getDarkNeonCardBackground(item.surfaceId, true),
                        borderColor: item.hex,
                        boxShadow: `0 0 14px ${item.hex}65`,
                      }
                    : undefined
                }
                className={`w-full py-2.5 px-3.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-between border backdrop-blur-md ${
                  isActive
                    ? 'text-white font-black'
                    : 'bg-[#02070A]/85 hover:bg-[#071622] text-slate-200 hover:text-[#FC734D] border-[#0297DE]/30'
                }`}
              >
                <span>{item.name}</span>
                <span className="dice-silver-badge px-1.5 py-0.5 rounded text-[9px] font-black">
                  {String(item.id).padStart(2, '0')}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

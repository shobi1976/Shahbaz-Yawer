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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#02070A]/90 border-b border-[#0297DE]/30 transition-all shadow-xl py-1 sm:py-1.5">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 flex flex-col gap-1 sm:gap-1.5">
        {/* TOP ROW: Brand Logo & LUDO DETHRONED Heading + Right Controls */}
        <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
          <Link
            to="/"
            onClick={() => sound.playClick(500)}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink min-w-0"
          >
            <div className="h-8 xs:h-9 sm:h-10 lg:h-11 w-auto aspect-[16/9] flex items-center justify-center shrink-0 transition-transform duration-300 transform group-hover:scale-105">
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
                  className="w-full h-full object-contain object-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] group-hover:drop-shadow-[0_0_14px_rgba(2,151,222,0.65)] transition-all duration-300"
                />
              </picture>
            </div>

            <div className="flex flex-col justify-center min-w-0">
              <div className="font-['Chakra_Petch'] font-black text-sm xs:text-base sm:text-xl lg:text-2xl text-white tracking-wider sm:tracking-widest leading-none flex items-center gap-1.5 sm:gap-2">
                <span className="truncate">LUDO DETHRONED</span>
                <span className="text-[9px] xs:text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider font-black shrink-0 font-['Chakra_Petch'] text-[#FC734D]">
                  TWO DICE
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap mt-0.5 overflow-x-hidden text-[8px] sm:text-[10px] lg:text-[11px] font-mono font-black tracking-wide uppercase text-slate-400">
                <span className="text-[#0297DE] shrink-0">ANTI-LEADER</span>
                <span className="text-slate-600 font-bold">·</span>
                <span className="text-[#FC734D] shrink-0">2 DICE</span>
                <span className="text-slate-600 font-bold">·</span>
                <span className="text-slate-300 shrink-0">3D</span>
                <span className="text-slate-600 font-bold hidden xs:inline">·</span>
                <span className="text-[#0297DE] shrink-0 hidden xs:inline">LUCKY 7</span>
              </div>
            </div>
          </Link>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={() => {
                sound.playClick(400);
                onToggleMute();
              }}
              className="p-1.5 sm:p-2 rounded-lg bg-[#02070A]/85 hover:bg-[#071622] backdrop-blur-md border border-[#0297DE]/35 text-slate-200 hover:text-white transition-all cursor-pointer group shadow-xs shrink-0"
              title={isMuted ? 'Unmute Game Sounds' : 'Mute Game Sounds'}
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FC734D]" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0297DE] group-hover:text-[#FC734D]" />
              )}
            </button>

            <button
              onClick={() => {
                sound.playClick(450);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-1.5 sm:p-2 rounded-lg bg-[#02070A]/85 hover:bg-[#071622] backdrop-blur-md border border-[#0297DE]/35 text-slate-200 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-[#FC734D]" /> : <Menu className="w-4 h-4 text-[#0297DE]" />}
            </button>
          </div>
        </div>

        {/* SECOND ROW: 10 Header Mini-Cards (Ultra-Compact on Desktop) */}
        <nav className="hidden md:flex flex-wrap items-center justify-center xl:justify-between gap-1 pt-1 border-t border-[#0297DE]/20">
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
                    ? `0 0 12px ${item.hex}85, inset 0 0 8px ${item.hex}35`
                    : 'none',
                }}
                className={`px-1.5 xl:px-2 py-0.5 xl:py-1 rounded-md text-[10px] xl:text-[11px] font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer border text-center ${
                  isLit ? 'text-white font-black' : 'text-slate-200'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-3 pt-2 pb-3 mt-1.5 border-t border-[#0297DE]/30 bg-[#02070A]/95 backdrop-blur-2xl rounded-b-2xl shadow-2xl space-y-1.5">
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
                className={`w-full py-2 px-3 rounded-lg font-mono text-[11px] font-bold tracking-wider uppercase transition-all flex items-center justify-between border backdrop-blur-md ${
                  isActive
                    ? 'text-white font-black'
                    : 'bg-[#02070A]/85 hover:bg-[#071622] text-slate-200 hover:text-[#FC734D] border-[#0297DE]/30'
                }`}
              >
                <span>{item.name}</span>
                <span className="dice-silver-badge px-1.5 py-0.5 rounded text-[8px] font-black">
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

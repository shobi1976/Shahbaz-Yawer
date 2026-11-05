import React, { useState } from 'react';
import { 
  Users, ShieldAlert, Dices, Sparkles, AlertTriangle, RotateCw, 
  Trophy, Star, Crown, Clock, BarChart3, Swords, Search, LayoutGrid, List, ArrowUpRight
} from 'lucide-react';
import { RuleCard } from '../types';
import { RULES_DATA, getDarkNeonCardBackground } from '../data/rulesData';
import { sound } from '../utils/audio';

interface RuleCardGridProps {
  onHoverRule?: (color: string | null) => void;
  onSelectRule: (rule: RuleCard) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-5 h-5" />,
  Dices: <Dices className="w-5 h-5" />,
  RotateCw: <RotateCw className="w-5 h-5" />,
  Swords: <Swords className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  Crown: <Crown className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
};

const NEON_HOVER_CLASSES: Record<number, string> = {
  1: 'neon-hover-gold',
  2: 'neon-hover-green',
  3: 'neon-hover-cyan',
  4: 'neon-hover-red',
  5: 'neon-hover-skyblue',
  6: 'neon-hover-orange',
  7: 'neon-hover-magenta',
  8: 'neon-hover-amber',
  9: 'neon-hover-yellow',
  10: 'neon-hover-purple',
  11: 'neon-hover-mint',
  12: 'neon-hover-pink',
};

export const RuleCardGrid: React.FC<RuleCardGridProps> = ({
  onHoverRule,
  onSelectRule,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const categories = ['All', 'Core Rules', 'Movement & Combat', 'Bonuses & Special', 'Match Settings'];

  const filteredRules = RULES_DATA.filter((rule) => {
    const matchesCategory = activeCategory === 'All' || rule.category === activeCategory;
    const matchesSearch =
      rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.accentColorName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="rules-section" className="pb-12 sm:pb-16 max-w-7xl mx-auto relative z-10">
      {/* Unified Midnight Black Frosted Glass Card for Section Heading + Message + Search & Filters */}
      <div className="mb-10 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/35 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-90" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#02070A]/85 border border-[#0297DE]/70 text-[11px] uppercase tracking-[0.25em] text-[#0297DE] font-mono font-black mb-3 shadow-xs backdrop-blur-md">
              <span>CANONICAL RULES • 12 RULES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-['Chakra_Petch'] text-white uppercase">
              MASTER THE <span className="text-[#FC734D]">12 RULES</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl font-medium leading-relaxed font-['Outfit']">
              Played on a 3D board with 3D tokens and animated 3D dice.
            </p>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-medium leading-relaxed font-['Outfit']">
              Frosted glass tactical cards with silver badges that ignite with neon colors on hover. Click any card to inspect tactical breakdowns and official rule details.
            </p>
          </div>

          {/* View mode toggle & search bar — Midnight Black Frosted Glass */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#0297DE] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search rules, dice, captures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-[#02070A]/85 border border-[#0297DE]/35 text-xs text-slate-100 placeholder-slate-400 font-bold focus:outline-none focus:border-[#0297DE] focus:ring-1 focus:ring-[#0297DE]/50 shadow-xs w-56 sm:w-64 font-mono backdrop-blur-md"
              />
            </div>

            {/* Grid / List Mode */}
            <div className="flex items-center bg-[#02070A]/85 backdrop-blur-md border border-[#0297DE]/35 rounded-xl p-1 shadow-xs">
              <button
                onClick={() => { setViewMode('grid'); sound.playClick(400); }}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-[#FC734D] text-[#02070A] font-bold shadow-xs' 
                    : 'text-slate-300 hover:text-white hover:bg-[#071826]'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => { setViewMode('list'); sound.playClick(400); }}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list' 
                    ? 'bg-[#FC734D] text-[#02070A] font-bold shadow-xs' 
                    : 'text-slate-300 hover:text-white hover:bg-[#071826]'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Buttons — Inside Unified Midnight Black Frosted Glass Card */}
        <div className="relative z-10 flex items-center gap-2 overflow-x-auto pt-4 border-t border-[#0297DE]/25 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                sound.playClick(450);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-black tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#0297DE] text-white border-[#38bdf8] shadow-[0_0_16px_rgba(2,151,222,0.5)]'
                  : 'bg-[#02070A]/80 text-slate-200 hover:text-[#FC734D] hover:bg-[#071826] border-[#0297DE]/30 backdrop-blur-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          RULE CARDS (Colorless Charcoal Glass at Rest -> Dark Neon on Hover)
         ══════════════════════════════════════════════════════════════════════ */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6'
            : 'flex flex-col gap-3.5'
        }
      >
        {filteredRules.map((rule) => {
          const isHovered = hoveredCardId === rule.id;
          const neonHoverClass = NEON_HOVER_CLASSES[rule.id] || 'neon-hover-cyan';

          return (
            <div
              key={rule.id}
              role="button"
              tabIndex={0}
              aria-label={`Rule ${rule.id}: ${rule.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  sound.playClick(600);
                  onSelectRule(rule);
                }
              }}
              onMouseEnter={() => {
                setHoveredCardId(rule.id);
                if (onHoverRule) onHoverRule(rule.hex);
                sound.playHover(350 + rule.id * 25);
              }}
              onMouseLeave={() => {
                setHoveredCardId(null);
                if (onHoverRule) onHoverRule(null);
              }}
              onClick={() => {
                sound.playClick(600);
                onSelectRule(rule);
              }}
              style={{
                background: isHovered
                  ? getDarkNeonCardBackground(rule.id, true)
                  : 'rgba(2, 7, 10, 0.80)',
                borderColor: isHovered ? rule.hex : 'rgba(2, 151, 222, 0.34)',
                boxShadow: isHovered 
                  ? `0 0 28px ${rule.hex}, 0 0 54px ${rule.hex}70, inset 0 0 20px ${rule.hex}45`
                  : '0 14px 32px -10px rgba(0, 0, 0, 0.78), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              }}
              className={`rule-card group relative p-5 rounded-2xl border-2 backdrop-blur-md shadow-xl ${
                isHovered ? 'text-white' : 'text-slate-100'
              } ${neonHoverClass} cursor-pointer overflow-hidden flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#0297DE] transition-all duration-200 transform hover:-translate-y-1 ${
                viewMode === 'list' ? 'flex-row items-center gap-6' : ''
              }`}
            >
              {/* Specular Sheen — Clean Midnight Black at Rest, Dark Neon on Hover */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity ${
                  isHovered
                    ? 'bg-gradient-to-br from-white/14 via-transparent to-black/30 opacity-100'
                    : 'bg-gradient-to-br from-[#0297DE]/10 via-transparent to-[#FC734D]/5 opacity-90'
                }`}
              />

              {/* Top Neon Laser Glow Bar — Visible ONLY on Hover */}
              <div
                style={
                  isHovered
                    ? { backgroundColor: rule.hex, boxShadow: `0 0 12px ${rule.hex}` }
                    : undefined
                }
                className={`absolute top-0 left-0 right-0 transition-all duration-200 ${
                  isHovered ? 'h-1.5 opacity-100' : 'h-0 opacity-0'
                }`}
              />

              {/* Mirror Light Glint Sweep on Hover */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />

              {/* Card Header & Content */}
              <div className="relative z-10 w-full">
                {/* Rule Badge (Silver Background + Black Font) & Top-Right Icon (Silver Background + Black Icon) */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="dice-silver-badge px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black tracking-wide">
                    Rule {rule.id}
                  </span>
                  <div className="dice-silver-badge w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    {ICON_MAP[rule.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-2.5">
                  <h3
                    className={`card-title text-base sm:text-lg font-black transition-colors leading-tight font-['Chakra_Petch'] ${
                      isHovered ? 'text-white' : 'text-slate-100'
                    }`}
                  >
                    {rule.title}
                  </h3>
                  <div
                    className={`card-subtitle text-xs transition-colors line-clamp-1 font-bold ${
                      isHovered ? 'text-slate-200' : 'text-slate-400'
                    }`}
                  >
                    {rule.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`card-desc transition-colors text-xs sm:text-[13px] leading-relaxed mb-3 font-medium line-clamp-2 ${
                    isHovered ? 'text-slate-100' : 'text-slate-300'
                  }`}
                >
                  {rule.shortDesc}
                </p>

                {/* Anti-Leader Strategy Box — Neutral Midnight Black at Rest, Neon on Hover */}
                <div
                  style={isHovered ? { borderColor: `${rule.hex}80` } : undefined}
                  className={`card-pill p-2 rounded-xl backdrop-blur-sm border text-[10.5px] font-bold font-mono flex items-center gap-1.5 shadow-xs transition-colors ${
                    isHovered
                      ? 'bg-black/45 text-white'
                      : 'bg-[#02070A]/85 border-[#0297DE]/25 text-slate-200'
                  }`}
                >
                  <ShieldAlert
                    className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                      isHovered ? '' : 'text-slate-400'
                    }`}
                    style={isHovered ? { color: rule.hex } : undefined}
                  />
                  <span className={`truncate transition-colors ${isHovered ? 'text-slate-100' : 'text-slate-200'}`}>
                    <strong
                      className={`font-black transition-colors ${isHovered ? '' : 'text-white'}`}
                      style={isHovered ? { color: rule.hex } : undefined}
                    >
                      Anti-Leader:
                    </strong>{' '}
                    {rule.antiLeaderMechanic}
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div
                className={`card-footer relative z-10 w-full pt-3 mt-3 border-t transition-colors flex items-center justify-between text-[11px] font-mono ${
                  isHovered ? 'border-white/25' : 'border-[#0297DE]/20'
                }`}
              >
                <span
                  className={`font-black flex items-center gap-1 transition-colors ${
                    isHovered ? 'text-white' : 'text-slate-200'
                  }`}
                >
                  <span>Explore Tactics</span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-colors ${isHovered ? '' : 'text-slate-400'}`}
                    style={isHovered ? { color: rule.hex } : undefined}
                  />
                </span>
                <span className="dice-silver-badge font-black text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
                  {rule.highlightDetails.impactLevel} IMPACT
                </span>
              </div>

              {/* Animated Bottom Accent Bar — Visible ONLY on Hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 transition-all duration-200 ${
                  isHovered ? 'h-1 opacity-100' : 'h-0 opacity-0'
                }`}
                style={
                  isHovered
                    ? { backgroundColor: rule.hex, boxShadow: `0 0 10px ${rule.hex}` }
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

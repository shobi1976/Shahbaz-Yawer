import React, { useState } from 'react';
import { 
  Users, ShieldAlert, Dices, Sparkles, AlertTriangle, RotateCw, 
  Trophy, Star, Crown, Clock, BarChart3, Swords, Search, LayoutGrid, List, ArrowUpRight
} from 'lucide-react';
import { RuleCard } from '../types';
import { RULES_DATA } from '../data/rulesData';
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
      {/* Unified Frosted Glass Card for Section Heading + Message + Search & Filters */}
      <div className="mb-10 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 border border-[#0077be]/80 text-[11px] uppercase tracking-[0.25em] text-[#0077be] font-mono font-black mb-3 shadow-xs backdrop-blur-md">
              <span>CANONICAL RULES • 12 RULES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-['Chakra_Petch'] text-slate-950 uppercase">
              MASTER THE <span className="text-[#0077be]" style={{ color: '#0077be' }}>12 RULES</span>
            </h2>
            <p className="text-slate-800 text-sm sm:text-base mt-3 max-w-2xl font-medium leading-relaxed font-['Outfit']">
              Played on a 3D board with 3D tokens and animated 3D dice.
            </p>
            <p className="text-slate-800 text-sm sm:text-base mt-2 max-w-2xl font-medium leading-relaxed font-['Outfit']">
              Frosted glass cards with vivid neon signatures. Click any card to inspect tactical breakdowns and official rule details.
            </p>
          </div>

          {/* View mode toggle & search bar — Frosted Glass */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#0077be] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search rules, dice, captures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-white/35 border border-white/75 text-xs text-slate-950 placeholder-slate-700 font-bold focus:outline-none focus:border-[#0077be] focus:ring-1 focus:ring-[#0077be]/50 shadow-xs w-56 sm:w-64 font-mono backdrop-blur-md"
              />
            </div>

            {/* Grid / List Mode */}
            <div className="flex items-center bg-white/35 backdrop-blur-md border border-white/75 rounded-xl p-1 shadow-xs">
              <button
                onClick={() => { setViewMode('grid'); sound.playClick(400); }}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-[#0077be] text-white font-bold shadow-xs' 
                    : 'text-slate-900 hover:text-black hover:bg-white/50'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => { setViewMode('list'); sound.playClick(400); }}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list' 
                    ? 'bg-[#0077be] text-white font-bold shadow-xs' 
                    : 'text-slate-900 hover:text-black hover:bg-white/50'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Buttons — Inside Unified Frosted Glass Card */}
        <div className="relative z-10 flex items-center gap-2 overflow-x-auto pt-4 border-t border-white/60 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                sound.playClick(450);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-black tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#0077be] text-white border-[#0077be] shadow-[0_0_14px_rgba(0,119,190,0.45)]'
                  : 'bg-white/32 text-slate-950 hover:text-black hover:bg-white/50 border-white/75 backdrop-blur-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          RULE CARDS (Frosted Glass + Rule Badge in Black Font on Card-Color Box)
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
                borderColor: rule.hex,
                boxShadow: isHovered 
                  ? `0 0 25px ${rule.hex}, 0 0 45px ${rule.hex}50, inset 0 0 15px ${rule.hex}25`
                  : `0 0 14px ${rule.hex}45, inset 0 0 8px ${rule.hex}15`,
              }}
              className={`rule-card group relative p-5 rounded-2xl bg-white/22 hover:bg-white/36 border-2 backdrop-blur-md shadow-xl ${neonHoverClass} cursor-pointer overflow-hidden flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#0077be] transition-all duration-200 transform hover:-translate-y-1 ${
                viewMode === 'list' ? 'flex-row items-center gap-6' : ''
              }`}
            >
              {/* Frosted Glass Specular Sheen (Landing Page Shows Through) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

              {/* Mirror Light Glint Sweep on Hover */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />

              {/* Card Header & Content */}
              <div className="relative z-10 w-full">
                {/* Rule Badge (Black Font in Card-Colored Box) & Accent Label */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span 
                    style={{ backgroundColor: rule.hex, color: '#000000' }}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black tracking-wide shadow-xs"
                  >
                    Rule {rule.id}
                  </span>
                  <span
                    className="text-[9px] font-mono font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md shadow-xs"
                    style={{
                      color: '#000000',
                      backgroundColor: rule.hex,
                    }}
                  >
                    {rule.accentColorName}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-110 shadow-sm"
                    style={{
                      color: '#000000',
                      borderColor: rule.hex,
                      backgroundColor: rule.hex,
                      boxShadow: `0 0 10px ${rule.hex}50`,
                    }}
                  >
                    {ICON_MAP[rule.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="card-title text-base sm:text-lg font-black text-slate-950 group-hover:text-black transition-colors leading-tight font-['Chakra_Petch']">
                      {rule.title}
                    </h3>
                    <div className="card-subtitle text-xs text-slate-800 transition-colors line-clamp-1 font-bold">
                      {rule.subtitle}
                    </div>
                  </div>
                </div>

                {/* Description — Crisp Dark Font on Frosted Glass */}
                <p className="card-desc text-slate-900 transition-colors text-xs sm:text-[13px] leading-relaxed mb-3 font-medium line-clamp-2">
                  {rule.shortDesc}
                </p>

                {/* Frosted Anti-Leader Strategy Box */}
                <div className="card-pill p-2 rounded-xl bg-white/30 group-hover:bg-white/45 backdrop-blur-sm border border-white/75 text-[10.5px] text-slate-950 font-bold font-mono flex items-center gap-1.5 shadow-xs">
                  <ShieldAlert className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <span className="truncate">
                    <strong className="text-pink-700 font-black">Anti-Leader:</strong> {rule.antiLeaderMechanic}
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="card-footer relative z-10 w-full pt-3 mt-3 border-t border-white/60 transition-colors flex items-center justify-between text-[11px] font-mono">
                <span className="font-black text-slate-950 flex items-center gap-1">
                  <span>Explore Tactics</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span
                  className="font-black text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow-xs"
                  style={{ color: '#000000', backgroundColor: rule.hex }}
                >
                  {rule.highlightDetails.impactLevel} IMPACT
                </span>
              </div>

              {/* Animated Accent Bar */}
              <div
                className="accent-bar"
                style={{ backgroundColor: rule.hex, boxShadow: `0 0 10px ${rule.hex}` }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

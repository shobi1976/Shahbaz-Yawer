import React, { useState } from 'react';
import { 
  Users, ShieldAlert, Dices, Sparkles, AlertTriangle, Bot, Mic, 
  DoorOpen, Trophy, Music, Wand2, Crown, Clock, Activity, BarChart3, 
  Zap, Search, Filter, LayoutGrid, List, ArrowUpRight, ShieldCheck, Flame
} from 'lucide-react';
import { RuleCard } from '../types';
import { RULES_DATA } from '../data/rulesData';
import { sound } from '../utils/audio';

interface RuleCardGridProps {
  onHoverRule: (color: string | null) => void;
  onSelectRule: (rule: RuleCard) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Dices: <Dices className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
  DoorOpen: <DoorOpen className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
  Wand2: <Wand2 className="w-5 h-5" />,
  Crown: <Crown className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

const NEON_HOVER_CLASSES: Record<number, string> = {
  1: 'neon-hover-cyan',
  2: 'neon-hover-magenta',
  3: 'neon-hover-green',
  4: 'neon-hover-yellow',
  5: 'neon-hover-red',
  6: 'neon-hover-orange',
  7: 'neon-hover-pink',
  8: 'neon-hover-teal',
  9: 'neon-hover-purple',
  10: 'neon-hover-mint',
  11: 'neon-hover-lime',
  12: 'neon-hover-gold',
  13: 'neon-hover-skyblue',
  14: 'neon-hover-limegreen',
  15: 'neon-hover-amber',
  16: 'neon-hover-blue',
};

export const RuleCardGrid: React.FC<RuleCardGridProps> = ({
  onHoverRule,
  onSelectRule,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const categories = ['All', 'Chaos & Core', 'Combat & Powers', 'Social & Voice', 'Metrics & Timers'];

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
    <section id="rules-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-[11px] uppercase tracking-[0.35em] text-cyan-300 font-mono font-bold mb-3 shadow-[0_0_16px_rgba(6,182,212,0.25)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            <span>PROTOCOL ARCHIVE // 16 DECREES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-['Chakra_Petch'] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            MASTER THE <span className="text-cyan-400 drop-shadow-[0_0_24px_rgba(6,182,212,0.65)]">16 RULES</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mt-3 max-w-2xl font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Hover over any rule card to ignite its unique neon signature and transform the atmosphere. Click any card for strategic breakdown and interactive simulations.
          </p>
        </div>

        {/* View mode toggle & search bar */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search decrees, dice, powers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-lg bg-slate-900/90 border border-slate-700/90 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 shadow-sm w-60 font-mono backdrop-blur-md"
            />
          </div>

          {/* Grid / List Mode */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-1 shadow-xs">
            <button
              onClick={() => { setViewMode('grid'); sound.playClick(400); }}
              className={`p-1.5 rounded transition-all cursor-pointer ${
                viewMode === 'grid' ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setViewMode('list'); sound.playClick(400); }}
              className={`p-1.5 rounded transition-all cursor-pointer ${
                viewMode === 'list' ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              sound.playClick(450);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_14px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/85 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800/90 backdrop-blur-md'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Rule Cards Grid (4x4 Responsive Matrix) */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5'
            : 'flex flex-col gap-3'
        }
      >
        {filteredRules.map((rule) => {
          const isHovered = hoveredCardId === rule.id;
          const neonHoverClass = NEON_HOVER_CLASSES[rule.id] || 'neon-hover-cyan';
          const ruleNumberStr = rule.id < 10 ? `0${rule.id}` : `${rule.id}`;

          return (
            <div
              key={rule.id}
              onMouseEnter={() => {
                setHoveredCardId(rule.id);
                onHoverRule(rule.hex);
                sound.playHover(350 + rule.id * 25);
              }}
              onMouseLeave={() => {
                setHoveredCardId(null);
                onHoverRule(null);
              }}
              onClick={() => {
                sound.playClick(600);
                onSelectRule(rule);
              }}
              className={`rule-card group relative p-5 rounded-2xl bg-slate-900/85 border border-slate-800 shadow-lg backdrop-blur-md ${neonHoverClass} cursor-pointer overflow-hidden flex flex-col justify-between ${
                viewMode === 'list' ? 'flex-row items-center gap-6' : ''
              }`}
            >
              {/* Card Header & Content */}
              <div className="relative z-10 w-full">
                {/* Number & Accent label */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 group-hover:text-slate-200 font-mono transition-colors">
                    {ruleNumberStr}
                  </span>
                  <span
                    className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border"
                    style={{
                      color: rule.hex,
                      borderColor: `${rule.hex}55`,
                      backgroundColor: `${rule.hex}14`,
                    }}
                  >
                    {rule.accentColorName}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 transition-colors"
                    style={{
                      color: rule.hex,
                      borderColor: `${rule.hex}44`,
                      backgroundColor: `${rule.hex}14`,
                    }}
                  >
                    {ICON_MAP[rule.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="card-title text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors leading-tight font-['Chakra_Petch']">
                      {rule.title}
                    </h3>
                    <div className="card-subtitle text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-1">
                      {rule.subtitle}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="card-desc text-slate-300 group-hover:text-slate-100 transition-colors text-xs leading-relaxed mb-3 font-light line-clamp-2">
                  {rule.shortDesc}
                </p>

                {/* Anti-Leader Strategy Pill */}
                <div className="card-pill p-2 rounded-lg bg-slate-950/70 group-hover:bg-slate-800/90 border border-slate-800 group-hover:border-slate-700 text-[10px] text-slate-300 group-hover:text-white transition-all font-mono flex items-center gap-1.5 shadow-xs">
                  <ShieldAlert className="w-3 h-3 text-pink-400 shrink-0" />
                  <span className="truncate">
                    <strong className="text-white">Anti-Leader:</strong> {rule.antiLeaderMechanic}
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="card-footer relative z-10 w-full pt-3 mt-3 border-t border-slate-800/80 group-hover:border-slate-700 transition-colors flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Explore Tactics</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
                <span
                  className="font-bold text-[10px] uppercase tracking-wider"
                  style={{ color: rule.hex }}
                >
                  {rule.highlightDetails.impactLevel}
                </span>
              </div>

              {/* Animated Accent Bar */}
              <div
                className="accent-bar"
                style={{ backgroundColor: rule.hex }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

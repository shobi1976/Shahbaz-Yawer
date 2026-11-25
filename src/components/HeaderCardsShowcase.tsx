import React, { useState } from 'react';
import {
  Compass,
  GitCompare,
  BookOpen,
  ShieldAlert,
  Sparkles,
  Globe,
  HelpCircle,
  UserCheck,
  Mail,
  ShieldCheck,
} from 'lucide-react';

import startHereImg from '../assets/images/card_start_here_1793619412731.webp';
import notTraditionalImg from '../assets/images/card_not_traditional_1793619413728.webp';
import howToPlayImg from '../assets/images/card_how_to_play_pentagon_dice.webp';
import twelveRulesImg from '../assets/images/card_twelve_rules_1793619417848.webp';
import strategiesImg from '../assets/images/card_strategies_1793619418828.webp';
import globalCompendiumImg from '../assets/images/card_global_compendium_1793619420803.webp';
import faqImg from '../assets/images/card_faq_1793619420642.webp';
import aboutImg from '../assets/images/card_about_1793619422027.webp';
import contactImg from '../assets/images/card_contact_1793619423119.webp';
import privacyImg from '../assets/images/card_privacy_1793619424348.webp';
import type { HeaderThemeKey } from '../data/headerNavData';

export type { HeaderThemeKey };

export interface HeaderCardItem {
  id: number;
  surfaceId: number;
  name: string;
  to: string;
  hex: string;
  imageSrc: string;
  imageAlt: string;
  themeKey: HeaderThemeKey;
  icon: React.ReactNode;
}

export const HEADER_CARDS_DATA: readonly HeaderCardItem[] = [
  {
    id: 1,
    surfaceId: 1,
    name: 'Start Here',
    to: '/start-here',
    hex: '#ffb703',
    imageSrc: startHereImg,
    imageAlt: 'Ludo Dethroned Start Here Guide for First-Time Players',
    themeKey: 'start-here',
    icon: <Compass className="w-4 h-4" />,
  },
  {
    id: 2,
    surfaceId: 6,
    name: 'Not Traditional Ludo',
    to: '/not-traditional-ludo',
    hex: '#ff5e00',
    imageSrc: notTraditionalImg,
    imageAlt: 'Not Traditional Ludo Two Dice Anti-Leader Mechanics Comparison',
    themeKey: 'not-traditional',
    icon: <GitCompare className="w-4 h-4" />,
  },
  {
    id: 3,
    surfaceId: 3,
    name: 'How to Play',
    to: '/how-to-play',
    hex: '#00f0ff',
    imageSrc: howToPlayImg,
    imageAlt: 'How to Play Ludo Dethroned 5-Player Pentagonal Board Layout and Two Glowing Dice',
    themeKey: 'how-to-play',
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    id: 4,
    surfaceId: 4,
    name: '12 Rules',
    to: '/rules',
    hex: '#ff1e42',
    imageSrc: twelveRulesImg,
    imageAlt: 'The 12 Canonical Rules of Ludo Dethroned 5 Way & 4 Way Two Dice',
    themeKey: 'rules',
    icon: <ShieldAlert className="w-4 h-4" />,
  },
  {
    id: 5,
    surfaceId: 2,
    name: 'Strategies',
    to: '/strategies',
    hex: '#00ff66',
    imageSrc: strategiesImg,
    imageAlt: 'Ludo Dethroned Captain Tactics and Anti-Leader Warfare Strategy Guide',
    themeKey: 'strategies',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 6,
    surfaceId: 5,
    name: 'Global Compendium',
    to: '/global-compendium',
    hex: '#00a6ff',
    imageSrc: globalCompendiumImg,
    imageAlt: 'Global Compendium Multilingual Translations in 15 World Languages',
    themeKey: 'global-compendium',
    icon: <Globe className="w-4 h-4" />,
  },
  {
    id: 7,
    surfaceId: 9,
    name: 'FAQ',
    to: '/faq',
    hex: '#ffe600',
    imageSrc: faqImg,
    imageAlt: 'Frequently Asked Questions on Ludo Dethroned 5 Way & 4 Way Two Dice Mechanics',
    themeKey: 'faq',
    icon: <HelpCircle className="w-4 h-4" />,
  },
  {
    id: 8,
    surfaceId: 10,
    name: 'About',
    to: '/about',
    hex: '#c026ff',
    imageSrc: aboutImg,
    imageAlt: 'About Ludo Dethroned 5 Way & 4 Way Two Dice Creator and Origin Story',
    themeKey: 'about',
    icon: <UserCheck className="w-4 h-4" />,
  },
  {
    id: 9,
    surfaceId: 11,
    name: 'Contact',
    to: '/contact',
    hex: '#00f5d4',
    imageSrc: contactImg,
    imageAlt: 'Contact and Community Dispatch for Ludo Dethroned Players',
    themeKey: 'contact',
    icon: <Mail className="w-4 h-4" />,
  },
  {
    id: 10,
    surfaceId: 12,
    name: 'Privacy',
    to: '/privacy',
    hex: '#ff2a85',
    imageSrc: privacyImg,
    imageAlt: 'Ludo Dethroned Player Privacy Policy and Data Security Guidelines',
    themeKey: 'privacy',
    icon: <ShieldCheck className="w-4 h-4" />,
  },
];

interface AnimatedCardVisualProps {
  card: HeaderCardItem;
  isHovered: boolean;
  compact?: boolean;
}

export const AnimatedCardVisual: React.FC<AnimatedCardVisualProps> = ({
  card,
  isHovered,
  compact = false,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      style={{
        borderColor: isHovered ? `${card.hex}95` : 'rgba(2, 151, 222, 0.35)',
      }}
      className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden border bg-[#02070A] select-none ${
        compact ? 'mb-1.5' : 'mb-2.5'
      }`}
    >
      {/* Base 3D Artwork in Ultra-Light WebP with Async Decoding & Fallback */}
      {!imgFailed ? (
        <img
          src={card.imageSrc}
          alt={card.imageAlt}
          width={520}
          height={388}
          decoding="async"
          loading={card.id <= 4 ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          draggable={false}
          onError={() => setImgFailed(true)}
          className="w-full h-full object-contain object-center anim-card-image transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div
          style={{
            background: `radial-gradient(circle at 50% 35%, ${card.hex}45 0%, rgba(2, 7, 10, 0.96) 75%)`,
          }}
          className="w-full h-full flex items-center justify-center text-white"
        >
          <div className="p-3 rounded-2xl bg-[#02070A]/85 border border-white/20">{card.icon}</div>
        </div>
      )}

      {/* Subtle Vignette Scrim so Animated Overlays Pop Clearly */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#02070A]/75 via-transparent to-[#02070A]/30 pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════════════════
          PURE VISUAL THEME-SPECIFIC ANIMATION OVERLAYS (NO SENTENCES)
         ══════════════════════════════════════════════════════════════════════ */}
      {card.themeKey === 'start-here' && (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2">
          <div className="self-end w-7 h-7 rounded-full bg-[#02070A]/80 border border-amber-400/80 flex items-center justify-center shadow-[0_0_12px_rgba(255,183,3,0.55)]">
            <svg viewBox="0 0 36 36" className="w-5 h-5 anim-compass-needle">
              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,183,3,0.45)" strokeWidth="1.5" strokeDasharray="3 3" />
              <polygon points="18,5 21,18 18,16 15,18" fill="#ffb703" />
              <polygon points="18,31 21,18 18,20 15,18" fill="#94a3b8" />
              <circle cx="18" cy="18" r="2.2" fill="#ffffff" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-1.5 pb-0.5">
            <span className="anim-step-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#ffb703]" />
            <span className="w-3 h-0.5 bg-amber-400/65 rounded" />
            <span className="anim-step-2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#ffb703]" />
            <span className="w-3 h-0.5 bg-amber-400/65 rounded" />
            <span className="anim-step-3 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#ffb703]" />
          </div>
        </div>
      )}

      {card.themeKey === 'not-traditional' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="anim-split-beam h-full w-0.5 bg-gradient-to-b from-amber-300 via-[#ff5e00] to-amber-300 shadow-[0_0_14px_#ff5e00]" />
          <div className="anim-dice-float absolute bottom-1.5 right-1.5 flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded bg-[#02070A]/90 border border-[#ff5e00] shadow-[0_0_8px_#ff5e00] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white" />
            </span>
            <span className="w-3.5 h-3.5 rounded bg-[#02070A]/90 border border-amber-400 shadow-[0_0_8px_#ffb703] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white" />
            </span>
          </div>
        </div>
      )}

      {card.themeKey === 'how-to-play' && (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-2">
          <div className="relative h-5 flex items-center px-1.5 rounded-md bg-[#02070A]/75 border border-cyan-400/45">
            <div className="w-full flex items-center justify-between px-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              <span className="w-2 h-2 rounded-full border border-cyan-300 bg-cyan-400/30" />
            </div>
            <span className="anim-token-hop absolute left-2 w-2.5 h-2.5 rounded-full bg-[#00f0ff] border border-white shadow-[0_0_10px_#00f0ff]" />
          </div>
        </div>
      )}

      {card.themeKey === 'rules' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 anim-ring-spin opacity-85">
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#ff1e42"
              strokeWidth="1.6"
              strokeDasharray="4 6"
            />
            {Array.from({ length: 12 }).map((_, i) => {
              const rad = (i * 30 * Math.PI) / 180;
              const cx = 50 + 38 * Math.cos(rad);
              const cy = 50 + 38 * Math.sin(rad);
              return <circle key={i} cx={cx} cy={cy} r="2.3" fill="#ffb703" />;
            })}
          </svg>
        </div>
      )}

      {card.themeKey === 'strategies' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="anim-shield-breath absolute inset-1 rounded-full border-2 border-[#00ff66]/75 bg-[#00ff66]/10 shadow-[0_0_14px_rgba(0,255,102,0.45)]" />
            <svg viewBox="0 0 80 80" className="w-16 h-16 anim-radar-sweep">
              <defs>
                <linearGradient id="radarGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00ff66" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#00ff66" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M40,40 L40,6 A34,34 0 0,1 68,21 Z" fill="url(#radarGrad)" />
              <line x1="40" y1="40" x2="40" y2="6" stroke="#00ff66" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      )}

      {card.themeKey === 'global-compendium' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 anim-ring-spin opacity-80">
            <ellipse
              cx="50"
              cy="50"
              rx="42"
              ry="18"
              fill="none"
              stroke="#00a6ff"
              strokeWidth="1.5"
              transform="rotate(-22 50 50)"
            />
          </svg>
          <svg viewBox="0 0 100 100" className="absolute w-16 h-16 sm:w-20 sm:h-20 anim-ring-spin-reverse opacity-75">
            <ellipse
              cx="50"
              cy="50"
              rx="42"
              ry="18"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.3"
              strokeDasharray="5 4"
              transform="rotate(28 50 50)"
            />
          </svg>
        </div>
      )}

      {card.themeKey === 'faq' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="anim-float-bob relative w-14 h-14 flex items-center justify-center">
            <span className="anim-sonar-1 absolute inset-1 rounded-full border border-[#ffe600]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffe600] shadow-[0_0_14px_#ffe600]" />
          </div>
        </div>
      )}

      {card.themeKey === 'about' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <span className="anim-ember-1 absolute bottom-3 left-1/4 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fbbf24]" />
          <span className="anim-ember-2 absolute bottom-2 left-1/2 w-2 h-2 rounded-full bg-[#c026ff] shadow-[0_0_10px_#c026ff]" />
          <span className="anim-ember-3 absolute bottom-3 right-1/4 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
        </div>
      )}

      {card.themeKey === 'contact' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <span className="anim-sonar-1 absolute inset-2 rounded-full border-2 border-[#00f5d4]" />
            <span className="anim-sonar-2 absolute inset-2 rounded-full border-2 border-amber-300" />
            <span className="w-2 h-2 rounded-full bg-[#00f5d4] shadow-[0_0_10px_#00f5d4]" />
          </div>
        </div>
      )}

      {card.themeKey === 'privacy' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="anim-laser-scan w-4/5 h-0.5 bg-gradient-to-r from-transparent via-[#ff2a85] to-transparent shadow-[0_0_14px_#ff2a85]" />
        </div>
      )}
    </div>
  );
};

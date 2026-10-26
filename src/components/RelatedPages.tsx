import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldAlert, Sparkles, HelpCircle, UserCheck, Mail, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface PageItem {
  path: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  accentHex: string;
}

const ALL_PAGES: PageItem[] = [
  {
    path: '/how-to-play',
    title: 'How to Play',
    description: '14-part comprehensive guide, step-by-step turns, safe squares, and example scenarios.',
    icon: <BookOpen className="w-5 h-5 text-amber-700" />,
    badge: 'TUTORIAL',
    accentHex: '#f59e0b'
  },
  {
    path: '/rules',
    title: 'The 12 Rules',
    description: 'The complete canonical rules: 5-wing board, 2 dice, Lucky 7, pairs, and missed capture penalty.',
    icon: <ShieldAlert className="w-5 h-5 text-[#0077be]" />,
    badge: 'CANONICAL',
    accentHex: '#0077be'
  },
  {
    path: '/strategies',
    title: 'Strategies & Tactics',
    description: '8 essential tactical doctrines to control the track, build safe pairs, and target the match leader.',
    icon: <Sparkles className="w-5 h-5 text-pink-700" />,
    badge: 'DOCTRINE',
    accentHex: '#ec4899'
  },
  {
    path: '/global-compendium',
    title: 'Global Compendium',
    description: 'Complete 4-part philosophical essay, canonical rules, and comparative matrix in 15 world languages.',
    icon: <Globe className="w-5 h-5 text-cyan-700" />,
    badge: '15 LANGUAGES',
    accentHex: '#06b6d4'
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    description: 'Canonical answers confirmed directly by the game’s creator across all gameplay categories.',
    icon: <HelpCircle className="w-5 h-5 text-emerald-700" />,
    badge: 'CREATOR VERIFIED',
    accentHex: '#10b981'
  },
  {
    path: '/about',
    title: 'About the Game',
    description: 'The philosophical vision, 5 Way & 4 Way design, and creator manifesto.',
    icon: <UserCheck className="w-5 h-5 text-purple-700" />,
    badge: 'ORIGINS',
    accentHex: '#a855f7'
  },
  {
    path: '/contact',
    title: 'Contact & Support',
    description: 'Official inquiries, tournament proposals, rule clarifications, and player community support.',
    icon: <Mail className="w-5 h-5 text-blue-700" />,
    badge: 'CONNECT',
    accentHex: '#3b82f6'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'Transparent zero-tracking policy, fair-play guidelines, and browser privacy commitments.',
    icon: <ShieldCheck className="w-5 h-5 text-slate-800" />,
    badge: 'POLICY',
    accentHex: '#64748b'
  }
];

interface RelatedPagesProps {
  currentPath: string;
}

export const RelatedPages: React.FC<RelatedPagesProps> = ({ currentPath }) => {
  const otherPages = ALL_PAGES.filter(p => p.path !== currentPath);

  return (
    <section className="mt-20 pt-12 border-t border-white/60">
      <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-md border border-[#0077be]/80 text-[#0077be] text-xs font-mono font-black tracking-widest uppercase mb-2 shadow-xs">
              <span>EXPLORE THE COMPENDIUM</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-wider">
              Related Pages
            </h2>
            <p className="text-slate-800 font-bold text-xs font-mono mt-1">
              Played on a 3D board with 3D tokens and animated 3D dice.
            </p>
          </div>
          <p className="text-slate-800 font-bold text-xs font-mono">
            Explore complete rules, tutorials, strategies, and official documents
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            onClick={() => sound.playClick(450)}
            style={{ borderColor: `${page.accentHex}85` }}
            className="group p-5 rounded-2xl bg-white/24 hover:bg-white/38 backdrop-blur-md border-2 shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="p-2 rounded-xl bg-white/35 backdrop-blur-sm border border-white/75 group-hover:scale-110 transition-transform">
                  {page.icon}
                </div>
                <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-white/40 backdrop-blur-sm border border-white/75 text-slate-900">
                  {page.badge}
                </span>
              </div>
              <h3 className="font-['Chakra_Petch'] font-black text-base text-slate-950 group-hover:text-black transition-colors mb-1.5">
                {page.title}
              </h3>
              <p className="text-xs text-slate-800 font-medium font-['Outfit'] leading-relaxed line-clamp-2">
                {page.description}
              </p>
            </div>

            <div className="relative z-10 mt-4 pt-3 border-t border-white/60 flex items-center justify-between text-xs font-mono font-black text-[#0077be] group-hover:text-black transition-colors">
              <span>View Page</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

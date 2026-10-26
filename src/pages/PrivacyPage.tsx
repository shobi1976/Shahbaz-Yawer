import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="Privacy Policy | Ludo Dethroned 5 Way & 4 Way Two Dice — 3D Ludo-style strategy game"
        description="Official Privacy Policy for Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game. Browser-based gameplay with no account requirements, zero tracking, and transparent data practices."
        canonicalPath="/privacy"
      />

      {/* Header & Single H1 — Unified Frosted Glass Header Card */}
      <div className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-[#0077be]/80 text-[#0077be] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#0077be]" style={{ color: '#0077be' }} />
            <span>LEGAL & COMPLIANCE • PRIVACY CHARTER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
            Privacy <span className="text-[#0077be]" style={{ color: '#0077be' }}>Policy</span>
          </h1>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Our commitment to player privacy, transparent data practices, and zero-tracking tabletop recreation.
          </p>
        </div>
      </div>

      {/* Core Privacy Overview Card — Frosted Glass */}
      <div className="mb-16 space-y-6">
        <div className="p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl space-y-6 relative overflow-hidden transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
          <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/65 pb-4">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#0077be]" style={{ color: '#0077be' }} />
              <h2 className="text-xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-wider">
                Privacy Notice
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-slate-800">
              Updated: October 2026
            </span>
          </div>

          <div className="relative z-10 p-5 rounded-2xl bg-white/32 backdrop-blur-sm border border-[#0077be]/60 text-slate-950 font-mono font-bold text-sm leading-relaxed">
            Ludo Dethroned 5 Way & 4 Way Two Dice operates directly in your browser. We do not require account registration, passwords, or personal tracking.
          </div>

          <div className="relative z-10 space-y-4 text-xs sm:text-sm text-slate-900 font-medium font-['Outfit'] leading-relaxed">
            <h3 className="text-base font-black text-slate-950 font-['Chakra_Petch'] uppercase mt-6">
              1. Information Collection & Client-Side Architecture
            </h3>
            <p>
              When you play Ludo Dethroned 5 Way & 4 Way Two Dice, the game state, dice rolls, audio preferences, and settings are handled directly inside your client browser. We do not maintain user profile databases, nor do we sell or monetize personal browsing history.
            </p>

            <h3 className="text-base font-black text-slate-950 font-['Chakra_Petch'] uppercase mt-6">
              2. Cookies & Local Storage
            </h3>
            <p>
              We only use browser local storage or session memory for gameplay functionality—such as remembering if audio is muted or tracking current match room state. No tracking cookies are used to follow your activity across external third-party sites.
            </p>

            <h3 className="text-base font-black text-slate-950 font-['Chakra_Petch'] uppercase mt-6">
              3. Terms of Use & Fair Play
            </h3>
            <p className="p-4 italic bg-white/30 backdrop-blur-sm border border-white/75 rounded-xl text-slate-950 font-bold">
              Ludo Dethroned 5 Way & 4 Way Two Dice is provided for tabletop recreation and fair competitive strategy. The game is governed by the 12 canonical rules confirmed by the game's creator. Fair play rules apply. No real-money gambling.
            </p>

            <h3 className="text-base font-black text-slate-950 font-['Chakra_Petch'] uppercase mt-6">
              4. Inquiries & Contact
            </h3>
            <p>
              If you have any questions about this Privacy Policy or the rules of the game, visit{' '}
              <a href="https://ludodethroned.com" className="text-[#0077be] font-bold underline hover:opacity-80" style={{ color: '#0077be' }}>
                https://ludodethroned.com
              </a>{' '}
              or reach out at{' '}
              <a href="mailto:support@ludodethroned.com" className="text-[#0077be] font-bold underline hover:opacity-80" style={{ color: '#0077be' }}>
                support@ludodethroned.com
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/privacy" />
    </div>
  );
};

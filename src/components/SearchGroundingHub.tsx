import React, { useState } from 'react';
import { 
  Search, Globe, Sparkles, ExternalLink, RefreshCw, 
  CheckCircle2, BookOpen, Trophy, ShieldAlert, Languages, ArrowRight
} from 'lucide-react';
import { sound } from '../utils/audio';

interface GroundedResult {
  answer: string;
  searchQueries: string[];
  sources: { title: string; url: string }[];
}

export const SearchGroundingHub: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'rules' | 'tournaments' | 'meta' | 'localization'>('rules');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GroundedResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const presets = [
    {
      category: 'rules' as const,
      label: '5-Player Rules & Lucky 7',
      prompt: 'How does the Lucky 7 deployment bonus and 2-dice split movement differ from traditional 4-player Ludo rules?'
    },
    {
      category: 'meta' as const,
      label: 'Anti-Leader 4v1 Coalition Meta',
      prompt: 'What are the top tabletop game theory tactics against runaway leaders in asymmetric 5-player board games like Ludo Emperor?'
    },
    {
      category: 'tournaments' as const,
      label: 'Global 5-Way Esports & Tournaments',
      prompt: 'Are there official 5-player pentagonal Ludo tournaments, and what are standard bracket timing rules?'
    },
    {
      category: 'localization' as const,
      label: 'Urdu & Hindi Localization Nuances',
      prompt: 'Verify cultural accuracy and terminology for "Missed Capture Penalty" and "Anti-Leader" in Urdu, Hindi, and Arabic.'
    }
  ];

  const handleSearch = async (targetQuery?: string, targetCat?: typeof category) => {
    const q = targetQuery || query;
    const cat = targetCat || category;
    if (!q.trim()) return;

    sound.playClick(500);
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/search-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, category: cat }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Search grounding request failed.');
      }

      const data: GroundedResult = await res.json();
      setResult(data);
      sound.playLucky7();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to connect to Google Search Grounding engine.');
      sound.playAntiLeaderAlert();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="grounding-hub" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80">
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>GOOGLE SEARCH GROUNDING // LIVE KNOWLEDGE MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white uppercase tracking-tight">
            LIVE SEARCH <span className="text-cyan-400">GROUNDING ORACLE</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 font-['Outfit']">
            Powered by <strong>Gemini 3.8 Flash</strong> with real-time <strong>Google Search data</strong>. Verify 16 canonical decrees, explore the 4v1 anti-leader meta, research competitive tournaments, and cross-reference global localization.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          <button
            onClick={() => { setCategory('rules'); sound.playClick(400); }}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              category === 'rules'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> 1. Canonical Rules
          </button>
          <button
            onClick={() => { setCategory('meta'); sound.playClick(400); }}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              category === 'meta'
                ? 'bg-pink-500 text-slate-950 shadow-[0_0_12px_rgba(236,72,153,0.4)]'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> 2. Anti-Leader Meta
          </button>
          <button
            onClick={() => { setCategory('tournaments'); sound.playClick(400); }}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              category === 'tournaments'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" /> 3. Live Tournaments
          </button>
          <button
            onClick={() => { setCategory('localization'); sound.playClick(400); }}
            className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              category === 'localization'
                ? 'bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Languages className="w-3.5 h-3.5" /> 4. 15-Language Sync
          </button>
        </div>

        {/* Input Bar */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-cyan-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Ask anything about 5-way rules, Lucky 7 odds, tournament brackets, or translations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-slate-950/90 border border-slate-700/80 text-white placeholder-slate-400 font-['Outfit'] text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 shadow-inner"
            />
            <button
              onClick={() => handleSearch()}
              disabled={isLoading || !query.trim()}
              className="absolute right-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-mono text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>SEARCHING...</span>
                </>
              ) : (
                <>
                  <span>QUERY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* One-Click Presets */}
        <div className="max-w-3xl mx-auto mb-8 flex flex-wrap gap-2 items-center justify-center">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-1">
            Quick Prompts:
          </span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(p.prompt);
                setCategory(p.category);
                handleSearch(p.prompt, p.category);
              }}
              className="px-3 py-1 rounded-lg bg-slate-950/70 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 hover:text-cyan-300 font-mono transition-colors cursor-pointer"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Search Grounding Result View */}
        {error && (
          <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-red-950/40 border border-red-800/80 text-red-300 text-xs font-mono mb-6">
            ⚠️ {error}
          </div>
        )}

        {result && (
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] animate-in fade-in duration-300">
            {/* Header info */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                  Grounded Response via Google Search
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                GEMINI 3.8 FLASH
              </span>
            </div>

            {/* Answer Content */}
            <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-['Outfit'] mb-6">
              {result.answer}
            </div>

            {/* Live Search Queries & Source Citations */}
            {(result.searchQueries.length > 0 || result.sources.length > 0) && (
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                {result.searchQueries.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap text-[11px] font-mono text-slate-400">
                    <span className="text-slate-500">Google Search Queries:</span>
                    {result.searchQueries.map((sq, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        "{sq}"
                      </span>
                    ))}
                  </div>
                )}

                {result.sources.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-slate-500 block">Verified Web Citations:</span>
                    <div className="flex flex-wrap gap-2">
                      {result.sources.map((src, idx) => (
                        <a
                          key={idx}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-cyan-300 text-xs font-mono transition-colors"
                        >
                          <span className="truncate max-w-[200px]">{src.title}</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

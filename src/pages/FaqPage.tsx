import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronDown, Search, X, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { CANONICAL_FAQS } from '../data/canonicalContent';
import { sound } from '../utils/audio';

export const FaqPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqCategories = useMemo(() => {
    const categories = Array.from(new Set(CANONICAL_FAQS.map(faq => faq.category)));
    return ['All', ...categories];
  }, []);

  const filteredFaqs = useMemo(() => {
    return CANONICAL_FAQS.filter(faq => {
      const matchesCategory = activeFaqCategory === 'All' || faq.category === activeFaqCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        faq.q.toLowerCase().includes(q) ||
        faq.a.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q)
      );
    });
  }, [activeFaqCategory, searchQuery]);

  const toggleFaq = (index: number) => {
    sound.playClick(400);
    setOpenFaq(prev => prev === index ? null : index);
  };

  const handleCategoryChange = (cat: string) => {
    sound.playClick(400);
    setActiveFaqCategory(cat);
    setOpenFaq(null);
  };

  const clearSearch = () => {
    sound.playClick(300);
    setSearchQuery('');
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="Frequently Asked Questions | Ludo Dethroned 5 Way & 4 Way Two Dice — 3D Ludo-style strategy game"
        description="Official FAQ for Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game. Questions and answers covering board mechanics, two dice, pairs, missed capture penalties, historical origins (Pachisi, Alfred Collier, Emperor Akbar), regional names, and multilingual spelling variations."
        canonicalPath="/faq"
      />

      {/* Header & Single H1 + Search & Category Filters — Unified Frosted Glass Header Card */}
      <div className="text-center mb-10 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-emerald-500/80 text-emerald-800 text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>CANONICAL COMPENDIUM • SECTION 7</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
            Frequently Asked <span className="text-emerald-700">Questions</span>
          </h1>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Every question and answer confirmed directly by the game’s creator. Learn about board mechanics, dice rules, capturing, pairs, missed capture penalties, historical origins from ancient Pachisi to Emperor Akbar, global regional adaptations, and multi-language searches.
          </p>

          {/* Search Input Bar — Inside Unified Frosted Glass Card */}
          <div className="max-w-2xl mx-auto mt-7">
            <div className="relative">
              <Search className="w-4 h-4 text-emerald-700 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. Akbar, Pachisi, Alfred Collier, Lodo, pairs, penalty, Urdu)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/35 backdrop-blur-md border-2 border-white/75 text-slate-950 placeholder-slate-700 font-medium text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500/50 transition-all font-['Outfit'] shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-700 hover:text-black transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Buttons — Inside Unified Frosted Glass Card */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pt-5 pb-2 scrollbar-none">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-black whitespace-nowrap transition-all cursor-pointer border backdrop-blur-md ${
                  activeFaqCategory === cat
                    ? 'bg-emerald-500 text-black border-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-105'
                    : 'bg-white/32 hover:bg-white/50 text-slate-950 border-white/75'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count — Inside Unified Frosted Glass Card */}
          <div className="mt-4 pt-3 border-t border-white/60 flex items-center justify-between text-xs font-mono font-bold text-slate-900 px-1">
            <span>
              Showing <span className="text-emerald-700 font-black">{filteredFaqs.length}</span> question{filteredFaqs.length === 1 ? '' : 's'}
              {activeFaqCategory !== 'All' && (
                <> in <span className="text-slate-950 font-black">{activeFaqCategory}</span></>
              )}
              {searchQuery && (
                <> matching "<span className="text-slate-950 font-black">{searchQuery}</span>"</>
              )}
            </span>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="text-emerald-800 font-black hover:underline cursor-pointer"
              >
                Reset search
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Accordion — Frosted Glass */}
      <div className="space-y-3 mb-16">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/28 backdrop-blur-md border-2 border-white/70 rounded-2xl shadow-lg">
            <Sparkles className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
            <h3 className="text-slate-950 font-black font-mono text-sm uppercase">No matching questions found</h3>
            <p className="text-slate-800 font-medium text-xs mt-1">Try another search term or click "All" to browse all categories.</p>
            <button
              onClick={() => {
                setActiveFaqCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-mono font-black transition-all cursor-pointer"
            >
              Show All Questions
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={`${faq.category}-${faq.q}-${index}`}
                className="border-2 border-white/65 bg-white/24 hover:bg-white/38 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-200 hover:border-emerald-500 shadow-lg relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity" />
                <button
                  onClick={() => toggleFaq(index)}
                  className="relative z-10 w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-mono font-bold text-xs sm:text-sm text-slate-950 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span className="flex items-start sm:items-center gap-3">
                    <span className="text-black text-xs px-2 py-0.5 rounded bg-emerald-400 shrink-0 mt-0.5 sm:mt-0 font-black">
                      Q{index + 1}
                    </span>
                    <span className="leading-snug text-slate-950 font-black">{faq.q}</span>
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/40 backdrop-blur-sm text-slate-900 border border-white/75">
                      {faq.category}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-emerald-700 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {isOpen && (
                  <div className="relative z-10 px-4 pb-5 sm:px-5 sm:pb-6 text-slate-900 text-xs sm:text-sm leading-relaxed border-t border-white/65 pt-3.5 font-['Outfit'] font-medium">
                    <p>{faq.a}</p>
                    <div className="mt-3 sm:hidden">
                      <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/40 text-slate-900 border border-white/75">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/faq" />
    </div>
  );
};

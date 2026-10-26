import React, { useState } from 'react';
import { Mail, Globe, Send, MessageSquare, Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { sound } from '../utils/audio';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Rules Clarification',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playLucky7();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="Contact | Ludo Dethroned 5 Way & 4 Way Two Dice — 3D Ludo-style strategy game"
        description="Contact the creator and community team of Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game. Questions, tournament proposals, rule clarifications, and feedback welcome."
        canonicalPath="/contact"
      />

      {/* Header & Single H1 — Unified Frosted Glass Header Card */}
      <div className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-blue-500/80 text-blue-800 text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <Mail className="w-4 h-4 text-blue-700" />
            <span>OFFICIAL CHANNELS • CREATOR LIAISON</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
            Contact <span className="text-[#0077be]">Ludo Dethroned 5 Way & 4 Way Two Dice</span>
          </h1>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Get in touch with the creator and development team for rules clarifications, competitive feedback, and platform inquiries.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Official Details — Frosted Glass */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
            <div className="relative z-10">
              <h2 className="text-xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#0077be]" />
                <span>Official Channels</span>
              </h2>

              <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed mb-6 font-['Outfit']">
                For inquiries, rules questions, and feedback regarding Ludo Dethroned 5 Way & 4 Way Two Dice, please visit the official website.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/75">
                  <div className="text-xs font-mono font-black text-slate-800 uppercase tracking-wider mb-1">Official Website</div>
                  <a 
                    href="https://ludodethroned.com" 
                    className="text-[#0077be] hover:text-black font-mono text-sm font-black flex items-center gap-2 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>https://ludodethroned.com</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/75">
                  <div className="text-xs font-mono font-black text-slate-800 uppercase tracking-wider mb-1">Email Support</div>
                  <a 
                    href="mailto:support@ludodethroned.com" 
                    className="text-[#0077be] hover:text-black font-mono text-sm font-black flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>support@ludodethroned.com</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/60">
                <div className="text-xs font-mono font-bold text-slate-800 mb-2">Creator & Lead Developer</div>
                <div className="font-['Chakra_Petch'] font-black text-slate-950 text-base">Shahbaz Yawer Khan</div>
                <div className="text-xs font-mono font-black text-pink-700 mt-1">Creator of Ludo Dethroned 5 Way & 4 Way Two Dice</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Feedback / Inquiry Form — Frosted Glass */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
            <div className="relative z-10">
              <h2 className="text-xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-wider mb-2">
                Send a Dispatch
              </h2>
              <p className="text-xs text-slate-800 font-mono font-bold mb-6">
                Have a rules question or gameplay proposal? Dispatch directly to the developer team.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white/35 backdrop-blur-md border-2 border-emerald-500 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-400 text-black flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black font-['Chakra_Petch'] text-slate-950 uppercase">Dispatch Transmitted</h3>
                  <p className="text-xs sm:text-sm text-slate-900 font-medium font-['Outfit']">
                    Thank you! Your inquiry regarding Ludo Dethroned 5 Way & 4 Way Two Dice has been recorded.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/50 hover:bg-white/75 border border-white/80 text-xs font-mono font-black text-slate-950 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-black text-slate-900 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Commander Alpha"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/35 backdrop-blur-sm border border-white/75 text-slate-950 font-bold text-sm focus:outline-none focus:border-[#0077be] font-mono transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-black text-slate-900 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="commander@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/35 backdrop-blur-sm border border-white/75 text-slate-950 font-bold text-sm focus:outline-none focus:border-[#0077be] font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-black text-slate-900 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/35 backdrop-blur-sm border border-white/75 text-slate-950 font-bold text-sm focus:outline-none focus:border-[#0077be] font-mono transition-colors"
                    >
                      <option>Rules Clarification (The 12 Rules)</option>
                      <option>Missed Capture Penalty Inquiry</option>
                      <option>Tournament Room & Matchmaking</option>
                      <option>General Feedback / Suggestion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-black text-slate-900 uppercase tracking-wider mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your rule inquiry or gameplay feedback..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/35 backdrop-blur-sm border border-white/75 text-slate-950 font-medium text-sm focus:outline-none focus:border-[#0077be] font-['Outfit'] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-[#0077be] hover:bg-[#00609a] text-white font-black font-['Chakra_Petch'] text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(0,119,190,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Dispatch</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/contact" />
    </div>
  );
};

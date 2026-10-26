import React, { useState } from 'react';
import { 
  Volume2, Mic, Sparkles, DoorOpen, Trophy, Music, Pause, 
  Radio, Check, Disc, Heart 
} from 'lucide-react';
import { sound } from '../utils/audio';

export const FeaturesHub: React.FC = () => {
  const [isPlayingOST, setIsPlayingOST] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'voice' | 'rooms' | 'tournaments' | 'ost'>('voice');
  const [roomPasscode, setRoomPasscode] = useState('DETHRONED-77');
  const [roomCreated, setRoomCreated] = useState(false);

  const ostTracks = [
    { title: 'Neon Pentagram Overdrive', bpm: '128 BPM', mood: 'Aggressive Synthwave', duration: '3:42' },
    { title: 'Anti-Leader Protocol (Bass Drop)', bpm: '135 BPM', mood: 'Dark Electro Cyber', duration: '4:15' },
    { title: 'Lucky 7 Warp Gate', bpm: '118 BPM', mood: 'Vapor Synth', duration: '2:58' },
    { title: 'Dethroned Sanctum Ascension', bpm: '140 BPM', mood: 'High Energy Chiptune', duration: '3:20' },
    { title: 'Stasis Trap in the Alley', bpm: '105 BPM', mood: 'Cyber Noir Lo-Fi', duration: '3:10' },
  ];

  const handleToggleMusic = () => {
    const isPlaying = sound.toggleAmbientMusic();
    setIsPlayingOST(isPlaying);
  };

  const handleVoiceTest = (type: 'turn' | 'big_numbers' | 'shine' | 'cheer') => {
    sound.playVoiceClip(type);
  };

  return (
    <section id="features-hub" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Unified Frosted Glass Header Card (Heading + Written Message + Tabs) */}
      <div className="text-center mb-10 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        {/* Specular Frosted Sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-md border border-[#0077be]/80 text-[#0077be] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <Radio className="w-3.5 h-3.5 text-[#0077be]" />
            <span>CYBER SOCIAL & MULTIPLAYER ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
            VOICE, ROOMS & <span className="text-[#0077be]" style={{ color: '#0077be' }}>SYNTH SOUNDTRACK</span>
          </h2>
          <p className="text-slate-800 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit']">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>
          <p className="text-slate-800 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit']">
            Experience real-time voice taunts, private 5 Way & 4 Way custom lounges, championship brackets, and an adaptive 8-track synthwave soundtrack that reacts to match tension.
          </p>
        </div>

        {/* Hub Navigation Tabs — Inside Unified Frosted Glass Card */}
        <div className="relative z-10 flex items-center justify-center gap-2 mt-8 flex-wrap">
          <button
            onClick={() => { setActiveTab('voice'); sound.playClick(400); }}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-black tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 backdrop-blur-md border-2 ${
              activeTab === 'voice'
                ? 'bg-cyan-400 text-black border-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.45)]'
                : 'bg-white/32 hover:bg-white/50 text-slate-950 border-white/75 shadow-sm'
            }`}
          >
            <Mic className="w-4 h-4 text-[#0077be]" /> 1. Voice & Emojis
          </button>
          <button
            onClick={() => { setActiveTab('rooms'); sound.playClick(450); }}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-black tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 backdrop-blur-md border-2 ${
              activeTab === 'rooms'
                ? 'bg-cyan-400 text-black border-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.45)]'
                : 'bg-white/32 hover:bg-white/50 text-slate-950 border-white/75 shadow-sm'
            }`}
          >
            <DoorOpen className="w-4 h-4 text-pink-600" /> 2. 5 Way & 4 Way Rooms
          </button>
          <button
            onClick={() => { setActiveTab('tournaments'); sound.playClick(500); }}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-black tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 backdrop-blur-md border-2 ${
              activeTab === 'tournaments'
                ? 'bg-cyan-400 text-black border-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.45)]'
                : 'bg-white/32 hover:bg-white/50 text-slate-950 border-white/75 shadow-sm'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-600" /> 3. Grand Tournaments
          </button>
          <button
            onClick={() => { setActiveTab('ost'); sound.playClick(550); }}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-black tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 backdrop-blur-md border-2 ${
              activeTab === 'ost'
                ? 'bg-cyan-400 text-black border-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.45)]'
                : 'bg-white/32 hover:bg-white/50 text-slate-950 border-white/75 shadow-sm'
            }`}
          >
            <Music className="w-4 h-4 text-emerald-600" /> 4. Synthwave Music Deck
          </button>
        </div>
      </div>

      {/* Tab 1: Voice & Emojis — Frosted Glass Boxes */}
      {activeTab === 'voice' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl flex flex-col justify-between relative overflow-hidden transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-pink-700 font-mono text-xs font-black uppercase mb-2">
                <Mic className="w-4 h-4" />
                <span>One-Tap Audio Taunts</span>
              </div>
              <h3 className="text-2xl font-black font-['Chakra_Petch'] text-slate-950 mb-3">
                Live Speech Synthesis & Spoken Banter
              </h3>
              <p className="text-slate-800 font-medium text-sm leading-relaxed mb-6">
                Fire off signature spoken voice clips during your opponent's dice rolls to disrupt their concentration and rally your alliance hunters!
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleVoiceTest('big_numbers')}
                  className="p-3 rounded-xl bg-white/28 hover:bg-white/50 backdrop-blur-sm text-left transition-all border border-white/70 hover:border-pink-500 cursor-pointer group shadow-xs"
                >
                  <div className="text-pink-700 text-xs font-mono font-black flex items-center justify-between transition-colors">
                    <span>"Big numbers!"</span>
                    <Volume2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-800 font-medium mt-1">Shahbaz signature roll taunt</div>
                </button>

                <button
                  onClick={() => handleVoiceTest('shine')}
                  className="p-3 rounded-xl bg-white/28 hover:bg-white/50 backdrop-blur-sm text-left transition-all border border-white/70 hover:border-amber-500 cursor-pointer group shadow-xs"
                >
                  <div className="text-amber-700 text-xs font-mono font-black flex items-center justify-between transition-colors">
                    <span>"My turn to shine!"</span>
                    <Volume2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-800 font-medium mt-1">Mughal 6-roll victory cry</div>
                </button>

                <button
                  onClick={() => handleVoiceTest('turn')}
                  className="p-3 rounded-xl bg-white/28 hover:bg-white/50 backdrop-blur-sm text-left transition-all border border-white/70 hover:border-[#0077be] cursor-pointer group shadow-xs"
                >
                  <div className="text-[#0077be] text-xs font-mono font-black flex items-center justify-between transition-colors">
                    <span>"Your turn!"</span>
                    <Volume2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-800 font-medium mt-1">Anees quick pace reminder</div>
                </button>

                <button
                  onClick={() => handleVoiceTest('cheer')}
                  className="p-3 rounded-xl bg-white/28 hover:bg-white/50 backdrop-blur-sm text-left transition-all border border-white/70 hover:border-emerald-500 cursor-pointer group shadow-xs"
                >
                  <div className="text-emerald-700 text-xs font-mono font-black flex items-center justify-between transition-colors">
                    <span>"Anti-Leader War!"</span>
                    <Volume2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-800 font-medium mt-1">Alliance siren callout</div>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl flex flex-col justify-between relative overflow-hidden transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-amber-700 font-mono text-xs font-black uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>3D Reactive Emojis</span>
              </div>
              <h3 className="text-2xl font-black font-['Chakra_Petch'] text-slate-950 mb-3">
                Board-Projected Hologram Emojis
              </h3>
              <p className="text-slate-800 font-medium text-sm leading-relaxed mb-6">
                Cast glowing 3D emojis directly onto safe-zones and home corridors. Emojis trigger dynamic particle sparks on the physical board.
              </p>

              <div className="flex items-center justify-around p-4 rounded-2xl bg-white/28 border border-white/70 backdrop-blur-sm">
                {['👍', '🔥', '😂', '⚡', '👑', '☠️'].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      sound.playClick(700);
                      sound.playHover(500);
                    }}
                    className="w-12 h-12 rounded-xl bg-white/35 hover:bg-white/60 backdrop-blur-sm border border-white/75 hover:border-[#0077be] text-2xl flex items-center justify-center hover:scale-125 transition-all cursor-pointer shadow-xs"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-6 text-xs font-mono font-bold text-slate-900 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>Full emoji spam protection with 2.5s cooldown</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 5-Seat Private Rooms — Frosted Glass */}
      {activeTab === 'rooms' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-black font-['Chakra_Petch'] text-slate-950 mb-2">
              Private 5 Way & 4 Way Lounges (Demo Setup)
            </h3>
            <p className="text-slate-800 font-medium text-sm mb-6 leading-relaxed">
              Room setup preview for friends and family. Configure optional turn timers (60s, 90s, 120s, or off) and choose your player colour.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <input
                type="text"
                value={roomPasscode}
                onChange={(e) => setRoomPasscode(e.target.value.toUpperCase())}
                placeholder="ROOM-PASSCODE"
                className="w-full sm:w-64 px-4 py-3 rounded-xl bg-white/35 backdrop-blur-md border-2 border-white/75 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-[#0077be]"
              />
              <button
                onClick={() => {
                  sound.playClick(600);
                  setRoomCreated(true);
                  setTimeout(() => setRoomCreated(false), 4000);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-['Chakra_Petch'] font-black text-xs tracking-wider uppercase shadow-sm cursor-pointer"
              >
                Generate Room Code (Demo)
              </button>
            </div>

            {roomCreated && (
              <div className="p-4 rounded-xl bg-white/40 backdrop-blur-md border border-[#0077be] text-slate-950 font-mono font-bold text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0077be]" />
                <span>Room <strong>#{roomPasscode}</strong> demo code ready! 5 Way & 4 Way seats ready for Blue, Orange, Green, Red, Yellow.</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Community Tournaments Preview — Frosted Glass */}
      {activeTab === 'tournaments' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-white/40 backdrop-blur-sm border border-purple-500/70 text-purple-800 text-xs font-mono font-black uppercase">
                COMMUNITY EVENTS • COMING SOON
              </span>
              <h3 className="text-3xl font-black font-['Chakra_Petch'] text-slate-950 mt-2">
                5 Way & 4 Way Two Dice Tabletop Championships
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black font-mono text-amber-600">CHAMPIONSHIP ARENA</div>
              <div className="text-xs font-mono font-bold text-slate-800">5 Way & 4 Way Format</div>
            </div>
          </div>

          {/* Tournament Grid Stage */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/60">
            <div className="p-4 rounded-xl bg-white/28 hover:bg-white/45 backdrop-blur-sm border border-white/70 transition-colors">
              <div className="text-xs font-mono text-purple-800 font-black mb-1">STAGE 1: QUALIFIERS</div>
              <div className="text-sm font-black text-slate-950">5 Way & 4 Way Tables</div>
              <div className="text-xs text-slate-800 font-medium mt-1">Winner advances to next round</div>
            </div>
            <div className="p-4 rounded-xl bg-white/28 hover:bg-white/45 backdrop-blur-sm border border-white/70 transition-colors">
              <div className="text-xs font-mono text-pink-700 font-black mb-1">STAGE 2: SEMI-FINALS</div>
              <div className="text-sm font-black text-slate-950">High Stakes Elimination</div>
              <div className="text-xs text-slate-800 font-medium mt-1">First to home path wins</div>
            </div>
            <div className="p-4 rounded-xl bg-white/28 hover:bg-white/45 backdrop-blur-sm border border-white/70 transition-colors">
              <div className="text-xs font-mono text-amber-700 font-black mb-1">GRAND FINALE</div>
              <div className="text-sm font-black text-slate-950">Championship Showdown</div>
              <div className="text-xs text-slate-800 font-medium mt-1">5 Way & 4 Way title match</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Synthwave Music Deck — Frosted Glass */}
      {activeTab === 'ost' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-800 font-mono text-xs font-black uppercase mb-1">
                <Disc className={`w-4 h-4 ${isPlayingOST ? 'animate-spin' : ''}`} />
                <span>Integrated Sound Station</span>
              </div>
              <h3 className="text-3xl font-black font-['Chakra_Petch'] text-slate-950">
                Synthwave OST Library
              </h3>
            </div>
            <button
              onClick={handleToggleMusic}
              className={`px-6 py-3 rounded-2xl font-mono text-xs font-black tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                isPlayingOST
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-500'
              }`}
            >
              {isPlayingOST ? <Pause className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isPlayingOST ? 'Pause Synthwave' : 'Start Synth Audio'}</span>
            </button>
          </div>

          {/* Track List */}
          <div className="relative z-10 space-y-2">
            {ostTracks.map((track, i) => (
              <div
                key={track.title}
                onClick={() => {
                  setActiveTrackIndex(i);
                  sound.playClick(400 + i * 50);
                }}
                className={`p-3.5 rounded-xl border backdrop-blur-sm flex items-center justify-between transition-colors cursor-pointer ${
                  activeTrackIndex === i
                    ? 'bg-white/50 border-emerald-600 text-slate-950 shadow-sm'
                    : 'bg-white/25 border-white/70 text-slate-900 hover:bg-white/45'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-black text-emerald-700">0{i + 1}</span>
                  <div>
                    <div className="font-black text-sm text-slate-950">{track.title}</div>
                    <div className="text-[11px] text-slate-800 font-mono font-medium">{track.mood} • {track.bpm}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono font-bold text-xs text-slate-900">
                  <span>{track.duration}</span>
                  <Heart className="w-4 h-4 hover:text-pink-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Volume2, Mic, Sparkles, DoorOpen, Trophy, Music, Play, Pause, 
  Users, Flame, Shield, Radio, Check, Disc, Heart, SkipForward 
} from 'lucide-react';
import { sound } from '../utils/audio';

export const FeaturesHub: React.FC = () => {
  const [isPlayingOST, setIsPlayingOST] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'voice' | 'rooms' | 'tournaments' | 'ost'>('voice');
  const [roomPasscode, setRoomPasscode] = useState('EMPEROR-77');
  const [roomCreated, setRoomCreated] = useState(false);

  const ostTracks = [
    { title: 'Neon Pentagram Overdrive', bpm: '128 BPM', mood: 'Aggressive Synthwave', duration: '3:42' },
    { title: 'Anti-Leader Protocol (Bass Drop)', bpm: '135 BPM', mood: 'Dark Electro Cyber', duration: '4:15' },
    { title: 'Lucky 7 Warp Gate', bpm: '118 BPM', mood: 'Vapor Synth', duration: '2:58' },
    { title: 'Emperor Sanctum Ascension', bpm: '140 BPM', mood: 'High Energy Chiptune', duration: '3:20' },
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
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>CYBER SOCIAL & MULTIPLAYER ECOSYSTEM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-['Chakra_Petch'] text-white uppercase">
          VOICE, ROOMS & <span className="text-cyan-400">SYNTH SOUNDTRACK</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Experience real-time voice taunts, private 5-seat custom lounges, championship brackets, and an adaptive 8-track synthwave soundtrack that reacts to match tension.
        </p>
      </div>

      {/* Hub Navigation Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        <button
          onClick={() => { setActiveTab('voice'); sound.playClick(400); }}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'voice'
              ? 'bg-cyan-500 text-slate-950 shadow-xs'
              : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 shadow-xs'
          }`}
        >
          <Mic className="w-4 h-4" /> 1. Voice & Emojis
        </button>
        <button
          onClick={() => { setActiveTab('rooms'); sound.playClick(450); }}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'rooms'
              ? 'bg-cyan-500 text-slate-950 shadow-xs'
              : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 shadow-xs'
          }`}
        >
          <DoorOpen className="w-4 h-4" /> 2. 5-Seat Private Rooms
        </button>
        <button
          onClick={() => { setActiveTab('tournaments'); sound.playClick(500); }}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'tournaments'
              ? 'bg-cyan-500 text-slate-950 shadow-xs'
              : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 shadow-xs'
          }`}
        >
          <Trophy className="w-4 h-4" /> 3. Grand Tournaments
        </button>
        <button
          onClick={() => { setActiveTab('ost'); sound.playClick(550); }}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'ost'
              ? 'bg-cyan-500 text-slate-950 shadow-xs'
              : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 shadow-xs'
          }`}
        >
          <Music className="w-4 h-4" /> 4. Synthwave Music Deck
        </button>
      </div>

      {/* Tab 1: Voice & Emojis */}
      {activeTab === 'voice' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-pink-400 font-mono text-xs font-bold uppercase mb-2">
                <Mic className="w-4 h-4" />
                <span>One-Tap Audio Taunts</span>
              </div>
              <h3 className="text-2xl font-bold font-['Chakra_Petch'] text-white mb-3">
                Live Speech Synthesis & Spoken Banter
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Fire off signature spoken voice clips during your opponent's dice rolls to disrupt their concentration and rally your alliance hunters!
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleVoiceTest('big_numbers')}
                  className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-left transition-all border border-slate-800 hover:border-slate-700 cursor-pointer group shadow-xs"
                >
                  <div className="text-pink-400 group-hover:text-pink-300 text-xs font-mono font-bold flex items-center justify-between transition-colors">
                    <span>"Big numbers!"</span>
                    <Volume2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-500 group-hover:text-slate-300 mt-1 transition-colors">Shahbaz signature roll taunt</div>
                </button>

                <button
                  onClick={() => handleVoiceTest('shine')}
                  className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-left transition-all border border-slate-800 hover:border-slate-700 cursor-pointer group shadow-xs"
                >
                  <div className="text-amber-400 group-hover:text-amber-300 text-xs font-mono font-bold flex items-center justify-between transition-colors">
                    <span>"My turn to shine!"</span>
                    <Volume2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-500 group-hover:text-slate-300 mt-1 transition-colors">Mughal 6-roll victory cry</div>
                </button>

                <button
                  onClick={() => handleVoiceTest('turn')}
                  className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-left transition-all border border-slate-800 hover:border-slate-700 cursor-pointer group shadow-xs"
                >
                  <div className="text-cyan-400 group-hover:text-cyan-300 text-xs font-mono font-bold flex items-center justify-between transition-colors">
                    <span>"Your turn!"</span>
                    <Volume2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-500 group-hover:text-slate-300 mt-1 transition-colors">Anees quick pace reminder</div>
                </button>

                <button
                  onClick={() => handleVoiceTest('cheer')}
                  className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-left transition-all border border-slate-800 hover:border-slate-700 cursor-pointer group shadow-xs"
                >
                  <div className="text-emerald-400 group-hover:text-emerald-300 text-xs font-mono font-bold flex items-center justify-between transition-colors">
                    <span>"Anti-Leader War!"</span>
                    <Volume2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-500 group-hover:text-slate-300 mt-1 transition-colors">Alliance siren callout</div>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>3D Reactive Emojis</span>
              </div>
              <h3 className="text-2xl font-bold font-['Chakra_Petch'] text-white mb-3">
                Board-Projected Hologram Emojis
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Cast glowing 3D emojis directly onto safe-zones and home corridors. Emojis trigger dynamic particle sparks on the physical board.
              </p>

              <div className="flex items-center justify-around p-4 rounded-2xl bg-slate-950 border border-slate-800">
                {['👍', '🔥', '😂', '⚡', '👑', '☠️'].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      sound.playClick(700);
                      sound.playHover(500);
                    }}
                    className="w-12 h-12 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-2xl flex items-center justify-center hover:scale-125 transition-all cursor-pointer shadow-xs"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 text-xs font-mono text-slate-400 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Full emoji spam protection with 2.5s cooldown</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 5-Seat Private Rooms */}
      {activeTab === 'rooms' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-cyan-900/50 shadow-xl">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold font-['Chakra_Petch'] text-white mb-2">
              Private 5-Seat Cyber Lounges
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Create a custom password-protected lounge for your friends or family. Configure Emperor Clock speeds, toggle Lucky 7 powers, and lock in custom stakes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <input
                type="text"
                value={roomPasscode}
                onChange={(e) => setRoomPasscode(e.target.value.toUpperCase())}
                placeholder="ROOM-PASSCODE"
                className="w-full sm:w-64 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-sm tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                onClick={() => {
                  sound.playClick(600);
                  setRoomCreated(true);
                  setTimeout(() => setRoomCreated(false), 4000);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-['Chakra_Petch'] font-extrabold text-xs tracking-wider uppercase shadow-sm cursor-pointer"
              >
                Create 5-Seat Lounge
              </button>
            </div>

            {roomCreated && (
              <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-800 text-cyan-300 font-mono text-xs animate-fadeIn flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Room <strong>#{roomPasscode}</strong> created! 5 seat slots ready for Blue, Orange, Green, Red, Yellow.</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Grand Tournaments */}
      {activeTab === 'tournaments' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-purple-900/50 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800 text-purple-300 text-xs font-mono font-bold uppercase">
                SEASON 1 • COMING SOON
              </span>
              <h3 className="text-3xl font-bold font-['Chakra_Petch'] text-white mt-2">
                5-Way Emperor Championship
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black font-mono text-amber-400">$10,000 NEON CUP</div>
              <div className="text-xs font-mono text-slate-400">512 Players • 5-Way Elimination</div>
            </div>
          </div>

          {/* Tournament Grid Stage */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-xs font-mono text-purple-400 font-bold mb-1">STAGE 1: QUALIFIERS</div>
              <div className="text-sm font-bold text-white">5-Player Blitz Tables</div>
              <div className="text-xs text-slate-400 mt-1">Top 1 advances to Round 2</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-xs font-mono text-pink-400 font-bold mb-1">STAGE 2: SEMI-FINALS</div>
              <div className="text-sm font-bold text-white">Anti-Leader Gauntlet</div>
              <div className="text-xs text-slate-400 mt-1">Double Leader bounties active</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-xs font-mono text-amber-400 font-bold mb-1">GRAND ARENA</div>
              <div className="text-sm font-bold text-white">Emperor Crown Finale</div>
              <div className="text-xs text-slate-400 mt-1">Live spectator neon fireworks</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Synthwave Music Deck */}
      {activeTab === 'ost' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-emerald-900/50 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase mb-1">
                <Disc className={`w-4 h-4 ${isPlayingOST ? 'animate-spin' : ''}`} />
                <span>Integrated Sound Station</span>
              </div>
              <h3 className="text-3xl font-bold font-['Chakra_Petch'] text-white">
                Synthwave OST Library
              </h3>
            </div>
            <button
              onClick={handleToggleMusic}
              className={`px-6 py-3 rounded-2xl font-mono text-xs font-extrabold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                isPlayingOST
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-500'
              }`}
            >
              {isPlayingOST ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlayingOST ? 'Pause Synthwave' : 'Play Live Synth Engine'}</span>
            </button>
          </div>

          {/* Track List */}
          <div className="space-y-2">
            {ostTracks.map((track, i) => (
              <div
                key={track.title}
                onClick={() => {
                  setActiveTrackIndex(i);
                  sound.playClick(400 + i * 50);
                }}
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors cursor-pointer ${
                  activeTrackIndex === i
                    ? 'bg-emerald-950/40 border-emerald-700 text-white shadow-xs'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-emerald-400">0{i + 1}</span>
                  <div>
                    <div className="font-bold text-sm text-white">{track.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{track.mood} • {track.bpm}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span>{track.duration}</span>
                  <Heart className="w-4 h-4 hover:text-pink-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

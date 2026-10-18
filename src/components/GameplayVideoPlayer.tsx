import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Upload, 
  Image, 
  Video, 
  Sparkles, 
  Link, 
  X, 
  AlertCircle, 
  Check, 
  FileVideo,
  Maximize2
} from 'lucide-react';
import { sound } from '../utils/audio';

interface GameplayVideoPlayerProps {
  hoveredColor?: string | null;
}

interface VideoEvent {
  time: number;
  playerTurn: string;
  playerColor: string;
  rotationDeg: number;
  dice: [number, number];
  speechBubble?: { player: string; text: string; icon: string };
  actionText: string;
  timer: number;
  winOdds: { mughal: number; naveed: number; nazim: number };
}

// 12-second high-energy condensed highlights loop for simulated stage
const HIGHLIGHT_TIMELINE: VideoEvent[] = [
  {
    time: 0,
    playerTurn: 'SHAHBAZ',
    playerColor: '#ff7700',
    rotationDeg: 0,
    dice: [1, 5],
    speechBubble: { player: 'Shahbaz', text: 'Your turn!', icon: '👉' },
    actionText: 'Select die then tap pawn.',
    timer: 64,
    winOdds: { mughal: 8, naveed: 10, nazim: 10 },
  },
  {
    time: 2,
    playerTurn: 'SHAHBAZ',
    playerColor: '#ff7700',
    rotationDeg: 0,
    dice: [1, 5],
    speechBubble: { player: 'Shahbaz', text: 'Big numbers coming!', icon: '🎲' },
    actionText: 'Moving pawn 5 steps on outer circuit',
    timer: 61,
    winOdds: { mughal: 8, naveed: 10, nazim: 10 },
  },
  {
    time: 4,
    playerTurn: 'MUGHAL',
    playerColor: '#00cc44',
    rotationDeg: -72,
    dice: [6, 4],
    speechBubble: { player: 'Mughal', text: 'My turn to shine.', icon: '⭐' },
    actionText: 'Mughal rolls Double Dice [6, 4]!',
    timer: 90,
    winOdds: { mughal: 8, naveed: 10, nazim: 10 },
  },
  {
    time: 6.5,
    playerTurn: 'MUGHAL',
    playerColor: '#00cc44',
    rotationDeg: -72,
    dice: [6, 4],
    speechBubble: { player: 'Mughal', text: 'Big numbers coming!', icon: '🔥' },
    actionText: 'Splitting dice: 6 on Track, 4 on Star Safezone',
    timer: 87,
    winOdds: { mughal: 8, naveed: 10, nazim: 10 },
  },
  {
    time: 8.5,
    playerTurn: 'NAVEED',
    playerColor: '#ff2233',
    rotationDeg: -144,
    dice: [3, 4],
    speechBubble: { player: 'Naveed', text: 'Big numbers coming!', icon: '🎯' },
    actionText: 'Naveed targeting Emperor Sanctum corridor!',
    timer: 90,
    winOdds: { mughal: 8, naveed: 11, nazim: 10 },
  },
  {
    time: 10.5,
    playerTurn: 'NAVEED',
    playerColor: '#ff2233',
    rotationDeg: -144,
    dice: [3, 4],
    speechBubble: { player: 'Naveed', text: 'Your turn!', icon: '⚡' },
    actionText: 'Lucky 7 Warp detected! 4v1 Alliance locking on.',
    timer: 86,
    winOdds: { mughal: 8, naveed: 11, nazim: 10 },
  },
];

export const GameplayVideoPlayer: React.FC<GameplayVideoPlayerProps> = ({ hoveredColor }) => {
  const [viewMode, setViewMode] = useState<'arena-image' | 'video-clip'>('arena-image');
  const [boardTheme, setBoardTheme] = useState<'neon' | 'flame' | 'monochrome'>('neon');
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(12);
  const [clipLength, setClipLength] = useState<12 | 24>(12);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.5 | 2>(1);
  const [isMuted, setIsMuted] = useState(false);
  
  // Custom video upload states
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string>('');
  const [videoFileSize, setVideoFileSize] = useState<string>('');
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const htmlVideoRef = useRef<HTMLVideoElement | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  // Current active event in simulation
  const effectiveTime = currentTime % 12;
  const currentEvent = [...HIGHLIGHT_TIMELINE].reverse().find((e) => effectiveTime >= e.time) || HIGHLIGHT_TIMELINE[0];

  // Helper to format seconds to M:SS
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Playback timer tick for simulated clip (when no real video is playing)
  useEffect(() => {
    if (!isPlaying || customVideoUrl || viewMode !== 'video-clip') return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.1 * playbackSpeed;
        if (next >= clipLength) {
          return 0;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, clipLength, playbackSpeed, customVideoUrl, viewMode]);

  // Trigger speech sound when speech bubble appears in simulation
  const prevSpeechRef = useRef<string>('');
  useEffect(() => {
    if (viewMode === 'video-clip' && !customVideoUrl && !isMuted && isPlaying && currentEvent.speechBubble && currentEvent.speechBubble.text !== prevSpeechRef.current) {
      prevSpeechRef.current = currentEvent.speechBubble.text;
      sound.playVoice(currentEvent.speechBubble.text.toLowerCase().replace(/[^a-z]/g, '_'));
    }
  }, [currentEvent.speechBubble, isMuted, isPlaying, viewMode, customVideoUrl]);

  // Sync playback speed to htmlVideoRef when playing custom video
  useEffect(() => {
    if (htmlVideoRef.current) {
      htmlVideoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Load a video file directly from File object
  const processVideoFile = (file: File) => {
    setUploadError(null);
    if (!file) return;

    // Check mime or extension
    const isVideo = file.type.startsWith('video/') || /\.(mp4|webm|mov|mkv|m4v|avi|ogv)$/i.test(file.name);
    if (!isVideo) {
      setUploadError('Please choose a valid video file (e.g. MP4, WebM, MOV).');
      sound.playClick(300);
      return;
    }

    try {
      const url = URL.createObjectURL(file);
      setCustomVideoUrl(url);
      setVideoTitle(file.name);
      setVideoFileSize((file.size / (1024 * 1024)).toFixed(1) + ' MB');
      setViewMode('video-clip');
      setIsPlaying(true);
      setShowUploadModal(false);
      setUploadSuccess(`Loaded "${file.name}" successfully!`);
      setTimeout(() => setUploadSuccess(null), 4000);
      sound.playClick(600);
    } catch (err) {
      setUploadError('Failed to load video file. Please try another format.');
    }
  };

  const handleCustomFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processVideoFile(file);
    }
    // Clear value to allow selecting same file again
    e.target.value = '';
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processVideoFile(file);
    }
  };

  // Load video via URL
  const handleLoadUrl = () => {
    if (!urlInput.trim()) {
      setUploadError('Please enter a valid video URL.');
      return;
    }
    setUploadError(null);
    setCustomVideoUrl(urlInput.trim());
    setVideoTitle(urlInput.split('/').pop() || 'Web Video Stream');
    setVideoFileSize('URL Stream');
    setViewMode('video-clip');
    setIsPlaying(true);
    setShowUploadModal(false);
    setUrlInput('');
    setUploadSuccess('Video URL loaded!');
    setTimeout(() => setUploadSuccess(null), 4000);
    sound.playClick(600);
  };

  // Load bundled sample video
  const handleLoadPresetVideo = (path: string, label: string) => {
    setUploadError(null);
    setCustomVideoUrl(path);
    setVideoTitle(label);
    setVideoFileSize('Bundled HD Clip');
    setViewMode('video-clip');
    setIsPlaying(true);
    setShowUploadModal(false);
    setUploadSuccess(`Loaded ${label}!`);
    setTimeout(() => setUploadSuccess(null), 4000);
    sound.playClick(600);
  };

  // Clear custom video and restore simulated arena
  const handleResetVideo = () => {
    sound.playClick(400);
    setCustomVideoUrl(null);
    setVideoTitle('');
    setVideoFileSize('');
    setCurrentTime(0);
    setDuration(clipLength);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    sound.playClick(400);
    if (customVideoUrl && htmlVideoRef.current) {
      if (htmlVideoRef.current.paused) {
        htmlVideoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If browser blocked unmuted playback, mute and retry
          if (htmlVideoRef.current) {
            htmlVideoRef.current.muted = true;
            setIsMuted(true);
            htmlVideoRef.current.play();
            setIsPlaying(true);
          }
        });
      } else {
        htmlVideoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    sound.playClick(450);
    setCurrentTime(0);
    if (htmlVideoRef.current) {
      htmlVideoRef.current.currentTime = 0;
      htmlVideoRef.current.play().catch(() => {});
    }
    setIsPlaying(true);
  };

  const handleSeek = (percentage: number) => {
    const targetLength = customVideoUrl && duration > 0 ? duration : clipLength;
    const targetTime = Math.max(0, Math.min(targetLength, percentage * targetLength));
    setCurrentTime(targetTime);
    if (htmlVideoRef.current) {
      htmlVideoRef.current.currentTime = targetTime;
    }
    sound.playClick(500);
  };

  const handleFullscreen = () => {
    if (playerContainerRef.current) {
      if (!document.fullscreenElement) {
        playerContainerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const activeDuration = customVideoUrl && duration > 0 ? duration : clipLength;

  return (
    <div
      ref={playerContainerRef}
      onDragOver={handleDragOver}
      onDragEnter={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative w-full rounded-2xl overflow-hidden bg-slate-950 border shadow-xl transition-all duration-300 ${
        isDraggingOver ? 'ring-4 ring-cyan-400 border-cyan-300' : 'border-slate-800'
      }`}
      style={{
        borderColor: hoveredColor ? `${hoveredColor}88` : undefined,
        boxShadow: hoveredColor ? `0 12px 32px -4px ${hoveredColor}33, 0 4px 12px rgba(0,0,0,0.5)` : '0 12px 32px -4px rgba(0,0,0,0.4)',
      }}
    >
      {/* Drag & Drop Visual Glow Overlay */}
      {isDraggingOver && (
        <div className="absolute inset-0 z-50 bg-cyan-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-fadeIn border-2 border-dashed border-cyan-400">
          <Upload className="w-12 h-12 text-cyan-400 animate-bounce mb-3" />
          <h4 className="text-lg font-bold font-['Chakra_Petch'] text-white uppercase tracking-wider">
            Drop Video File Here
          </h4>
          <p className="text-xs font-mono text-cyan-200 mt-1 max-w-xs">
            Release to play your gameplay MP4, WebM, or MOV directly inside the arena.
          </p>
        </div>
      )}

      {/* Upload Success Alert */}
      {uploadSuccess && (
        <div className="absolute top-12 left-3 right-3 z-40 p-2.5 rounded-xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs font-mono flex items-center justify-between shadow-lg animate-fadeIn">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{uploadSuccess}</span>
          </div>
          <button onClick={() => setUploadSuccess(null)} className="text-emerald-400 hover:text-white p-1">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Bar with Mode Switchers and Upload Trigger */}
      <div className="px-2.5 sm:px-3 py-1.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-2 text-xs font-mono text-slate-300">
        {/* View Mode Toggle: Interactive Board vs Clip */}
        <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => {
              setViewMode('arena-image');
              sound.playClick(500);
            }}
            className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
              viewMode === 'arena-image'
                ? 'bg-cyan-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span className="hidden xs:inline">ARENA BOARD</span>
            <span className="xs:hidden">BOARD</span>
          </button>
          <button
            onClick={() => {
              setViewMode('video-clip');
              sound.playClick(400);
            }}
            className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
              viewMode === 'video-clip'
                ? 'bg-cyan-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-3 h-3" />
            <span className="hidden xs:inline">{customVideoUrl ? 'CUSTOM VIDEO' : 'GAMEPLAY CLIP'}</span>
            <span className="xs:hidden">CLIP</span>
          </button>
        </div>

        {/* Right Section: Board theme / Upload Options */}
        <div className="flex items-center gap-1.5">
          {viewMode === 'arena-image' ? (
            <div className="flex items-center gap-0.5 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[9px]">
              <button
                onClick={() => { setBoardTheme('flame'); sound.playClick(450); }}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  boardTheme === 'flame' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Flame
              </button>
              <button
                onClick={() => { setBoardTheme('neon'); sound.playClick(450); }}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  boardTheme === 'neon' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Neon
              </button>
              <button
                onClick={() => { setBoardTheme('monochrome'); sound.playClick(450); }}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  boardTheme === 'monochrome' ? 'bg-slate-800 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Noir
              </button>
            </div>
          ) : (
            customVideoUrl && (
              <button
                onClick={handleResetVideo}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-red-300 text-[9px] cursor-pointer transition-colors border border-slate-700"
                title="Unload custom video and return to simulation"
              >
                Reset Demo
              </button>
            )
          )}

          {/* Prominent Upload Video Button */}
          <button
            onClick={() => {
              setShowUploadModal(true);
              sound.playClick(500);
            }}
            className="px-2 py-0.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-[10px] flex items-center gap-1 cursor-pointer shadow-xs transition-all"
            title="Upload MP4/WebM video or paste video link"
          >
            <Upload className="w-3 h-3" />
            <span>Upload Video</span>
          </button>
        </div>
      </div>

      {/* Screen Frame / Content Container */}
      <div className="relative aspect-video w-full bg-[#050814] overflow-hidden select-none flex items-center justify-center group">
        {viewMode === 'arena-image' ? (
          /* High-Resolution Board Image Showcase */
          <div className="relative w-full h-full">
            <img
              src={
                boardTheme === 'flame'
                  ? '/neon_flame_dice_bg.jpg?v=6'
                  : boardTheme === 'neon'
                  ? '/neon_glowing_cubes.jpg'
                  : '/monochrome_ludo_board.jpg'
              }
              alt={
                boardTheme === 'flame'
                  ? 'Glowing Blue Flaming Neon Dice Arena'
                  : boardTheme === 'neon'
                  ? 'Neon Glowing Cubes Ludo Arena'
                  : 'Monochrome Ludo Arena'
              }
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
            />
            {/* Ambient Shadow Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Bottom Sector Tags Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-1 rounded bg-black/80 backdrop-blur-md border border-cyan-400/50 text-cyan-300 text-[10px] font-mono font-bold flex items-center gap-1">
                  <span>🎲</span> 5-PLAYER WARZONE
                </span>
                <span className="px-2 py-1 rounded bg-black/80 backdrop-blur-md border border-pink-500/50 text-pink-300 text-[10px] font-mono font-bold">
                  {boardTheme === 'flame' ? 'FLAMING NEON DICE' : 'GLOWING DICE CUBES'}
                </span>
              </div>
              <span className="text-[10px] text-white/70 font-mono bg-black/80 px-2 py-1 rounded border border-white/20">
                {boardTheme === 'flame' ? 'FLAMING DICE' : boardTheme === 'neon' ? 'FULL NEON' : 'NOIR MONOCHROME'}
              </span>
            </div>
          </div>
        ) : customVideoUrl ? (
          /* Native Uploaded Video Playback */
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <video
              ref={htmlVideoRef}
              src={customVideoUrl}
              className="w-full h-full object-contain cursor-pointer"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
              onTimeUpdate={() => {
                if (htmlVideoRef.current) {
                  setCurrentTime(htmlVideoRef.current.currentTime);
                }
              }}
              onLoadedMetadata={() => {
                if (htmlVideoRef.current && !isNaN(htmlVideoRef.current.duration)) {
                  setDuration(htmlVideoRef.current.duration);
                }
              }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => {
                setUploadError('The browser could not play this video format. Please try an MP4 (H.264), WebM, or MOV file.');
              }}
            />

            {/* Custom Video Top Badge */}
            <div className="absolute top-2 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
              <div className="px-2.5 py-1 rounded-full bg-black/80 border border-cyan-500/50 text-cyan-300 text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-md">
                <FileVideo className="w-3 h-3 text-cyan-400" />
                <span className="truncate max-w-[160px] sm:max-w-[240px]">{videoTitle || 'Custom Video'}</span>
                {videoFileSize && <span className="text-slate-400">({videoFileSize})</span>}
              </div>
              <div className="px-2 py-0.5 rounded bg-black/80 border border-slate-700 text-slate-300 text-[9px] font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            {/* Center Play/Pause Overlay on Hover */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
              </div>
            </button>
          </div>
        ) : (
          /* High-Fidelity Gameplay Simulation Stage */
          <div className="relative w-full h-full flex items-center justify-center p-3">
            {/* Ambient Hex Grid Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Top Match HUD */}
            <div className="absolute top-2 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
              <div className="px-2.5 py-1 rounded-full bg-yellow-950/80 border border-yellow-500/50 text-yellow-400 text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-sm">
                <span>⏱️</span>
                <span>{currentEvent.timer}s</span>
              </div>

              <div className="flex items-center gap-1.5 text-[9px] font-mono">
                <div className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold">
                  Mughal: {currentEvent.winOdds.mughal}%
                </div>
                <div className="px-2 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-400 font-bold">
                  Naveed: {currentEvent.winOdds.naveed}%
                </div>
                <div className="px-2 py-0.5 rounded bg-yellow-950/80 border border-yellow-500/40 text-yellow-400 font-bold">
                  Nazim: {currentEvent.winOdds.nazim}%
                </div>
              </div>
            </div>

            {/* Rotating 5-Way Pentagon Board Visualization */}
            <div
              className="relative w-48 sm:w-56 h-48 sm:h-56 transition-transform duration-700 ease-out flex items-center justify-center"
              style={{
                transform: `rotate(${currentEvent.rotationDeg}deg)`,
              }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-gradient-to-br from-black/80 to-[#0a1020] shadow-[0_0_30px_rgba(0,243,255,0.15)] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="-120 -120 240 240">
                  {[
                    { name: 'SHAHBAZ', color: '#ff7700', angle: 0 },
                    { name: 'MUGHAL', color: '#00cc44', angle: 72 },
                    { name: 'NAVEED', color: '#ff2233', angle: 144 },
                    { name: 'NAZIM', color: '#eedd00', angle: 216 },
                    { name: 'ANEES', color: '#0099ff', angle: 288 },
                  ].map((faction) => {
                    const rad = ((faction.angle - 90) * Math.PI) / 180;
                    const x = Math.cos(rad) * 85;
                    const y = Math.sin(rad) * 85;
                    const isTurn = currentEvent.playerTurn === faction.name;

                    return (
                      <g key={faction.name}>
                        <line
                          x1={0}
                          y1={0}
                          x2={x}
                          y2={y}
                          stroke={faction.color}
                          strokeWidth={isTurn ? 4 : 2}
                          strokeOpacity={isTurn ? 1 : 0.4}
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r={isTurn ? 16 : 13}
                          fill={faction.color}
                          fillOpacity={isTurn ? 0.9 : 0.3}
                          stroke="#ffffff"
                          strokeWidth={isTurn ? 2 : 1}
                        />
                        <circle cx={x - 4} cy={y} r={3} fill="#ffffff" />
                        <circle cx={x + 4} cy={y} r={3} fill="#ffffff" />
                      </g>
                    );
                  })}

                  <polygon
                    points="0,-25 24,-8 15,20 -15,20 -24,-8"
                    fill="#050505"
                    stroke="#00f3ff"
                    strokeWidth="2"
                  />
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="Chakra Petch"
                  >
                    HOME
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex gap-1.5 bg-black/90 p-1.5 rounded-lg border border-white/30 shadow-lg animate-bounce">
                    <div className="w-6 h-6 rounded bg-white text-black font-black flex items-center justify-center text-xs font-mono shadow-sm">
                      {currentEvent.dice[0]}
                    </div>
                    <div className="w-6 h-6 rounded bg-white text-black font-black flex items-center justify-center text-xs font-mono shadow-sm">
                      {currentEvent.dice[1]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Bot Speech Bubble */}
            {currentEvent.speechBubble && (
              <div className="absolute bottom-12 left-4 z-30 animate-fade-in">
                <div className="px-3 py-1.5 rounded-lg bg-black/90 border border-cyan-400 text-cyan-300 text-xs font-mono flex items-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                  <span>{currentEvent.speechBubble.icon}</span>
                  <div>
                    <strong className="text-white text-[10px] block leading-none">
                      {currentEvent.speechBubble.player}:
                    </strong>
                    <span className="text-[11px] font-bold">"{currentEvent.speechBubble.text}"</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Dice Selection Bar */}
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between z-20 text-[10px] font-mono">
              <div className="text-white/60 font-light truncate max-w-[200px]">
                {currentEvent.actionText}
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="px-2 py-0.5 rounded bg-white text-black font-bold text-xs shadow-sm">
                  {currentEvent.dice[0]}
                </div>
                <div className="px-2 py-0.5 rounded bg-white text-black font-bold text-xs shadow-sm">
                  {currentEvent.dice[1]}
                </div>
              </div>
            </div>

            {/* Hover Center Play/Pause Overlay */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </div>
            </button>
          </div>
        )}

        {/* Global Error Banner inside Screen Frame */}
        {uploadError && (
          <div className="absolute inset-x-3 bottom-3 z-40 p-3 rounded-xl bg-red-950/95 border border-red-500/80 text-red-200 text-xs font-mono flex items-start gap-2 shadow-2xl animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-white">Video Load Notice</p>
              <p className="text-[11px] text-red-200 mt-0.5">{uploadError}</p>
            </div>
            <button
              onClick={() => setUploadError(null)}
              className="p-1 text-red-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Interactive Timeline Scrubber (Video Clip Mode) */}
      {viewMode === 'video-clip' && (
        <div className="px-4 py-2 bg-slate-950 border-t border-slate-850 flex items-center gap-3 text-[10px] font-mono select-none">
          <span className="text-cyan-400 font-bold min-w-[32px]">{formatTime(currentTime)}</span>
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / rect.width));
              handleSeek(ratio);
            }}
            className="flex-1 h-2 rounded-full bg-slate-800 relative overflow-hidden cursor-pointer group/bar hover:h-2.5 transition-all"
          >
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 transition-all rounded-full"
              style={{ width: `${(currentTime / Math.max(1, activeDuration)) * 100}%` }}
            />
          </div>
          <span className="text-slate-500 min-w-[32px] text-right">{formatTime(activeDuration)}</span>
        </div>
      )}

      {/* Bottom Media Controls Bar */}
      <div className="px-2.5 sm:px-3 py-1.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-2 text-xs font-mono text-slate-300">
        {/* Left: Playback Controls */}
        {viewMode === 'video-clip' ? (
          <div className="flex items-center gap-1">
            <button
              onClick={togglePlay}
              className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer transition-colors"
              title={isPlaying ? 'Pause Clip' : 'Play Clip'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={handleRestart}
              className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 cursor-pointer transition-colors"
              title="Restart Clip"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                sound.playClick(400);
                const nextMuted = !isMuted;
                setIsMuted(nextMuted);
                if (htmlVideoRef.current) {
                  htmlVideoRef.current.muted = nextMuted;
                }
              }}
              className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 cursor-pointer transition-colors"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <Image className="w-3.5 h-3.5 text-cyan-400" />
            <span>4K Arena Board View</span>
          </div>
        )}

        {/* Center: Playback Speed (Video Mode) */}
        {viewMode === 'video-clip' && (
          <div className="flex items-center gap-1 text-[10px]">
            {([1, 1.5, 2] as const).map((speed) => (
              <button
                key={speed}
                onClick={() => {
                  setPlaybackSpeed(speed);
                  sound.playClick(450);
                }}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-all ${
                  playbackSpeed === speed ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        )}

        {/* Right: Quick Direct File Input + Modal Launcher */}
        <div className="flex items-center gap-2">
          {/* Accessible File Input (Hidden from view but native label triggerable) */}
          <input
            id="gameplay-video-upload-native"
            ref={fileInputRef}
            type="file"
            accept="video/*,.mp4,.webm,.mov,.m4v,.mkv,.avi,.ogv"
            onChange={handleCustomFileUpload}
            className="sr-only"
          />

          <label
            htmlFor="gameplay-video-upload-native"
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[10px] text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            title="Browse your computer to upload any video file directly"
          >
            <Upload className="w-3 h-3 text-cyan-400" />
            <span>Browse File</span>
          </label>

          <button
            onClick={handleFullscreen}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer transition-colors"
            title="Toggle Arena Fullscreen"
          >
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          UPLOAD & VIDEO MANAGEMENT MODAL / POPUP
          Allows drag & drop, manual file browse, direct video URL, or sample clips
         ══════════════════════════════════════════════════════════════════════ */}
      {showUploadModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowUploadModal(false)}
        >
          <div 
            className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 shadow-2xl text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-['Chakra_Petch'] font-bold text-lg text-white">
                    UPLOAD GAMEPLAY VIDEO
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Play your recorded matches inside the central cyber arena
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowUploadModal(false)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drag & Drop Target Box */}
            <div className="mt-5">
              <label
                htmlFor="modal-file-upload"
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border-2 border-dashed border-cyan-500/50 hover:border-cyan-400 bg-slate-950/60 hover:bg-slate-950 cursor-pointer transition-all group text-center"
              >
                <input
                  id="modal-file-upload"
                  type="file"
                  accept="video/*,.mp4,.webm,.mov,.m4v,.mkv,.avi,.ogv"
                  onChange={handleCustomFileUpload}
                  className="sr-only"
                />
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform mb-3 shadow-[0_0_20px_rgba(0,243,255,0.15)]">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Click to Browse or Drag & Drop Video
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Supports MP4, WebM, MOV, MKV, M4V (up to 500 MB)
                </div>
                <div className="mt-3 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-400">
                  Instant local browser playback • No server delay
                </div>
              </label>
            </div>

            {/* URL Stream Option */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <label className="text-xs font-mono font-bold text-slate-300 block mb-2 flex items-center gap-1.5">
                <Link className="w-3.5 h-3.5 text-cyan-400" />
                <span>Or Stream from Web / Direct Video URL:</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/match-replay.mp4"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
                <button
                  onClick={handleLoadUrl}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold font-mono text-xs cursor-pointer transition-colors shadow-sm"
                >
                  Load URL
                </button>
              </div>
            </div>

            {/* Quick Test Bundled Sample Clips */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400 mb-2">
                Or test immediately with bundled sample gameplay clips:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => handleLoadPresetVideo('/neon_ludo_bg.mp4', 'Neon Cyber Match Replay')}
                  className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-left transition-all cursor-pointer group"
                >
                  <div className="text-xs font-bold text-cyan-300 group-hover:text-cyan-200 flex items-center justify-between">
                    <span>Neon Cyber Arena</span>
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">High-energy MP4 loop</div>
                </button>

                <button
                  onClick={() => handleLoadPresetVideo('/neon_ludo_bg_monochrome.mp4', 'Noir Ludo Championship')}
                  className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-left transition-all cursor-pointer group"
                >
                  <div className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center justify-between">
                    <span>Monochrome Edition</span>
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">Noir tournament loop</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


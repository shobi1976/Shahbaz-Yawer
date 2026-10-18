import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Eye, Sparkles, UploadCloud, RotateCcw, FileVideo, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

interface CornerVideoCardProps {
  id: string;
  videoSrc: string;
  posterSrc: string;
  title: string;
  subtitle: string;
  badgeText: string;
  accentColor: string; // e.g. '#06b6d4' or '#f59e0b'
  position?: 'top-left' | 'top-right' | 'inline';
  className?: string;
}

export const CornerVideoCard: React.FC<CornerVideoCardProps> = ({
  id,
  videoSrc: initialVideoSrc,
  posterSrc,
  title,
  subtitle,
  badgeText,
  accentColor,
  position = 'inline',
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Custom uploaded video state
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const [customFileName, setCustomFileName] = useState<string | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const [uploadSuccessToast, setUploadSuccessToast] = useState<string | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasPlayedOnce, setHasPlayedOnce] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const activeVideoSrc = customVideoUrl || initialVideoSrc;

  // Requirement: "make loop as well it must runs once and then when cursor goes on it it runs"
  // 1. On mount or when source changes: run once, then pause at end/ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = false; // Initially only run once
    video.currentTime = 0;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy
          setIsPlaying(false);
        });
    }
  }, [activeVideoSrc]);

  // Track playback time progress
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  // When initial run finishes, stay paused unless cursor is currently hovering over it
  const handleEnded = () => {
    setHasPlayedOnce(true);
    if (isHovered && videoRef.current) {
      // If cursor is still over the card, loop/replay!
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      setIsPlaying(false);
    }
  };

  // Cursor enters: runs and loops while cursor is on it
  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playHover(580);
    const video = videoRef.current;
    if (video) {
      video.loop = true; // Loop continuously while cursor is on it
      if (video.paused || video.ended) {
        video.currentTime = 0;
      }
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  };

  // Cursor leaves: stop looping
  const handleMouseLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.loop = false;
    }
  };

  // Manual click / tap for mobile and desktop
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    sound.playClick(620);
    if (video.paused) {
      video.currentTime = 0;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick(750);
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // File processing (drag and drop or file picker)
  const processUploadedVideo = (file: File) => {
    if (!file) return;
    try {
      const url = URL.createObjectURL(file);
      setCustomVideoUrl(url);
      setCustomFileName(file.name);
      setUploadSuccessToast(file.name);
      sound.playClick(650);

      // Auto dismiss success toast after 3.5 seconds
      setTimeout(() => {
        setUploadSuccessToast(null);
      }, 3500);
    } catch (err) {
      console.error('Failed to load video file', err);
    }
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
      processUploadedVideo(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processUploadedVideo(file);
    }
    e.target.value = '';
  };

  const triggerFilePicker = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick(500);
    fileInputRef.current?.click();
  };

  const handleResetToDefault = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick(440);
    setCustomVideoUrl(null);
    setCustomFileName(null);
  };

  const positionStyles =
    position === 'top-left'
      ? 'absolute top-2 sm:top-4 left-2 sm:left-4 lg:left-6'
      : position === 'top-right'
      ? 'absolute top-2 sm:top-4 right-2 sm:right-4 lg:right-6'
      : 'relative';

  return (
    <div
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        borderColor: isDraggingOver ? '#22c55e' : isHovered ? accentColor : 'rgba(51, 65, 85, 0.7)',
        boxShadow: isDraggingOver
          ? '0 0 28px rgba(34, 197, 94, 0.6), 0 12px 35px -8px rgba(34, 197, 94, 0.4)'
          : isHovered
          ? `0 12px 35px -8px ${accentColor}55, 0 0 20px -2px ${accentColor}33`
          : '0 8px 24px -6px rgba(0, 0, 0, 0.6)',
      }}
      className={`${positionStyles} z-35 w-36 xs:w-44 sm:w-48 md:w-52 lg:w-56 rounded-2xl bg-slate-950/90 border backdrop-blur-xl p-2 transition-all duration-300 pointer-events-auto cursor-pointer group ${className}`}
    >
      {/* Hidden File Input for Native File Selection */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*,.mp4,.webm,.mov,.mkv,.m4v,.avi"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Corner Decorative Tech Brackets */}
      <div
        style={{ borderColor: accentColor }}
        className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 opacity-60 group-hover:opacity-100 transition-opacity"
      />
      <div
        style={{ borderColor: accentColor }}
        className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 opacity-60 group-hover:opacity-100 transition-opacity"
      />
      <div
        style={{ borderColor: accentColor }}
        className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 opacity-60 group-hover:opacity-100 transition-opacity"
      />
      <div
        style={{ borderColor: accentColor }}
        className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 opacity-60 group-hover:opacity-100 transition-opacity"
      />

      {/* Header Tag / Micro HUD */}
      <div className="flex items-center justify-between gap-1 mb-1.5 px-1">
        <div className="flex items-center gap-1.5 min-w-0">
          <span
            style={{ backgroundColor: isPlaying ? accentColor : '#64748b' }}
            className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}
          />
          <span
            style={{ color: isHovered ? accentColor : '#94a3b8' }}
            className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider truncate"
          >
            {customFileName ? 'CUSTOM MP4' : badgeText}
          </span>
        </div>

        {/* Action icons / Status indicator */}
        <div className="flex items-center gap-1 shrink-0">
          {customVideoUrl && (
            <button
              type="button"
              onClick={handleResetToDefault}
              title="Reset to default clip"
              className="p-0.5 rounded text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          )}

          {/* Quick upload icon button */}
          <button
            type="button"
            onClick={triggerFilePicker}
            title="Upload / Replace MP4 (or drag & drop onto card)"
            className="p-0.5 rounded text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
          >
            <UploadCloud className="w-2.5 h-2.5" />
          </button>

          <span
            style={{
              backgroundColor: isPlaying ? `${accentColor}22` : 'rgba(51,65,85,0.4)',
              color: isPlaying ? accentColor : '#94a3b8',
              borderColor: isPlaying ? `${accentColor}44` : 'rgba(71,85,105,0.3)',
            }}
            className="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded border transition-colors flex items-center gap-0.5"
          >
            {isPlaying ? (
              <>
                <Sparkles className="w-2 h-2 inline animate-spin" />
                <span>RUNNING</span>
              </>
            ) : (
              <>
                <Eye className="w-2 h-2 inline" />
                <span>HOVER</span>
              </>
            )}
          </span>
        </div>
      </div>

      {/* Video Canvas Container */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80">
        <video
          ref={videoRef}
          src={activeVideoSrc}
          poster={posterSrc}
          playsInline
          muted={isMuted}
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Scanline & subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

        {/* DRAG & DROP ACTIVE OVERLAY */}
        {isDraggingOver && (
          <div className="absolute inset-0 z-30 bg-emerald-950/90 border-2 border-dashed border-emerald-400 rounded-xl flex flex-col items-center justify-center p-2 text-center animate-pulse">
            <UploadCloud className="w-7 h-7 text-emerald-300 animate-bounce mb-1" />
            <span className="text-[10px] font-bold text-white font-mono uppercase tracking-wider">
              Drop MP4 Here
            </span>
            <span className="text-[8px] text-emerald-300 font-mono">
              Loads directly into card
            </span>
          </div>
        )}

        {/* SUCCESS TOAST OVERLAY */}
        {uploadSuccessToast && (
          <div className="absolute inset-x-2 top-2 z-25 bg-slate-950/95 border border-emerald-500/80 rounded-lg p-1.5 shadow-lg flex items-center gap-1.5 animate-fadeIn">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div className="min-w-0">
              <p className="text-[8.5px] font-mono text-emerald-300 font-semibold truncate leading-tight">
                Loaded MP4
              </p>
              <p className="text-[7.5px] font-mono text-slate-400 truncate leading-tight">
                {uploadSuccessToast}
              </p>
            </div>
          </div>
        )}

        {/* Drag & Drop Hint Overlay (Visible on Hover when idle) */}
        {!isPlaying && isHovered && !isDraggingOver && (
          <div
            onClick={triggerFilePicker}
            className="absolute top-1.5 left-1.5 z-20 px-1.5 py-0.5 rounded-md bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 text-[8px] font-mono text-slate-300 hover:text-cyan-300 flex items-center gap-1 transition-all"
            title="Click to browse or Drag & Drop any video file here"
          >
            <UploadCloud className="w-2.5 h-2.5 text-cyan-400" />
            <span>Drop / Browse MP4</span>
          </div>
        )}

        {/* Center Play Indicator on hover / pause */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
            isPlaying ? 'opacity-0 group-hover:opacity-40' : 'opacity-85'
          }`}
        >
          <div
            style={{ borderColor: accentColor }}
            className="w-9 h-9 rounded-full bg-slate-950/80 border flex items-center justify-center shadow-lg backdrop-blur-sm"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play style={{ color: accentColor }} className="w-4 h-4 ml-0.5 fill-current" />
            )}
          </div>
        </div>

        {/* Mute/Unmute quick toggle button */}
        <button
          type="button"
          onClick={handleToggleMute}
          title={isMuted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-1.5 right-1.5 p-1 rounded-md bg-slate-950/80 hover:bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-white transition-all pointer-events-auto"
        >
          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-cyan-400" />}
        </button>

        {/* Linear timeline progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-800">
          <div
            style={{ width: `${progress}%`, backgroundColor: accentColor }}
            className="h-full transition-all duration-100"
          />
        </div>
      </div>

      {/* Footer Info / Captions */}
      <div className="mt-1.5 px-0.5 flex flex-col">
        <div className="text-[10px] sm:text-[11px] font-bold text-white tracking-tight truncate flex items-center justify-between">
          <span className="truncate">{customFileName || title}</span>
          {customFileName && (
            <FileVideo className="w-2.5 h-2.5 text-emerald-400 shrink-0 ml-1" />
          )}
        </div>
        <div className="text-[8px] sm:text-[9px] font-mono text-slate-400 flex items-center justify-between mt-0.5">
          <span className="truncate">
            {customFileName ? 'Custom Upload' : subtitle}
          </span>
          <span className="text-[7.5px] uppercase tracking-wider text-slate-500 shrink-0 ml-1">
            {hasPlayedOnce ? 'Hover: Loop' : 'Run: 1x'}
          </span>
        </div>
      </div>
    </div>
  );
};

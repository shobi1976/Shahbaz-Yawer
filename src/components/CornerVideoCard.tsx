import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface CornerVideoCardProps {
  id: string;
  position?: 'inline' | 'corner';
  videoSrc: string;
  posterSrc?: string;
  title: string;
  subtitle: string;
  badgeText?: string;
  accentColor?: string;
  className?: string;
}

export const CornerVideoCard: React.FC<CornerVideoCardProps> = ({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  badgeText,
  accentColor = '#06b6d4',
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden border-2 bg-white/25 backdrop-blur-md shadow-lg group transition-all duration-300 hover:scale-[1.02] hover:bg-white/35 ${className}`}
      style={{ borderColor: `${accentColor}80` }}
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full bg-white/20 backdrop-blur-sm overflow-hidden cursor-pointer" onClick={togglePlay}>
        {!hasError ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            playsInline
            loop
            muted={isMuted}
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 transition-all"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-2 text-center"
            style={{
              background: `radial-gradient(circle at center, ${accentColor}30 0%, rgba(255,255,255,0.2) 100%)`,
            }}
          >
            {posterSrc && (
              <img
                src={posterSrc}
                alt={title}
                className="w-full h-full object-cover absolute inset-0 opacity-75"
              />
            )}
          </div>
        )}

        {/* Badge Overlay */}
        {badgeText && (
          <div className="absolute top-1 left-1 z-10">
            <span
              className="text-[8px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded backdrop-blur-md border text-black shadow-xs"
              style={{ backgroundColor: accentColor, borderColor: accentColor }}
            >
              {badgeText}
            </span>
          </div>
        )}

        {/* Play/Pause Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
          <button
            onClick={togglePlay}
            className="p-1.5 rounded-full bg-white/40 text-slate-950 hover:bg-white/60 backdrop-blur-sm transition-transform hover:scale-110"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-slate-950" />}
          </button>
          <button
            onClick={toggleMute}
            className="ml-2 p-1.5 rounded-full bg-white/40 text-slate-950 hover:bg-white/60 backdrop-blur-sm transition-transform hover:scale-110"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Frosted Glass Card Info */}
      <div className="p-1.5 text-left bg-white/25 backdrop-blur-md border-t border-white/60">
        <h4 className="text-[10px] sm:text-xs font-black font-['Chakra_Petch'] uppercase tracking-tight text-slate-950 truncate">
          {title}
        </h4>
        <p className="text-[8px] sm:text-[9px] text-slate-800 font-medium truncate">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

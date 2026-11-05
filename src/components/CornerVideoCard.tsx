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
  accentColor = '#0297DE',
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const webpPoster = posterSrc ? posterSrc.replace(/\.(jpe?g|png)$/i, '.webp') : undefined;

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    // Defer downloading MP4 until the user explicitly requests playback
    if (!shouldLoadVideo) {
      setShouldLoadVideo(true);
      setIsPlaying(true);
      return;
    }

    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden border-2 bg-[#02070A]/82 backdrop-blur-md shadow-xl group transition-all duration-300 hover:scale-[1.02] hover:bg-[#05121d]/90 ${className}`}
      style={{ borderColor: `${accentColor}85` }}
    >
      {/* Video / Lazy Poster Container */}
      <div
        className="relative aspect-video w-full bg-[#02070A]/80 backdrop-blur-sm overflow-hidden cursor-pointer"
        onClick={togglePlay}
      >
        {shouldLoadVideo && !hasError ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={webpPoster || posterSrc}
            preload="none"
            autoPlay
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
              background: `radial-gradient(circle at center, ${accentColor}30 0%, rgba(2,7,10,0.9) 100%)`,
            }}
          >
            {posterSrc && (
              <picture className="w-full h-full absolute inset-0">
                {webpPoster && <source srcSet={webpPoster} type="image/webp" />}
                <img
                  src={posterSrc}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  width={320}
                  height={180}
                  className="w-full h-full object-cover w-full h-full filter brightness-95 group-hover:brightness-105 transition-all"
                />
              </picture>
            )}
          </div>
        )}

        {/* Badge Overlay */}
        {badgeText && (
          <div className="absolute top-1 left-1 z-10">
            <span
              className="text-[8px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded backdrop-blur-md border text-[#02070A] shadow-xs"
              style={{ backgroundColor: accentColor, borderColor: accentColor }}
            >
              {badgeText}
            </span>
          </div>
        )}

        {/* Play/Pause Button Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity bg-[#02070A]/45 backdrop-blur-[1px] ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'
          }`}
        >
          <button
            type="button"
            onClick={togglePlay}
            className="p-1.5 rounded-full bg-[#02070A]/85 text-white hover:bg-[#0297DE] border border-[#0297DE]/50 backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="ml-2 p-1.5 rounded-full bg-[#02070A]/85 text-white hover:bg-[#FC734D] hover:text-[#02070A] border border-[#0297DE]/50 backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Midnight Black Frosted Glass Card Info */}
      <div className="p-1.5 text-left bg-[#02070A]/88 backdrop-blur-md border-t border-[#0297DE]/25">
        <h4 className="text-[10px] sm:text-xs font-black font-['Chakra_Petch'] uppercase tracking-tight text-white truncate">
          {title}
        </h4>
        <p className="text-[8px] sm:text-[9px] text-slate-300 font-medium truncate">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

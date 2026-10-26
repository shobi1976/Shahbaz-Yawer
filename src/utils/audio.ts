// Web Audio API Synthesizer & Speech Audio Engine for Ludo Dethroned 5 Way & 4 Way Two Dice

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private bgGain: GainNode | null = null;
  private isMusicPlaying: boolean = false;
  private musicInterval: any = null;

  constructor() {
    // Lazily initialized on first user interaction to comply with browser autoplay policies
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isMusicPlaying) {
      this.stopAmbientMusic();
    }
    return this.isMuted;
  }

  public playClick(freq: number = 440) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // AudioContext unavailable or error
    }
  }

  public playHover(freq: number = 320) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(freq * 1.2, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // AudioContext unavailable
    }
  }

  public playDiceRoll() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      for (let i = 0; i < 4; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(200 + Math.random() * 250, now + i * 0.06);

        gain.gain.setValueAtTime(0.08, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.05);
      }
    } catch {
      // Audio error
    }
  }

  public playLucky7() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      // Harmonious cyberpunk major triad arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } catch {
      // Audio error
    }
  }

  public playAntiLeaderAlert() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.linearRampToValueAtTime(440, now + 0.2);
      osc.frequency.linearRampToValueAtTime(880, now + 0.4);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch {
      // Audio error
    }
  }

  public toggleAmbientMusic(): boolean {
    if (this.isMusicPlaying) {
      this.stopAmbientMusic();
      return false;
    } else {
      this.startAmbientMusic();
      return true;
    }
  }

  private startAmbientMusic() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    this.isMusicPlaying = true;
    const synthNotes = [220, 261.63, 293.66, 329.63, 392.0, 440]; // Cyber minor pentatonic
    let step = 0;

    this.musicInterval = setInterval(() => {
      if (!this.isMusicPlaying || this.isMuted) return;
      try {
        const note = synthNotes[step % synthNotes.length];
        step++;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note, ctx.currentTime);

        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } catch {
        // error
      }
    }, 400);
  }

  private stopAmbientMusic() {
    this.isMusicPlaying = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  public playVoiceClip(type: 'turn' | 'big_numbers' | 'shine' | 'cheer' | string) {
    if (this.isMuted) return;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        let text = 'Ludo Dethroned!';
        if (type === 'turn') text = 'Your turn! Roll two dice!';
        else if (type === 'big_numbers') text = 'Lucky 7, Double Sixes!';
        else if (type === 'shine') text = 'Dethroned mode activated!';
        else if (type === 'cheer') text = 'Flawless capture! Anti-leader strike!';

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.1;
        utterance.pitch = 1.0;
        utterance.volume = 0.5;
        window.speechSynthesis.speak(utterance);
        return;
      } catch {
        // fallback to synth
      }
    }
    this.playLucky7();
  }

  public playVoice(phrase: string) {
    if (this.isMuted) return;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        const readable = phrase.replace(/_/g, ' ');
        const utterance = new SpeechSynthesisUtterance(readable);
        utterance.rate = 1.1;
        utterance.volume = 0.4;
        window.speechSynthesis.speak(utterance);
        return;
      } catch {
        // fallback
      }
    }
    this.playClick(600);
  }
}

export const sound = new SoundManager();

// Web Audio Synthesizer for Ludo Emperor 5 Way

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private musicOsc: OscillatorNode | null = null;
  private musicGain: GainNode | null = null;
  private isMusicPlaying: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.musicGain && this.ctx) {
      this.musicGain.gain.setValueAtTime(0, this.ctx.currentTime);
    } else if (!this.isMuted && this.musicGain && this.ctx && this.isMusicPlaying) {
      this.musicGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public playHover(freq: number = 440) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {
      // AudioContext gracefully ignored if blocked
    }
  }

  public playClick(pitch: number = 600) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // ignore
    }
  }

  public playDiceRoll() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      for (let i = 0; i < 5; i++) {
        const timeOffset = i * 0.05;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(250 + Math.random() * 300, this.ctx.currentTime + timeOffset);
        osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + timeOffset + 0.04);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + timeOffset + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + timeOffset);
        osc.stop(this.ctx.currentTime + timeOffset + 0.04);
      }
    } catch {
      // ignore
    }
  }

  public playPawnMove() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {
      // ignore
    }
  }

  public playLucky7() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.08, this.ctx!.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + idx * 0.06 + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(this.ctx!.currentTime + idx * 0.06);
        osc.stop(this.ctx!.currentTime + idx * 0.06 + 0.2);
      });
    } catch {
      // ignore
    }
  }

  public playAntiLeaderAlert() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.setValueAtTime(600, this.ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(800, this.ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch {
      // ignore
    }
  }

  public playVoiceClip(type: 'turn' | 'big_numbers' | 'shine' | 'cheer' | string) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      // Speak using SpeechSynthesis if available
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        let text = 'Your turn!';
        if (type === 'big_numbers' || type.includes('numbers')) text = 'Big numbers coming!';
        else if (type === 'shine' || type.includes('shine')) text = 'My turn to shine!';
        else if (type === 'cheer' || type.includes('winner')) text = 'Don\'t let the winner win!';
        else if (type) text = type;

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.1;
        utterance.pitch = 1.2;
        utterance.volume = this.isMuted ? 0 : 0.8;
        window.speechSynthesis.speak(utterance);
      } else {
        this.playLucky7();
      }
    } catch {
      this.playLucky7();
    }
  }

  public playVoice(phrase: string) {
    this.playVoiceClip(phrase);
  }

  public toggleAmbientMusic(play?: boolean): boolean {
    this.initContext();
    if (!this.ctx) return false;

    const shouldPlay = play !== undefined ? play : !this.isMusicPlaying;

    if (!shouldPlay) {
      if (this.musicOsc) {
        try {
          this.musicOsc.stop();
          this.musicOsc.disconnect();
        } catch {
          // ignore
        }
        this.musicOsc = null;
      }
      this.isMusicPlaying = false;
      return false;
    }

    try {
      if (this.musicOsc) {
        this.musicOsc.stop();
        this.musicOsc.disconnect();
      }

      this.musicOsc = this.ctx.createOscillator();
      this.musicGain = this.ctx.createGain();

      this.musicOsc.type = 'sawtooth';
      this.musicOsc.frequency.setValueAtTime(110, this.ctx.currentTime); // A2 deep synth bass

      // Subtle LFO for neon pulse
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.5, this.ctx.currentTime); // 0.5Hz pulse
      lfoGain.gain.setValueAtTime(20, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(this.musicOsc.frequency);
      lfo.start();

      this.musicGain.gain.setValueAtTime(this.isMuted ? 0 : 0.04, this.ctx.currentTime);

      this.musicOsc.connect(this.musicGain);
      this.musicGain.connect(this.ctx.destination);

      this.musicOsc.start();
      this.isMusicPlaying = true;
      return true;
    } catch {
      this.isMusicPlaying = false;
      return false;
    }
  }

  public isMusicActive(): boolean {
    return this.isMusicPlaying;
  }
}

export const sound = new SoundEngine();

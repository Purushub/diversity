/**
 * Rhythm Odyssey Web Audio Engine
 * Pure synthesized percussion and rhythmic patterns for Indian Dance Forms:
 * - Tabla / Mridangam (Bharatanatyam, Kathak)
 * - Dholak (Lavani, Garba)
 * - Punjabi Dhol (Bhangra)
 * - Ghungroo bells (Kathak, Bharatanatyam)
 * - Bamboo Staves / Clapper (Cheraw)
 * - Nagara & War Horn (Chhau)
 * - Pepa / Spring Flute synth & Dhol (Bihu)
 * - Tanpura Drone Harmonic Chord
 */

class RhythmAudioEngine {
  constructor() {
    this.ctx = null;
    this.bpm = 90;
    this.isPlaying = false;
    this.currentBeat = 0;
    this.timerId = null;
    this.activeLayers = {
      layer1: false, // Cheraw & Garba (Base)
      layer2: false, // Kathak, Bharatanatyam, Bihu (Melodic Accents)
      layer3: false  // Bhangra, Lavani, Chhau (High Energy Peak)
    };
    this.soloDance = null; // Specific dance solo playback
    this.droneGain = null;
    this.masterGain = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setBpm(newBpm) {
    this.bpm = Math.max(60, Math.min(160, newBpm));
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.8, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  // Deep Bass Drum (Dhol / Nagara / Bayan)
  playBassDrum(time, pitch = 80, decay = 0.25, punch = true) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(punch ? pitch * 2.2 : pitch * 1.5, time);
    osc.frequency.exponentialRampToValueAtTime(pitch, time + 0.04);
    osc.frequency.exponentialRampToValueAtTime(30, time + decay);

    gain.gain.setValueAtTime(0.9, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + decay);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + decay);
  }

  // High Snappy Drum (Dholak rim / Dayan / Tabla 'Ta')
  playHighDrum(time, pitch = 320, decay = 0.12) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(pitch * 1.4, time);
    osc.frequency.exponentialRampToValueAtTime(pitch, time + 0.02);

    gain.gain.setValueAtTime(0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + decay);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + decay);
  }

  // Bamboo Clack / Woodblock (Cheraw)
  playBambooClack(time, pitch = 800) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, time);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.5, time + 0.05);

    gain.gain.setValueAtTime(0.8, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.06);
  }

  // Ghungroo Ankle Bell Cluster (Kathak / Bharatanatyam)
  playGhungroo(time) {
    if (!this.ctx) return;
    const freqs = [2400, 3100, 4200, 5800];
    freqs.forEach(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() * 80 - 40), time);
      
      gain.gain.setValueAtTime(0.15, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.09);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 0.09);
    });
  }

  // Hand Clap / Talam Cymbal (Garba / Bharatanatyam Nattuvangam)
  playClap(time) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, time);
    osc.frequency.exponentialRampToValueAtTime(200, time + 0.04);

    gain.gain.setValueAtTime(0.6, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.05);
  }

  // Melodic Pepa/Shehnai Folk Lead Ping
  playFolkTone(time, noteFreq = 440, duration = 0.15) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(noteFreq, time);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);

    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // Tanpura Drone
  startTanpuraDrone() {
    if (!this.ctx) return;
    if (this.droneGain) return;

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    this.droneGain.connect(this.masterGain);

    const baseFreq = 130.81;
    const chord = [baseFreq, baseFreq * 1.5, baseFreq * 2, baseFreq * 1.25];

    this.droneOscs = chord.map((f, i) => {
      const osc = this.ctx.createOscillator();
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.value = f;

      lfo.frequency.value = 0.2 + i * 0.1;
      lfoGain.gain.value = 1.5;
      lfo.connect(osc.frequency);

      osc.connect(this.droneGain);
      lfo.start();
      osc.start();
      return { osc, lfo };
    });
  }

  stopTanpuraDrone() {
    if (this.droneGain) {
      this.droneGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        if (this.droneOscs) {
          this.droneOscs.forEach(o => {
            try { o.osc.stop(); o.lfo.stop(); } catch(e){}
          });
          this.droneOscs = null;
        }
        this.droneGain = null;
      }, 500);
    }
  }

  // Play individual Regional Dance Beat
  playRegionalBeat(danceId, beatIndex, time) {
    switch (danceId) {
      case 'bharatanatyam':
        if (beatIndex === 0) {
          this.playBassDrum(time, 90, 0.2);
          this.playClap(time);
        } else if (beatIndex === 2) {
          this.playHighDrum(time, 380, 0.1);
        } else if (beatIndex === 4) {
          this.playBassDrum(time, 85, 0.25);
          this.playGhungroo(time);
        } else if (beatIndex === 6) {
          this.playHighDrum(time, 320, 0.1);
        }
        if (beatIndex % 2 === 1) {
          this.playGhungroo(time);
        }
        break;

      case 'kathak':
        if (beatIndex === 0 || beatIndex === 4) {
          this.playBassDrum(time, 80, 0.2);
          this.playHighDrum(time, 350, 0.1);
        } else if (beatIndex === 1 || beatIndex === 2 || beatIndex === 5 || beatIndex === 6) {
          this.playHighDrum(time, 420, 0.08);
        } else if (beatIndex === 3 || beatIndex === 7) {
          this.playGhungroo(time);
          this.playHighDrum(time, 300, 0.1);
        }
        this.playGhungroo(time);
        break;

      case 'bihu':
        if (beatIndex === 0 || beatIndex === 3 || beatIndex === 6) {
          this.playBassDrum(time, 110, 0.18);
        }
        if (beatIndex === 1 || beatIndex === 4 || beatIndex === 7) {
          this.playHighDrum(time, 480, 0.08);
          const notes = [440, 523.25, 587.33, 659.25];
          this.playFolkTone(time, notes[beatIndex % notes.length], 0.12);
        }
        break;

      case 'garba':
        if (beatIndex % 3 === 0) {
          this.playClap(time);
          this.playBassDrum(time, 95, 0.2);
        } else {
          this.playHighDrum(time, 360, 0.1);
        }
        if (beatIndex === 2 || beatIndex === 5 || beatIndex === 7) {
          this.playClap(time);
        }
        break;

      case 'bhangra':
        if (beatIndex === 0 || beatIndex === 4) {
          this.playBassDrum(time, 65, 0.35, true);
        }
        if (beatIndex === 2 || beatIndex === 6) {
          this.playHighDrum(time, 500, 0.09);
        }
        if (beatIndex % 2 === 1) {
          this.playHighDrum(time, 380, 0.07);
        }
        break;

      case 'cheraw':
        if (beatIndex % 2 === 0) {
          this.playBambooClack(time, 650);
        } else {
          this.playBambooClack(time, 950);
        }
        if (beatIndex === 0 || beatIndex === 4) {
          this.playBassDrum(time, 100, 0.15);
        }
        break;

      case 'lavani':
        this.playHighDrum(time, 400 + (beatIndex % 3) * 60, 0.07);
        if (beatIndex === 0 || beatIndex === 3 || beatIndex === 5) {
          this.playBassDrum(time, 85, 0.16);
        }
        if (beatIndex === 7) {
          this.playGhungroo(time);
        }
        break;

      case 'chhau':
        if (beatIndex === 0) {
          this.playBassDrum(time, 55, 0.4, true);
        } else if (beatIndex === 3 || beatIndex === 6) {
          this.playBassDrum(time, 70, 0.25);
          this.playHighDrum(time, 600, 0.1);
        }
        if (beatIndex === 4) {
          this.playHighDrum(time, 450, 0.12);
        }
        break;
    }
  }

  startFusionEngine(onBeatCallback) {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.currentBeat = 0;
    this.startTanpuraDrone();

    const intervalMs = (60 / this.bpm / 2) * 1000;

    this.timerId = setInterval(() => {
      const now = this.ctx.currentTime;
      const beat8 = this.currentBeat % 8;

      if (this.activeLayers.layer1) {
        this.playRegionalBeat('cheraw', beat8, now);
        this.playRegionalBeat('garba', beat8, now);
      }

      if (this.activeLayers.layer2) {
        if (beat8 <= 3 || this.activeLayers.layer3) {
          this.playRegionalBeat('kathak', beat8, now);
          this.playRegionalBeat('bharatanatyam', beat8, now);
          this.playRegionalBeat('bihu', beat8, now);
        }
      }

      if (this.activeLayers.layer3) {
        this.playRegionalBeat('bhangra', beat8, now);
        this.playRegionalBeat('lavani', beat8, now);
        this.playRegionalBeat('chhau', beat8, now);
      }

      if (this.soloDance) {
        this.playRegionalBeat(this.soloDance, beat8, now);
      }

      if (onBeatCallback) {
        onBeatCallback(beat8, this.currentBeat);
      }

      this.currentBeat++;
    }, intervalMs);
  }

  startSoloDance(danceId, onBeatCallback) {
    this.init();
    this.stop();
    this.soloDance = danceId;
    this.isPlaying = true;
    this.currentBeat = 0;

    const intervalMs = (60 / this.bpm / 2) * 1000;
    this.timerId = setInterval(() => {
      const now = this.ctx.currentTime;
      const beat8 = this.currentBeat % 8;
      this.playRegionalBeat(this.soloDance, beat8, now);
      if (onBeatCallback) {
        onBeatCallback(beat8, this.currentBeat);
      }
      this.currentBeat++;
    }, intervalMs);
  }

  strikeSynthesisFreeze(callback) {
    this.init();
    const now = this.ctx.currentTime;
    
    this.playBassDrum(now, 50, 0.8, true);
    this.playHighDrum(now, 450, 0.3);
    this.playGhungroo(now);
    this.playBambooClack(now, 700);
    this.playClap(now);

    this.stop();

    if (callback) {
      setTimeout(callback, 3000);
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.soloDance = null;
    this.stopTanpuraDrone();
  }
}

window.RhythmEngine = new RhythmAudioEngine();

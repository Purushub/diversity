/**
 * Rhythm Odyssey Web Audio Engine
 * Authentic Indian Classical & Folk Percussion Synthesizer with Vocal Solkattu / Bol Chanting:
 * - Tabla (Bayan Ghe/Ka, Dayan Na/Tin/Tun/Tit, Composite Dha/Dhin)
 * - Vocal Bols / Solkattu Chanting Engine (SpeechSynthesis + Acoustic Vocal Formant Synthesis)
 * - Mridangam & Nattuvangam Thaalam (Bharatanatyam)
 * - Ghungroo / Salangai Bell Shimmer (Kathak, Bharatanatyam)
 * - Punjabi Dhol & Tilli Chaal (Bhangra)
 * - Dholak & 3-Taali Claps (Garba)
 * - Maharashtrian Dholki Rolls (Lavani)
 * - Mizo Bamboo Stave Acoustics (Cheraw)
 * - Nagara War Drum & Bell (Chhau)
 * - Assamese Dhol & Pepa Flute Synth (Bihu)
 * - Resonant Tanpura Drone (Sa-Pa-Sa Harmonic Base)
 */

class RhythmAudioEngine {
  constructor() {
    this.ctx = null;
    this.bpm = 90;
    this.isPlaying = false;
    this.currentBeat = 0;
    this.timerId = null;
    this.vocalsEnabled = true; // Vocal Bol chanting active by default
    this.activeLayers = {
      layer1: false, // Cheraw & Garba (Base Groove)
      layer2: false, // Kathak, Bharatanatyam, Bihu (Classical & Melodic)
      layer3: false  // Bhangra, Lavani, Chhau (High Energy & Martial)
    };
    this.soloDance = null;
    this.droneGain = null;
    this.droneOscs = null;
    this.masterGain = null;
    this.isMuted = false;

    // Authentic Rhythmic Vocal Bols for all Dance Traditions
    this.vocalBols = {
      bharatanatyam: ['Taa', 'Kaa', 'Dhee', 'Mee', 'Thomm', 'Naam', 'Thaa-Kaa', 'Jhaa-Nu'],
      kathak: ['Dhaa', 'Dheen', 'Dheen', 'Dhaa', 'Dhaa', 'Teen', 'Taa', 'Dheen'],
      bihu: ['Dhaa', 'Ghay', 'Dhaa', 'Teet', 'Dhaa', 'Dheen', 'Pay-paa', 'Hey!'],
      garba: ['Taalee!', 'Chutkee', 'Taalee!', 'Heench', 'Taalee!', 'Ghoom', 'Taalee!', 'Hay!'],
      bhangra: ['Buhll-lay!', 'Ghay', 'Buhll-lay!', 'Chaal', 'Hud-dee-paa!', 'Ghay', 'Hud-dee-paa!', 'Oye!'],
      cheraw: ['Thump', 'Clack', 'Open', 'Clack', 'Step', 'Clack', 'Jump', 'Sync!'],
      lavani: ['Dhaa', 'Ghay', 'Naa', 'Teen', 'Teet', 'Taa', 'Dhaa', 'Khuh-duhk!'],
      chhau: ['Dhoom!', 'Taa', 'Dhoom!', 'Oof-lee', 'Dhaa!', 'Taa', 'Nuh-gaa-raa!', 'Shabash!']
    };
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.85, this.ctx.currentTime);
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
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.85, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  toggleVocals() {
    this.vocalsEnabled = !this.vocalsEnabled;
    return this.vocalsEnabled;
  }

  // =========================================================================
  // =========================================================================
  // AI VOICE ASSISTANT SPEECH SYNTHESIS (ElevenLabs Neural AI + Web Speech)
  // =========================================================================

  elevenLabsApiKey = 'sk_3f9800ead5132752e69125845249d9e275b3cdb762a0154a';
  selectedVoicePersona = 'eleven_alice';
  selectedVoiceURI = '';
  elevenLabsAudioCache = new Map();
  currentAudioPlayer = null;

  elevenLabsVoices = {
    'eleven_alice': { voiceId: 'Xb7hH8MSUJpSbSDYk0k2', name: 'Indira (ElevenLabs Neural Educator)' },
    'eleven_sarah': { voiceId: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah (ElevenLabs Warm & Reassuring)' },
    'eleven_jessica': { voiceId: 'cgSgspJ2msm6clMCkdW9', name: 'Jessica (ElevenLabs Bright & Playful)' },
    'eleven_bella': { voiceId: 'hpp4J3VqNfWAUOO0d1Us', name: 'Bella (ElevenLabs Professional & Friendly)' },
    'eleven_lily': { voiceId: 'pFZP5JQG7iQjIQuC4Bku', name: 'Lily (ElevenLabs Expressive Female)' },
    'eleven_george': { voiceId: 'JBFqnCBsd6RMkjVDRZzb', name: 'George (ElevenLabs Storyteller Male)' },
    'eleven_brian': { voiceId: 'nPczCjzI2devNBz1zQrb', name: 'Brian (ElevenLabs Deep Resonant Male)' },
    'eleven_laura': { voiceId: 'FGY2WhTYpPnrIDTdsKH5', name: 'Laura (ElevenLabs Enthusiastic Female)' }
  };

  setVoicePersona(personaId, voiceURI = '') {
    this.selectedVoicePersona = personaId || 'eleven_alice';
    this.selectedVoiceURI = voiceURI;
  }

  getAvailableVoices() {
    if (!('speechSynthesis' in window)) return [];
    return window.speechSynthesis.getVoices() || [];
  }

  /**
   * Main speech dispatcher: Uses ElevenLabs Neural AI by default with instant fallback to Web Speech
   */
  async speakVoiceAssistant(text, onStart, onEnd) {
    if (!text || this.isMuted) return;
    this.stopVoiceAssistant();

    const persona = this.selectedVoicePersona || 'eleven_alice';

    // 1. If ElevenLabs voice is chosen, try ElevenLabs Neural API
    if (persona.startsWith('eleven_') && this.elevenLabsVoices[persona]) {
      const voiceConfig = this.elevenLabsVoices[persona];
      const cacheKey = `${voiceConfig.voiceId}_${text.trim()}`;

      try {
        // Check local memory audio cache
        if (this.elevenLabsAudioCache.has(cacheKey)) {
          const cachedUrl = this.elevenLabsAudioCache.get(cacheKey);
          this.playAudioUrl(cachedUrl, onStart, onEnd);
          return;
        }

        // Fetch from ElevenLabs Text-to-Speech API
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceConfig.voiceId}`, {
          method: 'POST',
          headers: {
            'xi-api-key': this.elevenLabsApiKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: text,
            model_id: 'eleven_multilingual_v2',
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
              style: 0.35,
              use_speaker_boost: true
            }
          })
        });

        if (response.ok) {
          const blob = await response.blob();
          const audioUrl = URL.createObjectURL(blob);
          this.elevenLabsAudioCache.set(cacheKey, audioUrl);
          this.playAudioUrl(audioUrl, onStart, onEnd);
          return;
        } else {
          console.warn('ElevenLabs API returned status:', response.status, 'Falling back to Web Speech.');
        }
      } catch (err) {
        console.warn('ElevenLabs network exception, falling back to Web Speech:', err);
      }
    }

    // 2. Fallback to Browser Speech Synthesis
    this.speakWebSpeech(text, onStart, onEnd);
  }

  /**
   * Plays audio blob URL for ElevenLabs
   */
  playAudioUrl(url, onStart, onEnd) {
    try {
      this.currentAudioPlayer = new Audio(url);
      if (onStart) onStart();

      this.currentAudioPlayer.onended = () => {
        this.currentAudioPlayer = null;
        if (onEnd) onEnd();
      };

      this.currentAudioPlayer.onerror = () => {
        this.currentAudioPlayer = null;
        if (onEnd) onEnd();
      };

      this.currentAudioPlayer.play().catch(e => {
        console.warn('Audio play exception:', e);
        if (onEnd) onEnd();
      });
    } catch (e) {
      if (onEnd) onEnd();
    }
  }

  /**
   * Browser Speech Synthesis fallback
   */
  speakWebSpeech(text, onStart, onEnd) {
    if (!('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices() || [];
      const persona = this.selectedVoicePersona || 'indira_natural';

      // Persona Profile Tuning
      if (persona === 'indira_natural' || persona === 'eleven_alice') {
        utterance.rate = 0.94;
        utterance.pitch = 1.08;
        if (voices.length > 0) {
          const matched = voices.find(v => (v.lang.includes('IN') || v.name.includes('India') || v.name.includes('Heera') || v.name.includes('Neerja')) && (v.name.includes('Female') || !v.name.includes('Male')))
            || voices.find(v => v.lang.includes('hi') || v.lang.includes('en-IN'))
            || voices.find(v => v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google UK English Female') || v.name.includes('Zira'));
          if (matched) utterance.voice = matched;
        }
      } else if (persona === 'aditi_hindi') {
        utterance.rate = 0.90;
        utterance.pitch = 1.15;
        if (voices.length > 0) {
          const matched = voices.find(v => v.lang.includes('hi') || v.name.includes('Hindi') || v.name.includes('Aditi') || v.name.includes('Kalpana'))
            || voices.find(v => v.lang.includes('IN') || v.name.includes('India'))
            || voices.find(v => v.name.includes('Google हिन्दी') || v.name.includes('Natural'));
          if (matched) utterance.voice = matched;
        }
      } else if (persona === 'ravi_male' || persona === 'eleven_george' || persona === 'eleven_brian') {
        utterance.rate = 0.95;
        utterance.pitch = 0.92;
        if (voices.length > 0) {
          const matched = voices.find(v => (v.lang.includes('IN') || v.name.includes('India') || v.name.includes('Ravi')) && v.name.includes('Male'))
            || voices.find(v => v.lang.includes('IN') || v.name.includes('India'))
            || voices.find(v => v.name.includes('Male') || v.name.includes('David') || v.name.includes('George') || v.name.includes('Google UK English Male'));
          if (matched) utterance.voice = matched;
        }
      } else if (persona === 'priya_natural') {
        utterance.rate = 0.98;
        utterance.pitch = 1.05;
        if (voices.length > 0) {
          const matched = voices.find(v => v.name.includes('Priya') || v.name.includes('Heera') || v.lang.includes('IN'))
            || voices.find(v => v.name.includes('Natural') || v.name.includes('Jenny') || v.name.includes('Aria') || v.name.includes('Samantha'));
          if (matched) utterance.voice = matched;
        }
      } else if (persona === 'victoria_uk') {
        utterance.rate = 0.94;
        utterance.pitch = 1.02;
        if (voices.length > 0) {
          const matched = voices.find(v => v.lang.includes('GB') || v.name.includes('UK') || v.name.includes('Hazel') || v.name.includes('Victoria') || v.name.includes('George') || v.name.includes('Google UK English'));
          if (matched) utterance.voice = matched;
        }
      } else if (persona === 'samantha_us') {
        utterance.rate = 0.96;
        utterance.pitch = 1.06;
        if (voices.length > 0) {
          const matched = voices.find(v => v.name.includes('Samantha') || v.name.includes('Aria') || v.name.includes('Jenny') || v.name.includes('Google US English') || (v.lang.includes('US') && v.name.includes('Female')));
          if (matched) utterance.voice = matched;
        }
      } else {
        // System best
        utterance.rate = 0.96;
        utterance.pitch = 1.04;
        if (this.selectedVoiceURI && voices.length > 0) {
          const specific = voices.find(v => v.voiceURI === this.selectedVoiceURI || v.name === this.selectedVoiceURI);
          if (specific) utterance.voice = specific;
        } else if (voices.length > 0) {
          const naturalVoice = voices.find(v => v.lang.includes('IN') || v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'));
          if (naturalVoice) utterance.voice = naturalVoice;
        }
      }

      utterance.volume = 1.0;

      if (onStart) utterance.onstart = onStart;
      if (onEnd) utterance.onend = onEnd;
      utterance.onerror = () => { if (onEnd) onEnd(); };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis exception:', e);
      if (onEnd) onEnd();
    }
  }

  stopVoiceAssistant() {
    if (this.currentAudioPlayer) {
      try {
        this.currentAudioPlayer.pause();
        this.currentAudioPlayer.currentTime = 0;
      } catch (e) {}
      this.currentAudioPlayer = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // =========================================================================
  // VOCAL SOLKATTU & BOL CHANTING ENGINE
  // =========================================================================

  /**
   * Synthesizes the authentic rhythmic sound / syllable on the exact beat.
   * Uses Acoustic Formant Synthesis in Web Audio + optional phonetic utterance.
   */
  playVocalBol(danceId, beatIndex, time) {
    const bols = this.vocalBols[danceId] || this.vocalBols.kathak;
    const bolText = bols[beatIndex % bols.length];

    // 1. Acoustic Vocal Formant Sound Synthesis in Web Audio (natural acoustic resonator)
    this.synthesizeVocalFormant(time, bolText);

    // 2. Browser Speech Voice Synthesis (only when vocals explicitly enabled and not in high-speed loop)
    if (this.vocalsEnabled && 'speechSynthesis' in window && !this.isMuted) {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(bolText);
        utter.rate = 1.25;
        utter.pitch = 1.05;
        utter.volume = 0.6;
        window.speechSynthesis.speak(utter);
      } catch (e) {
        // SpeechSynthesis silent catch
      }
    }
  }

  /**
   * Synthesizes human vocal formant resonances (F1 & F2 throat/mouth resonances).
   */
  synthesizeVocalFormant(time, syllable) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const f1 = this.ctx.createBiquadFilter();
    const f2 = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(110, time + 0.15);

    f1.type = 'bandpass';
    f2.type = 'bandpass';

    // Formant frequency mapping for Indian bols
    if (syllable.startsWith('Ta') || syllable.startsWith('Na') || syllable.startsWith('Dha')) {
      // /a/ vowel (700 Hz, 1220 Hz)
      f1.frequency.setValueAtTime(700, time);
      f2.frequency.setValueAtTime(1220, time);
    } else if (syllable.startsWith('Dhi') || syllable.startsWith('Tin') || syllable.startsWith('Mi')) {
      // /i/ vowel (300 Hz, 2300 Hz)
      f1.frequency.setValueAtTime(320, time);
      f2.frequency.setValueAtTime(2200, time);
    } else if (syllable.startsWith('Thom') || syllable.startsWith('Dhum')) {
      // /o/ /u/ vowel (400 Hz, 800 Hz)
      f1.frequency.setValueAtTime(420, time);
      f2.frequency.setValueAtTime(850, time);
    } else {
      // General /e/ vowel (550 Hz, 1800 Hz)
      f1.frequency.setValueAtTime(550, time);
      f2.frequency.setValueAtTime(1750, time);
    }

    f1.Q.value = 5.0;
    f2.Q.value = 6.0;

    gain.gain.setValueAtTime(0.22, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);

    osc.connect(f1);
    osc.connect(f2);
    f1.connect(gain);
    f2.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.16);
  }

  // =========================================================================
  // TABLA SOUND SYNTHESIS (Bayan + Dayan)
  // =========================================================================

  /**
   * Bayan (Bass drum / Dagga) - "Ghe" or "Gha"
   * Deep resonant membrane with characteristic upward pitch bend modulated by the palm heel.
   */
  playBayanGhe(time, baseFreq = 70, pitchBend = 20, duration = 0.35, velocity = 0.9) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, time);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + pitchBend, time + 0.05);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, time + duration);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, time);
    filter.frequency.exponentialRampToValueAtTime(140, time + duration);
    filter.Q.value = 2.0;

    gain.gain.setValueAtTime(velocity * 0.95, time);
    gain.gain.exponentialRampToValueAtTime(velocity * 0.4, time + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  /**
   * Bayan (Bass drum) - "Ka" / "Kat"
   * Closed flat muted slap on the bass drum.
   */
  playBayanKa(time, duration = 0.08, velocity = 0.7) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + duration);

    gain.gain.setValueAtTime(velocity * 0.8, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  /**
   * Dayan (Treble Drum) - "Na" / "Ta"
   * High, clear metallic ring on the Kinar (rim) with ringing overtones.
   */
  playDayanNa(time, pitch = 380, duration = 0.28, velocity = 0.85) {
    if (!this.ctx) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    const gain2 = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(pitch, time);
    osc1.frequency.exponentialRampToValueAtTime(pitch * 0.98, time + duration);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(pitch * 2.76, time);
    osc2.frequency.exponentialRampToValueAtTime(pitch * 2.7, time + duration * 0.5);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(pitch * 1.5, time);
    filter.Q.value = 4.0;

    gain1.gain.setValueAtTime(velocity * 0.8, time);
    gain1.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    gain2.gain.setValueAtTime(velocity * 0.4, time);
    gain2.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.6);

    osc1.connect(gain1);
    osc2.connect(filter);
    filter.connect(gain2);

    gain1.connect(this.masterGain);
    gain2.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration);
    osc2.stop(time + duration);
  }

  /**
   * Dayan (Treble Drum) - "Tin"
   * Pure, sweet resonant bell-like stroke on the Sur.
   */
  playDayanTin(time, pitch = 320, duration = 0.32, velocity = 0.8) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch * 1.05, time);
    osc.frequency.exponentialRampToValueAtTime(pitch, time + 0.03);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.96, time + duration);

    gain.gain.setValueAtTime(velocity * 0.75, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  /**
   * Dayan (Treble Drum) - "Tun"
   * Deep open resonant stroke in the center with sustained singing decay.
   */
  playDayanTun(time, pitch = 240, duration = 0.4, velocity = 0.85) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(pitch * 1.08, time);
    osc.frequency.exponentialRampToValueAtTime(pitch, time + 0.04);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.94, time + duration);

    gain.gain.setValueAtTime(velocity * 0.8, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  /**
   * Dayan (Treble Drum) - "Tit" / "Te" / "Ke"
   * Dry, closed muted transient slap on the Syahi.
   */
  playDayanTit(time, velocity = 0.7) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, time);
    osc.frequency.exponentialRampToValueAtTime(180, time + 0.05);

    gain.gain.setValueAtTime(velocity * 0.65, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.05);
  }

  /**
   * Composite Tabla Stroke - "Dha"
   * Simultaneous Bayan (Ghe) + Dayan (Na).
   */
  playDha(time, velocity = 1.0) {
    this.playBayanGhe(time, 72, 22, 0.36, velocity);
    this.playDayanNa(time, 380, 0.3, velocity);
  }

  /**
   * Composite Tabla Stroke - "Dhin"
   * Simultaneous Bayan (Ghe) + Dayan (Tin).
   */
  playDhin(time, velocity = 1.0) {
    this.playBayanGhe(time, 68, 16, 0.34, velocity * 0.95);
    this.playDayanTin(time, 320, 0.32, velocity);
  }

  // =========================================================================
  // AUXILIARY INSTRUMENT SYNTHESIS
  // =========================================================================

  playGhungroo(time, intensity = 1.0) {
    if (!this.ctx) return;
    const freqs = [2600, 3400, 4400, 5900];
    freqs.forEach(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() * 90 - 45), time);

      gain.gain.setValueAtTime(0.12 * intensity, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 0.08);
    });
  }

  playThaalam(time, velocity = 0.8) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1420, time);
    osc.frequency.exponentialRampToValueAtTime(1100, time + 0.15);

    gain.gain.setValueAtTime(velocity * 0.45, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.15);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.15);
  }

  playClap(time, velocity = 0.85) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(650, time);
    osc.frequency.exponentialRampToValueAtTime(180, time + 0.045);

    gain.gain.setValueAtTime(velocity * 0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.05);
  }

  playBambooClack(time, pitch = 780, velocity = 0.9) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, time);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.4, time + 0.04);

    gain.gain.setValueAtTime(velocity * 0.85, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.05);
  }

  playPunjabiDhol(time, isBass = true, velocity = 1.0) {
    if (!this.ctx) return;
    if (isBass) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, time);
      osc.frequency.exponentialRampToValueAtTime(50, time + 0.06);
      osc.frequency.exponentialRampToValueAtTime(28, time + 0.4);

      gain.gain.setValueAtTime(velocity * 1.0, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.4);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 0.4);
    } else {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(560, time);
      osc.frequency.exponentialRampToValueAtTime(240, time + 0.05);

      gain.gain.setValueAtTime(velocity * 0.75, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.06);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 0.06);
    }
  }

  playNagara(time, velocity = 1.0) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(95, time);
    osc.frequency.exponentialRampToValueAtTime(40, time + 0.08);
    osc.frequency.exponentialRampToValueAtTime(22, time + 0.45);

    gain.gain.setValueAtTime(velocity * 1.0, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.45);
  }

  playPepaTone(time, noteFreq = 440, duration = 0.14) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(noteFreq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, time);

    gain.gain.setValueAtTime(0.18, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // =========================================================================
  // TANPURA DRONE HARMONICS
  // =========================================================================
  startTanpuraDrone() {
    if (!this.ctx) return;
    if (this.droneGain) return;

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    this.droneGain.connect(this.masterGain);

    const baseFreq = 130.81; // C3
    const chord = [baseFreq, baseFreq * 1.5, baseFreq * 2, baseFreq * 1.25];

    this.droneOscs = chord.map((f, i) => {
      const osc = this.ctx.createOscillator();
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.value = f;

      lfo.frequency.value = 0.18 + i * 0.08;
      lfoGain.gain.value = 1.6;
      lfo.connect(osc.frequency);

      osc.connect(this.droneGain);
      lfo.start();
      osc.start();
      return { osc, lfo };
    });
  }

  stopTanpuraDrone() {
    if (this.droneGain && this.ctx) {
      this.droneGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);
      setTimeout(() => {
        if (this.droneOscs) {
          this.droneOscs.forEach(o => {
            try { o.osc.stop(); o.lfo.stop(); } catch(e){}
          });
          this.droneOscs = null;
        }
        this.droneGain = null;
      }, 400);
    }
  }

  // =========================================================================
  // REGIONAL DANCE FORM SPECIFIC RHYTHMIC TALAS & THEKAS
  // =========================================================================
  playRegionalBeat(danceId, beatIndex, time) {
    // 1. Play vocal Solkattu / Bol Chanting
    this.playVocalBol(danceId, beatIndex, time);

    // 2. Play acoustic percussion synthesis
    switch (danceId) {
      case 'bharatanatyam':
        if (beatIndex === 0) {
          this.playDha(time, 1.0);
          this.playThaalam(time, 0.9);
          this.playGhungroo(time, 0.8);
        } else if (beatIndex === 1) {
          this.playDayanTit(time, 0.6);
        } else if (beatIndex === 2) {
          this.playDhin(time, 0.85);
          this.playGhungroo(time, 0.5);
        } else if (beatIndex === 3) {
          this.playDayanNa(time, 390, 0.2, 0.7);
        } else if (beatIndex === 4) {
          this.playBayanGhe(time, 65, 24, 0.38, 0.95);
          this.playThaalam(time, 0.8);
          this.playGhungroo(time, 1.0);
        } else if (beatIndex === 5) {
          this.playDayanNa(time, 380, 0.22, 0.75);
        } else if (beatIndex === 6) {
          this.playDayanTit(time, 0.65);
          this.playBayanGhe(time, 74, 14, 0.22, 0.6);
        } else if (beatIndex === 7) {
          this.playDayanTun(time, 240, 0.3, 0.8);
          this.playGhungroo(time, 0.7);
        }
        break;

      case 'kathak':
        if (beatIndex === 0) {
          this.playDha(time, 1.0);
          this.playGhungroo(time, 1.0);
        } else if (beatIndex === 1) {
          this.playDhin(time, 0.85);
          this.playGhungroo(time, 0.4);
        } else if (beatIndex === 2) {
          this.playDhin(time, 0.85);
          this.playGhungroo(time, 0.4);
        } else if (beatIndex === 3) {
          this.playDha(time, 0.9);
          this.playGhungroo(time, 0.8);
        } else if (beatIndex === 4) {
          this.playDha(time, 0.95);
          this.playGhungroo(time, 0.9);
        } else if (beatIndex === 5) {
          this.playDayanTin(time, 330, 0.28, 0.8);
          this.playGhungroo(time, 0.4);
        } else if (beatIndex === 6) {
          this.playDayanNa(time, 390, 0.25, 0.8);
          this.playGhungroo(time, 0.6);
        } else if (beatIndex === 7) {
          this.playDhin(time, 0.95);
          this.playGhungroo(time, 1.0);
        }
        break;

      case 'bihu':
        if (beatIndex === 0 || beatIndex === 3 || beatIndex === 6) {
          this.playDha(time, 0.9);
        } else if (beatIndex === 1 || beatIndex === 4) {
          this.playDayanTit(time, 0.7);
          this.playBayanKa(time, 0.08, 0.6);
        } else {
          this.playDayanNa(time, 420, 0.2, 0.75);
        }
        if (beatIndex === 1 || beatIndex === 4 || beatIndex === 7) {
          const notes = [440, 523.25, 587.33, 659.25];
          this.playPepaTone(time, notes[beatIndex % notes.length], 0.12);
        }
        break;

      case 'garba':
        if (beatIndex === 0) {
          this.playClap(time, 1.0);
          this.playDha(time, 0.95);
          this.playGhungroo(time, 0.7);
        } else if (beatIndex === 2) {
          this.playClap(time, 0.9);
          this.playDhin(time, 0.85);
        } else if (beatIndex === 4) {
          this.playClap(time, 0.95);
          this.playDayanNa(time, 380, 0.22, 0.85);
          this.playGhungroo(time, 0.6);
        } else if (beatIndex === 1 || beatIndex === 3 || beatIndex === 5) {
          this.playDayanTit(time, 0.6);
          this.playBayanGhe(time, 80, 10, 0.2, 0.5);
        } else if (beatIndex === 6 || beatIndex === 7) {
          this.playDayanNa(time, 360, 0.18, 0.7);
        }
        break;

      case 'bhangra':
        if (beatIndex === 0 || beatIndex === 4) {
          this.playPunjabiDhol(time, true, 1.0);
          this.playPunjabiDhol(time, false, 0.8);
        } else if (beatIndex === 1 || beatIndex === 5) {
          this.playBayanGhe(time, 75, 12, 0.22, 0.65);
        } else if (beatIndex === 2 || beatIndex === 6) {
          this.playPunjabiDhol(time, false, 0.9);
          this.playDayanNa(time, 420, 0.18, 0.8);
        } else if (beatIndex === 3 || beatIndex === 7) {
          this.playDayanTit(time, 0.7);
          this.playBayanGhe(time, 70, 15, 0.25, 0.6);
        }
        break;

      case 'cheraw':
        if (beatIndex % 2 === 0) {
          this.playBambooClack(time, 620, 0.95);
          this.playBayanGhe(time, 65, 10, 0.2, 0.5);
        } else {
          this.playBambooClack(time, 920, 0.85);
        }
        if (beatIndex === 0 || beatIndex === 4) {
          this.playDayanTit(time, 0.5);
        }
        break;

      case 'lavani':
        if (beatIndex === 0 || beatIndex === 4) {
          this.playDha(time, 0.95);
          this.playGhungroo(time, 0.8);
        } else if (beatIndex === 1 || beatIndex === 5) {
          this.playBayanGhe(time, 76, 12, 0.18, 0.7);
          this.playDayanTit(time, 0.65);
        } else if (beatIndex === 2 || beatIndex === 6) {
          this.playDayanNa(time, 400, 0.16, 0.8);
        } else if (beatIndex === 3 || beatIndex === 7) {
          this.playDhin(time, 0.85);
          this.playGhungroo(time, 0.9);
        }
        break;

      case 'chhau':
        if (beatIndex === 0) {
          this.playNagara(time, 1.0);
          this.playThaalam(time, 0.85);
        } else if (beatIndex === 2 || beatIndex === 6) {
          this.playNagara(time, 0.75);
          this.playDayanNa(time, 350, 0.25, 0.7);
        } else if (beatIndex === 4) {
          this.playNagara(time, 0.9);
          this.playDha(time, 0.85);
        } else {
          this.playDayanTit(time, 0.6);
        }
        break;
    }
  }

  // =========================================================================
  // FUSION ENGINE & SOLO PLAYBACK
  // =========================================================================
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
        this.playRegionalBeat('kathak', beat8, now);
        this.playRegionalBeat('bharatanatyam', beat8, now);
        this.playRegionalBeat('bihu', beat8, now);
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
    this.startTanpuraDrone();

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

    this.playDha(now, 1.0);
    this.playNagara(now, 1.0);
    this.playThaalam(now, 1.0);
    this.playGhungroo(now, 1.0);
    this.playBambooClack(now, 680, 1.0);
    this.playClap(now, 1.0);

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

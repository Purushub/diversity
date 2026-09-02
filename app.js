/**
 * Rhythm Odyssey: Many in the One
 * Gamified Classroom Simulation & Interactive Dance Matrix Application
 */

// Application State
const SimState = {
  activePhase: 'phase2', // 'phase1', 'phase2', 'phase3', 'scorecard', 'debrief'
  unityXP: 0,
  maxXP: 800,
  streakMultiplier: 1.0,
  unlockedBadges: [],
  activeSoloDance: null,
  activeModalDance: null,

  dances: [
    {
      id: 'bharatanatyam',
      name: 'Bharatanatyam',
      region: 'Tamil Nadu (South India)',
      image: 'assets/bharatanatyam_dance.jpg',
      hudName: 'Geometric Alignment HUD',
      hudMetric: 'Aramandi Angle: 120°',
      quest: 'Hold Aramandi (half-squat), strike Nataraja Pose, and execute sharp eye movements (Drishti Bheda).',
      solkattu: 'Ta - Dhi - Thom - Nam (8-Count Adi Tala)',
      layer: 2,
      team: 'Team Alpha',
      completed: false,
      xp: 100,
      videoId: 'JWhA3ldZcyY',
      videoTitle: 'Classical Bharatanatyam: Nritta & Abhinaya Recital',
      videoTradition: 'Classical (Natya Shastra Heritage)',
      videoHighlights: [
        'Aramandi (demi-plié) grounded balance',
        'Sharp angular Nataraja gestures',
        'Complex Jathi rhythmic footwork',
        'Expressive Drishti (eye movement language)'
      ]
    },
    {
      id: 'kathak',
      name: 'Kathak',
      region: 'North India (Uttar Pradesh / Rajasthan)',
      image: 'assets/kathak_dance.jpg',
      hudName: 'Spin Speed Sensor',
      hudMetric: 'Chakkar Velocity: 3.2 Rev/s',
      quest: 'Perform 3 fast Chakkar (spins) ending in a crisp freeze frame with Tatkar footwork pulse.',
      solkattu: 'Dha Dhin Dhin Dha (Teental 16-Beat Pulse)',
      layer: 2,
      team: 'Team Beta',
      completed: false,
      xp: 100,
      videoId: '7GzZl710w3I',
      videoTitle: 'Kathak Dance: Lightning Chakkars & Tatkar Rhythms',
      videoTradition: 'Classical (Storytelling & Court Dance)',
      videoHighlights: [
        'Rapid pirouette Chakkars (multiple revolutions)',
        'Ghungroo bell-sync Tatkar footwork',
        'Sudden dramatic freeze-frames (Sama)',
        'Delicate Nazakat hand gestures'
      ]
    },
    {
      id: 'bihu',
      name: 'Bihu',
      region: 'Assam (Northeast India)',
      image: 'assets/bihu_dance.jpg',
      hudName: 'Wrist Frequency Track',
      hudMetric: 'Wrist Pulse: 140 BPM',
      quest: 'Fast wrist-flips, hip swaying, and high-energy spring movements mimicking spring harvest joys.',
      solkattu: 'Dhol-Pepa Folk Syncopation',
      layer: 2,
      team: 'Team Gamma',
      completed: false,
      xp: 100,
      videoId: 'e_p107H9UvI',
      videoTitle: 'Rongali Bihu: Spring Harvest Folk Celebration',
      videoTradition: 'Folk / Harvest Festival Heritage',
      videoHighlights: [
        'Rapid rhythmic wrist rotations and flips',
        'Brisk hip swaying and bounce steps',
        'Accompaniment by Dhol drum and Pepa buffalo horn',
        'Youthful exuberance celebrating Bohag Bihu'
      ]
    },
    {
      id: 'garba',
      name: 'Garba',
      region: 'Gujarat (West India)',
      image: 'assets/garba_dance.jpg',
      hudName: 'Circle Sync Pulse',
      hudMetric: 'Radial Cohesion: 98%',
      quest: 'Form a circle loop, perform 3-count clap sequences with synchronized lateral step-touches.',
      solkattu: '3-Count Clap Loop (Taali-Chutki)',
      layer: 1,
      team: 'Team Delta',
      completed: false,
      xp: 100,
      videoId: 'gD3V5h75x_g',
      videoTitle: 'Traditional Navratri Raas Garba Circle Dance',
      videoTradition: 'Folk / Devotional Circle Dance',
      videoHighlights: [
        'Concentric circular progression around the center lamp',
        'Synchronized 3-clap rhythmic pattern (Tran Taali)',
        'Sweeping turns and lateral foot touches',
        'Universal communal synchronization'
      ]
    },
    {
      id: 'bhangra',
      name: 'Bhangra',
      region: 'Punjab (North India)',
      image: 'assets/bhangra_dance.jpg',
      hudName: 'Energy Peak Meter',
      hudMetric: 'Jump Force: 450 N',
      quest: 'High knee lifts, raised arms with shoulder bounces, shouting energetic "Haddipa!" beat cues.',
      solkattu: 'Dhol Boom & Saap Chimta Beat',
      layer: 3,
      team: 'Team Epsilon',
      completed: false,
      xp: 100,
      videoId: '4Y6qgX8wKj0',
      videoTitle: 'High-Energy Punjabi Bhangra: Folk Power & Beats',
      videoTradition: 'Folk / Vaisakhi Harvest Celebration',
      videoHighlights: [
        'Explosive high knee lifts and aerial jumps',
        'Shoulder bounce (Dhamaal) with arms raised in victory',
        'Driving Dhol bass beats and Saap accordion clapping',
        'Vocal joy calls ("Balle Balle!", "Haddipa!")'
      ]
    },
    {
      id: 'cheraw',
      name: 'Cheraw',
      region: 'Mizoram (Northeast India)',
      image: 'assets/cheraw_dance.jpg',
      hudName: 'Grid Precision Tracker',
      hudMetric: 'Step Accuracy: 100%',
      quest: 'Rhythmic stepping in and out of imaginary sliding bamboo grid blocks without missing the 4/4 count.',
      solkattu: '4/4 Sliding Bamboo Clack (Open-Close)',
      layer: 1,
      team: 'Team Zeta',
      completed: false,
      xp: 100,
      videoId: '6xYq6U04d-s',
      videoTitle: 'Cheraw Bamboo Dance: Rhythmic Agility & Precision',
      videoTradition: 'Folk / Ancient Mizo Tribal Heritage',
      videoHighlights: [
        'Sliding and clapping bamboo staves in 4/4 meter',
        'Nimble stepping in and out of grid squares',
        'Graceful arm extensions with traditional Kawrchei attire',
        'High degree of mutual trust and timing sync'
      ]
    },
    {
      id: 'lavani',
      name: 'Lavani',
      region: 'Maharashtra (West India)',
      image: 'assets/lavani_dance.jpg',
      hudName: 'Tempo Accent Match',
      hudMetric: 'Dholak Sync: Rapid 6/8',
      quest: 'Rapid footwork synchronized to fast Dholak beat, combined with expressive facial storytelling.',
      solkattu: 'Dha-Ge-Na-Tin Fast Shuffle',
      layer: 3,
      team: 'Team Eta',
      completed: false,
      xp: 100,
      videoId: 'j70-W3K5E00',
      videoTitle: 'Traditional Lavani: Dholki Beats & Nauvari Expressions',
      videoTradition: 'Folk / Theatrical Musical Heritage',
      videoHighlights: [
        'Lightning-fast Dholki syncopated footwork (Chaal)',
        'Traditional 9-yard Nauvari saree drape & Ambada adornment',
        'Flirtatious, witty, and powerful facial expressions (Abhinaya)',
        'Dynamic pirouettes and dramatic pallu maneuvers'
      ]
    },
    {
      id: 'chhau',
      name: 'Chhau',
      region: 'Jharkhand / Odisha / WB (East India)',
      image: 'assets/chhau_dance.jpg',
      hudName: 'Balance Vector HUD',
      hudMetric: 'Center of Mass: Locked',
      quest: 'Wide martial stance, athletic leaps, imitating animal instincts (shield & sword defense postures).',
      solkattu: 'Nagara War Drum & Shehnai Call',
      layer: 3,
      team: 'Team Theta',
      completed: false,
      xp: 100,
      videoId: 'A2dYq1_w20M',
      videoTitle: 'UNESCO Chhau Martial Dance: Leaps & Sun Masks',
      videoTradition: 'Semi-Classical / UNESCO Intangible Heritage',
      videoHighlights: [
        'Athletic high-elevation leaps and acrobatics (Ufli)',
        'Iconic painted masks representing mythological gods and beasts',
        'Martial combat postures with sword (Talwar) and shield (Dhal)',
        'Powerful Nagara war drum beats and horn fanfares'
      ]
    }
  ],

  teams: [
    { name: 'Team Alpha', dance: 'Bharatanatyam', mudra: 4, sync: 4, xp: 80 },
    { name: 'Team Beta', dance: 'Kathak', mudra: 4, sync: 4, xp: 80 },
    { name: 'Team Gamma', dance: 'Bihu', mudra: 5, sync: 4, xp: 90 },
    { name: 'Team Delta', dance: 'Garba', mudra: 4, sync: 5, xp: 90 },
    { name: 'Team Epsilon', dance: 'Bhangra', mudra: 5, sync: 5, xp: 100 },
    { name: 'Team Zeta', dance: 'Cheraw', mudra: 4, sync: 4, xp: 80 },
    { name: 'Team Eta', dance: 'Lavani', mudra: 4, sync: 4, xp: 80 },
    { name: 'Team Theta', dance: 'Chhau', mudra: 5, sync: 5, xp: 100 }
  ]
};

// DOM Initializer
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderMasterHUD();
  renderPhase1();
  renderPhase2();
  renderPhase3();
  renderScorecard();
  renderDebrief();
  initCanvasVisualizer();
});

// ==========================================================
// THEME CONTROLLER (Light & Dark Mode)
// ==========================================================
// THEME CONTROLLER (Light & Dark Mode)
// ==========================================================
function initTheme() {
  const savedTheme = localStorage.getItem('rhythm_theme') || 'dark';
  applyTheme(savedTheme);

  const themeBtn = document.getElementById('btnThemeToggle');
  if (themeBtn) {
    themeBtn.onclick = toggleTheme;
  }

  const tourBtn = document.getElementById('btnStartWalkthrough');
  if (tourBtn) {
    tourBtn.onclick = () => startInteractiveTour(0);
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = current === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  try {
    localStorage.setItem('rhythm_theme', newTheme);
  } catch(e) {}
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
  const label = document.getElementById('themeToggleLabel');
  const icon = document.getElementById('themeIcon');
  if (theme === 'light') {
    if (label) label.textContent = 'Dark Mode';
    if (icon) {
      icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
    }
  } else {
    if (label) label.textContent = 'Light Mode';
    if (icon) {
      icon.innerHTML = `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`;
    }
  }
}
window.toggleTheme = toggleTheme;
window.initTheme = initTheme;

// Classroom Roadmap Accordion
function toggleRoadmapAccordion() {
  const banner = document.querySelector('.classroom-roadmap-banner');
  const text = document.getElementById('roadmapToggleText');
  if (banner) {
    const isOpen = banner.classList.toggle('open');
    if (text) text.textContent = isOpen ? 'Hide Checklist' : 'View Step-by-Step Checklist';
  }
}
window.toggleRoadmapAccordion = toggleRoadmapAccordion;

// Phase Switcher Helper
function switchPhase(phaseId) {
  const tabs = document.querySelectorAll('.nav-tab-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-target') === phaseId) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  document.querySelectorAll('.sim-phase-section').forEach(sec => {
    if (sec.id === phaseId) {
      sec.classList.add('active');
      SimState.activePhase = phaseId;
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      sec.classList.remove('active');
    }
  });
}
window.switchPhase = switchPhase;

// ==========================================================
// REAL-TIME INTERACTIVE ON-SCREEN GUIDED COACH ENGINE
// ==========================================================
let currentCoachMission = 0;
let isCoachActive = false;

const interactiveMissions = [
  {
    step: 1,
    phase: 'phase1',
    targetSelector: '#phase1 .rhythm-lab-grid',
    title: 'Mission 1: Non-Verbal Mudra & Rasa Calibration',
    instruction: '👉 <strong>Live Action:</strong> Click on any Mudra chip (<strong>Pataka</strong>, <strong>Tripataka</strong>, <strong>Mayura</strong>) or click a <strong>Rasa emotion</strong> to test the AR spatial sensor!',
    statusWaiting: '⚡ Waiting for you to click a Mudra or Rasa...',
    statusDone: '✓ Gesture Calibrated! +50 Class Unity XP Unlocked!'
  },
  {
    step: 2,
    phase: 'phase2',
    targetSelector: '#questMatrixGrid',
    title: 'Mission 2: Decode Regional Dance Quests',
    instruction: '👉 <strong>Live Action:</strong> Click <strong>"▶ Watch Video"</strong> on any dance card to inspect traditional choreography, or click <strong>"▶ Play Beat"</strong> to start the live Solkattu rhythm loop!',
    statusWaiting: '⚡ Waiting for you to watch a dance or play a rhythm beat...',
    statusDone: '✓ Regional Tradition Mastered! +100 Class Unity XP Unlocked!'
  },
  {
    step: 3,
    phase: 'phase3',
    targetSelector: '#phase3 .symphony-layer-stack',
    title: 'Mission 3: Polyrhythmic Fusion Symphony',
    instruction: '👉 <strong>Live Action:</strong> Click <strong>"Activate Layer 1"</strong> and <strong>"Activate Layer 2"</strong> to build the polyrhythmic groove, then move the <strong>Master Tempo Slider</strong>!',
    statusWaiting: '⚡ Waiting for you to activate a rhythm layer...',
    statusDone: '✓ Polyrhythms Harmonized! +150 Class Unity XP Unlocked!'
  },
  {
    step: 4,
    phase: 'phase3',
    targetSelector: '.synthesis-freeze-panel',
    title: 'Mission 4: The Universal Synthesis Freeze',
    instruction: '👉 <strong>Live Action:</strong> Click <strong>"STRIKE SYNTHESIS FREEZE"</strong> to hold 3 seconds of unified classroom silence and trigger the celebration!',
    statusWaiting: '⚡ Click the golden Freeze button to test unity...',
    statusDone: '✓ Synthesis Freeze Achieved! Full Harmonization Unlocked!'
  },
  {
    step: 5,
    phase: 'scorecard',
    targetSelector: '#scorecard .scorecard-table-card',
    title: 'Mission 5: Assessment Ledger & Socratic Portfolio',
    instruction: '👉 <strong>Live Action:</strong> Try adjusting any score with the <strong>(+) / (-) steppers</strong> or scroll to the <strong>Socratic Debrief</strong> prompts to complete your IB reflection!',
    statusWaiting: '⚡ Ready for facilitator scoring & student inquiry...',
    statusDone: '🎉 Walkthrough Complete! You are fully prepared to facilitate!'
  }
];

function startInteractiveTour(missionIdx = 0) {
  isCoachActive = true;
  currentCoachMission = missionIdx;
  const hud = document.getElementById('interactiveCoachHUD');
  if (hud) hud.classList.add('active');
  renderCoachMission();
}

function stopInteractiveTour() {
  isCoachActive = false;
  const hud = document.getElementById('interactiveCoachHUD');
  if (hud) hud.classList.remove('active');
  document.querySelectorAll('.walkthrough-spotlight-active').forEach(el => {
    el.classList.remove('walkthrough-spotlight-active');
  });
}

function renderCoachMission() {
  const mission = interactiveMissions[currentCoachMission];
  if (!mission) return;

  // Switch phase & scroll
  switchPhase(mission.phase);

  // Clear previous spotlight & set new spotlight
  document.querySelectorAll('.walkthrough-spotlight-active').forEach(el => {
    el.classList.remove('walkthrough-spotlight-active');
  });

  setTimeout(() => {
    const target = document.querySelector(mission.targetSelector);
    if (target) {
      target.classList.add('walkthrough-spotlight-active');
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 150);

  // Update HUD text
  const badge = document.getElementById('coachMissionBadge');
  const title = document.getElementById('coachTitle');
  const instr = document.getElementById('coachInstructionText');
  const pill = document.getElementById('coachStatusPill');
  const nextBtn = document.getElementById('btnCoachNext');
  const prevBtn = document.getElementById('btnCoachPrev');

  if (badge) badge.innerHTML = `<span>Mission ${mission.step} of 5</span> ${mission.title}`;
  if (title) title.textContent = mission.title;
  if (instr) instr.innerHTML = mission.instruction;
  if (pill) {
    pill.className = 'coach-status-pill';
    pill.innerHTML = `<span>${mission.statusWaiting}</span>`;
  }

  // Update dots
  const dots = document.querySelectorAll('.coach-dot');
  dots.forEach((d, idx) => {
    d.classList.toggle('active', idx === currentCoachMission);
  });

  if (prevBtn) prevBtn.style.visibility = currentCoachMission === 0 ? 'hidden' : 'visible';
  if (nextBtn) {
    nextBtn.innerHTML = currentCoachMission === interactiveMissions.length - 1 
      ? 'Start Activity 🚀' 
      : 'Next Mission ➔';
  }
}

function notifyCoachAction(actionType) {
  if (!isCoachActive) return;
  const mission = interactiveMissions[currentCoachMission];
  if (!mission) return;

  const pill = document.getElementById('coachStatusPill');
  if (pill) {
    pill.className = 'coach-status-pill completed';
    pill.innerHTML = `<span>${mission.statusDone}</span>`;
  }

  // Play audio chime
  if (window.RhythmEngine && window.RhythmEngine.ctx) {
    try {
      window.RhythmEngine.playTempleBell(window.RhythmEngine.ctx.currentTime);
    } catch(e) {}
  }
}

function nextCoachMission() {
  if (currentCoachMission < interactiveMissions.length - 1) {
    currentCoachMission++;
    renderCoachMission();
  } else {
    stopInteractiveTour();
    switchPhase('phase1');
  }
}

function prevCoachMission() {
  if (currentCoachMission > 0) {
    currentCoachMission--;
    renderCoachMission();
  }
}

window.startInteractiveTour = startInteractiveTour;
window.stopInteractiveTour = stopInteractiveTour;
window.nextCoachMission = nextCoachMission;
window.prevCoachMission = prevCoachMission;
window.notifyCoachAction = notifyCoachAction;

// Navigation Handling
function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-target');
      document.querySelectorAll('.sim-phase-section').forEach(sec => sec.classList.remove('active'));
      const activeSection = document.getElementById(targetId);
      if (activeSection) {
        activeSection.classList.add('active');
        SimState.activePhase = targetId;
      }
    });
  });

  // Global Audio Mute Button
  const muteBtn = document.getElementById('btnMuteAudio');
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      const isMuted = window.RhythmEngine.toggleMute();
      muteBtn.innerHTML = isMuted 
        ? `${DanceVectors.icon('mute')} Unmute Audio` 
        : `${DanceVectors.icon('sound')} Sound On`;
    });
  }
}

// Master HUD Update
function renderMasterHUD() {
  const xpVal = document.getElementById('hudXpValue');
  const xpFill = document.getElementById('hudXpFill');
  const badgesVal = document.getElementById('hudBadgesValue');
  const streakVal = document.getElementById('hudStreakValue');
  const fusionVal = document.getElementById('hudFusionValue');

  // Recalculate total XP from completed dances
  const completedCount = SimState.dances.filter(d => d.completed).length;
  SimState.unityXP = completedCount * 100;

  if (xpVal) xpVal.textContent = `${SimState.unityXP} / ${SimState.maxXP} XP`;
  if (xpFill) {
    const pct = Math.min(100, (SimState.unityXP / SimState.maxXP) * 100);
    xpFill.style.width = `${pct}%`;
  }
  if (badgesVal) badgesVal.textContent = `${completedCount} / 8 Unlocked`;
  if (streakVal) {
    SimState.streakMultiplier = completedCount >= 4 ? 2.0 : 1.0;
    streakVal.textContent = `${SimState.streakMultiplier.toFixed(1)}x`;
  }
  if (fusionVal) {
    if (completedCount === 8) {
      fusionVal.textContent = 'Level 3: Harmonized';
      fusionVal.style.color = '#10b981';
    } else if (completedCount >= 4) {
      fusionVal.textContent = 'Level 2: Layering';
      fusionVal.style.color = '#f59e0b';
    } else {
      fusionVal.textContent = 'Level 1: Calibration';
      fusionVal.style.color = '#06b6d4';
    }
  }
}

// ==========================================================
// PHASE 1: THE RHYTHM LAB (Hastamudra & Rasa Studio)
// ==========================================================
function renderPhase1() {
  const mudraContainer = document.getElementById('mudraPreviewContainer');
  const mudraDesc = document.getElementById('mudraDescContainer');
  const rasaContainer = document.getElementById('rasaPreviewContainer');
  const rasaDesc = document.getElementById('rasaDescContainer');

  const mudraData = {
    pataka: {
      name: 'Pataka (Flat Palm)',
      desc: 'Signifies expansive elements: Open Sky, Dense Forest, River Waves, or Opening Doors. Requires flat fingers firmly held together with thumb softly curved.',
      angle: 'Wrist Pitch: 90° | Finger Angle: 180°'
    },
    tripataka: {
      name: 'Tripataka (Three-Finger Flag)',
      desc: 'Signifies Royal Crown, Lightning Bolt, or Tree Branches. The ring finger bends forward touching the inner joint while index, middle, and little finger remain straight.',
      angle: 'Ring Joint: 45° | Index Pitch: 90°'
    },
    mayura: {
      name: 'Mayura (Peacock Gesture)',
      desc: 'Signifies Beauty, Grace, and Bird Flight. The ring finger joins the tip of the thumb forming a loop, while index, middle, and little finger fan outward like peacock feathers.',
      angle: 'Loop Closure: 100% | Wing Flare: 60°'
    }
  };

  const rasaData = {
    shringara: {
      name: '1. Shringara (Love & Aesthetic Beauty)',
      desc: 'The essence of attraction, beauty, and affection. Portrayed with gentle neck movement (Griva Bheda), soft gaze, and universal aesthetic devotion.',
      cue: 'Head Tilt: 15° | Gaze: Gentle Romance'
    },
    hasya: {
      name: '2. Hasya (Joy & Laughter)',
      desc: 'The expression of happiness, laughter, and delight. Portrayed with sparkling eyes, elevated cheeks, and radiant smiles from festive harvest lore.',
      cue: 'Smile Arc: +30% | Gaze: Sparkling Delight'
    },
    karuna: {
      name: '3. Karuna (Compassion & Sorrow)',
      desc: 'The feeling of empathy, kindness, and sorrow for others. Portrayed with tender drooping posture and deep empathetic resonance.',
      cue: 'Shoulder Drop: 5% | Gaze: Tender Empathy'
    },
    raudra: {
      name: '4. Raudra (Fury & Anger)',
      desc: 'The power of anger that arises from injustice or ego. Depicted with fiery intense gaze, flaring nostrils, and fierce martial energy.',
      cue: 'Jaw Clench: Max | Gaze: Red Fiery Focus'
    },
    veera: {
      name: '5. Veera (Courage & Valor)',
      desc: 'The spirit of bravery, confidence, and inner strength. Broad upright chest, firm jawline, and steady piercing heroic gaze (Drishti).',
      cue: 'Chest Expansion: +15% | Eye Focus: Fixed Valor'
    },
    bhayanaka: {
      name: '6. Bhayanaka (Fear & Vigilance)',
      desc: 'The emotion of fear, anxiety, and apprehension. Alert scanning gaze, rapid breathing, and defensive posture in the presence of awe.',
      cue: 'Eye Flutter: Alert | Gaze: Defensive Vigilance'
    },
    bibhatsa: {
      name: '7. Bibhatsa (Disgust & Aversion)',
      desc: 'The feeling of aversion or repulsion towards something unpleasant. Wrinkled nose and turned head symbolizing the rejection of untruth.',
      cue: 'Head Turn: 45° | Gaze: Critical Aversion'
    },
    adbhuta: {
      name: '8. Adbhuta / Aashcharya (Wonder & Surprise)',
      desc: 'The sense of awe, surprise, and astonishment. Wide curved eyes, elevated eyebrows, and open soft breath expressing cosmic fascination.',
      cue: 'Eyebrow Elevation: +25% | Gaze: Expansive Wonder'
    },
    aashcharya: {
      name: '8. Adbhuta / Aashcharya (Wonder & Surprise)',
      desc: 'The sense of awe, surprise, and astonishment. Wide curved eyes, elevated eyebrows, and open soft breath expressing cosmic fascination.',
      cue: 'Eyebrow Elevation: +25% | Gaze: Expansive Wonder'
    },
    shanta: {
      name: '9. Shanta (Peace & Serenity)',
      desc: 'The state of calmness, contentment, and inner peace. Gently curved eyelids, centered breath, and soft facial tranquility.',
      cue: 'Breath Cycle: 4s Steady | Gaze: Centered Peace'
    }
  };

  function updateMudra(key) {
    if (!mudraContainer || !mudraDesc) return;
    mudraContainer.innerHTML = `
      <div class="ar-hud-overlay">
        <span>AR Mudra Spatial Sensor</span>
        <span>Track: Active</span>
      </div>
      ${DanceVectors.getMudraVector(key)}
      <div class="ar-angle-tracker">${mudraData[key].angle}</div>
    `;
    mudraDesc.innerHTML = `
      <h4>${mudraData[key].name}</h4>
      <p>${mudraData[key].desc}</p>
    `;
  }

  function updateRasa(key) {
    if (!rasaContainer || !rasaDesc) return;
    const currentRasa = rasaData[key] || rasaData.veera;
    rasaContainer.innerHTML = `
      <div class="ar-hud-overlay">
        <span>Abhinaya Facial Vector</span>
        <span>Resonance: 98%</span>
      </div>
      ${DanceVectors.getRasaVector(key)}
      <div class="ar-angle-tracker">${currentRasa.cue}</div>
    `;
    rasaDesc.innerHTML = `
      <h4>${currentRasa.name}</h4>
      <p>${currentRasa.desc}</p>
    `;
  }

  // Bind click buttons
  document.querySelectorAll('.btn-mudra-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-mudra-choice').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateMudra(btn.getAttribute('data-mudra'));
      notifyCoachAction('mudra');
    });
  });

  document.querySelectorAll('.btn-rasa-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-rasa-choice').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateRasa(btn.getAttribute('data-rasa'));
      notifyCoachAction('rasa');
    });
  });

  // Initial load
  updateMudra('pataka');
  updateRasa('veera');
}

// ==========================================================
// CINEMATIC ENTRY & MID FUSION VIDEO MODAL HANDLERS
// ==========================================================
function openIntroCinematicModal() {
  const modal = document.getElementById('cinematicIntroModal');
  const video = document.getElementById('introCinematicVideo');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  if (video) {
    video.currentTime = 0;
    video.play().catch(() => {});
  }
}

function closeIntroCinematicModal() {
  const modal = document.getElementById('cinematicIntroModal');
  const video = document.getElementById('introCinematicVideo');
  if (video) video.pause();
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
window.openIntroCinematicModal = openIntroCinematicModal;
window.closeIntroCinematicModal = closeIntroCinematicModal;

function openFusionCelebrationModal() {
  const modal = document.getElementById('fusionCelebrationModal');
  const video = document.getElementById('fusionCelebrationVideo');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  if (video) {
    video.currentTime = 0;
    video.play().catch(() => {});
  }
}

function closeFusionCelebrationModal() {
  const modal = document.getElementById('fusionCelebrationModal');
  const video = document.getElementById('fusionCelebrationVideo');
  if (video) video.pause();
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
window.openFusionCelebrationModal = openFusionCelebrationModal;
window.closeFusionCelebrationModal = closeFusionCelebrationModal;

// Navarasa Modal Handlers
function openNavarasaModal() {
  const modal = document.getElementById('navarasaModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeNavarasaModal() {
  const modal = document.getElementById('navarasaModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
window.openNavarasaModal = openNavarasaModal;
window.closeNavarasaModal = closeNavarasaModal;

function selectRasaFromMandala(rasaKey) {
  closeNavarasaModal();
  switchPhase('phase1');
  const targetBtn = document.querySelector(`.btn-rasa-choice[data-rasa="${rasaKey}"]`);
  if (targetBtn) {
    document.querySelectorAll('.btn-rasa-choice').forEach(b => b.classList.remove('active'));
    targetBtn.classList.add('active');
  }
  const desc = document.getElementById('rasaDescContainer');
  const container = document.getElementById('rasaPreviewContainer');
  if (container && desc) {
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
window.selectRasaFromMandala = selectRasaFromMandala;

// ==========================================================
// PHASE 2: REGIONAL QUEST CHALLENGE (8-Matrix Cards)
// ==========================================================
function renderPhase2() {
  const grid = document.getElementById('questMatrixGrid');
  if (!grid) return;
  grid.innerHTML = '';

  SimState.dances.forEach(dance => {
    const card = document.createElement('div');
    card.className = `dance-card ${dance.completed ? 'completed' : ''}`;
    card.id = `card-${dance.id}`;

    let mediaHTML = `<img src="${dance.image}" alt="${dance.name}" class="dance-card-img" />`;

    card.innerHTML = `
      <div class="dance-card-media btn-watch-video" data-id="${dance.id}" title="Watch ${dance.name} dance video showcase">
        ${mediaHTML}
        <div class="dance-card-overlay-gradient"></div>
        <div class="dance-region-pill">${dance.region}</div>
        <div class="dance-video-badge">
          <svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>Watch Video</span>
        </div>
      </div>
      <div class="dance-card-body">
        <h3>${dance.name}</h3>
        <div class="quest-mission-box">
          <strong>Regional Quest:</strong> ${dance.quest}
        </div>
        <div class="sensor-hud-box">
          <span class="sensor-hud-name">${dance.hudName}</span>
          <span class="sensor-hud-value">${dance.hudMetric}</span>
        </div>
        <div class="dance-card-footer">
          <button class="btn-card-action btn-play-solo" data-id="${dance.id}">
            ${DanceVectors.icon('drum')} Play Beat
          </button>
          <button class="btn-card-action unlock btn-open-quest" data-id="${dance.id}">
            ${dance.completed ? DanceVectors.icon('check') + ' Mastered' : DanceVectors.icon('sparkles') + ' Decode Quest'}
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach Event Listeners
  grid.querySelectorAll('.btn-watch-video').forEach(mediaEl => {
    mediaEl.addEventListener('click', () => {
      const danceId = mediaEl.getAttribute('data-id');
      openDanceVideoModal(danceId);
      notifyCoachAction('watch_video');
    });
  });

  grid.querySelectorAll('.btn-play-solo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const danceId = btn.getAttribute('data-id');
      handleSoloPlay(danceId, btn);
      notifyCoachAction('play_beat');
    });
  });

  grid.querySelectorAll('.btn-open-quest').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const danceId = btn.getAttribute('data-id');
      openQuestSimulatorModal(danceId);
      notifyCoachAction('decode_quest');
    });
  });
}

// ==========================================================
// DANCE PERFORMANCE VIDEO SHOWCASE MODAL
// ==========================================================
function openDanceVideoModal(danceId) {
  const dance = SimState.dances.find(d => d.id === danceId);
  if (!dance) return;

  const modal = document.getElementById('danceVideoModal');
  const title = document.getElementById('videoModalTitle');
  const region = document.getElementById('videoModalRegion');
  const player = document.getElementById('videoPlayerContainer');
  const meta = document.getElementById('videoMetaPanel');

  if (title) title.textContent = `${dance.name}: Video Showcase`;
  if (region) region.textContent = `${dance.region} • ${dance.videoTradition || 'Traditional Indian Art'}`;

  if (player) {
    player.innerHTML = `
      <div class="responsive-video-frame" id="ytPlayerWrapper">
        <img src="${dance.image}" alt="${dance.name}" class="video-poster-bg" />
        <div class="video-poster-overlay"></div>
        <div class="video-play-center-btn" id="btnLaunchYTIframe" title="Play Video in Player">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        </div>
        <div class="video-source-pill">
          <span>Official Performance Video • ${dance.name}</span>
        </div>
      </div>
    `;

    const launchBtn = document.getElementById('btnLaunchYTIframe');
    const wrapper = document.getElementById('ytPlayerWrapper');
    if (launchBtn && wrapper) {
      launchBtn.addEventListener('click', () => {
        wrapper.innerHTML = `
          <iframe 
            src="https://www.youtube.com/embed/${dance.videoId}?autoplay=1&rel=0" 
            title="${dance.name} Dance Performance" 
            frameborder="0" 
            referrerpolicy="no-referrer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        `;
      });
    }
  }

  if (meta) {
    const highlightsHTML = (dance.videoHighlights || []).map(h => `<li><span class="hl-bullet">✦</span> ${h}</li>`).join('');
    meta.innerHTML = `
      <div class="video-meta-top">
        <div class="video-title-tag">${dance.videoTitle}</div>
        <div class="video-action-links">
          <a href="https://www.youtube.com/watch?v=${dance.videoId}" target="_blank" rel="noopener noreferrer" class="btn-yt-direct">
            <span>Watch on YouTube</span>
            <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
          <button class="btn-meta-solo-beat" id="btnModalPlaySolo" data-id="${dance.id}">
            ${DanceVectors.icon('drum')} Practice Rhythm Loop
          </button>
        </div>
      </div>
      <div class="video-context-grid">
        <div class="video-context-card">
          <h5>Key Movement Mechanics & Expressions</h5>
          <ul class="video-highlights-list">
            ${highlightsHTML}
          </ul>
        </div>
        <div class="video-context-card">
          <h5>Rhythmic Formula & Movement Quest</h5>
          <p><strong>Solkattu Rhythmic Signature:</strong> ${dance.solkattu}</p>
          <p style="margin-top: 0.5rem;"><strong>Classroom Challenge:</strong> ${dance.quest}</p>
          <div class="modal-sensor-pill" style="margin-top: 0.75rem;">
            <strong>${dance.hudName}:</strong> ${dance.hudMetric}
          </div>
        </div>
      </div>
    `;

    const modalBeatBtn = document.getElementById('btnModalPlaySolo');
    if (modalBeatBtn) {
      modalBeatBtn.addEventListener('click', () => {
        handleSoloPlay(dance.id, modalBeatBtn);
      });
    }
  }

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDanceVideoModal() {
  const modal = document.getElementById('danceVideoModal');
  const player = document.getElementById('videoPlayerContainer');
  if (player) player.innerHTML = ''; // Stop video audio immediately
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
window.closeDanceVideoModal = closeDanceVideoModal;
window.openDanceVideoModal = openDanceVideoModal;

// Handle Solo Beat Playback on card
function handleSoloPlay(danceId, btn) {
  if (SimState.activeSoloDance === danceId && window.RhythmEngine.isPlaying) {
    window.RhythmEngine.stop();
    SimState.activeSoloDance = null;
    btn.innerHTML = `${DanceVectors.icon('drum')} Play Beat`;
  } else {
    document.querySelectorAll('.btn-play-solo').forEach(b => {
      b.innerHTML = `${DanceVectors.icon('drum')} Play Beat`;
    });
    SimState.activeSoloDance = danceId;
    btn.innerHTML = `${DanceVectors.icon('pause')} Stop Loop`;
    window.RhythmEngine.startSoloDance(danceId);
  }
}

// ==========================================================
// QUEST SIMULATOR MODAL & SENSORS
// ==========================================================
function openQuestSimulatorModal(danceId) {
  const dance = SimState.dances.find(d => d.id === danceId);
  if (!dance) return;
  SimState.activeModalDance = dance;

  const modal = document.getElementById('questModal');
  const title = document.getElementById('modalDanceTitle');
  const region = document.getElementById('modalDanceRegion');
  const content = document.getElementById('modalInteractiveContent');

  if (title) title.textContent = `${dance.name} Quest Simulation`;
  if (region) region.textContent = `${dance.region} • ${dance.team}`;

  // Build specific interactive mini-challenge for this dance form
  if (content) {
    content.innerHTML = getSimulatorHTML(dance);
    setupSimulatorLogic(dance);
  }

  if (modal) modal.classList.add('open');
}

function closeQuestModal() {
  const modal = document.getElementById('questModal');
  if (modal) modal.classList.remove('open');
  if (SimState.activeSoloDance) {
    window.RhythmEngine.stop();
  }
}

// Simulator HTML Builder
function getSimulatorHTML(dance) {
  return `
    <div style="background: #060916; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
        <span style="color: var(--accent-gold); font-weight: 700; font-size: 0.85rem; text-transform: uppercase;">
          ${DanceVectors.icon('pulse')} ${dance.hudName}
        </span>
        <span style="font-family: 'Space Grotesk'; color: #67e8f9; font-size: 0.85rem;" id="simLiveTracker">
          Calibrating...
        </span>
      </div>

      <div id="simInteractiveArea" style="min-height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;">
        <!-- Injected per dance type -->
      </div>

      <div style="background: rgba(255,255,255,0.03); border-radius: 10px; padding: 0.85rem; font-size: 0.85rem; color: #94a3b8;">
        <strong style="color: #fff;">Classroom Facilitation Cue:</strong> ${dance.quest}
      </div>

      <button id="btnCompleteQuest" class="action-cta-btn" style="width: 100%;">
        ${DanceVectors.icon('check')} Validate Team Performance (+100 Unity XP)
      </button>
    </div>
  `;
}

// Setup Specific Simulator Mechanics
function setupSimulatorLogic(dance) {
  const area = document.getElementById('simInteractiveArea');
  const tracker = document.getElementById('simLiveTracker');
  const completeBtn = document.getElementById('btnCompleteQuest');

  if (!area) return;

  // Custom Simulator Widget based on dance
  switch (dance.id) {
    case 'bharatanatyam':
      area.innerHTML = `
        <div style="width: 100%; text-align: center;">
          <p style="color: #cbd5e1; font-size: 0.88rem; margin-bottom: 0.75rem;">Align Aramandi Knee Squat & Nataraja Drishti (Eye Focus):</p>
          <input type="range" id="squatSlider" min="60" max="150" value="90" style="width: 80%; accent-color: #f59e0b;" />
          <div style="font-family: 'Space Grotesk'; font-size: 1.2rem; color: #fbbf24; margin-top: 0.5rem;" id="squatAngleText">Squat Angle: 90°</div>
        </div>
      `;
      const slider = document.getElementById('squatSlider');
      if (slider) {
        slider.addEventListener('input', (e) => {
          const val = e.target.value;
          document.getElementById('squatAngleText').textContent = `Squat Angle: ${val}°`;
          if (val >= 115 && val <= 125) {
            tracker.textContent = 'Perfect Aramandi Alignment (120°)';
            tracker.style.color = '#10b981';
          } else {
            tracker.textContent = 'Adjust Knee Depth to 120°';
            tracker.style.color = '#f59e0b';
          }
        });
      }
      break;

    case 'kathak':
      let spinCount = 0;
      area.innerHTML = `
        <div style="text-align: center;">
          <p style="color: #cbd5e1; font-size: 0.88rem; margin-bottom: 0.75rem;">Click in rhythm to execute 3 fast Chakkars & Tatkar freeze:</p>
          <button id="btnSpinChakkar" class="action-cta-btn secondary" style="padding: 0.75rem 1.5rem;">
            ${DanceVectors.icon('pulse')} Spin Chakkar (0 / 3)
          </button>
        </div>
      `;
      const spinBtn = document.getElementById('btnSpinChakkar');
      if (spinBtn) {
        spinBtn.addEventListener('click', () => {
          spinCount++;
          window.RhythmEngine.playGhungroo(window.RhythmEngine.ctx ? window.RhythmEngine.ctx.currentTime : 0);
          if (spinCount < 3) {
            spinBtn.innerHTML = `${DanceVectors.icon('pulse')} Spin Chakkar (${spinCount} / 3)`;
            tracker.textContent = `Spin Speed: ${spinCount * 1.1} Rev/s`;
          } else {
            spinBtn.innerHTML = `${DanceVectors.icon('check')} Crisp Freeze Struck!`;
            spinBtn.style.background = 'rgba(16, 185, 129, 0.2)';
            tracker.textContent = 'Crisp Freeze Frame Locked!';
            tracker.style.color = '#10b981';
          }
        });
      }
      break;

    case 'cheraw':
      let stepCount = 0;
      area.innerHTML = `
        <div style="text-align: center;">
          <p style="color: #cbd5e1; font-size: 0.88rem; margin-bottom: 0.75rem;">Step into the 4/4 sliding bamboo grid on open beats:</p>
          <button id="btnBambooStep" class="action-cta-btn secondary" style="padding: 0.75rem 1.5rem;">
            ${DanceVectors.icon('layers')} Step In / Out Grid (0 / 4)
          </button>
        </div>
      `;
      const bambooBtn = document.getElementById('btnBambooStep');
      if (bambooBtn) {
        bambooBtn.addEventListener('click', () => {
          stepCount = (stepCount + 1);
          window.RhythmEngine.playBambooClack(window.RhythmEngine.ctx ? window.RhythmEngine.ctx.currentTime : 0);
          bambooBtn.innerHTML = `${DanceVectors.icon('layers')} Bamboo Step (${stepCount % 5} / 4)`;
          if (stepCount >= 4) {
            tracker.textContent = 'Bamboo Grid Sync 100%';
            tracker.style.color = '#10b981';
          } else {
            tracker.textContent = `Step Rhythm: ${stepCount}/4`;
          }
        });
      }
      break;

    default:
      area.innerHTML = `
        <div style="text-align: center;">
          <p style="color: #cbd5e1; font-size: 0.88rem; margin-bottom: 0.75rem;">Rhythm Pattern: <strong>${dance.solkattu}</strong></p>
          <button id="btnGenericTap" class="action-cta-btn secondary" style="padding: 0.75rem 1.5rem;">
            ${DanceVectors.icon('drum')} Tap Sync Beat
          </button>
        </div>
      `;
      const genericBtn = document.getElementById('btnGenericTap');
      if (genericBtn) {
        genericBtn.addEventListener('click', () => {
          window.RhythmEngine.playRegionalBeat(dance.id, Math.floor(Math.random() * 8), window.RhythmEngine.ctx ? window.RhythmEngine.ctx.currentTime : 0);
          tracker.textContent = 'Rhythm Calibrated with Team';
          tracker.style.color = '#10b981';
        });
      }
      break;
  }

  // Complete & Award XP
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      dance.completed = true;
      renderPhase2();
      renderMasterHUD();
      renderScorecard();
      closeQuestModal();

      // Check if all completed
      const allDone = SimState.dances.every(d => d.completed);
      if (allDone) {
        alert('All 8 Regional Quests Mastered! Proceed to Phase 3: The Antigravity Fusion Symphony to orchestrate "Many in the One"!');
      }
    });
  }
}

// ==========================================================
// PHASE 3: ANTIGRAVITY FUSION SYMPHONY ("MANY IN THE ONE")
// ==========================================================
function renderPhase3() {
  const btnLayer1 = document.getElementById('btnToggleLayer1');
  const btnLayer2 = document.getElementById('btnToggleLayer2');
  const btnLayer3 = document.getElementById('btnToggleLayer3');
  const cardLayer1 = document.getElementById('cardLayer1');
  const cardLayer2 = document.getElementById('cardLayer2');
  const cardLayer3 = document.getElementById('cardLayer3');
  const tempoSlider = document.getElementById('tempoSlider');
  const tempoVal = document.getElementById('tempoDisplayVal');
  const btnFreeze = document.getElementById('btnSynthesisFreeze');

  function updateLayerUI() {
    const l1 = window.RhythmEngine.activeLayers.layer1;
    const l2 = window.RhythmEngine.activeLayers.layer2;
    const l3 = window.RhythmEngine.activeLayers.layer3;

    if (btnLayer1) {
      btnLayer1.classList.toggle('active', l1);
      btnLayer1.innerHTML = l1 ? `${DanceVectors.icon('check')} Layer 1 Active` : `${DanceVectors.icon('play')} Activate Layer 1`;
    }
    if (cardLayer1) cardLayer1.classList.toggle('active', l1);

    if (btnLayer2) {
      btnLayer2.classList.toggle('active', l2);
      btnLayer2.innerHTML = l2 ? `${DanceVectors.icon('check')} Layer 2 Active` : `${DanceVectors.icon('play')} Activate Layer 2`;
    }
    if (cardLayer2) cardLayer2.classList.toggle('active', l2);

    if (btnLayer3) {
      btnLayer3.classList.toggle('active', l3);
      btnLayer3.innerHTML = l3 ? `${DanceVectors.icon('check')} Layer 3 Active` : `${DanceVectors.icon('play')} Activate Layer 3`;
    }
    if (cardLayer3) cardLayer3.classList.toggle('active', l3);

    const statusBadge = document.getElementById('symphonyStatusBadge');
    if (statusBadge) {
      if (l1 && l2 && l3) {
        statusBadge.textContent = 'Status: FULL CLASS FUSION SYMPHONY ("MANY IN THE ONE")';
        statusBadge.style.color = '#fde047';
      } else if (l1 || l2 || l3) {
        statusBadge.textContent = 'Status: Harmonizing Regional Layers...';
        statusBadge.style.color = '#38bdf8';
      } else {
        statusBadge.textContent = 'Status: Standby • Activate Layers Below';
        statusBadge.style.color = '#94a3b8';
      }
    }
  }

  if (btnLayer1) {
    btnLayer1.addEventListener('click', () => {
      window.RhythmEngine.activeLayers.layer1 = !window.RhythmEngine.activeLayers.layer1;
      if (!window.RhythmEngine.isPlaying) window.RhythmEngine.startFusionEngine();
      updateLayerUI();
      notifyCoachAction('layer1');
    });
  }

  if (btnLayer2) {
    btnLayer2.addEventListener('click', () => {
      window.RhythmEngine.activeLayers.layer2 = !window.RhythmEngine.activeLayers.layer2;
      if (!window.RhythmEngine.isPlaying) window.RhythmEngine.startFusionEngine();
      updateLayerUI();
      notifyCoachAction('layer2');
    });
  }

  if (btnLayer3) {
    btnLayer3.addEventListener('click', () => {
      window.RhythmEngine.activeLayers.layer3 = !window.RhythmEngine.activeLayers.layer3;
      if (!window.RhythmEngine.isPlaying) window.RhythmEngine.startFusionEngine();
      updateLayerUI();
      notifyCoachAction('layer3');
    });
  }

  if (tempoSlider) {
    tempoSlider.addEventListener('input', (e) => {
      const bpm = parseInt(e.target.value);
      window.RhythmEngine.setBpm(bpm);
      if (tempoVal) tempoVal.textContent = `${bpm} BPM`;
      notifyCoachAction('tempo');
    });
  }

  // Synthesis Freeze Protocol
  if (btnFreeze) {
    btnFreeze.addEventListener('click', () => {
      const flash = document.getElementById('freezeFlashOverlay');
      if (flash) {
        flash.classList.add('active');
        setTimeout(() => flash.classList.remove('active'), 800);
      }

      window.RhythmEngine.strikeSynthesisFreeze(() => {
        openFusionCelebrationModal();
        notifyCoachAction('freeze');
      });
      updateLayerUI();
    });
  }
}

// ==========================================================
// CANVAS 2D PARTICLE & DANCE AURA VISUALIZER
// ==========================================================
function initCanvasVisualizer() {
  const canvas = document.getElementById('symphonyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let angle = 0;
  const particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      color: ['#f59e0b', '#ec4899', '#06b6d4', '#10b981', '#6366f1'][Math.floor(Math.random() * 5)]
    });
  }

  function draw() {
    ctx.fillStyle = 'rgba(4, 5, 13, 0.25)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.7;

    const l1 = window.RhythmEngine.activeLayers.layer1;
    const l2 = window.RhythmEngine.activeLayers.layer2;
    const l3 = window.RhythmEngine.activeLayers.layer3;

    // Draw 8 Regional Nodes
    const dances = SimState.dances;
    for (let i = 0; i < 8; i++) {
      const theta = (i * Math.PI / 4) + angle * 0.2;
      const nx = centerX + Math.cos(theta) * radius;
      const ny = centerY + Math.sin(theta) * radius;

      // Node ring
      ctx.beginPath();
      ctx.arc(nx, ny, 16, 0, Math.PI * 2);
      ctx.fillStyle = dances[i].layer === 1 ? '#06b6d4' : dances[i].layer === 2 ? '#f59e0b' : '#ec4899';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Connect to center if layer is active
      const isLayerActive = (dances[i].layer === 1 && l1) || (dances[i].layer === 2 && l2) || (dances[i].layer === 3 && l3);
      if (isLayerActive) {
        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = 2.5;
        ctx.globalAlpha = 0.6;
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }

      // Text label
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '10px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(dances[i].name, nx, ny + 28);
    }

    // Central Unity Lotus Core
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30 + Math.sin(angle * 2) * 5, 0, Math.PI * 2);
    ctx.fillStyle = (l1 && l2 && l3) ? '#fde047' : 'rgba(255, 255, 255, 0.15)';
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = (l1 && l2 && l3) ? '#000' : '#fff';
    ctx.font = 'bold 11px "Space Grotesk", sans-serif';
    ctx.fillText((l1 && l2 && l3) ? 'UNITY' : 'FUSION', centerX, centerY + 4);

    // Particle Swarm
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    angle += 0.01;
    requestAnimationFrame(draw);
  }

  draw();
}

// ==========================================================
// SCORECARD & LIVE XP TRACKING
// ==========================================================
function renderScorecard() {
  const tbody = document.getElementById('scorecardTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  SimState.teams.forEach((t, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 700; color: #fff;">${t.name}</td>
      <td style="color: var(--accent-gold-bright); font-weight: 600;">${t.dance}</td>
      <td>
        <div class="score-stepper">
          <button class="btn-step" onclick="updateTeamScore(${idx}, 'mudra', -1)">-</button>
          <span class="step-val">${t.mudra}</span>
          <button class="btn-step" onclick="updateTeamScore(${idx}, 'mudra', 1)">+</button>
          <span style="font-size: 0.8rem; color: var(--text-muted);">/ 5</span>
        </div>
      </td>
      <td>
        <div class="score-stepper">
          <button class="btn-step" onclick="updateTeamScore(${idx}, 'sync', -1)">-</button>
          <span class="step-val">${t.sync}</span>
          <button class="btn-step" onclick="updateTeamScore(${idx}, 'sync', 1)">+</button>
          <span style="font-size: 0.8rem; color: var(--text-muted);">/ 5</span>
        </div>
      </td>
      <td style="font-family: 'Space Grotesk'; font-weight: 700; color: #10b981;">
        ${t.xp} XP
      </td>
    `;
    tbody.appendChild(tr);
  });

  const printBtn = document.getElementById('btnPrintScorecard');
  if (printBtn) {
    printBtn.onclick = () => window.print();
  }
}

window.updateTeamScore = function(teamIdx, field, delta) {
  const team = SimState.teams[teamIdx];
  if (!team) return;
  team[field] = Math.max(1, Math.min(5, team[field] + delta));
  team.xp = (team.mudra + team.sync) * 10;
  renderScorecard();
};

// ==========================================================
// SOCRATIC DEBRIEF & IB RUBRIC
// ==========================================================
function renderDebrief() {
  // Load saved journal reflections
  const prompts = ['q1', 'q2', 'q3', 'q4'];
  prompts.forEach(p => {
    const el = document.getElementById(`debrief-${p}`);
    if (el) {
      el.value = localStorage.getItem(`rhythm_odyssey_${p}`) || '';
      el.addEventListener('input', () => {
        localStorage.setItem(`rhythm_odyssey_${p}`, el.value);
      });
    }
  });

  const btnExport = document.getElementById('btnExportJournal');
  if (btnExport) {
    btnExport.onclick = () => {
      let exportText = "RHYTHM ODYSSEY: SOCRATIC INQUIRY JOURNAL\n\n";
      exportText += "1. Dance as Cultural Language:\n" + (document.getElementById('debrief-q1')?.value || 'N/A') + "\n\n";
      exportText += "2. Environmental Connections (Geography & Movement):\n" + (document.getElementById('debrief-q2')?.value || 'N/A') + "\n\n";
      exportText += "3. Deconstructing 'Many in the One':\n" + (document.getElementById('debrief-q3')?.value || 'N/A') + "\n\n";
      exportText += "4. Modern Societal Application:\n" + (document.getElementById('debrief-q4')?.value || 'N/A') + "\n\n";

      const blob = new Blob([exportText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Rhythm_Odyssey_IB_Debrief.txt';
      a.click();
    };
  }
}

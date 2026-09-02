/**
 * Rich SVG Vector Artwork and Cultural Motifs for Indian Regional Dances & Mudras
 * Includes SVG cards for Lavani and Chhau, Hastamudra diagrams, and Rasa expressions
 */

const DanceVectors = {
  // SVG Icon helper for clean UI without emojis
  icon: function(name, className = "svg-icon") {
    const icons = {
      drum: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9v6c0 3.3 4.5 6 10 6s10-2.7 10-6V9"/><ellipse cx="12" cy="9" rx="10" ry="6"/><path d="M7 13.5l10 5M17 13.5l-10 5"/></svg>`,
      sparkles: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.9 4.8a2 2 0 001.3 1.3L20 11l-4.8 1.9a2 2 0 00-1.3 1.3L12 19l-1.9-4.8a2 2 0 00-1.3-1.3L4 11l4.8-1.9a2 2 0 001.3-1.3L12 3z"/></svg>`,
      play: `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      pause: `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
      check: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
      award: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
      users: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      layers: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      pulse: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      feather: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`,
      compass: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
      sound: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
      mute: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
      print: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
      info: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
    };
    return icons[name] || '';
  },

  // Lavani Art (Maharashtra)
  getLavaniVector: function() {
    return `
    <svg viewBox="0 0 400 300" class="dance-svg-art" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lavaniGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#ec4899" stop-opacity="0.9"/>
          <stop offset="60%" stop-color="#831843" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#180415" stop-opacity="0.95"/>
        </radialGradient>
        <linearGradient id="sareePink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="50%" stop-color="#db2777"/>
          <stop offset="100%" stop-color="#9d174d"/>
        </linearGradient>
        <linearGradient id="goldZari" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="50%" stop-color="#fef08a"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#lavaniGlow)"/>
      
      <!-- Stage Lights & Rhythmic Shockwaves -->
      <circle cx="200" cy="150" r="110" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.4"/>
      <circle cx="200" cy="150" r="130" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.3"/>
      
      <!-- Dholak drum rhythm lines -->
      <path d="M 40 240 Q 200 280 360 240" fill="none" stroke="#fbbf24" stroke-width="3" opacity="0.6"/>
      <path d="M 70 260 Q 200 295 330 260" fill="none" stroke="#db2777" stroke-width="2" opacity="0.5"/>

      <!-- Dancer Silhouette & Nauvari Saree -->
      <g transform="translate(140, 40)">
        <!-- Head & Adornment -->
        <circle cx="60" cy="35" r="18" fill="#fbcfe8"/>
        <!-- Traditional Ambada hair bun -->
        <circle cx="46" cy="30" r="12" fill="#1e1b4b"/>
        <path d="M 40 20 Q 55 12 70 20" stroke="url(#goldZari)" stroke-width="3" fill="none"/>
        <circle cx="68" cy="36" r="2.5" fill="#f43f5e"/> <!-- Chandrakor bindi / Nath -->
        
        <!-- Torso with Choli -->
        <path d="M 48 53 L 72 53 L 68 90 L 52 90 Z" fill="#991b1b"/>
        <path d="M 48 53 Q 60 70 72 53" stroke="url(#goldZari)" stroke-width="2.5" fill="none"/>

        <!-- Expressive Arms in Mudra (Adavu) -->
        <path d="M 48 56 Q 20 65 15 45 Q 18 35 30 38" fill="none" stroke="#fbcfe8" stroke-width="7" stroke-linecap="round"/>
        <path d="M 72 56 Q 100 65 110 85 Q 102 95 90 90" fill="none" stroke="#fbcfe8" stroke-width="7" stroke-linecap="round"/>
        <!-- Green bangles -->
        <circle cx="24" cy="40" r="4" fill="#059669"/>
        <circle cx="102" cy="88" r="4" fill="#059669"/>

        <!-- Nauvari 9-yard Saree Pleats (Kashta) -->
        <path d="M 52 90 Q 30 140 25 190 L 95 190 Q 90 140 68 90 Z" fill="url(#sareePink)"/>
        <!-- Golden Border -->
        <path d="M 25 190 L 95 190" stroke="url(#goldZari)" stroke-width="8" stroke-linecap="round"/>
        <path d="M 60 90 L 60 190" stroke="url(#goldZari)" stroke-width="4" stroke-dasharray="6 4"/>
        <path d="M 35 120 Q 60 140 85 120" stroke="url(#goldZari)" stroke-width="2.5" fill="none"/>
        <path d="M 30 155 Q 60 175 90 155" stroke="url(#goldZari)" stroke-width="2.5" fill="none"/>

        <!-- Feet with Ghungroos -->
        <rect x="35" y="190" width="12" height="15" rx="3" fill="#fbcfe8"/>
        <rect x="73" y="190" width="12" height="15" rx="3" fill="#fbcfe8"/>
        <circle cx="41" cy="192" r="3" fill="#f59e0b"/>
        <circle cx="79" cy="192" r="3" fill="#f59e0b"/>
      </g>

      <!-- Dholak Instruments Decorative -->
      <g transform="translate(30, 180) scale(0.65)">
        <ellipse cx="60" cy="50" rx="35" ry="22" fill="#78350f" transform="rotate(-20 60 50)"/>
        <ellipse cx="30" cy="40" rx="10" ry="18" fill="#451a03" transform="rotate(-20 30 40)"/>
        <line x1="30" y1="22" x2="88" y2="40" stroke="#fbbf24" stroke-width="2"/>
        <line x1="30" y1="58" x2="88" y2="76" stroke="#fbbf24" stroke-width="2"/>
      </g>
      <text x="200" y="282" text-anchor="middle" fill="#fef08a" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" letter-spacing="2">LAVANI • MAHARASHTRA</text>
    </svg>
    `;
  },

  // Chhau Art (Jharkhand / Odisha Martial Dance)
  getChhauVector: function() {
    return `
    <svg viewBox="0 0 400 300" class="dance-svg-art" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="chhauGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.9"/>
          <stop offset="60%" stop-color="#0f172a" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#030712" stop-opacity="0.98"/>
        </radialGradient>
        <linearGradient id="shieldGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="50%" stop-color="#fbbf24"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
        <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4"/>
          <stop offset="50%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#chhauGlow)"/>

      <!-- Martial Shockwave Rings -->
      <polygon points="200,20 230,80 300,80 245,120 265,180 200,140 135,180 155,120 100,80 170,80" fill="none" stroke="#38bdf8" stroke-width="1.5" opacity="0.3"/>
      <circle cx="200" cy="140" r="115" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="10 8" opacity="0.4"/>

      <!-- Chhau Martial Mask & Dancer in Mid-Air Leap -->
      <g transform="translate(130, 25)">
        <!-- Giant Ornate Headgear (Mukuta) -->
        <path d="M 10 60 Q 70 -15 130 60 Z" fill="url(#featherGrad)" stroke="#fef08a" stroke-width="2"/>
        <circle cx="70" cy="20" r="10" fill="#f59e0b"/>
        <circle cx="45" cy="35" r="7" fill="#ef4444"/>
        <circle cx="95" cy="35" r="7" fill="#ef4444"/>
        <!-- Beaded Halo Rays -->
        <line x1="70" y1="8" x2="70" y2="-8" stroke="#fef08a" stroke-width="3"/>
        <line x1="45" y1="20" x2="35" y2="5" stroke="#fef08a" stroke-width="3"/>
        <line x1="95" y1="20" x2="105" y2="5" stroke="#fef08a" stroke-width="3"/>

        <!-- Ornate Sun Mask -->
        <ellipse cx="70" cy="65" rx="22" ry="24" fill="#fde047"/>
        <ellipse cx="60" cy="62" rx="4" ry="5" fill="#0f172a"/>
        <ellipse cx="80" cy="62" rx="4" ry="5" fill="#0f172a"/>
        <path d="M 62 76 Q 70 82 78 76" stroke="#991b1b" stroke-width="3" fill="none"/>
        <polygon points="70,62 67,70 73,70" fill="#dc2626"/>

        <!-- Dynamic Martial Torso & Armor -->
        <path d="M 50 88 L 90 88 L 84 130 L 56 130 Z" fill="#b91c1c"/>
        <circle cx="70" cy="105" r="8" fill="url(#shieldGold)"/>

        <!-- Right Arm with Shield (Dhal) -->
        <path d="M 50 92 Q 10 90 0 110" fill="none" stroke="#fde047" stroke-width="7" stroke-linecap="round"/>
        <circle cx="0" cy="110" r="22" fill="url(#shieldGold)" stroke="#fef08a" stroke-width="2"/>
        <circle cx="0" cy="110" r="10" fill="#991b1b"/>

        <!-- Left Arm with Curved Sword (Talwar) -->
        <path d="M 90 92 Q 120 75 135 55" fill="none" stroke="#fde047" stroke-width="7" stroke-linecap="round"/>
        <path d="M 135 55 Q 155 30 150 10 Q 140 25 132 48 Z" fill="#e2e8f0" stroke="#38bdf8" stroke-width="2"/>

        <!-- Martial Wide Stance Legs (Ufli Leap) -->
        <path d="M 56 130 L 25 175 L 10 195" fill="none" stroke="#ea580c" stroke-width="12" stroke-linecap="round"/>
        <path d="M 84 130 L 115 165 L 135 180" fill="none" stroke="#ea580c" stroke-width="12" stroke-linecap="round"/>
        <!-- Ankle Bells -->
        <circle cx="10" cy="195" r="6" fill="#f59e0b"/>
        <circle cx="135" cy="180" r="6" fill="#f59e0b"/>
      </g>

      <text x="200" y="282" text-anchor="middle" fill="#38bdf8" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" letter-spacing="2">CHHAU • JHARKHAND / ODISHA</text>
    </svg>
    `;
  },

  // Hastamudra Hand Diagrams & High-Res Photographic Displays
  getMudraVector: function(mudraId) {
    const mudraImages = {
      pataka: {
        src: 'assets/pataka_mudra.png',
        title: 'PATAKA (Flat Palm)',
        tag: 'Universal Open Palm'
      },
      tripataka: {
        src: 'assets/tripataka_mudra.png',
        title: 'TRIPATAKA (3-Finger)',
        tag: 'Crown & Lightning'
      },
      mayura: {
        src: 'assets/mayura_mudra.png',
        title: 'MAYURA (Peacock)',
        tag: 'Graceful Avian Gesture'
      }
    };

    const data = mudraImages[mudraId];
    if (!data) return '';

    return `
      <div class="mudra-photo-wrapper">
        <div class="mudra-photo-frame">
          <img src="${data.src}" alt="${data.title}" class="mudra-photo-img" />
          <div class="ar-hud-corner tl"></div>
          <div class="ar-hud-corner tr"></div>
          <div class="ar-hud-corner bl"></div>
          <div class="ar-hud-corner br"></div>
          <div class="ar-scanner-beam"></div>
        </div>
        <div class="mudra-photo-badge">${data.title}</div>
      </div>
    `;
  },

  // Rasa Expression Vectors (Navarasa 9-Emotion Individual Authentic Cards)
  getRasaVector: function(rasaId) {
    const key = rasaId === 'aashcharya' ? 'adbhuta' : rasaId;
    const rasaImgMap = {
      shringara: { title: '1. Shringara (Love / Beauty)', bhava: 'Sthayi Bhava: Rati (Love)', src: 'assets/rasa_shringara.png', color: '#ec4899', tag: 'Drishti: Gentle Romance' },
      hasya: { title: '2. Hasya (Joy / Laughter)', bhava: 'Sthayi Bhava: Hasa (Mirth)', src: 'assets/rasa_hasya.png', color: '#fbbf24', tag: 'Drishti: Radiant Delight' },
      karuna: { title: '3. Karuna (Compassion / Sorrow)', bhava: 'Sthayi Bhava: Shoka (Grief)', src: 'assets/rasa_karuna.png', color: '#38bdf8', tag: 'Drishti: Tender Empathy' },
      raudra: { title: '4. Raudra (Fury / Righteous Anger)', bhava: 'Sthayi Bhava: Krodha (Fury)', src: 'assets/rasa_raudra.png', color: '#ef4444', tag: 'Drishti: Fiery Intensity' },
      veera: { title: '5. Veera (Courage / Valor)', bhava: 'Sthayi Bhava: Utsaha (Heroism)', src: 'assets/rasa_veera.png', color: '#f59e0b', tag: 'Drishti: Piercing Valor' },
      bhayanaka: { title: '6. Bhayanaka (Fear / Vigilance)', bhava: 'Sthayi Bhava: Bhaya (Fear)', src: 'assets/rasa_bhayanaka.png', color: '#8b5cf6', tag: 'Drishti: Alert Vigilance' },
      bibhatsa: { title: '7. Bibhatsa (Aversion / Discernment)', bhava: 'Sthayi Bhava: Jugupsa (Disgust)', src: 'assets/rasa_bibhatsa.png', color: '#6366f1', tag: 'Drishti: Rejection of Untruth' },
      adbhuta: { title: '8. Adbhuta (Wonder / Cosmic Awe)', bhava: 'Sthayi Bhava: Vismaya (Awe)', src: 'assets/rasa_adbhuta.png', color: '#06b6d4', tag: 'Drishti: Expansive Wonder' },
      shanta: { title: '9. Shanta (Peace / Equanimity)', bhava: 'Sthayi Bhava: Sama (Tranquility)', src: 'assets/rasa_shanta.png', color: '#10b981', tag: 'Drishti: Inward Serenity' }
    };

    const info = rasaImgMap[key] || rasaImgMap.veera;

    return `
      <div class="rasa-card-display-wrapper">
        <div class="rasa-card-frame" style="border-color: ${info.color}; box-shadow: 0 0 20px ${info.color}33;">
          <img src="${info.src}" alt="${info.title}" class="rasa-card-img" />
          <div class="ar-hud-corner tl" style="border-color: ${info.color};"></div>
          <div class="ar-hud-corner tr" style="border-color: ${info.color};"></div>
          <div class="ar-hud-corner bl" style="border-color: ${info.color};"></div>
          <div class="ar-hud-corner br" style="border-color: ${info.color};"></div>
          <div class="ar-scanner-beam" style="background: linear-gradient(180deg, transparent, ${info.color}66, transparent);"></div>
          <div class="rasa-bhava-tag" style="background: rgba(15, 23, 42, 0.85); color: ${info.color}; border: 1px solid ${info.color}44;">
            ${info.bhava}
          </div>
        </div>
        <div class="rasa-photo-badge" style="border-color: ${info.color}; color: ${info.color}; background: ${info.color}15;">
          ${info.title}
        </div>
      </div>
    `;
  }
};

window.DanceVectors = DanceVectors;

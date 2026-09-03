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
      videoTitle: 'Kalakshetra Bharatanatyam: Nritta & Alarippu Recital',
      videoTradition: 'Classical (Natya Shastra Temple & Stage Heritage)',
      videoHighlights: [
        'Aramandi (demi-plié) grounded balance and triangle geometry',
        'Sharp angular Nataraja gestures with precise Hasta Mudras',
        'Complex Jathi rhythmic footwork on Adi Tala beats',
        'Expressive Drishti (Natyashastra eye movement language)'
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
      videoId: 'UBYqv21c0Yk',
      videoTitle: 'Classical Kathak: Taal Dhamaar & Teental Tatkar Rhythms',
      videoTradition: 'Classical (Storytelling & Mughal/Hindu Court Heritage)',
      videoHighlights: [
        'Rapid pirouette Chakkars (multiple high-velocity revolutions)',
        'Ghungroo bell-sync Tatkar footwork on 16-beat Teental',
        'Sudden dramatic freeze-frames (Sama landing on Beat 1)',
        'Delicate Nazakat hand gestures and subtle Abhinaya'
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
      videoId: '0-o8JrC2lYA',
      videoTitle: 'Rongali Bihu: Assamese Spring Harvest Festival Celebration',
      videoTradition: 'Folk / Brahmaputra Valley Harvest Heritage',
      videoHighlights: [
        'Rapid rhythmic wrist rotations and swift palm flips',
        'Brisk hip swaying and buoyant spring bounce steps',
        'Accompaniment by Dhol drum and Pepa buffalo horn',
        'Youthful exuberance celebrating Bohag Bihu new year'
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
      videoId: 'BwBIU_E5lbQ',
      videoTitle: 'Traditional Navratri Raas Garba: 3-Taali Circle Dance',
      videoTradition: 'Folk / Devotional Circle Celebration',
      videoHighlights: [
        'Concentric circular progression around the sacred center',
        'Synchronized 3-clap rhythmic pattern (Tran Taali / Hinch)',
        'Sweeping turns, twirls, and lateral foot touches',
        'Universal communal harmony and shared spatial geometry'
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
      solkattu: 'Dhol Boom & Saap Chimta Chaal',
      layer: 3,
      team: 'Team Epsilon',
      completed: false,
      xp: 100,
      videoId: 'uMhW--Rov_M',
      videoTitle: 'High-Energy Punjabi Bhangra: Folk Power & Dhol Chaal Beats',
      videoTradition: 'Folk / Vaisakhi Harvest Celebration',
      videoHighlights: [
        'Explosive high knee lifts and athletic aerial jumps',
        'Shoulder bounce (Dhamaal) with arms raised in victory',
        'Driving Dhol bass boom and Saap accordion rhythmic clapping',
        'Joyous call-and-response shouts ("Balle Balle!", "Haddipa!")'
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
      videoId: 'BRb89Vs0c4w',
      videoTitle: 'Cheraw Bamboo Dance: Rhythmic Agility & Precision Matrix',
      videoTradition: 'Folk / Ancient Mizo Tribal Heritage',
      videoHighlights: [
        'Sliding and clapping horizontal bamboo staves in 4/4 meter',
        'Nimble stepping in and out of moving grid squares',
        'Graceful arm extensions with traditional Kawrchei attire',
        'High degree of mutual trust, collective timing, and balance'
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
      solkattu: 'Dha-Ge-Na-Tin Fast Dholki Shuffle',
      layer: 3,
      team: 'Team Eta',
      completed: false,
      xp: 100,
      videoId: 'DowhhfP11UU',
      videoTitle: 'Doordarshan Archives: Traditional Maharashtrian Lavani',
      videoTradition: 'Folk / Theatrical Musical Heritage of Maharashtra',
      videoHighlights: [
        'Lightning-fast Dholki syncopated footwork (Chaal)',
        'Traditional 9-yard Nauvari saree drape & Ambada adornment',
        'Witty, bold, and powerful facial expressions (Abhinaya)',
        'Dynamic pirouettes and dramatic rhythmic pauses (Khadak)'
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
      videoId: 'u3YLq7CVavc',
      videoTitle: 'UNESCO Intangible Heritage: Chhau Martial Mask Dance',
      videoTradition: 'Semi-Classical / UNESCO Intangible Cultural Heritage',
      videoHighlights: [
        'Athletic high-elevation leaps, somersaults, and acrobatics (Ufli)',
        'Iconic handcrafted masks representing gods, demons, and beasts',
        'Martial combat postures with sword (Talwar) and shield (Dhal)',
        'Thunderous Nagara war drum rolls and stirring Shehnai fanfares'
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
  ],

  // Active State & Simulation Data for Phase 3 Interactive Map Matrix
  activeStateId: 'punjab',
  selectedRegionFilter: 'all',
  simMode: 'explore', // 'explore' | 'quest'
  voiceMuted: false,

  aiQuest: {
    active: false,
    currentQuestIndex: 0,
    solvedCount: 0,
    quests: [
      {
        targetStateId: 'punjab',
        title: 'The Land of Five Rivers',
        clue: 'Identify the vibrant northern state known as the Granary of India, famous for fertile river plains, Golden Temple heritage, and explosive Bhangra Dhol rhythms!',
        rewardXP: 100
      },
      {
        targetStateId: 'gujarat',
        title: 'The Western Maritime Circle',
        clue: 'Navigate to the coastal state in Western India where millions dance in concentric 3-Taali circles during Navratri, famous for diamond processing and ports in Kutch.',
        rewardXP: 100
      },
      {
        targetStateId: 'tamil_nadu',
        title: 'Temple Geometry & Natyashastra',
        clue: 'Locate the southern cultural capital home to ancient Chola bronze sculptures, Bharatanatyam Aramandi geometry, and Kanchipuram silk weaving!',
        rewardXP: 100
      },
      {
        targetStateId: 'assam',
        title: 'Brahmaputra Valley & Golden Silk',
        clue: 'Fly to the lush Northeast state along the mighty Brahmaputra river, renowned worldwide for golden Muga silk, tea gardens, and spring Bihu wrist-flips!',
        rewardXP: 100
      },
      {
        targetStateId: 'maharashtra',
        title: 'The Deccan Bridge & Theatrical Rhythm',
        clue: 'Select the western industrial and cultural powerhouse bridging North and South, home to Mumbai, fast 6/8 Dholki Lavani poetry, and Warli tribal arts.',
        rewardXP: 100
      },
      {
        targetStateId: 'mizoram',
        title: 'Bamboo Matrix & Communal Trust',
        clue: 'Discover the lush northeastern hill state where agile dancers step flawlessly inside sliding bamboo grids with zero margin for error!',
        rewardXP: 100
      },
      {
        targetStateId: 'kerala',
        title: 'The Spice Coast & Chenda Melam',
        clue: 'Locate the southern coastal state famous for Kathakali facial mudras, serene backwaters, cardamom spices, and thunderous Chenda temple drums.',
        rewardXP: 100
      },
      {
        targetStateId: 'west_bengal',
        title: 'The Delta of Poetry & Baul Melody',
        clue: 'Navigate to the eastern delta celebrated for UNESCO Durga Puja heritage, Darjeeling tea, terracotta temples, and mystical Baul songs.',
        rewardXP: 100
      },
      {
        targetStateId: 'rajasthan',
        title: 'Desert Forts & Royal Pirouettes',
        clue: 'Find the royal desert state of magnificent sandstone forts, famous for sweeping circular Ghoomar pirouettes, blue pottery, and solar energy!',
        rewardXP: 100
      },
      {
        targetStateId: 'madhya_pradesh',
        title: 'The Heartland Nexus of India',
        clue: 'Click the central geographical heart of India, where UNESCO Sanchi Stupas and Khajuraho heritage harmonize North, South, East, and West!',
        rewardXP: 100
      }
    ]
  },

  // 14 Detailed Indian State Dossiers across all 6 Regions
  indianStates: [
    {
      id: 'punjab',
      name: 'Punjab',
      capital: 'Chandigarh',
      region: 'north',
      regionTitle: 'North India',
      citiesCount: 16,
      districtsCount: 23,
      majorCities: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Pathankot'],
      resources: ['Granary of India (Wheat & Mustard)', '5 Major River Tributaries (Sutlej, Beas, Ravi...)', 'Fertile Alluvial Plains', 'Agro-processing & Light Engineering'],
      specialties: ['Bhangra & Giddha Folk Dances', 'Golden Temple & Sikh Spiritual Heritage', 'Phulkari Hand Embroidery', 'Baisakhi & Lohri Harvest Festivals', 'Makki di Roti & Sarson da Saag'],
      danceId: 'bhangra',
      rhythmBols: 'Buhll-lay! Ghay! Buhll-lay! Chaal! Hud-dee-paa! Ghay! Hud-dee-paa! Oye!',
      unityRole: 'Provides national food security through agricultural vitality and energizes India with celebratory, inclusive folk brotherhood.',
      explored: true,
      nx: 0.33,
      ny: 0.22,
      color: '#ec4899'
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      capital: 'Gandhinagar',
      region: 'west',
      regionTitle: 'West India',
      citiesCount: 20,
      districtsCount: 33,
      majorCities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar'],
      resources: ['Longest Coastline in India (1600 km)', 'Petrochemicals & Green Hydrogen Hub', 'Cotton & Diamond Cutting/Polishing (Surat)', 'Kutch Solar & Wind Energy Parks'],
      specialties: ['Garba & Dandiya Raas (UNESCO Heritage)', 'World\'s Longest Dance Festival (Navratri)', 'Patola Double Ikat Silk & Bandhani', 'Rann of Kutch White Desert Utsav', 'Dhokla, Khandvi & Gujarati Thali'],
      danceId: 'garba',
      rhythmBols: 'Taalee! Chutkee! Taalee! Heench! Taalee! Ghoom! Taalee! Hay!',
      unityRole: 'Acts as India\'s maritime trade nexus while symbolizing communal circular harmony where people of all backgrounds dance as one.',
      explored: false,
      nx: 0.25,
      ny: 0.44,
      color: '#06b6d4'
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      capital: 'Mumbai',
      region: 'west',
      regionTitle: 'West India (Deccan)',
      citiesCount: 28,
      districtsCount: 36,
      majorCities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Chhatrapati Sambhajinagar', 'Kolhapur', 'Solapur'],
      resources: ['Financial Capital of India (Mumbai)', 'Deccan Volcanic Black Cotton Soil', 'Automobile & Technology Hub (Pune)', 'Western Ghats UNESCO Biodiversity'],
      specialties: ['Lavani & Koli Folk Dances', 'Dholki Percussion & Tutari Horns', 'Ganeshotsav Public Festival', 'Warli Tribal Painting Heritage', 'Paithani Pure Gold Zari Sarees'],
      danceId: 'lavani',
      rhythmBols: 'Dhaa! Ghay! Naa! Teen! Teet! Taa! Dhaa! Khuh-duhk!',
      unityRole: 'Serves as the nation\'s economic engine and cultural crossroads, uniting Northern and Southern traditions through bold theatrical expressions.',
      explored: false,
      nx: 0.35,
      ny: 0.58,
      color: '#ec4899'
    },
    {
      id: 'tamil_nadu',
      name: 'Tamil Nadu',
      capital: 'Chennai',
      region: 'south',
      regionTitle: 'South India',
      citiesCount: 22,
      districtsCount: 38,
      majorCities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Vellore'],
      resources: ['Kaveri River Agricultural Basin', 'Coromandel Deepwater Ports', 'Automobile Manufacturing ("Detroit of Asia")', 'Wind Power & Granite Reserves'],
      specialties: ['Bharatanatyam Classical Dance', 'Carnatic Music Classical Sangeet', 'Chola Grand Living Dravidian Temples', 'Kanchipuram Silk Sarees & Bronze Castings', 'Pongal Harvest Festival & Idli-Dosa'],
      danceId: 'bharatanatyam',
      rhythmBols: 'Taa! Kaa! Dhee! Mee! Thomm! Naam! Thaa-Kaa! Jhaa-Nu!',
      unityRole: 'Anchors India in ancient Natyashastra classical geometric discipline, sacred temple architectural mastery, and timeless Carnatic ragas.',
      explored: false,
      nx: 0.46,
      ny: 0.82,
      color: '#f59e0b'
    },
    {
      id: 'uttar_pradesh',
      name: 'Uttar Pradesh',
      capital: 'Lucknow',
      region: 'north',
      regionTitle: 'North India',
      citiesCount: 35,
      districtsCount: 75,
      majorCities: ['Lucknow', 'Varanasi', 'Agra', 'Kanpur', 'Prayagraj', 'Noida', 'Mathura', 'Ayodhya'],
      resources: ['Gangetic River Alluvial Plains', 'India\'s Largest Sugar & Foodgrain Belt', 'Traditional Handicrafts (Chikankari, Brassware, Glassware)', 'Spiritual Heritage Tourism'],
      specialties: ['Kathak Classical Court Dance', 'Hindustani Classical Vocal Sangeet', 'Varanasi Ganga Aarti & Ghats', 'Taj Mahal & Mughal Architecture', 'Awadhi Royal Cuisine & Braj Holi'],
      danceId: 'kathak',
      rhythmBols: 'Dhaa! Dheen! Dheen! Dhaa! Dhaa! Teen! Taa! Dheen!',
      unityRole: 'The civilizational cradle where spiritual philosophy, classical courtly poetry, and lightning-fast pirouette spins synthesized over millennia.',
      explored: false,
      nx: 0.44,
      ny: 0.29,
      color: '#f59e0b'
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      capital: 'Jaipur',
      region: 'north',
      regionTitle: 'North / West India',
      citiesCount: 18,
      districtsCount: 50,
      majorCities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner', 'Ajmer', 'Jaisalmer'],
      resources: ['Thar Desert Solar Energy Capital', 'Marble & Sandstone Quarries (Makrana)', 'Zinc, Lead & Copper Mineral Mines', 'Mustard, Pulses & Camel Livestock'],
      specialties: ['Ghoomar & Kalbelia Folk Dances', 'Ravanahatha String Instrument', 'Jaipur Blue Pottery & Block Printing', 'Desert Fortresses & Palaces (UNESCO)', 'Dal Baati Churma & Ghevar'],
      danceId: 'kathak',
      rhythmBols: 'Dheen! Taa! Kaa! Taa! Ghoom-Ghoom! Dha!',
      unityRole: 'Exemplifies desert resilience and royal craftsmanship, infusing the Indian identity with vivid colors, heroic ballads, and sweeping turns.',
      explored: false,
      nx: 0.30,
      ny: 0.33,
      color: '#f59e0b'
    },
    {
      id: 'assam',
      name: 'Assam',
      capital: 'Dispur (Guwahati)',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 12,
      districtsCount: 35,
      majorCities: ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat', 'Tezpur', 'Nagaon', 'Tinsukia'],
      resources: ['Brahmaputra River Basin', 'World\'s Largest Tea Growing Region', 'Crude Petroleum & Natural Gas (Digboi)', 'Kaziranga Biodiversity & One-Horned Rhino', 'Muga Natural Golden Silk'],
      specialties: ['Rongali Bihu Spring Dance', 'Pepa (Buffalo Horn) & Dhol Percussion', 'Majuli Island Sattriya Monastic Culture', 'Bohag Bihu New Year Celebrations', 'Assam Gamusa & Pitha Delicacies'],
      danceId: 'bihu',
      rhythmBols: 'Dhaa! Ghay! Dhaa! Teet! Dhaa! Dheen! Pay-paa! Hey!',
      unityRole: 'Connects the northeastern river valleys to the nation, celebrating seasonal renewal and energetic wrist-pulse syncopation.',
      explored: false,
      nx: 0.81,
      ny: 0.30,
      color: '#f59e0b'
    },
    {
      id: 'mizoram',
      name: 'Mizoram',
      capital: 'Aizawl',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 8,
      districtsCount: 11,
      majorCities: ['Aizawl', 'Lunglei', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai'],
      resources: ['Vast Bamboo Forest Ecosystems (50%+ Forest Cover)', 'Hydroelectric Water Resources', 'Exotic Floriculture (Anthuriums)', 'Organic Spices & High Altitude Agriculture'],
      specialties: ['Cheraw Bamboo Dance (Agility Matrix)', 'Chapchar Kut Spring Festival', 'Khuallam Traditional Community Dance', 'Puan Intricate Handwoven Textiles', 'Mizo Bamboo Craftsmanship'],
      danceId: 'cheraw',
      rhythmBols: 'Thump! Clack! Open! Clack! Step! Clack! Jump! Sync!',
      unityRole: 'Demonstrates ancient tribal teamwork, mutual trust, and precision balance where individuals synchronize perfectly within a collective matrix.',
      explored: false,
      nx: 0.84,
      ny: 0.43,
      color: '#06b6d4'
    },
    {
      id: 'odisha_jharkhand',
      name: 'Odisha & Jharkhand',
      capital: 'Bhubaneswar / Ranchi',
      region: 'east',
      regionTitle: 'East India',
      citiesCount: 20,
      districtsCount: 54,
      majorCities: ['Bhubaneswar', 'Ranchi', 'Jamshedpur', 'Cuttack', 'Puri', 'Dhanbad', 'Rourkela'],
      resources: ['Mineral Heartland of India (Iron Ore, Coal, Bauxite, Mica)', 'Steel Plants (Jamshedpur & Rourkela)', 'Bay of Bengal Deep Coastline', 'Dense Sal & Teak Forest Reserves'],
      specialties: ['Chhau Martial Mask Dance (UNESCO)', 'Odissi Classical Temple Dance', 'Puri Jagannath Rath Yatra', 'Dokra Metal Art & Pattachitra Scroll Paintings', 'Chhena Poda & Tribal Folk Traditions'],
      danceId: 'chhau',
      rhythmBols: 'Dhoom! Taa! Dhoom! Oof-lee! Dhaa! Taa! Nuh-gaa-raa! Shabash!',
      unityRole: 'Supplies the industrial minerals that build modern India while preserving primordial tribal martial arts and classical temple sculpture.',
      explored: false,
      nx: 0.65,
      ny: 0.47,
      color: '#ec4899'
    },
    {
      id: 'karnataka',
      name: 'Karnataka',
      capital: 'Bengaluru',
      region: 'south',
      regionTitle: 'South India',
      citiesCount: 20,
      districtsCount: 31,
      majorCities: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi', 'Kalaburagi', 'Shivamogga'],
      resources: ['Silicon Valley & Aerospace Hub of India', 'Coffee Plantations of Western Ghats (Coorg/Chikkamagaluru)', 'Sandalwood & Mulberry Raw Silk', 'Arabian Sea Marine Coastline'],
      specialties: ['Yakshagana Grand Dance-Theatre', 'Mysore Dasara Royal Procession', 'Carnatic Vocal & Veena Traditions', 'Bidriware Inlaid Silver Craft', 'Bisi Bele Bath & Mysore Pak'],
      danceId: 'bharatanatyam',
      rhythmBols: 'Taa-Kaa-Dhee-Mee! Chande! Dheem-Taa!',
      unityRole: 'Pioneers global cutting-edge tech innovation while honoring millennia of rich folklore, Carnatic music, and royal cultural patronage.',
      explored: false,
      nx: 0.38,
      ny: 0.70,
      color: '#f59e0b'
    },
    {
      id: 'kerala',
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      region: 'south',
      regionTitle: 'South India',
      citiesCount: 14,
      districtsCount: 14,
      majorCities: ['Kochi', 'Kozhikode', 'Thiruvananthapuram', 'Thrissur', 'Kollam', 'Kannur', 'Alappuzha'],
      resources: ['Ancient Spice Coast (Cardamom, Black Pepper)', 'Natural Rubber & Coconut Plantations', 'Tropical Backwaters & Marine Resources', 'Ayurvedic Botanical Reserves'],
      specialties: ['Kathakali & Mohiniyattam Classical Arts', 'Chenda Melam Temple Drum Ensembles', 'Kalaripayattu Martial Art (Mother of Martial Arts)', 'Onam & Vallam Kali Snake Boat Race', 'Traditional Kerala Sadya Feast'],
      danceId: 'bharatanatyam',
      rhythmBols: 'Thaa-Kee-Taa! Thaa-Kaa-Dhee-Mee! Chenda! Dhum!',
      unityRole: 'The maritime spice gateway that introduced Indian culture to global travelers, celebrated for exquisite artistic storytelling and drum synchronization.',
      explored: false,
      nx: 0.40,
      ny: 0.88,
      color: '#06b6d4'
    },
    {
      id: 'west_bengal',
      name: 'West Bengal',
      capital: 'Kolkata',
      region: 'east',
      regionTitle: 'East India',
      citiesCount: 18,
      districtsCount: 23,
      majorCities: ['Kolkata', 'Howrah', 'Asansol', 'Siliguri', 'Durgapur', 'Darjeeling', 'Kharagpur'],
      resources: ['Ganges-Brahmaputra Fertile Delta', 'World Famous Darjeeling Himalayan Tea', 'Jute Mills & River Ports (Haldia)', 'Sundarbans Royal Bengal Tiger Mangroves'],
      specialties: ['Durga Puja (UNESCO Intangible Cultural Heritage)', 'Baul Mystical Ektara Folk Music', 'Rabindra Sangeet & Bengali Literature', 'Kantha Embroidery & Terracotta Temples', 'Rasgulla, Sandesh & Shorshe Ilish'],
      danceId: 'chhau',
      rhythmBols: 'Dhaa! Dheen! Taa! Ektara! Baul! Anandam!',
      unityRole: 'The intellectual and literary renaissance beacon that gave India its national anthem and universal philosophy of human unity.',
      explored: false,
      nx: 0.66,
      ny: 0.38,
      color: '#ec4899'
    },
    {
      id: 'madhya_pradesh',
      name: 'Madhya Pradesh',
      capital: 'Bhopal',
      region: 'central',
      regionTitle: 'Central India',
      citiesCount: 20,
      districtsCount: 55,
      majorCities: ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Rewa'],
      resources: ['The Geographical Heartland of India', 'Diamond Mines (Panna) & Copper Ore', 'Narmada & Tapti River Basins', 'Central Forest Belt & National Tiger Reserves'],
      specialties: ['Sanchi Buddhist Stupa & Khajuraho Sculptures (UNESCO)', 'Gwalior Gharana Classical Music Heritage', 'Gond & Bhil Indigenous Tribal Painting', 'Chanderi & Maheshwari Handloom Weaving', 'Poha-Jalebi & Dal Bafla'],
      danceId: 'kathak',
      rhythmBols: 'Dhaa! Ghay! Naa! Central Unity! Dheem!',
      unityRole: 'The central geographical and spiritual nexus where North, South, East, and West blend into one harmonious cultural melting pot.',
      explored: false,
      nx: 0.48,
      ny: 0.50,
      color: '#f59e0b'
    },
    {
      id: 'jammu_kashmir',
      name: 'Jammu & Kashmir / Ladakh',
      capital: 'Srinagar / Jammu',
      region: 'north',
      regionTitle: 'Far North India',
      citiesCount: 10,
      districtsCount: 22,
      majorCities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Leh', 'Kargil', 'Udhampur'],
      resources: ['Himalayan Glaciers & Freshwater Rivers', 'Pampore Saffron Cultivation', 'Pashmina & Kashmiri Mulberry Silk', 'Walnut, Apple & Saffron Orchards'],
      specialties: ['Rouf Folk Dance & Santoor Instrument', 'Sufiana Kalam & Ladakhi Monastic Music', 'Shikaras & Houseboats on Dal Lake', 'Papier-mâché Crafts & Kashmiri Carpets', 'Kahwa Tea & Wazwan Feast'],
      danceId: 'kathak',
      rhythmBols: 'Dhum-Dhum-Taa! Rouf Wave! Santoor!',
      unityRole: 'The crowning Himalayan summit of India symbolizing meditative serenity, musical subtlety, and enduring resilience.',
      explored: false,
      nx: 0.35,
      ny: 0.12,
      color: '#06b6d4'
    }
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
    targetSelector: '#phase3 .layers-orchestrator-grid',
    title: 'Mission 3: India Diversity & Unity Map',
    instruction: '👉 <strong>Live Action:</strong> Click <strong>"Activate Layer 1"</strong>, <strong>"Layer 2"</strong>, and <strong>"Layer 3"</strong> to light up India\'s regional traditions, and adjust the <strong>Master Tempo Slider</strong> to see how regional diversity unites into "Many in the One"!',
    statusWaiting: '⚡ Waiting for you to activate a rhythm layer on the India map...',
    statusDone: '✓ Regional Traditions Harmonized! +150 Class Unity XP Unlocked!'
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
      bhava: 'Sthayi Bhava: Rati (Pleasure & Love)',
      drishti: 'Drishti Bheda: Snigdha & Kantam (Affectionate & Radiant Gaze)',
      bhru: 'Bhru Bheda: Sahaja / Pathana (Gentle, naturally curved brows)',
      mukha: 'Mukharaga: Prasanna (Serene, glowing facial aura)',
      desc: 'The master of all Rasas (Rasaraja). The portrayal of universal beauty, romance, and aesthetic connection. Embody gentle neck articulation (Sundari Griva) and subtle inward joy.',
      cue: 'Gaze: Snigdha Romance | Bhru: Gentle Arc | Resonance: 99%'
    },
    hasya: {
      name: '2. Hasya (Joy & Mirthful Laughter)',
      bhava: 'Sthayi Bhava: Hasa (Laughter & Cheer)',
      drishti: 'Drishti Bheda: Vikasita (Blooming, wide sparkling eyes)',
      bhru: 'Bhru Bheda: Utkshepa (Elevated, animated eyebrows)',
      mukha: 'Mukharaga: Smita / Hasita (Radiant smile with visible joy)',
      desc: 'The celebration of humor, festivity, and pure joy. Wide twinkling eyes, raised cheekbones, and playful rhythmic head shakes capturing communal festival delight.',
      cue: 'Gaze: Sparkling Delight | Smile Arc: +35% | Resonance: 98%'
    },
    karuna: {
      name: '3. Karuna (Compassion & Pathos)',
      bhava: 'Sthayi Bhava: Shoka (Sorrow & Empathetic Grief)',
      drishti: 'Drishti Bheda: Deena (Tender, sorrowful downcast gaze)',
      bhru: 'Bhru Bheda: Nipatana (Slightly furrowed, drooping brows)',
      mukha: 'Mukharaga: Malina (Soft, melancholic stillness)',
      desc: 'The profound emotion of empathy, mercy, and compassion for all living beings. Relaxed drooped shoulders, soft chest contraction, and deep heartfelt stillness.',
      cue: 'Gaze: Deena Empathy | Posture: Soft Contour | Resonance: 97%'
    },
    raudra: {
      name: '4. Raudra (Fury & Righteous Wrath)',
      bhava: 'Sthayi Bhava: Krodha (Anger & Fierce Outrage)',
      drishti: 'Drishti Bheda: Krura (Fierce, unblinking red-hot gaze)',
      bhru: 'Bhru Bheda: Bhrukuti (Deeply contracted, menacing brows)',
      mukha: 'Mukharaga: Rakta (Flushed, intense martial fire)',
      desc: 'The cosmic fury against injustice and discord. Flaring nostrils, firmly locked jaw, expanded martial chest, and explosive warrior energy.',
      cue: 'Gaze: Krura Fury | Jaw Clench: Locked | Resonance: 100%'
    },
    veera: {
      name: '5. Veera (Courage & Heroic Valor)',
      bhava: 'Sthayi Bhava: Utsaha (Dynamic Energy & Enthusiasm)',
      drishti: 'Drishti Bheda: Dheera (Steadfast, fearless, noble gaze)',
      bhru: 'Bhru Bheda: Rechita (One brow proudly raised in confidence)',
      mukha: 'Mukharaga: Tejasvi (Luminous, confident dignity)',
      desc: 'The spirit of undaunted courage, leadership, and nobility. Broad open chest, lifted chin, unwavering eye focus, and resolute heroic posture.',
      cue: 'Gaze: Dheera Valor | Chest Flare: +20% | Resonance: 99%'
    },
    bhayanaka: {
      name: '6. Bhayanaka (Fear & Alert Vigilance)',
      bhava: 'Sthayi Bhava: Bhaya (Dread & Cosmic Awe)',
      drishti: 'Drishti Bheda: Bhayanaka (Wide, rapidly darting pupils)',
      bhru: 'Bhru Bheda: Kampita (Trembling, highly elevated brows)',
      mukha: 'Mukharaga: Shushka (Pale, guarded defensive posture)',
      desc: 'The instinct of vigilance and reverence before overwhelming cosmic power. Rapid breath, tense pulled-back neck, and quick defensive scanning.',
      cue: 'Gaze: Darting Vigilance | Breath: Accelerated | Resonance: 96%'
    },
    bibhatsa: {
      name: '7. Bibhatsa (Disgust & Discernment)',
      bhava: 'Sthayi Bhava: Jugupsa (Aversion & Rejection of Untruth)',
      drishti: 'Drishti Bheda: Jugupsita (Narrowed eyes turning away)',
      bhru: 'Bhru Bheda: Kunchita (Curled, wrinkled brow and nose bridge)',
      mukha: 'Mukharaga: Vikrita (Averted face, pursed lips)',
      desc: 'The philosophical rejection of falsity and decay. Wrinkled nose bridge, turned head (Paravritta Griva), and hand shielding against unharmonious influences.',
      cue: 'Gaze: Aversion Turn | Nose Wrinkle: Active | Resonance: 97%'
    },
    adbhuta: {
      name: '8. Adbhuta / Aashcharya (Wonder & Cosmic Awe)',
      bhava: 'Sthayi Bhava: Vismaya (Astonishment & Wonder)',
      drishti: 'Drishti Bheda: Vismita (Expansively dilated pupils looking upward)',
      bhru: 'Bhru Bheda: Utkshepa (Both eyebrows high in cosmic wonder)',
      mukha: 'Mukharaga: Vismita (Slightly parted lips, breathless awe)',
      desc: 'The overwhelming realization of life’s infinite mystery and interconnected universe. Wide luminous eyes, lifted brows, and suspended breath.',
      cue: 'Gaze: Expansive Wonder | Eyebrows: +30% Lift | Resonance: 99%'
    },
    aashcharya: {
      name: '8. Adbhuta / Aashcharya (Wonder & Cosmic Awe)',
      bhava: 'Sthayi Bhava: Vismaya (Astonishment & Wonder)',
      drishti: 'Drishti Bheda: Vismita (Expansively dilated pupils looking upward)',
      bhru: 'Bhru Bheda: Utkshepa (Both eyebrows high in cosmic wonder)',
      mukha: 'Mukharaga: Vismita (Slightly parted lips, breathless awe)',
      desc: 'The overwhelming realization of life’s infinite mystery and interconnected universe. Wide luminous eyes, lifted brows, and suspended breath.',
      cue: 'Gaze: Expansive Wonder | Eyebrows: +30% Lift | Resonance: 99%'
    },
    shanta: {
      name: '9. Shanta (Peace & Universal Harmony)',
      bhava: 'Sthayi Bhava: Sama (Tranquility & Liberation)',
      drishti: 'Drishti Bheda: Shanta (Half-closed, centered meditative gaze)',
      bhru: 'Bhru Bheda: Sama (Completely calm, leveled eyebrows)',
      mukha: 'Mukharaga: Prasanta (Blissful stillness, glowing serenity)',
      desc: 'The ultimate synthesis and resolution of all emotions into pure stillness. Relaxed muscles, gentle rhythmic breathing, and transcendent unity with the One.',
      cue: 'Gaze: Meditative Shanta | Breath: 4s Deep Cycle | Resonance: 100%'
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
        <span>Natyashastra Heritage</span>
      </div>
      ${DanceVectors.getRasaVector(key)}
      <div class="ar-angle-tracker">${currentRasa.cue}</div>
    `;
    rasaDesc.innerHTML = `
      <div class="rasa-desc-card">
        <h4>${currentRasa.name}</h4>
        <div class="rasa-natyashastra-grid">
          <div class="rasa-grid-item"><strong>${currentRasa.bhava}</strong></div>
          <div class="rasa-grid-item"><span>👁️</span> ${currentRasa.drishti}</div>
          <div class="rasa-grid-item"><span>✨</span> ${currentRasa.bhru}</div>
          <div class="rasa-grid-item"><span>🎨</span> ${currentRasa.mukha}</div>
        </div>
        <p style="margin-top: 0.65rem; line-height: 1.55;">${currentRasa.desc}</p>
      </div>
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
        <iframe 
          id="ytIframeEmbed"
          src="https://www.youtube-nocookie.com/embed/${dance.videoId}?autoplay=1&enablejsapi=1&rel=0" 
          title="${dance.name} Authentic Dance Performance" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
        <div class="video-source-pill">
          <span>✨ ${dance.name} Authentic Performance</span>
        </div>
      </div>
      <div class="video-embed-fallback-bar">
        <span>🎬 Playing via YouTube Secure Embed. If playback is restricted on your browser:</span>
        <a href="https://www.youtube.com/watch?v=${dance.videoId}" target="_blank" rel="noopener noreferrer" class="btn-direct-yt-pill">
          ▶ Watch on YouTube Directly (Full HD)
        </a>
      </div>
    `;
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
            ${DanceVectors.icon('drum')} Practice Tabla & Bols
          </button>
          <button class="btn-meta-solo-beat" id="btnModalToggleVocals" style="background: rgba(236, 72, 153, 0.15); border-color: #ec4899; color: #f472b6;">
            🎤 Vocals: ${window.RhythmEngine && window.RhythmEngine.vocalsEnabled ? 'ON' : 'OFF'}
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

    const vocalsToggleBtn = document.getElementById('btnModalToggleVocals');
    if (vocalsToggleBtn) {
      vocalsToggleBtn.addEventListener('click', () => {
        if (window.RhythmEngine) {
          const isNowOn = window.RhythmEngine.toggleVocals();
          vocalsToggleBtn.textContent = `🎤 Vocals: ${isNowOn ? 'ON' : 'OFF'}`;
        }
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
        alert('All 8 Regional Quests Mastered! Proceed to Phase 3: The India Diversity & Unity Map to orchestrate "Many in the One"!');
      }
    });
  }
}

// ==========================================================
// PHASE 3: PAN-INDIA GEOSPATIAL & CULTURAL MATRIX
// ==========================================================

function renderPhase3() {
  renderStateQuickChips();
  renderActiveStateDossier();
  updateSimExploredCounter();

  // Synthesis Freeze Protocol
  const btnFreeze = document.getElementById('btnSynthesisFreeze');
  if (btnFreeze) {
    btnFreeze.onclick = () => {
      const flash = document.getElementById('freezeFlashOverlay');
      if (flash) {
        flash.classList.add('active');
        setTimeout(() => flash.classList.remove('active'), 800);
      }

      window.RhythmEngine.strikeSynthesisFreeze(() => {
        openFusionCelebrationModal();
        notifyCoachAction('freeze');
      });
    };
  }
}

/**
 * Renders Quick State Selection Chips in the bottom bar of the map
 */
function renderStateQuickChips() {
  const container = document.getElementById('mapStateQuickBar');
  if (!container) return;

  const filter = SimState.selectedRegionFilter || 'all';
  const filteredStates = filter === 'all' 
    ? SimState.indianStates 
    : SimState.indianStates.filter(s => s.region === filter);

  container.innerHTML = filteredStates.map(st => `
    <button class="map-state-chip ${st.id === SimState.activeStateId ? 'active' : ''}" onclick="selectSimState('${st.id}')">
      ${st.name} ${st.explored ? '✓' : ''}
    </button>
  `).join('');
}

/**
 * Renders the full Cultural & Economic Dossier for the active state
 */
function renderActiveStateDossier() {
  const container = document.getElementById('stateDossierCard');
  if (!container) return;

  const state = SimState.indianStates.find(s => s.id === SimState.activeStateId) || SimState.indianStates[0];
  if (!state) return;

  container.innerHTML = `
    <div class="dossier-header-bar">
      <div class="dossier-title-area">
        <h3>${state.name}</h3>
        <div class="dossier-sub-geo">
          📍 Capital: <strong>${state.capital}</strong> • ${state.regionTitle}
        </div>
      </div>
      <span class="dossier-badge-pill" style="background: ${state.color}22; border: 1px solid ${state.color}; color: ${state.color};">
        ${state.regionTitle}
      </span>
    </div>

    <!-- Metrics: Cities, Districts, Resources -->
    <div class="dossier-metrics-grid">
      <div class="dossier-metric-box">
        <div class="metric-label">🏙️ Urban Centers</div>
        <div class="metric-value">${state.citiesCount} Major Cities</div>
        <div class="metric-sub">${state.districtsCount} Administrative Districts (${state.majorCities.slice(0, 4).join(', ')}...)</div>
      </div>

      <div class="dossier-metric-box">
        <div class="metric-label">🌾 Strategic Resources</div>
        <div class="metric-value">${state.resources[0]}</div>
        <div class="metric-sub">${state.resources.slice(1).join(' • ')}</div>
      </div>
    </div>

    <!-- Cultural Specialties -->
    <div class="dossier-list-box">
      <h5>🎭 Cultural Heritage & Specialties</h5>
      <div class="dossier-tags-wrap">
        ${state.specialties.map(spec => `<span class="dossier-tag-pill">${spec}</span>`).join('')}
      </div>
    </div>

    <!-- Traditional Rhythm Signature -->
    <div class="dossier-list-box" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
      <div>
        <h5 style="margin-bottom: 0.25rem;">🥁 Regional Rhythmic Signature</h5>
        <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.82rem; color: #fde047; font-weight: 700;">
          "${state.rhythmBols}"
        </span>
      </div>
      <button class="btn-play-state-rhythm" onclick="playStateRhythm('${state.id}')">
        <svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Play Traditional Beat
      </button>
    </div>

    <!-- Role in Unity in Diversity -->
    <div class="dossier-unity-box">
      <h5>🌐 Role in "Unity in Diversity" (Many in the One)</h5>
      <p>${state.unityRole}</p>
    </div>
  `;
}

/**
 * Updates Explored States Count and HUD
 */
function updateSimExploredCounter() {
  const counterNum = document.getElementById('exploredCountNum');
  if (counterNum) {
    const explored = SimState.indianStates.filter(s => s.explored).length;
    counterNum.textContent = explored;
  }
}

/**
 * Select a State in the Simulation
 */
function selectSimState(stateId, triggerVoice = true) {
  const state = SimState.indianStates.find(s => s.id === stateId);
  if (!state) return;

  SimState.activeStateId = stateId;
  state.explored = true;

  renderStateQuickChips();
  renderActiveStateDossier();
  updateSimExploredCounter();

  // If in Quest Mode, validate answer
  if (SimState.simMode === 'quest' && SimState.aiQuest.active) {
    checkQuestAnswer(stateId);
  } else if (triggerVoice && !SimState.voiceMuted) {
    // Announce state in Explorer Mode
    const speechText = `Welcome to ${state.name}. Located in ${state.regionTitle}, its capital is ${state.capital}. It features ${state.citiesCount} major cities, and key resources such as ${state.resources[0]}. Cultural specialty includes ${state.specialties[0]}.`;
    updateAISpeechBubble(`"Inspecting ${state.name}: ${state.resources[0]}. Cultural highlight: ${state.specialties[0]}."`);
    window.RhythmEngine.speakVoiceAssistant(speechText, onVoiceStart, onVoiceEnd);
  }
}

/**
 * Filter States by Region
 */
function filterSimRegion(region) {
  SimState.selectedRegionFilter = region;
  
  const pills = document.querySelectorAll('.sim-filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  
  const clickedPill = Array.from(pills).find(p => p.getAttribute('onclick')?.includes(region));
  if (clickedPill) clickedPill.classList.add('active');

  renderStateQuickChips();
}

/**
 * Switch Simulation Mode: Explore vs Quest
 */
function setSimMode(mode) {
  SimState.simMode = mode;
  
  const btnExplore = document.getElementById('btnModeExplore');
  const btnQuest = document.getElementById('btnModeQuest');
  const liveStatus = document.getElementById('mapLiveStatusText');

  if (btnExplore) btnExplore.classList.toggle('active', mode === 'explore');
  if (btnQuest) btnQuest.classList.toggle('active', mode === 'quest');

  if (mode === 'quest') {
    SimState.aiQuest.active = true;
    if (liveStatus) liveStatus.textContent = '🎯 AI Cultural Discovery Quest Active • Solve Clues on Map';
    startOrNextAIQuest();
  } else {
    SimState.aiQuest.active = false;
    if (liveStatus) liveStatus.textContent = '🗺️ State Explorer Mode • Click any State to Inspect Dossier';
    updateAISpeechBubble('"Explorer mode active. Click any state across India to inspect its dossier."');
    window.RhythmEngine.stopVoiceAssistant();
    onVoiceEnd();
  }
}

/**
 * AI Voice Assistant: Start or Give Next Discovery Quest Clue
 */
function startOrNextAIQuest() {
  SimState.simMode = 'quest';
  SimState.aiQuest.active = true;

  const btnExplore = document.getElementById('btnModeExplore');
  const btnQuest = document.getElementById('btnModeQuest');
  if (btnExplore) btnExplore.classList.remove('active');
  if (btnQuest) btnQuest.classList.add('active');

  const qList = SimState.aiQuest.quests;
  const currentIdx = SimState.aiQuest.currentQuestIndex % qList.length;
  const quest = qList[currentIdx];

  const speechText = `Quest ${currentIdx + 1}: ${quest.title}. ${quest.clue} Locate and click this state on the map!`;
  updateAISpeechBubble(`"🎯 Quest ${currentIdx + 1}: ${quest.clue}"`);
  
  window.RhythmEngine.speakVoiceAssistant(speechText, onVoiceStart, onVoiceEnd);
}

/**
 * Check Student's Map Click in Quest Mode
 */
function checkQuestAnswer(clickedStateId) {
  const qList = SimState.aiQuest.quests;
  const currentIdx = SimState.aiQuest.currentQuestIndex % qList.length;
  const currentQuest = qList[currentIdx];

  if (clickedStateId === currentQuest.targetStateId) {
    // Correct Answer!
    SimState.aiQuest.solvedCount++;
    SimState.aiQuest.currentQuestIndex++;
    SimState.unityXP += currentQuest.rewardXP;
    renderMasterHUD();
    renderScorecard();

    const targetState = SimState.indianStates.find(s => s.id === clickedStateId);
    const praiseText = `Brilliant navigation! You correctly identified ${targetState.name}! Plus 100 Class Unity XP unlocked!`;
    updateAISpeechBubble(`"✨ Correct! You unlocked ${targetState.name}! (+100 XP). Click 'Next AI Quest Clue' for your next challenge!"`);
    
    // Play celebratory beat and voice praise
    playStateRhythm(clickedStateId);
    window.RhythmEngine.speakVoiceAssistant(praiseText, onVoiceStart, onVoiceEnd);
  } else {
    // Incorrect guess
    const clickedState = SimState.indianStates.find(s => s.id === clickedStateId);
    const hintText = `You selected ${clickedState.name}. That is in ${clickedState.regionTitle}. Keep searching for: ${currentQuest.clue}`;
    updateAISpeechBubble(`"❌ That's ${clickedState.name}. Hint: ${currentQuest.clue}"`);
    window.RhythmEngine.speakVoiceAssistant(hintText, onVoiceStart, onVoiceEnd);
  }
}

/**
 * Voice Assistant: Read Current State Dossier Aloud
 */
function speakCurrentStateDossier() {
  const state = SimState.indianStates.find(s => s.id === SimState.activeStateId) || SimState.indianStates[0];
  if (!state) return;

  const speechText = `Dossier for ${state.name}, capital ${state.capital}. Located in ${state.regionTitle}, it features ${state.citiesCount} major cities including ${state.majorCities.slice(0, 3).join(', ')}. Key resources include ${state.resources.join(', ')}. Cultural specialties feature ${state.specialties.slice(0, 3).join(', ')}. In Indian unity, ${state.unityRole}`;
  
  updateAISpeechBubble(`"Reading ${state.name} dossier aloud: Capital ${state.capital}, ${state.citiesCount} cities, rich in ${state.resources[0]}."`);
  window.RhythmEngine.speakVoiceAssistant(speechText, onVoiceStart, onVoiceEnd);
}

/**
 * Toggle AI Voice Assistant Mute
 */
function toggleVoiceMute() {
  SimState.voiceMuted = !SimState.voiceMuted;
  const icon = document.getElementById('voiceMuteIcon');
  const btn = document.getElementById('btnVoiceMuteToggle');
  
  if (SimState.voiceMuted) {
    window.RhythmEngine.stopVoiceAssistant();
    onVoiceEnd();
    if (btn) btn.style.color = '#ef4444';
    updateAISpeechBubble('"Voice assistant muted."');
  } else {
    if (btn) btn.style.color = '#94a3b8';
    updateAISpeechBubble('"Voice assistant unmuted and active."');
    window.RhythmEngine.speakVoiceAssistant('Voice assistant online.', onVoiceStart, onVoiceEnd);
  }
}

/**
 * Play Traditional Rhythmic Pattern for State
 */
function playStateRhythm(stateId) {
  const state = SimState.indianStates.find(s => s.id === stateId);
  if (!state) return;

  window.RhythmEngine.init();
  window.RhythmEngine.playSoloPracticeBeat(state.danceId || 'kathak');
}

/**
 * Voice Speech Animation Callbacks
 */
function onVoiceStart() {
  const eq = document.getElementById('voiceEqualizer');
  const status = document.getElementById('aiVoiceStatus');
  if (eq) eq.classList.add('speaking');
  if (status) status.textContent = 'Voice Synthesis: Speaking...';
}

function onVoiceEnd() {
  const eq = document.getElementById('voiceEqualizer');
  const status = document.getElementById('aiVoiceStatus');
  if (eq) eq.classList.remove('speaking');
  if (status) status.textContent = 'Voice Synthesis: Online • Ready';
}

function updateAISpeechBubble(text) {
  const el = document.getElementById('aiSpeechText');
  if (el) el.textContent = text;
}

/**
 * Export Pan-India Field Research Dossier
 */
function exportPanIndiaLedger() {
  const exploredStates = SimState.indianStates.filter(s => s.explored);
  let report = `# PAN-INDIA DIVERSITY & UNITY FIELD DOSSIER\n`;
  report += `Generated on: ${new Date().toLocaleDateString()}\n`;
  report += `Total States Explored: ${exploredStates.length} / ${SimState.indianStates.length}\n`;
  report += `Total Class Unity XP: ${SimState.unityXP}\n\n`;
  report += `==========================================================\n\n`;

  SimState.indianStates.forEach(s => {
    report += `### [${s.explored ? 'EXPLORED' : 'PENDING'}] ${s.name} (${s.regionTitle})\n`;
    report += `- Capital: ${s.capital}\n`;
    report += `- Major Cities (${s.citiesCount}): ${s.majorCities.join(', ')}\n`;
    report += `- Economic & Natural Resources: ${s.resources.join('; ')}\n`;
    report += `- Cultural Heritage & Specialties: ${s.specialties.join('; ')}\n`;
    report += `- Rhythmic Signature: "${s.rhythmBols}"\n`;
    report += `- Role in Unity in Diversity: ${s.unityRole}\n\n`;
  });

  const blob = new Blob([report], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Pan_India_Diversity_Dossier_${Date.now()}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

// ==========================================================
// INTERACTIVE INDIA DIVERSITY & UNITY CANVAS MAP
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

  let hoveredState = null;
  let mousePos = { x: -1, y: -1 };
  let pulseAngle = 0;

  // Track mouse on canvas
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mousePos.x = e.clientX - rect.left;
    mousePos.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mousePos.x = -1;
    mousePos.y = -1;
    hoveredState = null;
  });

  canvas.addEventListener('click', () => {
    if (hoveredState) {
      selectSimState(hoveredState.id, true);
    }
  });

  // Flowing energy particles
  const particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
      stateIndex: Math.floor(Math.random() * SimState.indianStates.length),
      size: Math.random() * 2.5 + 1.5,
      color: ['#06b6d4', '#f59e0b', '#ec4899', '#10b981', '#fde047'][Math.floor(Math.random() * 5)]
    });
  }

  function drawIndiaOutline(w, h) {
    const ox = w * 0.12;
    const oy = h * 0.05;
    const mw = w * 0.76;
    const mh = h * 0.88;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 18;

    // Stylized India Geographic Contour
    ctx.beginPath();
    ctx.moveTo(ox + mw * 0.34, oy + mh * 0.02);
    ctx.quadraticCurveTo(ox + mw * 0.40, oy + mh * 0.01, ox + mw * 0.44, oy + mh * 0.06);
    ctx.lineTo(ox + mw * 0.46, oy + mh * 0.14);
    ctx.lineTo(ox + mw * 0.52, oy + mh * 0.20);
    ctx.lineTo(ox + mw * 0.60, oy + mh * 0.25);
    ctx.lineTo(ox + mw * 0.68, oy + mh * 0.26);
    ctx.lineTo(ox + mw * 0.74, oy + mh * 0.20);
    ctx.quadraticCurveTo(ox + mw * 0.88, oy + mh * 0.21, ox + mw * 0.89, oy + mh * 0.28);
    ctx.lineTo(ox + mw * 0.87, oy + mh * 0.46);
    ctx.lineTo(ox + mw * 0.80, oy + mh * 0.45);
    ctx.lineTo(ox + mw * 0.74, oy + mh * 0.36);
    ctx.lineTo(ox + mw * 0.68, oy + mh * 0.40);
    ctx.quadraticCurveTo(ox + mw * 0.66, oy + mh * 0.52, ox + mw * 0.60, oy + mh * 0.62);
    ctx.lineTo(ox + mw * 0.52, oy + mh * 0.82);
    ctx.lineTo(ox + mw * 0.46, oy + mh * 0.96);
    ctx.lineTo(ox + mw * 0.42, oy + mh * 0.85);
    ctx.quadraticCurveTo(ox + mw * 0.34, oy + mh * 0.68, ox + mw * 0.31, oy + mh * 0.58);
    ctx.lineTo(ox + mw * 0.23, oy + mh * 0.50);
    ctx.quadraticCurveTo(ox + mw * 0.16, oy + mh * 0.47, ox + mw * 0.18, oy + mh * 0.39);
    ctx.lineTo(ox + mw * 0.26, oy + mh * 0.36);
    ctx.lineTo(ox + mw * 0.28, oy + mh * 0.24);
    ctx.lineTo(ox + mw * 0.31, oy + mh * 0.12);
    ctx.closePath();

    const mapGrad = ctx.createRadialGradient(ox + mw * 0.50, oy + mh * 0.50, 20, ox + mw * 0.50, oy + mh * 0.50, mw * 0.6);
    mapGrad.addColorStop(0, 'rgba(24, 34, 72, 0.45)');
    mapGrad.addColorStop(0.7, 'rgba(12, 18, 42, 0.55)');
    mapGrad.addColorStop(1, 'rgba(4, 6, 16, 0.75)');

    ctx.fillStyle = mapGrad;
    ctx.fill();

    ctx.lineWidth = 1.8;
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
    ctx.stroke();

    // Internal Meridians
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.setLineDash([4, 6]);

    ctx.beginPath();
    ctx.moveTo(ox + mw * 0.42, oy + mh * 0.10);
    ctx.quadraticCurveTo(ox + mw * 0.48, oy + mh * 0.48, ox + mw * 0.46, oy + mh * 0.94);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(ox + mw * 0.20, oy + mh * 0.44);
    ctx.quadraticCurveTo(ox + mw * 0.50, oy + mh * 0.46, ox + mw * 0.86, oy + mh * 0.32);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.restore();
  }

  function drawUnityCenterHub(cx, cy) {
    ctx.save();
    // Glowing central core
    const hubGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 32);
    hubGrad.addColorStop(0, 'rgba(253, 224, 71, 0.9)');
    hubGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.4)');
    hubGrad.addColorStop(1, 'rgba(219, 39, 119, 0.0)');

    ctx.fillStyle = hubGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 32, 0, Math.PI * 2);
    ctx.fill();

    // Ashoka / Unity Chakra Ring
    ctx.strokeStyle = 'rgba(253, 224, 71, 0.75)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.stroke();

    // Rotating 24-spoke emblem
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(pulseAngle * 0.5);
    for (let s = 0; s < 12; s++) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      const spokeAngle = (s * Math.PI) / 6;
      ctx.lineTo(Math.cos(spokeAngle) * 16, Math.sin(spokeAngle) * 16);
      ctx.strokeStyle = 'rgba(253, 224, 71, 0.35)';
      ctx.stroke();
    }
    ctx.restore();

    ctx.restore();
  }

  function renderLoop() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    pulseAngle += 0.025;

    // Draw India Map Base
    drawIndiaOutline(w, h);

    const ox = w * 0.12;
    const oy = h * 0.05;
    const mw = w * 0.76;
    const mh = h * 0.88;
    const centerHubX = ox + mw * 0.48;
    const centerHubY = oy + mh * 0.50;

    // Draw Central Unity Hub in Madhya Pradesh
    drawUnityCenterHub(centerHubX, centerHubY);

    hoveredState = null;

    // Filter by selected region
    const activeRegion = SimState.selectedRegionFilter || 'all';

    // Draw connecting energy lines to Center
    SimState.indianStates.forEach((state) => {
      const sx = ox + mw * state.nx;
      const sy = oy + mh * state.ny;

      ctx.save();
      ctx.strokeStyle = state.explored ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = state.explored ? 1.5 : 0.8;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(centerHubX, centerHubY);
      ctx.stroke();
      ctx.restore();
    });

    // Draw dynamic energy particles
    particles.forEach((p) => {
      p.progress += p.speed;
      if (p.progress >= 1) p.progress = 0;

      const state = SimState.indianStates[p.stateIndex];
      const sx = ox + mw * state.nx;
      const sy = oy + mh * state.ny;

      const px = sx + (centerHubX - sx) * p.progress;
      const py = sy + (centerHubY - sy) * p.progress;

      ctx.save();
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw State Nodes & Interactive Pins
    SimState.indianStates.forEach((state) => {
      const sx = ox + mw * state.nx;
      const sy = oy + mh * state.ny;

      const isMatchingRegion = activeRegion === 'all' || state.region === activeRegion;
      const isActiveState = state.id === SimState.activeStateId;

      // Mouse Hover check (radius 22px)
      const dist = Math.hypot(mousePos.x - sx, mousePos.y - sy);
      const isHovered = dist < 22 && isMatchingRegion;
      if (isHovered) hoveredState = state;

      ctx.save();

      // Active / Explored Pulsing Ring
      if (isActiveState || state.explored) {
        const pulseR = 14 + Math.sin(pulseAngle + state.nx * 10) * 4;
        ctx.strokeStyle = isActiveState ? '#fde047' : state.color;
        ctx.lineWidth = isActiveState ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(sx, sy, pulseR, 0, Math.PI * 2);
        ctx.stroke();
      }

      // State Node Core Circle
      ctx.fillStyle = isActiveState ? '#fde047' : isHovered ? '#ffffff' : state.color;
      ctx.shadowColor = state.color;
      ctx.shadowBlur = isHovered ? 20 : isActiveState ? 16 : 8;
      ctx.beginPath();
      ctx.arc(sx, sy, isHovered ? 9 : 7, 0, Math.PI * 2);
      ctx.fill();

      // State Label
      ctx.shadowBlur = 0;
      ctx.font = `${isActiveState ? '700 11px' : '600 10px'} 'Space Grotesk', sans-serif`;
      ctx.fillStyle = isActiveState ? '#fde047' : isHovered ? '#ffffff' : isMatchingRegion ? '#cbd5e1' : '#64748b';
      ctx.textAlign = 'center';
      ctx.fillText(state.name, sx, sy + 18);

      ctx.restore();
    });

    // Draw Floating Hover Tooltip
    if (hoveredState) {
      ctx.save();
      const tx = Math.min(Math.max(mousePos.x, 140), w - 140);
      const ty = Math.max(mousePos.y - 45, 50);

      ctx.fillStyle = 'rgba(10, 14, 30, 0.95)';
      ctx.strokeStyle = hoveredState.color;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 12;

      ctx.beginPath();
      ctx.roundRect(tx - 110, ty - 30, 220, 56, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = "700 12px 'Space Grotesk', sans-serif";
      ctx.textAlign = 'center';
      ctx.fillText(`📍 ${hoveredState.name} (${hoveredState.regionTitle})`, tx, ty - 12);

      ctx.fillStyle = '#fde047';
      ctx.font = "600 10px 'Space Grotesk', sans-serif";
      ctx.fillText(`🏙️ ${hoveredState.citiesCount} Cities • ${hoveredState.specialties[0]}`, tx, ty + 6);

      ctx.fillStyle = '#94a3b8';
      ctx.font = "500 9px 'Space Grotesk', sans-serif";
      ctx.fillText(`Click to inspect full dossier & rhythm`, tx, ty + 18);

      ctx.restore();
    }

    requestAnimationFrame(renderLoop);
  }

  renderLoop();
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

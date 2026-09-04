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

  // Comprehensive Pan-India Matrix: 28 States & 8 Union Territories (36 Administrative Entities)
  indianStates: [
    // -------------------------------------------------------------
    // 28 STATES OF INDIA
    // -------------------------------------------------------------
    {
      id: 'andhra_pradesh',
      name: 'Andhra Pradesh',
      capital: 'Amaravati',
      category: 'state',
      region: 'south',
      regionTitle: 'South India',
      citiesCount: 31,
      districtsCount: 26,
      majorCities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Kakinada'],
      resources: ['Eastern Ghats Mineral Reserves', 'Major Rice Bowl of South India', 'Deepwater Ports (Visakhapatnam)', 'Automotive & Space Launch Gateway (Sriharikota)'],
      specialties: ['Kuchipudi Classical Dance (Brass Plate Tarangam)', 'Tirupati Balaji Sacred Heritage', 'Kalamkari Hand-painted Textiles', 'Kondapalli Wooden Toys', 'Andhra Spicy Gongura & Pulihora'],
      danceId: 'bharatanatyam',
      rhythmBols: 'Taa-Dhee-Thom-Nam! Kuchipudi! Tarangam!',
      unityRole: 'Cradles classical Telugu literature and the dynamic Kuchipudi brass-plate dance while serving as India\'s satellite launch gateway.',
      explored: false,
      nx: 0.460,
      ny: 0.690,
      color: '#f59e0b'
    },
    {
      id: 'arunachal_pradesh',
      name: 'Arunachal Pradesh',
      capital: 'Itanagar',
      category: 'state',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 12,
      districtsCount: 26,
      majorCities: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro', 'Tezu'],
      resources: ['Land of Dawn-Lit Mountains (First Sunrise of India)', 'Dense Himalayan Virgin Rainforests', 'Vast Hydroelectric Potential', 'Rare Medicinal Himalayan Flora'],
      specialties: ['Tawang Ancient Buddhist Monastery', 'Losar & Nyokum Tribal Festivals', 'Apatani Tribal Bamboo Architecture', 'Thangka Silk Scroll Painting', 'Bamboo Shoot Stew & Monpa Cuisine'],
      danceId: 'cheraw',
      rhythmBols: 'Hop-Step-Turn! Dawn Sun! Tawang Chant! Hey!',
      unityRole: 'Guards the majestic eastern Himalayan frontiers and greets the nation\'s earliest sunbeams with pristine tribal harmony.',
      explored: false,
      nx: 0.810,
      ny: 0.280,
      color: '#06b6d4'
    },
    {
      id: 'assam',
      name: 'Assam',
      capital: 'Dispur (Guwahati)',
      category: 'state',
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
      nx: 0.740,
      ny: 0.355,
      color: '#f59e0b'
    },
    {
      id: 'bihar',
      name: 'Bihar',
      capital: 'Patna',
      category: 'state',
      region: 'east',
      regionTitle: 'East India',
      citiesCount: 26,
      districtsCount: 38,
      majorCities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Nalanda', 'Purnia'],
      resources: ['Gangetic Fertile Agriculture Belt', 'Shahi Litchi & Makhana (Fox Nuts) Capital', 'Ancient Copper & Stone Mineral Belts', 'Rich Human Capital & Civil Services Tradition'],
      specialties: ['Madhubani (Mithila) Folk Painting', 'Bodh Gaya Mahabodhi Temple (UNESCO)', 'Nalanda Ancient World University Ruins', 'Chhath Puja Solar Devotion', 'Litti Chokha & Thekua'],
      danceId: 'kathak',
      rhythmBols: 'Dha-Tin-Tin-Na! Bodhi Tree! Chhath Puja! Dha!',
      unityRole: 'Birthplace of Buddhism and Jainism, Bihar gave India its foundation of universal enlightenment, Ahimsa (non-violence), and historical governance.',
      explored: false,
      nx: 0.550,
      ny: 0.380,
      color: '#ec4899'
    },
    {
      id: 'chhattisgarh',
      name: 'Chhattisgarh',
      capital: 'Raipur',
      category: 'state',
      region: 'central',
      regionTitle: 'Central India',
      citiesCount: 18,
      districtsCount: 33,
      majorCities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Jagdalpur', 'Rajnandgaon'],
      resources: ['The Rice Bowl of Central India', 'Massive Coal, Iron Ore & Bauxite Reserves', 'Dense Bastar Sal & Teak Forests', 'Bhilai Steel & Heavy Metal Manufacturing'],
      specialties: ['Panthi & Raut Nacha Tribal Dances', 'Bastar Dhokra Bell Metal Casting & Wrought Iron Crafts', 'Bastar Dussehra 75-Day Festival', 'Chitrakote "Niagara of India" Waterfalls', 'Chila & Fara Traditional Rice Delicacies'],
      danceId: 'chhau',
      rhythmBols: 'Panthi-Taal! Mandar-Goonj! Raut Nacha! Shabash!',
      unityRole: 'Supplies heavy industrial steel and electric energy while safeguarding some of the world\'s most ancient indigenous tribal craftsmanship.',
      explored: false,
      nx: 0.510,
      ny: 0.510,
      color: '#10b981'
    },
    {
      id: 'goa',
      name: 'Goa',
      capital: 'Panaji',
      category: 'state',
      region: 'west',
      regionTitle: 'West India',
      citiesCount: 8,
      districtsCount: 2,
      majorCities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Mormugao'],
      resources: ['Konkan Golden Sandy Coastline', 'Natural Marine & Fisheries Hub', 'Iron Ore & Manganese Mineral Deposits', 'Biodiverse Western Ghats Ecoregion'],
      specialties: ['Fugdi & Dekhnni Folk Dances', 'Ghumat Earthen Percussion Instrument', 'UNESCO Churches of Old Goa', 'Goa Carnival & Shigmo Festival', 'Bebinca, Fish Curry Rice & Feni'],
      danceId: 'garba',
      rhythmBols: 'Ghumat-Beat! Fugdi-Spin! Dekhnni! Dheem-Taa!',
      unityRole: 'Exemplifies seamless Indo-Portuguese maritime synthesis, vibrant coastal hospitality, and joyful communal festivals.',
      explored: false,
      nx: 0.330,
      ny: 0.680,
      color: '#06b6d4'
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      capital: 'Gandhinagar',
      category: 'state',
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
      nx: 0.280,
      ny: 0.490,
      color: '#06b6d4'
    },
    {
      id: 'haryana',
      name: 'Haryana',
      capital: 'Chandigarh',
      category: 'state',
      region: 'north',
      regionTitle: 'North India',
      citiesCount: 22,
      districtsCount: 22,
      majorCities: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Hisar', 'Karnal', 'Rohtak'],
      resources: ['Global IT & Automotive Capital (Gurugram)', 'Fertile Yamuna-Ghaggar Agricultural Plains', 'Textile & Handloom Hub (Panipat)', 'India\'s Premier Sports & Olympic Wrestling Cradle'],
      specialties: ['Dhamal & Khoria Folk Dances', 'Ragni & Saang Musical Folk Theatre', 'Surajkund International Crafts Mela', 'Kurukshetra Gita Mahotsav', 'Bajra Khichdi, Kadhi & Pure Cow Ghee'],
      danceId: 'bhangra',
      rhythmBols: 'Dhamal-Taal! Saang! Ragni! Kadam-Taal!',
      unityRole: 'Fuels India\'s corporate tech innovation while dominating international athletics and producing championship Olympic athletes.',
      explored: false,
      nx: 0.370,
      ny: 0.260,
      color: '#ec4899'
    },
    {
      id: 'himachal_pradesh',
      name: 'Himachal Pradesh',
      capital: 'Shimla / Dharamshala',
      category: 'state',
      region: 'north',
      regionTitle: 'North India',
      citiesCount: 14,
      districtsCount: 12,
      majorCities: ['Shimla', 'Dharamshala', 'Mandi', 'Solan', 'Kullu', 'Manali', 'Chamba'],
      resources: ['Himalayan Hydropower Reservoir', 'The Apple State of India', 'Medicinal Pine & Deodar Forests', 'Glacial River Basins (Beas, Chenab, Ravi, Sutlej)'],
      specialties: ['Kullu Nati Folk Dance (Guinness World Record)', 'Kullu Shawls & Chamba Rumal Embroidery (GI Tag)', 'Kangra Miniature Painting', 'Dharamshala Spiritual & Monastic Hub', 'Himachali Dham Festive Feast & Siddu'],
      danceId: 'kathak',
      rhythmBols: 'Nati-Circle! Dhol-Nagada! Pahari-Swar! Dheem!',
      unityRole: 'Embodies tranquil mountain peace, clean renewable hydro energy, and world-renowned folk dance community circles.',
      explored: false,
      nx: 0.395,
      ny: 0.190,
      color: '#06b6d4'
    },
    {
      id: 'jharkhand',
      name: 'Jharkhand',
      capital: 'Ranchi',
      category: 'state',
      region: 'east',
      regionTitle: 'East India',
      citiesCount: 18,
      districtsCount: 24,
      majorCities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih'],
      resources: ['Over 40% of India\'s Mineral Wealth (Coal, Iron Ore, Copper, Mica)', 'Pioneering Steel City (Jamshedpur TATA)', 'Dense Sal, Mahua & Bamboo Forests', 'Subarnarekha & Damodar River Systems'],
      specialties: ['Seraikella Chhau Mask Dance', 'Sohrai & Khovar Indigenous Tribal Murals', 'Sarhul & Karma Tribal Spring Festivals', 'Baidyanath Dham Spiritual Shrine', 'Dhuska, Malpua & Rugra Curry'],
      danceId: 'chhau',
      rhythmBols: 'Jhumair-Taal! Mandar-Thump! Chhau-Leap! Dhaa!',
      unityRole: 'Supplies the raw industrial mineral power that builds India\'s bridges, rail networks, and heavy engineering.',
      explored: false,
      nx: 0.560,
      ny: 0.460,
      color: '#ec4899'
    },
    {
      id: 'karnataka',
      name: 'Karnataka',
      capital: 'Bengaluru',
      category: 'state',
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
      nx: 0.340,
      ny: 0.720,
      color: '#f59e0b'
    },
    {
      id: 'kerala',
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      category: 'state',
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
      nx: 0.360,
      ny: 0.865,
      color: '#06b6d4'
    },
    {
      id: 'madhya_pradesh',
      name: 'Madhya Pradesh',
      capital: 'Bhopal',
      category: 'state',
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
      nx: 0.460,
      ny: 0.465,
      color: '#f59e0b'
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      capital: 'Mumbai',
      category: 'state',
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
      nx: 0.375,
      ny: 0.585,
      color: '#ec4899'
    },
    {
      id: 'manipur',
      name: 'Manipur',
      capital: 'Imphal',
      category: 'state',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 10,
      districtsCount: 16,
      majorCities: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Kakching', 'Ukhrul'],
      resources: ['Jeweled Land of India', 'Loktak Lake (Only Floating Lake in the World)', 'Natural Bamboo & Cane Wealth', 'Rich Horticultural & Aromatic Rice Soil'],
      specialties: ['Manipuri Classical Dance (Raas Leela & Pung Cholom)', 'Thang-Ta Ancient Martial Sword Art', 'Ima Keithel (World\'s Largest All-Women Run Market)', 'Origin of Modern Polo (Sagol Kangjei)', 'Kangshoi & Singju Traditional Cuisine'],
      danceId: 'kathak',
      rhythmBols: 'Pung-Cholom! Kartal-Sync! Raas-Leela! Dha!',
      unityRole: 'Gifted India the sublime lyrical grace of classical Manipuri dance, the athletic heritage of polo, and women\'s economic empowerment.',
      explored: false,
      nx: 0.810,
      ny: 0.400,
      color: '#ec4899'
    },
    {
      id: 'meghalaya',
      name: 'Meghalaya',
      capital: 'Shillong',
      category: 'state',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 8,
      districtsCount: 12,
      majorCities: ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Williamnagar', 'Cherrapunji'],
      resources: ['Abode of Clouds & Wettest Place on Earth (Mawsynram)', 'Abundant Coal & Limestone Reserves', 'Pristine Pine Forests & Waterfalls', 'Organic Lakadong Turmeric (Highest Curcumin)'],
      specialties: ['Living Root Bridges (Bio-engineering Marvel)', 'Shad Suk Mynsiem & 100-Drums Wangala Festival', 'Matrilineal Khasi & Garo Social Structure', 'Rock Music Capital of India (Shillong)', 'Jadoh & Dohneiiong Traditional Cuisine'],
      danceId: 'cheraw',
      rhythmBols: 'Shad-Suk-Mynsiem! Wangala-Drum! Rain-Pulse!',
      unityRole: 'Teaches the world botanical bio-engineering through centuries-old Living Root Bridges and models matrilineal gender equality.',
      explored: false,
      nx: 0.710,
      ny: 0.390,
      color: '#06b6d4'
    },
    {
      id: 'mizoram',
      name: 'Mizoram',
      capital: 'Aizawl',
      category: 'state',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 8,
      districtsCount: 11,
      majorCities: ['Aizawl', 'Lunglei', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai'],
      resources: ['Vast Bamboo Forest Ecosystems (85%+ Forest Cover)', 'Hydroelectric Water Resources', 'Exotic Floriculture (Anthuriums)', 'Organic Spices & High Altitude Agriculture'],
      specialties: ['Cheraw Bamboo Dance (Agility Matrix)', 'Chapchar Kut Spring Festival', 'Khuallam Traditional Community Dance', 'Puan Intricate Handwoven Textiles', 'Mizo Bamboo Craftsmanship'],
      danceId: 'cheraw',
      rhythmBols: 'Thump! Clack! Open! Clack! Step! Clack! Jump! Sync!',
      unityRole: 'Demonstrates ancient tribal teamwork, mutual trust, and precision balance where individuals synchronize perfectly within a collective matrix.',
      explored: false,
      nx: 0.780,
      ny: 0.415,
      color: '#06b6d4'
    },
    {
      id: 'nagaland',
      name: 'Nagaland',
      capital: 'Kohima',
      category: 'state',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 9,
      districtsCount: 16,
      majorCities: ['Dimapur', 'Kohima', 'Mokokchung', 'Tuensang', 'Wokha', 'Mon', 'Zunheboto'],
      resources: ['Breathtaking Naga Hills & Dzukou Valley', 'Petroleum & Natural Gas Reserves', 'Naga King Chilli (Bhut Jolokia)', 'Rich Indigenous Medicinal Flora'],
      specialties: ['Hornbill Festival (Festival of Festivals)', 'Log Drum Tribal Synchronized Percussion', 'Naga Warrior Dance & Spear Balance', 'Naga Shawls with Distinct Clan Patterns', 'Smoked Pork with Axone & Bamboo Shoots'],
      danceId: 'cheraw',
      rhythmBols: 'Hornbill-Chant! Log-Drum-Beat! Warrior-Step!',
      unityRole: 'Brings 16 distinct warrior tribes together in the world-famous Hornbill Festival, symbolizing vibrant solidarity and courage.',
      explored: false,
      nx: 0.820,
      ny: 0.350,
      color: '#f59e0b'
    },
    {
      id: 'odisha',
      name: 'Odisha',
      capital: 'Bhubaneswar',
      category: 'state',
      region: 'east',
      regionTitle: 'East India',
      citiesCount: 20,
      districtsCount: 30,
      majorCities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Sambalpur', 'Berhampur', 'Balasore'],
      resources: ['Over 50% of India\'s Bauxite & Chromite Reserves', 'Major Iron Ore & Thermal Power Belt', '480 km Bay of Bengal Coastline & Ports (Paradeep)', 'Chilika Lake (Asia\'s Largest Brackish Water Lagoon)'],
      specialties: ['Odissi Classical Temple Sculptural Dance', 'Puri Jagannath Rath Yatra (World\'s Largest Chariot Festival)', 'Konark Sun Temple Architecture (UNESCO)', 'Pattachitra Hand-painted Palm Leaf Scrolls', 'Chhena Poda (Caramelized Cottage Cheese Dessert)'],
      danceId: 'chhau',
      rhythmBols: 'Dhoom! Taa! Dhoom! Oof-lee! Dhaa! Taa! Nuh-gaa-raa! Shabash!',
      unityRole: 'Synthesizes primordial maritime trading heritage (Bali Yatra) with sublime classical Odissi temple dance and sacred Rath Yatra inclusivity.',
      explored: false,
      nx: 0.580,
      ny: 0.535,
      color: '#ec4899'
    },
    {
      id: 'punjab',
      name: 'Punjab',
      capital: 'Chandigarh',
      category: 'state',
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
      nx: 0.365,
      ny: 0.225,
      color: '#ec4899'
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      capital: 'Jaipur',
      category: 'state',
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
      nx: 0.315,
      ny: 0.365,
      color: '#f59e0b'
    },
    {
      id: 'sikkim',
      name: 'Sikkim',
      capital: 'Gangtok',
      category: 'state',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 6,
      districtsCount: 6,
      majorCities: ['Gangtok', 'Namchi', 'Geyzing', 'Mangan', 'Rangpo', 'Singtam'],
      resources: ['World\'s First 100% Organic Farming State', 'Mount Kangchenjunga (3rd Highest Peak on Earth)', 'Large Cardamom World Leader', 'Himalayan Glacial Eco-reserves'],
      specialties: ['Singhi Chham (Snow Lion Mask Dance)', 'Rumtek & Enchey Monastic Buddhist Heritage', 'Khangchendzonga National Park (UNESCO Mixed Site)', 'Lepcha & Bhutia Handloom Weaving', 'Momos, Thukpa & Gundruk Organic Broth'],
      danceId: 'kathak',
      rhythmBols: 'Singhi-Chham! Mountain-Horn! Kangchenjunga! Dhum!',
      unityRole: 'World benchmark for environmental sustainability, carbon-neutral organic agriculture, and peaceful monastic co-existence.',
      explored: false,
      nx: 0.640,
      ny: 0.330,
      color: '#10b981'
    },
    {
      id: 'tamil_nadu',
      name: 'Tamil Nadu',
      capital: 'Chennai',
      category: 'state',
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
      nx: 0.448,
      ny: 0.875,
      color: '#f59e0b'
    },
    {
      id: 'telangana',
      name: 'Telangana',
      capital: 'Hyderabad',
      category: 'state',
      region: 'south',
      regionTitle: 'South / Deccan India',
      citiesCount: 22,
      districtsCount: 33,
      majorCities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Ramagundam', 'Mahbubnagar'],
      resources: ['Global Genome Valley & Pharmaceutical Hub', 'HITEC City Information Technology Mega-corridor', 'Godavari & Krishna River Irrigation Networks', 'Singareni Collieries Coal Belt'],
      specialties: ['Perini Shivatandavam (Warrior Dance of Kakatiyas)', 'Bathukamma Floral Festival', 'Pochampally Ikat Silk (UNESCO Best Tourism Village)', 'Charminar & Golconda Diamonds', 'Hyderabadi Dum Biryani & Irani Chai'],
      danceId: 'bharatanatyam',
      rhythmBols: 'Perini-Thandavam! Dappu-Beat! Bathukamma! Dha!',
      unityRole: 'Drives India\'s life sciences and tech innovations while celebrating Deccan royal heritage and Kakatiya temple sculpture.',
      explored: false,
      nx: 0.450,
      ny: 0.610,
      color: '#ec4899'
    },
    {
      id: 'tripura',
      name: 'Tripura',
      capital: 'Agartala',
      category: 'state',
      region: 'northeast',
      regionTitle: 'Northeast India',
      citiesCount: 8,
      districtsCount: 8,
      majorCities: ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailashahar', 'Belonia', 'Khowai'],
      resources: ['India\'s 2nd Largest Natural Rubber Producer', 'Abundant Natural Gas Clean Energy Reservoirs', 'High-grade Bamboo & Cane Forests', 'Pineapple & Jackfruit Organic Orchards'],
      specialties: ['Hojagiri Reang Balance Dance on Earthen Pitchers', 'Ujjayanta Palace & Neermahal Water Palace', 'Unakoti Giant Rock-carved Sculptures', 'Tripuri Bamboo & Cane Filigree Furniture', 'Mui Borok & Traditional Herbal Delicacies'],
      danceId: 'cheraw',
      rhythmBols: 'Hojagiri-Step! Pitcher-Balance! Lebang-Beat!',
      unityRole: 'Celebrates extraordinary physical balance in Hojagiri pitcher dances and anchors India\'s clean natural gas trade.',
      explored: false,
      nx: 0.745,
      ny: 0.435,
      color: '#f59e0b'
    },
    {
      id: 'uttar_pradesh',
      name: 'Uttar Pradesh',
      capital: 'Lucknow',
      category: 'state',
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
      nx: 0.435,
      ny: 0.345,
      color: '#f59e0b'
    },
    {
      id: 'uttarakhand',
      name: 'Uttarakhand',
      capital: 'Dehradun / Gairsain',
      category: 'state',
      region: 'north',
      regionTitle: 'North India',
      citiesCount: 14,
      districtsCount: 13,
      majorCities: ['Dehradun', 'Haridwar', 'Rishikesh', 'Haldwani', 'Roorkee', 'Nainital', 'Almora'],
      resources: ['Origin of Sacred Rivers Ganga & Yamuna (Gangotri / Yamunotri)', 'Himalayan Hydroelectric Stations', 'Jim Corbett Tiger Reserve (India\'s Oldest National Park)', 'Medicinal Herbs & Aromatic Plants'],
      specialties: ['Chholiya Martial Sword Folk Dance', 'Dhol-Damau Traditional Hill Percussion', 'Yoga Capital of the World (Rishikesh)', 'Char Dham & Valley of Flowers (UNESCO)', 'Bal Mithai, Kafuli & Singori Sweets'],
      danceId: 'kathak',
      rhythmBols: 'Chholiya-Sword! Dhol-Damau! Garhwali-Rhythm!',
      unityRole: 'The spiritual source of the Ganges giving eternal life to northern India while pioneering global yoga and environmental conservation.',
      explored: false,
      nx: 0.440,
      ny: 0.220,
      color: '#06b6d4'
    },
    {
      id: 'west_bengal',
      name: 'West Bengal',
      capital: 'Kolkata',
      category: 'state',
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
      nx: 0.635,
      ny: 0.470,
      color: '#ec4899'
    },

    // -------------------------------------------------------------
    // 8 UNION TERRITORIES OF INDIA
    // -------------------------------------------------------------
    {
      id: 'andaman_nicobar',
      name: 'Andaman and Nicobar Islands',
      capital: 'Port Blair',
      category: 'ut',
      region: 'islands',
      regionTitle: 'Bay of Bengal (UT)',
      citiesCount: 3,
      districtsCount: 3,
      majorCities: ['Port Blair', 'Garacharma', 'Bambooflat'],
      resources: ['Strategic Indian Ocean Maritime Gateway', 'Pristine Coral Reefs & Marine Biosphere', 'Tropical Evergreen Rain Forests', 'Tuna & Deep Sea Fisheries'],
      specialties: ['Cellular Jail National Memorial (Freedom Struggle)', 'Nicobari Tribal Community Dance', 'Radhanagar Beach (Asia\'s Best Beach)', 'Barren Island (India\'s Only Active Volcano)', 'Fresh Coconut Seafood Delicacies'],
      danceId: 'garba',
      rhythmBols: 'Nicobari-Dance! Island-Drum! Ocean-Wave!',
      unityRole: 'Guards India\'s southeastern maritime frontier and honors the sacred memory of freedom fighters in Cellular Jail.',
      explored: false,
      nx: 0.820,
      ny: 0.820,
      color: '#06b6d4'
    },
    {
      id: 'chandigarh',
      name: 'Chandigarh',
      capital: 'Chandigarh',
      category: 'ut',
      region: 'north',
      regionTitle: 'North India (UT)',
      citiesCount: 1,
      districtsCount: 1,
      majorCities: ['Chandigarh (The City Beautiful)'],
      resources: ['India\'s First Master-Planned Modern City (Le Corbusier)', 'Top Urban Living Index & Green Cover', 'Premier Educational & Medical Hub (PGIMER)', 'Joint Capital of Punjab & Haryana'],
      specialties: ['Rock Garden by Nek Chand (Recycled Art Marvel)', 'Sukhna Lake & Rose Garden', 'Open Hand Monument (Giving & Receiving Peace)', 'Modern Architecture & Clean Urban Grid', 'Amritsari Kulcha & Chole Bhature'],
      danceId: 'bhangra',
      rhythmBols: 'City-Beat! Open-Hand! Modern-Sync!',
      unityRole: 'Symbolizes modern independent India\'s forward-looking architectural vision, orderly civic planning, and peaceful interstate cooperation.',
      explored: false,
      nx: 0.375,
      ny: 0.220,
      color: '#10b981'
    },
    {
      id: 'dadra_nagar_daman_diu',
      name: 'Dadra & Nagar Haveli and Daman & Diu',
      capital: 'Daman',
      category: 'ut',
      region: 'west',
      regionTitle: 'West India (UT)',
      citiesCount: 4,
      districtsCount: 3,
      majorCities: ['Daman', 'Diu', 'Silvassa', 'Nani Daman'],
      resources: ['Arabian Sea Coastal Industrial Corridor', 'Textile & Plastics Manufacturing Units', 'Lush Daman Ganga River Valley', 'Historic Portuguese Coastal Fortresses'],
      specialties: ['Tarpa Tribal Dance (Gourd Horn Instrument)', 'Diu Fort & Nagoa Beach', 'Moti Daman Portuguese Colonial Ramparts', 'Warli Mat-making & Bamboo Crafts', 'Coastal Seafood & Portuguese Vindaloo Fusion'],
      danceId: 'garba',
      rhythmBols: 'Tarpa-Blow! Daman-Wave! Folk-Pulse!',
      unityRole: 'Merges ancient tribal Tarpa horn rhythms with historic coastal maritime fortresses along the Arabian sea.',
      explored: false,
      nx: 0.310,
      ny: 0.540,
      color: '#06b6d4'
    },
    {
      id: 'delhi',
      name: 'Delhi (NCT)',
      capital: 'New Delhi',
      category: 'ut',
      region: 'north',
      regionTitle: 'National Capital Region (UT)',
      citiesCount: 5,
      districtsCount: 11,
      majorCities: ['New Delhi', 'Old Delhi', 'Dwarka', 'Rohini', 'Saket'],
      resources: ['National Political, Diplomatic & Judicial Capital', 'India\'s Largest Metro Rail Infrastructure', 'Global Embassy, Heritage & Trade Hub', 'Alluvial Yamuna Floodplain Corridor'],
      specialties: ['Red Fort, Qutub Minar & Humayun\'s Tomb (UNESCO)', 'India Gate & Kartavya Path Republic Day Parade', 'Dilli Haat Pan-India Artisan Bazaar', 'Chandni Chowk Mughal Culinary Heritage', 'Chole Bhature, Butter Chicken & Chaat'],
      danceId: 'kathak',
      rhythmBols: 'Rajdhani-Pulse! Dha-Tirkit-Dha! Unity-Beat!',
      unityRole: 'The vibrant beating heart and administrative capital of the Republic of India where every regional culture, language, and tradition congregates.',
      explored: false,
      nx: 0.390,
      ny: 0.270,
      color: '#fde047'
    },
    {
      id: 'jammu_kashmir',
      name: 'Jammu and Kashmir',
      capital: 'Srinagar / Jammu',
      category: 'ut',
      region: 'north',
      regionTitle: 'Far North India (UT)',
      citiesCount: 10,
      districtsCount: 20,
      majorCities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Gulmarg', 'Pahalgam'],
      resources: ['Jhelum & Chenab Glacial River Valleys', 'World-renowned Kashmiri Saffron (Pampore)', 'Apple, Walnut & Cherry Orchards', 'Pashmina & Hand-knotted Silk Carpets'],
      specialties: ['Rouf Folk Dance & Santoor 100-String Instrument', 'Shikaras & Houseboats on Dal Lake', 'Mughal Gardens of Srinagar', 'Kashmiri Papier-mâché & Walnut Wood Carving', 'Wazwan Multi-course Royal Feast & Kahwa'],
      danceId: 'kathak',
      rhythmBols: 'Dhum-Dhum-Taa! Rouf Wave! Santoor!',
      unityRole: 'The crowned northern jewel of India celebrating timeless poetic romance, Santoor musical depth, and mountain serenity.',
      explored: false,
      nx: 0.360,
      ny: 0.130,
      color: '#06b6d4'
    },
    {
      id: 'ladakh',
      name: 'Ladakh',
      capital: 'Leh / Kargil',
      category: 'ut',
      region: 'north',
      regionTitle: 'Trans-Himalayas (UT)',
      citiesCount: 4,
      districtsCount: 2,
      majorCities: ['Leh', 'Kargil', 'Diskit', 'Zanskar'],
      resources: ['High Altitude Cold Desert & Glaciers (Siachen)', 'Highest Motorized Passes (Umling La, Khardung La)', 'Solar Radiation Clean Power Potential', 'Pashmina (Changthangi Goat) Wool'],
      specialties: ['Jabro Nomadic Dance & Cham Monastic Mask Dances', 'Hemis & Thiksey Buddhist Monasteries', 'Pangong Tso & Tso Moriri High Altitude Lakes', 'Ladakhi Stupa & Mud-brick Architecture', 'Thukpa, Skyu & Butter Tea (Gur Gur Chai)'],
      danceId: 'kathak',
      rhythmBols: 'Jabro-Step! Monastic-Cymbal! High-Pass-Echo!',
      unityRole: 'Stands at the roof of India, embodying high-altitude human resilience, ancient Silk Route hospitality, and Buddhist meditation.',
      explored: false,
      nx: 0.430,
      ny: 0.100,
      color: '#06b6d4'
    },
    {
      id: 'lakshadweep',
      name: 'Lakshadweep',
      capital: 'Kavaratti',
      category: 'ut',
      region: 'islands',
      regionTitle: 'Arabian Sea (UT)',
      citiesCount: 2,
      districtsCount: 1,
      majorCities: ['Kavaratti', 'Agatti', 'Minicoy', 'Andrott'],
      resources: ['36 Coral Atolls & Pristine Turquoise Lagoons', 'Yellowfin Tuna & Sustainable Marine Fisheries', 'Coconut Palm Agro-ecosystem', 'Eco-tourism Archipelago'],
      specialties: ['Kolkali & Parichakali Folk Stick Dances', 'Lighthouse of Minicoy Island', 'Intricate Coral Carvings & Coir Craft', 'Water Sports, Scuba Diving & Coral Conservation', 'Tuna Curry & Coconut Rice Delicacies'],
      danceId: 'bharatanatyam',
      rhythmBols: 'Kolkali-Sync! Parichakali! Island-Rhythm!',
      unityRole: 'Anchors India\'s western coral frontiers with pristine blue lagoons, showcasing eco-conservation and stick-rhythm agility.',
      explored: false,
      nx: 0.270,
      ny: 0.840,
      color: '#06b6d4'
    },
    {
      id: 'puducherry',
      name: 'Puducherry',
      capital: 'Puducherry',
      category: 'ut',
      region: 'south',
      regionTitle: 'Coromandel Coast (UT)',
      citiesCount: 4,
      districtsCount: 4,
      majorCities: ['Puducherry (White Town)', 'Karaikal', 'Mahe', 'Yanam'],
      resources: ['Coromandel Coastline & Deep Sea Ports', 'Auroville Global Eco-township Experiment', 'Textile Mills & Ceramic Pottery Units', 'Indo-French Architectural Heritage Corridor'],
      specialties: ['Garadi Folk Dance (Monkey Army Legend)', 'Sri Aurobindo Ashram & Matrimandir (Golden Dome of Unity)', 'French Promenade Beach & Pastel Boulevards', 'Handmade Paper & Terracotta Ceramics', 'Creole Indo-French Gastronomy & Baguettes'],
      danceId: 'bharatanatyam',
      rhythmBols: 'Garadi-Step! French-Konkan-Fusion! Dheem-Taa!',
      unityRole: 'Models universal human unity and spiritual synthesis at Auroville ("City of Dawn"), blending French colonial elegance with Tamil heritage.',
      explored: false,
      nx: 0.480,
      ny: 0.820,
      color: '#ec4899'
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
      
      if (phaseId === 'phase3') {
        renderPhase3();
      }
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
  let filteredStates = SimState.indianStates;
  if (filter === 'state') {
    filteredStates = SimState.indianStates.filter(s => s.category === 'state');
  } else if (filter === 'ut') {
    filteredStates = SimState.indianStates.filter(s => s.category === 'ut');
  } else if (filter !== 'all') {
    filteredStates = SimState.indianStates.filter(s => s.region === filter);
  }

  container.innerHTML = filteredStates.map(st => `
    <button class="map-state-chip ${st.id === SimState.activeStateId ? 'active' : ''}" onclick="selectSimState('${st.id}')">
      ${st.category === 'ut' ? '🏛️ ' : '📍 '}${st.name} ${st.explored ? '✓' : ''}
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
      <span class="dossier-badge-pill" style="background: ${state.color}22; border: 1px solid ${state.color}; color: ${state.color}; font-weight: 700;">
        ${state.category === 'ut' ? '🏛️ Union Territory' : '📍 State'} • ${state.regionTitle}
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
 * Filter States by Region, State, or Union Territory
 */
function filterSimRegion(region) {
  SimState.selectedRegionFilter = region;
  
  const pills = document.querySelectorAll('.sim-filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  
  const clickedPill = Array.from(pills).find(p => p.getAttribute('onclick')?.includes(`'${region}'`));
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
 * Voice Persona Selector & Controller
 */
function changeVoicePersona(personaId) {
  window.RhythmEngine.setVoicePersona(personaId);
  const personaLabels = {
    eleven_alice: '👑 Indira (ElevenLabs Neural Educator)',
    eleven_sarah: '✨ Sarah (ElevenLabs Warm & Reassuring)',
    eleven_jessica: '🌟 Jessica (ElevenLabs Bright & Playful)',
    eleven_bella: '🎙️ Bella (ElevenLabs Professional & Friendly)',
    eleven_lily: '🎭 Lily (ElevenLabs Expressive Actress)',
    eleven_george: '📖 George (ElevenLabs Storyteller Male)',
    eleven_brian: '🔊 Brian (ElevenLabs Deep Resonant Male)',
    eleven_laura: '💫 Laura (ElevenLabs Enthusiastic Female)',
    indira_natural: '🇮🇳 Indira (Indian English - Natural)',
    aditi_hindi: '🇮🇳 Aditi (Hindi / Indian Accent)',
    ravi_male: '🇮🇳 Ravi (Indian English Male)',
    victoria_uk: '🇬🇧 Victoria (British English)',
    samantha_us: '🇺🇸 Samantha (US English)'
  };
  const label = personaLabels[personaId] || 'Selected Persona';
  updateAISpeechBubble(`"Voice switched to ${label}. Click 'Test Voice' or select any state on the map to hear neural speech!"`);
}
window.changeVoicePersona = changeVoicePersona;

/**
 * Preview Voice Assistant Speech
 */
function previewCurrentVoice() {
  const sampleLines = [
    "Namaste! I am Indira, your simulation guide for Indian culture, rhythms, and geographic diversity.",
    "Welcome to the Pan-India Cultural Matrix! Every regional rhythm harmonizes into one unified whole.",
    "Exploring the majestic diversity of India, from Kashmir in the north to Kanyakumari in the south!"
  ];
  const phrase = sampleLines[Math.floor(Math.random() * sampleLines.length)];
  updateAISpeechBubble(`"Testing voice: ${phrase}"`);
  window.RhythmEngine.speakVoiceAssistant(phrase, onVoiceStart, onVoiceEnd);
}
window.previewCurrentVoice = previewCurrentVoice;

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
// INTERACTIVE INDIA DIVERSITY & UNITY CANVAS MAP
// ==========================================================
let currentMapBgSrc = 'images/india_cultural_map_bg.jpg';
let mapImg = new Image();
mapImg.src = currentMapBgSrc;

function changeMapBackground(src) {
  currentMapBgSrc = src || 'images/india_cultural_map_bg.jpg';
  mapImg = new Image();
  mapImg.src = currentMapBgSrc;
  mapImg.onload = () => {
    const container = document.getElementById('indiaMapContainer');
    if (container && mapImg.naturalWidth && mapImg.naturalHeight) {
      container.style.aspectRatio = `${mapImg.naturalWidth} / ${mapImg.naturalHeight}`;
    }
  };
}
window.changeMapBackground = changeMapBackground;

function initCanvasVisualizer() {
  const canvas = document.getElementById('symphonyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let hoveredState = null;
  let mousePos = { x: -1, y: -1 };
  let pulseAngle = 0;

  // Accurate mouse tracking with coordinate scaling
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      mousePos.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      mousePos.y = (e.clientY - rect.top) * (canvas.height / rect.height);
    }
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

  function drawUnityCenterHub(cx, cy) {
    ctx.save();
    // Glowing central core
    const hubGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 32);
    hubGrad.addColorStop(0, 'rgba(253, 224, 71, 0.95)');
    hubGrad.addColorStop(0.4, 'rgba(245, 158, 11, 0.6)');
    hubGrad.addColorStop(1, 'rgba(219, 39, 119, 0.0)');

    ctx.fillStyle = hubGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 32, 0, Math.PI * 2);
    ctx.fill();

    // Ashoka / Unity Chakra Ring
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 2;
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 6;
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
      ctx.strokeStyle = 'rgba(253, 224, 71, 0.7)';
      ctx.stroke();
    }
    ctx.restore();

    // Unity Badge text with dark backdrop
    ctx.fillStyle = 'rgba(10, 14, 30, 0.85)';
    ctx.beginPath();
    ctx.roundRect(cx - 36, cy + 22, 72, 18, 9);
    ctx.fill();
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = "800 8.5px 'Space Grotesk', sans-serif";
    ctx.fillStyle = '#fde047';
    ctx.textAlign = 'center';
    ctx.fillText('UNITY HUB', cx, cy + 34);

    ctx.restore();
  }

  function renderLoop() {
    // Dynamic size synchronization locked to active map natural aspect ratio
    const imgRatio = (mapImg.naturalWidth && mapImg.naturalHeight)
      ? (mapImg.naturalWidth / mapImg.naturalHeight)
      : (1024 / 571);

    const parent = canvas.parentElement;
    const parentW = parent ? parent.clientWidth : 0;

    if (parentW > 50) {
      const targetH = Math.round(parentW / imgRatio);
      if (canvas.width !== parentW || canvas.height !== targetH) {
        canvas.width = parentW;
        canvas.height = targetH;
      }
    } else if (canvas.width <= 0 || canvas.height <= 0) {
      canvas.width = 1024;
      canvas.height = Math.round(1024 / imgRatio);
    }

    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Draw the full background illustrated map to fill canvas perfectly
    if (mapImg.complete && mapImg.naturalWidth > 0) {
      ctx.drawImage(mapImg, 0, 0, w, h);
    }

    pulseAngle += 0.025;

    // Subtle edge vignette overlay
    ctx.save();
    const borderGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.35, w * 0.5, h * 0.5, w * 0.70);
    borderGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    borderGrad.addColorStop(1, 'rgba(10, 14, 30, 0.35)');
    ctx.fillStyle = borderGrad;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();

    const centerHubX = w * 0.460;
    const centerHubY = h * 0.465;

    // Draw Central Unity Hub in Madhya Pradesh
    drawUnityCenterHub(centerHubX, centerHubY);

    hoveredState = null;

    // Filter by selected region
    const activeRegion = SimState.selectedRegionFilter || 'all';

    // Draw connecting golden energy rays to Center
    SimState.indianStates.forEach((state) => {
      const sx = w * state.nx;
      const sy = h * state.ny;

      ctx.save();
      ctx.strokeStyle = state.explored ? 'rgba(245, 158, 11, 0.45)' : 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = state.explored ? 1.8 : 0.9;
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
      const sx = w * state.nx;
      const sy = h * state.ny;

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

    // Draw State Nodes & Interactive Pins over the Illustrated Background
    SimState.indianStates.forEach((state) => {
      const sx = w * state.nx;
      const sy = h * state.ny;

      const isMatchingRegion = activeRegion === 'all' || 
        (activeRegion === 'state' && state.category === 'state') ||
        (activeRegion === 'ut' && state.category === 'ut') ||
        state.region === activeRegion;
      const isActiveState = state.id === SimState.activeStateId;

      // Mouse Hover check (radius 24px)
      const dist = Math.hypot(mousePos.x - sx, mousePos.y - sy);
      const isHovered = dist < 24 && isMatchingRegion;
      if (isHovered) hoveredState = state;

      ctx.save();

      // Active / Explored Pulsing Radar Halo
      if (isActiveState || isHovered || state.explored) {
        const pulseR = 14 + Math.sin(pulseAngle + state.nx * 10) * 4;
        ctx.strokeStyle = isActiveState ? '#fde047' : isHovered ? '#ffffff' : state.color;
        ctx.lineWidth = isActiveState ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(sx, sy, pulseR, 0, Math.PI * 2);
        ctx.stroke();
      }

      // State Pin Outer Disc with Shadow
      ctx.fillStyle = isActiveState ? '#fde047' : isHovered ? '#ffffff' : state.color;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = isHovered ? 20 : isActiveState ? 16 : 8;
      ctx.beginPath();
      ctx.arc(sx, sy, isHovered ? 9 : 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // State Label Badge with Dark Glass Backing for high readability
      const labelText = state.name;
      ctx.font = `${isActiveState ? '800 11px' : '700 10px'} 'Space Grotesk', sans-serif`;
      const textWidth = ctx.measureText(labelText).width;
      const badgeW = textWidth + 14;
      const badgeH = 18;
      const badgeX = sx - badgeW / 2;

      // Intelligently place badge above pin if near the bottom edge (e.g. Kerala / Tamil Nadu)
      const isNearBottom = state.ny > 0.75;
      const badgeY = isNearBottom ? (sy - badgeH - 8) : (sy + 10);
      const textY = isNearBottom ? (badgeY + 12.5) : (badgeY + 12.5);

      ctx.shadowBlur = 6;
      ctx.fillStyle = isActiveState ? 'rgba(15, 23, 42, 0.94)' : 'rgba(10, 14, 30, 0.88)';
      ctx.beginPath();
      ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 9);
      ctx.fill();

      ctx.strokeStyle = isActiveState ? '#fde047' : isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = isActiveState ? 1.5 : 0.8;
      ctx.stroke();

      // Text inside badge
      ctx.fillStyle = isActiveState ? '#fde047' : isHovered ? '#ffffff' : isMatchingRegion ? '#ffffff' : '#94a3b8';
      ctx.textAlign = 'center';
      ctx.fillText(labelText, sx, textY);

      ctx.restore();
    });

    // Draw Floating Hover Tooltip HUD
    if (hoveredState) {
      ctx.save();
      const tx = Math.min(Math.max(mousePos.x, 140), w - 140);
      const ty = Math.max(mousePos.y - 45, 50);

      ctx.fillStyle = 'rgba(10, 14, 30, 0.96)';
      ctx.strokeStyle = hoveredState.color;
      ctx.lineWidth = 1.8;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 18;

      ctx.beginPath();
      ctx.roundRect(tx - 110, ty - 30, 220, 56, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = "800 12px 'Space Grotesk', sans-serif";
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

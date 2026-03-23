// Workout data from March 2026 to August 2026
// Types: race, strength, run, rest, nogym, mixed, recovery

export const workouts = {
  // ===== MARCH 2026 =====
  // Recovery Week (after Hyrox 20 Mar)
  '2026-03-20': { type: 'race', title: '🏆 Hyrox Race', badge: '2:28', content: 'Hyrox Bangkok — ผล 2:28\nCramp ที่ Burpees + Lap 8\nเป้าหมายต่อไป: Sub-2:00' },
  '2026-03-21': { type: 'rest', title: 'REST', badge: 'Recovery', content: 'พักฟื้นหลังแข่ง\nนอนให้เยอะ กินดี' },
  '2026-03-22': { type: 'rest', title: 'REST 🛌', badge: 'Recovery', content: 'พักทุกวันอาทิตย์' },
  '2026-03-23': { type: 'recovery', title: 'Mobility & Recovery', badge: '30-45 min', content: 'Walk: 20-30 min\nFoam Roll: Quads, Hamstrings, Calves, Lats (2 min/ข้าง)\nStretch: Hip 90/90, Pigeon, Cat-Cow' },
  '2026-03-24': { type: 'strength', title: 'Upper Day (Full) 💪', badge: '60-75 min', content: 'Seated Row: 4x10 @ 35kg 🔥\nLat Pulldown: 4x10 @ 45kg\nChest Press: 4x10 @ 45kg\nFace Pull: 3x15\nCable Lateral Raise: 3x12 @ 5kg\nTricep Pushdown: 3x12\nCable Curl: 3x12\nBack Extension: 3x12' },
  '2026-03-25': { type: 'run', title: 'Zone 2 Run', badge: '30-40 min', content: 'Pace: 7:00-7:30 /km\nHR: 130-145 bpm\nFeel: พูดได้เต็มประโยค\n\nCool-down + Static Stretch 10 min' },
  '2026-03-26': { type: 'strength', title: 'Lower Day', badge: '60-75 min', content: 'Leg Press: 4x10\nLeg Curl: 3x12 @ 40kg\nLeg Extension: 3x12\nHip Thrust: 3x12 @ 60kg\nCalf Raise: 3x15\nWalking Lunges: 2x10/leg BW\n\nถ้าขายังไม่พร้อม → ทำ Upper แทน' },
  '2026-03-27': { type: 'mixed', title: 'Run + Upper', badge: '60-75 min', content: 'Zone 2 Run: 25-30 min\n\nUpper:\nLat Pulldown 3x10 @ 45kg\nSeated Row 3x10 @ 35kg\nChest Press 3x10 @ 45kg\nFace Pull 3x12' },
  '2026-03-28': { type: 'run', title: 'Long Run', badge: '45-60 min', content: 'Zone 2: 45-60 min\nPace: 7:00-7:30 /km\nHR: 130-145 bpm\n\nCool-down + Foam Roll 10 min' },
  '2026-03-29': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์\nMobility, Stretch ถ้าอยาก' },
  '2026-03-30': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x10 @ 37.5kg 🔥\nLat Pulldown: 4x10 @ 47.5kg\nBack Extension: 3x12\nFace Pull: 3x15\nDead Hang: 3x max' },
  '2026-03-31': { type: 'run', title: 'Zone 2 Run + Upper', badge: '60-70 min', content: 'Zone 2 Run: 40 min\nUpper: Chest Press, Arms' },

  // ===== APRIL 2026 =====
  // Week 2-3: Base Building
  '2026-04-01': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x10 @ 47.5kg\nHip Thrust: 4x10 @ 65kg\nLeg Curl: 3x12 @ 42.5kg\nWalking Lunges: 3x12/leg' },
  '2026-04-02': { type: 'run', title: 'Running Intervals', badge: '50-60 min', content: 'Warm-up: 10 min easy\nIntervals: 6x 400m @ race pace\nRest: 90s between\nCool-down: 10 min' },
  '2026-04-03': { type: 'strength', title: 'Strength - Mixed', badge: '60-75 min', content: 'Sled Push/Pull: 5x25m\nFarmer Carry: 3x50m @ 24kg/hand\nBurpees: 3x15 → Run 400m\nFull body accessories' },
  '2026-04-04': { type: 'run', title: 'Long Run', badge: '60-75 min', content: 'Zone 2: 60-75 min\nPace: 7:00-7:30 /km' },
  '2026-04-05': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },
  '2026-04-06': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x10 @ 40kg 🔥\nLat Pulldown: 4x10 @ 50kg\nBack Extension: 3x12 + 5kg\nFace Pull: 3x15' },
  '2026-04-07': { type: 'run', title: 'Zone 2 Run + Upper', badge: '60-70 min', content: 'Zone 2 Run: 40 min\nUpper: Chest Press 4x10 @ 50kg, Arms' },

  // No Gym Week: 8-12 April
  '2026-04-08': { type: 'nogym', title: '🏠 Home: Run + Pull', badge: 'No Gym', content: 'Zone 2 Run: 40 min outdoor\nPull-ups: 4x8-10 (หรือ Inverted Rows)\nDead Hang: 3x max\nPlank: 3x45s' },
  '2026-04-09': { type: 'nogym', title: '🏠 Home: HIIT + Core', badge: 'No Gym', content: '5 rounds:\n• Burpees x10\n• Air Squats x20\n• Push-ups x15\n• Mountain Climbers x20\n• Rest 90s\n\nCore: Plank 45s + Side Plank 30s/side x3' },
  '2026-04-10': { type: 'nogym', title: '🏠 Home: Intervals', badge: 'No Gym', content: 'Warm-up: 10 min\nIntervals: 6x 400m @ race pace\nRest: 90s\nCool-down: 10 min\nStretch: 10 min' },
  '2026-04-11': { type: 'nogym', title: '🏠 Home: Strength', badge: 'No Gym', content: '4 rounds:\n• Bulgarian Split Squats 10/leg\n• Pike Push-ups 12\n• Glute Bridges 15\n• Tricep Dips (chair) 15\n• Superman Hold 30s\n\nFarmer Carry: กระเป๋าหนัก 3x50m' },
  '2026-04-12': { type: 'nogym', title: '🏠 Home: Long Run', badge: 'No Gym', content: 'Long Run Zone 2: 60-75 min\nOR\nActive Recovery: Walk 45 min + Stretch 20 min\n\nฟังร่างกาย!' },
  '2026-04-13': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Week 4: Build Phase
  '2026-04-14': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x10 @ 42.5kg 🔥\nLat Pulldown: 4x10 @ 52.5kg\nBack Extension: 3x12 + 7.5kg\nDeadball practice: Wall ball throws 3x10' },
  '2026-04-15': { type: 'run', title: 'Zone 2 Run + Burden Run', badge: '60-70 min', content: 'Zone 2 Run: 30 min\nBurden Run practice: 20kg backpack x 200m x 3' },
  '2026-04-16': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x10 @ 50kg\nLeg Press: 4x10\nHip Thrust: 4x10 @ 70kg\nLunges: 100m → Run 800m (cramp prevention drill)' },
  '2026-04-17': { type: 'run', title: 'Running Intervals', badge: '50-60 min', content: 'Warm-up: 10 min\nIntervals: 7x 400m @ race pace\nRest: 90s\nCool-down: 10 min' },
  '2026-04-18': { type: 'strength', title: 'Strength - Mixed + Crucible', badge: '60-75 min', content: 'Sled Push/Pull: 6x25m\nFarmer Carry: 4x50m @ 26kg/hand\nSandbag Hoist practice: Heavy lat pulldown 4x10\nCruci-haul practice: Heavy sled drag 100m' },
  '2026-04-19': { type: 'run', title: 'Long Run', badge: '70-80 min', content: 'Zone 2: 70-80 min\nPace: 6:45-7:15 /km\nBuilding endurance!' },
  '2026-04-20': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Week 5: Build Phase
  '2026-04-21': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x10 @ 45kg 🔥\nLat Pulldown: 4x10 @ 55kg\nBack Extension: 3x12 + 10kg\nCruci-haul: Sled drag 120m' },
  '2026-04-22': { type: 'run', title: 'Zone 2 Run + Upper', badge: '60-70 min', content: 'Zone 2 Run: 40 min\nUpper: Chest Press, Face Pull, Arms' },
  '2026-04-23': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x10 @ 52.5kg\nHip Thrust: 4x10 @ 75kg\nLeg Curl: 3x12 @ 45kg\nBurpees 40 → Run 800m (cramp drill)' },
  '2026-04-24': { type: 'run', title: 'Running Intervals', badge: '50-60 min', content: 'Warm-up: 10 min\nIntervals: 8x 400m @ race pace\nRest: 75s (decreasing)\nCool-down: 10 min' },
  '2026-04-25': { type: 'strength', title: 'Strength - Mixed + Crucible', badge: '70-80 min', content: 'Sled Push/Pull: 60m (race distance)\nFarmer Carry: 4x50m @ 28kg/hand\nBurden Run: 20kg x 400m (full distance!)\nCruci-haul: 150m heavy drag' },
  '2026-04-26': { type: 'run', title: 'Long Run', badge: '75-90 min', content: 'Zone 2: 75-90 min\nPace: 6:45-7:15 /km' },
  '2026-04-27': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Week 6: Race Simulation
  '2026-04-28': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x10 @ 47.5kg 🔥\nLat Pulldown: 4x10 @ 57.5kg\nBack Extension: 3x12 + 12.5kg' },
  '2026-04-29': { type: 'run', title: 'Zone 2 Run', badge: '40-50 min', content: 'Zone 2 Run: 40-50 min\nEasy day before simulation' },
  '2026-04-30': { type: 'mixed', title: 'Crucible Simulation 50%', badge: '60-75 min', content: '50% Simulation:\nRun 300m → Row 20cal → Ski 20cal\nStrength Erg practice\nDeadball 25m → Sandbag Hoist 20m\nBurpees 20 → Burden Run 200m\nSled 30m → Cruci-haul 75m' },

  // ===== MAY 2026 =====
  '2026-05-01': { type: 'run', title: 'Recovery Run', badge: '30-40 min', content: 'Easy Zone 2: 30-40 min\nRecovering from simulation' },
  '2026-05-02': { type: 'strength', title: 'Strength - Mixed', badge: '60-75 min', content: 'Full body maintenance\nSled Push/Pull: 4x30m\nFarmer Carry: 3x50m' },
  '2026-05-03': { type: 'run', title: 'Long Run', badge: '70-80 min', content: 'Zone 2: 70-80 min\nPace: 6:45-7:15 /km' },
  '2026-05-04': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Week 7: Peak Week
  '2026-05-05': { type: 'strength', title: 'Strength - Pull PEAK', badge: '60-75 min', content: 'Seated Row: 4x8 @ 50kg 🔥 PEAK\nLat Pulldown: 4x8 @ 60kg\nBack Extension: 3x10 + 15kg\nHeavy but controlled' },
  '2026-05-06': { type: 'run', title: 'Zone 2 Run + Upper', badge: '60-70 min', content: 'Zone 2 Run: 35 min\nUpper: Chest Press 4x8 @ 55kg, Arms' },
  '2026-05-07': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x8 @ 55kg\nHip Thrust: 4x8 @ 80kg\nLeg Curl: 3x10 @ 47.5kg' },
  '2026-05-08': { type: 'run', title: 'Intervals - Sharpening', badge: '45-50 min', content: 'Warm-up: 10 min\nIntervals: 6x 400m @ slightly faster than race pace\nRest: 90s\nStay sharp!' },
  '2026-05-09': { type: 'mixed', title: 'Crucible Simulation 80%', badge: '75-90 min', content: '80% Full Simulation:\nRun 500m → Row 35cal → Ski 35cal\nStrength Erg 500kg/1500kg\nDeadball 40m → Sandbag Hoist 35m\nBurpees 35 → Burden Run 350m\nLactic Legs: 15 squat + 15m lunge\nSled 50m → Cruci-haul 120m' },
  '2026-05-10': { type: 'run', title: 'Easy Run', badge: '30-40 min', content: 'Recovery run after simulation\nZone 2: 30-40 min' },
  '2026-05-11': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Week 8: Taper
  '2026-05-12': { type: 'strength', title: 'Light Strength - Pull', badge: '45-50 min', content: 'Seated Row: 3x8 @ 40kg (light!)\nLat Pulldown: 3x8 @ 50kg\nBack Extension: 2x10\nStay loose, don\'t push' },
  '2026-05-13': { type: 'run', title: 'Easy Run', badge: '30 min', content: 'Zone 2: 30 min\nLegs fresh' },
  '2026-05-14': { type: 'strength', title: 'Light Strength - Push', badge: '45-50 min', content: 'Chest Press: 3x8 @ 45kg\nHip Thrust: 3x8 @ 60kg\nMobility work' },
  '2026-05-15': { type: 'run', title: 'Short Intervals', badge: '35-40 min', content: 'Warm-up: 10 min\nIntervals: 4x 200m @ race pace\nRest: 90s\nStay sharp but fresh!' },
  '2026-05-16': { type: 'recovery', title: 'Mobility & Activation', badge: '30 min', content: 'Foam Roll all major muscles\nDynamic Stretch\nLight activation: Band walks, Glute bridges\nVisualize race!' },
  '2026-05-17': { type: 'run', title: 'Shakeout Run', badge: '20 min', content: 'Easy 20 min jog\nStrides: 4x 50m\nStretch' },
  '2026-05-18': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์\nPrepare gear, hydrate' },

  // Race Week - Crucible
  '2026-05-19': { type: 'recovery', title: 'Rest + Mobility', badge: '20-30 min', content: 'Light walk 15-20 min\nMobility work\nHydrate well!' },
  '2026-05-20': { type: 'run', title: 'Light Shakeout', badge: '15-20 min', content: 'Very easy 15 min\nStrides: 3x 50m\nActivation exercises' },
  '2026-05-21': { type: 'rest', title: 'REST', badge: 'Pre-race', content: 'Complete rest\nPrepare nutrition\nPack race bag\nSleep early!' },
  '2026-05-22': { type: 'rest', title: 'REST + Prep', badge: 'Race Eve', content: 'Complete rest\nCarb load dinner\nVisualize race strategy\nSleep 8+ hours' },
  '2026-05-23': { type: 'race', title: '🔥 Crucible Race', badge: "Men's Silver", content: 'CRUCIBLE FITNESS GAMES\nBRAVO BKK\n\n12 stations, 4 zones:\nZone 1 FIRE: Run 600m, Row 40cal, Ski 40cal\nZone 2 FORCE: Strength Erg, Deadball 50m, Sandbag Hoist 40m\nZone 3 FLOW: Burpees 40, Burden Run 400m, Cruciball 25\nZone 4 FORGE: Lactic Legs, Sled 60m, Cruci-haul 150m\n\nDamper 4 on Row/Ski!' },
  '2026-05-24': { type: 'rest', title: 'REST', badge: 'Recovery', content: 'Complete rest after Crucible\nHydrate, eat well, celebrate! 🎉' },
  '2026-05-25': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Post-Crucible Recovery + Hyrox Focus
  '2026-05-26': { type: 'recovery', title: 'Recovery Walk + Mobility', badge: '30-40 min', content: 'Walk 20-30 min\nFoam Roll full body\nStretch 15 min' },
  '2026-05-27': { type: 'run', title: 'Easy Zone 2', badge: '30 min', content: 'Zone 2: 30 min\nIf legs sore → just walk' },
  '2026-05-28': { type: 'strength', title: 'Light Upper', badge: '45-50 min', content: 'Light weights\nSeated Row: 3x10 @ 35kg\nLat Pulldown: 3x10 @ 45kg\nChest Press: 3x10 @ 45kg' },
  '2026-05-29': { type: 'run', title: 'Zone 2 Run', badge: '35-40 min', content: 'Zone 2: 35-40 min\nEasing back in' },
  '2026-05-30': { type: 'strength', title: 'Light Lower', badge: '45-50 min', content: 'Leg Press: 3x10\nHip Thrust: 3x10 @ 60kg\nLeg Curl: 3x10 @ 40kg' },
  '2026-05-31': { type: 'run', title: 'Long Run', badge: '50-60 min', content: 'Zone 2: 50-60 min\nRebuilding base' },

  // ===== JUNE 2026 =====
  // Hyrox Focus - Build Phase
  '2026-06-01': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },
  '2026-06-02': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'BACK TO HYROX FOCUS!\nSeated Row: 4x10 @ 50kg 🔥\nLat Pulldown: 4x10 @ 60kg\nBack Extension: 3x12 + 15kg\nSled Pull practice: 5x full distance' },
  '2026-06-03': { type: 'run', title: 'Zone 2 + SkiErg', badge: '60-70 min', content: 'Zone 2 Run: 40 min\nSkiErg: 3x 500m @ race pace' },
  '2026-06-04': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x10 @ 55kg\nHip Thrust: 4x10 @ 85kg\nLeg Curl: 3x12 @ 47.5kg\nWall Balls: 3x25 reps' },
  '2026-06-05': { type: 'run', title: 'Intervals', badge: '50-60 min', content: 'Warm-up: 10 min\n8x 400m @ sub-2 target pace (< 7:30/km)\nRest: 75s' },
  '2026-06-06': { type: 'strength', title: 'Hyrox Simulation Partial', badge: '60-75 min', content: 'SkiErg 1000m → Sled Push → Sled Pull → Row 1000m\nFocus on transitions!' },
  '2026-06-07': { type: 'run', title: 'Long Run', badge: '75-90 min', content: 'Zone 2: 75-90 min\nBuilding for Hyrox distance' },
  '2026-06-08': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Week continues...
  '2026-06-09': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x10 @ 52.5kg 🔥\nLat Pulldown: 4x10 @ 62.5kg\nBack Extension: 3x12 + 17.5kg\nDead Hang: 3x max' },
  '2026-06-10': { type: 'run', title: 'Zone 2 + Upper', badge: '60-70 min', content: 'Zone 2 Run: 45 min\nUpper: Face Pull, Arms' },
  '2026-06-11': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x10 @ 57.5kg\nHip Thrust: 4x10 @ 90kg\nLunges 100m → Run 1km (cramp drill)' },
  '2026-06-12': { type: 'run', title: 'Intervals + Burpees', badge: '55-65 min', content: 'Warm-up: 10 min\n6x (400m + 10 burpees)\nRest: 90s\nAnti-cramp specific!' },
  '2026-06-13': { type: 'strength', title: 'Hyrox Stations', badge: '60-75 min', content: 'Farmer Carry: 5x 200m @ 32kg/hand\nSled Push: 5x full weight\nSled Pull: 5x full weight\nWall Balls: 75 total' },
  '2026-06-14': { type: 'run', title: 'Long Run', badge: '80-95 min', content: 'Zone 2: 80-95 min\nApproaching race distance!' },
  '2026-06-15': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Continue building...
  '2026-06-16': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x10 @ 55kg 🔥 MILESTONE!\nLat Pulldown: 4x10 @ 65kg\nBack Extension: 3x12 + 20kg' },
  '2026-06-17': { type: 'run', title: 'Zone 2 + Row', badge: '60-70 min', content: 'Zone 2 Run: 40 min\nRow: 3x 1000m @ race pace' },
  '2026-06-18': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x10 @ 60kg\nHip Thrust: 4x10 @ 95kg\nLeg Curl: 4x10 @ 50kg' },
  '2026-06-19': { type: 'run', title: 'Intervals', badge: '55-65 min', content: 'Warm-up: 10 min\n10x 400m @ sub-2 pace\nRest: 60s (race simulation!)' },
  '2026-06-20': { type: 'strength', title: 'Hyrox Simulation 50%', badge: '75-90 min', content: '50% Hyrox Simulation:\n4 running laps + 4 stations\nRow → Sled Push → Burpees → Farmer Carry\nPractice pacing!' },
  '2026-06-21': { type: 'run', title: 'Long Run', badge: '90 min', content: 'Zone 2: 90 min\nFull Hyrox run distance!' },
  '2026-06-22': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Peak weeks for Hyrox
  '2026-06-23': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x8 @ 57.5kg 🔥\nLat Pulldown: 4x8 @ 67.5kg\nBack Extension: 3x10 + 22.5kg' },
  '2026-06-24': { type: 'run', title: 'Zone 2 + SkiErg', badge: '60-70 min', content: 'Zone 2 Run: 45 min\nSkiErg: 1000m time trial' },
  '2026-06-25': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x8 @ 62.5kg\nHip Thrust: 4x8 @ 100kg MILESTONE!\nWall Balls: 100 total' },
  '2026-06-26': { type: 'run', title: 'Intervals + Lunges', badge: '55-65 min', content: '6x (400m + Lunges 50m)\nAnti-cramp drill\nRest: 90s' },
  '2026-06-27': { type: 'strength', title: 'Hyrox Stations', badge: '70-80 min', content: 'Full weight all stations:\nSled Push/Pull: 6x each\nFarmer Carry: 4x 200m\nBurpees: 80 total (sets of 20)' },
  '2026-06-28': { type: 'run', title: 'Long Run', badge: '90-100 min', content: 'Zone 2: 90-100 min\nMental prep!' },
  '2026-06-29': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // ===== JULY 2026 =====
  '2026-07-01': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x8 @ 60kg 🔥\nLat Pulldown: 4x8 @ 70kg TARGET!\nBack Extension: 3x10 + 25kg TARGET!' },
  '2026-07-02': { type: 'run', title: 'Zone 2 + Row', badge: '60-70 min', content: 'Zone 2 Run: 45 min\nRow: 1000m time trial' },
  '2026-07-03': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x8 @ 65kg TARGET!\nHip Thrust: 4x8 @ 105kg\nLunges 100m → Run 1.5km' },
  '2026-07-04': { type: 'run', title: 'Intervals', badge: '55-65 min', content: 'Warm-up: 10 min\n8x 800m @ race pace\nRest: 90s\nBig session!' },
  '2026-07-05': { type: 'strength', title: 'Hyrox Simulation 75%', badge: '90-105 min', content: '75% Full Hyrox:\n6 running laps + 6 stations\nFocus on:\n- Transition speed\n- Burpee pacing\n- Post-Lunges run' },
  '2026-07-06': { type: 'run', title: 'Long Run', badge: '90 min', content: 'Zone 2: 90 min\nMaintain endurance' },
  '2026-07-07': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Continue July
  '2026-07-08': { type: 'strength', title: 'Strength - Pull PEAK', badge: '60-75 min', content: 'Seated Row: 4x6 @ 62.5kg 🔥\nLat Pulldown: 4x6 @ 72.5kg\nNearing targets!' },
  '2026-07-09': { type: 'run', title: 'Zone 2 + Upper', badge: '60-70 min', content: 'Zone 2 Run: 45 min\nUpper maintenance' },
  '2026-07-10': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x6 @ 67.5kg\nHip Thrust: 4x6 @ 110kg\nWall Balls: 100 unbroken goal' },
  '2026-07-11': { type: 'run', title: 'Race Pace Run', badge: '50-60 min', content: '40 min @ sub-7:30/km pace\nPractice race running' },
  '2026-07-12': { type: 'mixed', title: 'Hyrox Full Simulation', badge: '120-150 min', content: 'FULL HYROX SIMULATION!\n8 running laps + 8 stations\nTarget: Under 2:15\n\nKey focus:\n- Electrolytes throughout\n- Burpee pacing\n- Lunges control\n- Strong finish!' },
  '2026-07-13': { type: 'rest', title: 'REST', badge: 'Recovery', content: 'Full rest after simulation\nAssess performance' },
  '2026-07-14': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // July - Recovery from simulation, maintain
  '2026-07-15': { type: 'recovery', title: 'Recovery + Mobility', badge: '30-40 min', content: 'Walk 20-30 min\nFoam Roll\nStretch' },
  '2026-07-16': { type: 'run', title: 'Easy Zone 2', badge: '35-40 min', content: 'Zone 2: 35-40 min\nRecovery run' },
  '2026-07-17': { type: 'strength', title: 'Strength - Pull Maintain', badge: '50-60 min', content: 'Seated Row: 4x8 @ 55kg\nLat Pulldown: 4x8 @ 65kg\nMaintenance mode' },
  '2026-07-18': { type: 'run', title: 'Intervals Light', badge: '45-50 min', content: '6x 400m @ race pace\nRest: 90s\nStay sharp' },
  '2026-07-19': { type: 'strength', title: 'Hyrox Stations Light', badge: '50-60 min', content: 'All stations at 70% effort\nFocus on form and efficiency' },
  '2026-07-20': { type: 'run', title: 'Long Run', badge: '75-90 min', content: 'Zone 2: 75-90 min\nMaintain base' },
  '2026-07-21': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Late July - Final Build
  '2026-07-22': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: 'Seated Row: 4x8 @ 60kg 🔥\nLat Pulldown: 4x8 @ 70kg\nBack Extension: 3x10 + 25kg' },
  '2026-07-23': { type: 'run', title: 'Zone 2 + Erg', badge: '60-70 min', content: 'Zone 2: 40 min\nSkiErg: 1000m\nRow: 1000m' },
  '2026-07-24': { type: 'strength', title: 'Strength - Push + Legs', badge: '60-75 min', content: 'Chest Press: 4x8 @ 65kg\nHip Thrust: 4x8 @ 110kg\nBurpees 50 → Run 1km' },
  '2026-07-25': { type: 'run', title: 'Intervals', badge: '55-65 min', content: '8x 600m @ race pace\nRest: 75s\nBig aerobic session' },
  '2026-07-26': { type: 'strength', title: 'Hyrox Simulation 80%', badge: '100-120 min', content: '80% Simulation\nAll 8 stations, race weights\nTarget: Strong, controlled\nNote weak points' },
  '2026-07-27': { type: 'run', title: 'Long Run', badge: '80-90 min', content: 'Zone 2: 80-90 min\nLast long run before taper' },
  '2026-07-28': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // ===== AUGUST 2026 =====
  // Taper for Hyrox
  '2026-08-01': { type: 'strength', title: 'Strength - Pull Taper', badge: '50-60 min', content: 'Seated Row: 3x8 @ 55kg\nLat Pulldown: 3x8 @ 65kg\nReducing volume, maintain intensity' },
  '2026-08-02': { type: 'run', title: 'Zone 2 Easy', badge: '35-40 min', content: 'Zone 2: 35-40 min\nLegs fresh' },
  '2026-08-03': { type: 'strength', title: 'Light Stations', badge: '45-50 min', content: 'All Hyrox stations at 60%\nTechnique focus\nNo fatigue' },
  '2026-08-04': { type: 'run', title: 'Short Intervals', badge: '35-40 min', content: '5x 300m @ race pace\nRest: 90s\nSharpening' },
  '2026-08-05': { type: 'strength', title: 'Light Full Body', badge: '40-45 min', content: 'Very light full body\nActivation only\nMobility' },
  '2026-08-06': { type: 'run', title: 'Easy Shakeout', badge: '25-30 min', content: 'Easy 25 min\nStrides: 4x 50m\nLegs feeling good!' },
  '2026-08-07': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Race Week - Hyrox (assuming mid-August)
  '2026-08-08': { type: 'recovery', title: 'Mobility + Activation', badge: '30 min', content: 'Foam Roll\nDynamic Stretch\nLight activation\nVisualize race!' },
  '2026-08-09': { type: 'run', title: 'Light Shakeout', badge: '20 min', content: 'Very easy 15-20 min\nStrides: 3x 50m\nStay loose' },
  '2026-08-10': { type: 'rest', title: 'REST', badge: 'Pre-race', content: 'Complete rest\nPrepare nutrition\nElectrolytes ready\nPack race bag' },
  '2026-08-11': { type: 'rest', title: 'REST + Prep', badge: 'Race Eve', content: 'Complete rest\nCarb load dinner\nMagnesium tonight\nVisualize sub-2 race!\nSleep 8+ hours' },
  '2026-08-12': { type: 'race', title: '🏆 HYROX RACE — SUB-2 TARGET', badge: 'SUB-2:00!', content: 'HYROX BANGKOK\n\nTARGET: SUB-2:00! 🎯\n\nKey strategy:\n1. Electrolytes every 2-3 stations\n2. Burpees: PACE! Don\'t rush start\n3. Lunges: Controlled, sodium shot ready\n4. Run Lap 8: Stay strong, no cramp!\n5. Wall Balls: Finish STRONG!\n\nYou\'ve done the work. Trust the training! 💪' },
  '2026-08-13': { type: 'rest', title: 'REST', badge: 'Recovery', content: 'CELEBRATE! 🎉\nRest and recover\nYou did it!' },
  '2026-08-14': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },

  // Post-race recovery
  '2026-08-15': { type: 'recovery', title: 'Recovery Walk', badge: '20-30 min', content: 'Light walk\nFoam Roll\nStretch\nReflect on race!' },
  '2026-08-16': { type: 'rest', title: 'REST 🛌', badge: '', content: 'พักทุกวันอาทิตย์' },
};

// Generate the color based on type
export const getWorkoutColor = (type) => {
  const colors = {
    race: '#ff3a3a',
    strength: '#b388ff',
    run: '#00e676',
    rest: '#555',
    nogym: '#ff9100',
    mixed: '#448aff',
    recovery: '#4dd0e1',
  };
  return colors[type] || '#555';
};

// Thai month names
export const thaiMonths = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];

export const thaiDays = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
export const thaiDaysShort = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];

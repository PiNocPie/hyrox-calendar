// Workout data from March 2026 to August 2026
// Types: race, strength, run, rest, nogym, mixed, recovery

export const workouts = {
  // ===== MARCH 2026 =====
  // Recovery Week (after Hyrox 20 Mar)
  '2026-03-20': { type: 'race', title: '🏆 Hyrox Race', badge: '2:28', content: '🎯 วันแข่ง — ใช้ทุกอย่างที่ซ้อมมา ไปเต็มที่!\n\nHyrox Bangkok — ผล 2:28\nCramp ที่ Burpees + Lap 8\nเป้าหมายต่อไป: Sub-2:00' },
  '2026-03-21': { type: 'rest', title: 'REST', badge: 'Recovery', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nพักฟื้นหลังแข่ง\nนอนให้เยอะ กินดี' },
  '2026-03-22': { type: 'rest', title: 'REST 🛌', badge: 'Recovery', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },
  '2026-03-23': { type: 'recovery', title: 'Mobility & Recovery', badge: '30-45 min', content: '🎯 mobility — ร่างกายยืดหยุ่น ลดความเสี่ยงบาดเจ็บ\n\nWalk: 20-30 min\nFoam Roll: Quads, Hamstrings, Calves, Lats (2 min/ข้าง)\nStretch: Hip 90/90, Pigeon, Cat-Cow' },
  '2026-03-24': { type: 'strength', title: 'Upper Day (Full) 💪', badge: '60-75 min', content: '🎯 สร้างแรงส่วนบน — พื้นฐานสำหรับทุก station ที่ใช้แขน\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 4x8 @ 35kg 🔥\nLat Pulldown: 4x8 @ 40kg\nChest Press: 4x8 @ 40kg\nFace Pull: 3x15 @ 15kg\nCable Lateral Raise: 3x12 @ 5kg\nRope Tricep Pushdown: 3x12 @ 15kg\nCable Curl: 3x12 @ 15kg\nBack Extension: 3x12 BW\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-03-25': { type: 'run', title: 'Zone 2 Run', badge: '35-45 min', content: '🎯 สร้าง aerobic base — หัวใจแข็งแรงขึ้น pace จะเร็วขึ้นเอง\n\nPace: 7:00-7:30 /km\nTreadmill: 6.5 km/h\nHR: 130-145 bpm\nFeel: พูดได้เต็มประโยค\n\nCool-down + Static Stretch 10 min' },
  '2026-03-26': { type: 'strength', title: 'Lower Day', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Lunges, Sled Push\n\n⏱ พัก: Sled 120s / Carry 90s / อื่นๆ 60s\n\nLeg Press: 4x10 @ 100kg\nLeg Curl: 3x12 @ 40kg\nLeg Extension: 3x12 @ 40kg\nWeighted Step Up: 3x12/leg @ 10kg/hand\nCalf Raise: 3x15 @ 60kg\nWalking Lunges: 2x10/leg @ 30kg\n\nถ้าขายังไม่พร้อม → ทำ Upper แทน\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-03-27': { type: 'mixed', title: 'Run + Upper', badge: '60-75 min', content: '🎯 cardio + strength รวม — ประหยัดเวลา ได้ทั้งวิ่งและเวท\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nZone 2 Run: 25-30 min\n\nUpper:\nLat Pulldown 3x8 @ 40kg\nSeated Row 3x8 @ 35kg\nChest Press 3x8 @ 40kg\nFace Pull 3x12 @ 15kg' },
  '2026-03-28': { type: 'run', title: 'Long Run', badge: '50-65 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 60-75 min\nPace: 7:00-7:30 /km\nTreadmill: 6.5 km/h\nHR: 130-145 bpm\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\n\nCool-down + Foam Roll 10 min' },
  '2026-03-29': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี\nMobility, Stretch ถ้าอยาก' },
  '2026-03-30': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 4x8 @ 35kg 🔥\nLat Pulldown: 4x8 @ 40kg\nBack Extension: 3x12 BW\nFace Pull: 3x15 @ 15kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-03-31': { type: 'run', title: 'Zone 2 Run + Upper', badge: '60-70 min', content: '🎯 cardio + strength รวม — ประหยัดเวลา ได้ทั้งวิ่งและเวท\n\n⏱ พัก: Compound 90s / Isolation 60s\n\nZone 2 Run: 45 min\nTreadmill: 6.5 km/h\n\nUpper:\nChest Press: 3x10 @ 40kg\nRope Tricep Pushdown: 3x12 @ 15kg\nCable Curl: 3x12 @ 15kg' },

  // ===== APRIL 2026 =====
  // Week 2-3: Base Building
  '2026-04-01': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x10 @ 110kg\nDB Romanian Deadlift: 4x10 @ 16kg/hand\nWeighted Step Up: 4x10/leg @ 10kg/hand\nWalking Lunges: 3x12/leg @ 30kg\nLeg Curl: 3x15 @ 40kg\n\nLactic Legs Combo: 1X (20 Squat + 20m Lunge) @ 20kg sandbag' },
  '2026-04-02': { type: 'run', title: 'Running Intervals + Push', badge: '50-60 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\nWarm-up: 10 min easy\nIntervals: 6x 400m @ race pace\nTreadmill: 10.0-10.5 km/h\nRest: 90s between\nCool-down: 10 min\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x12 @ 40kg\nWall Balls: 3x15 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-04-03': { type: 'strength', title: 'Strength - Mixed (AM/PM)', badge: 'AM 45-50 / PM 30 min', content: '🎯 ฝึก stations จริง — ร่างกายชินกับอุปกรณ์แข่ง\n\nAM — Sled (คนน้อย setup สะดวก)\n⏱ พัก: Sled 120s\n\nSled Push: 5x25m @ 175kg\nSled Pull: 5x25m @ 120kg\n\nPM — Carry + Bodyweight\n⏱ พัก: Carry 90s / อื่นๆ 60s\n\nFarmer Carry: 3x50m @ 24kg/hand\nBurpee to Plate: 3x15 BW → Run 400m\n\nEMOM 10 min:\nWall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW\n\nTransition Drill:\nRun 400m → Burpee to Plate 15 → Run 400m' },
  '2026-04-04': { type: 'run', title: 'Long Run', badge: '60-75 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 70-85 min\nPace: 7:00-7:30 /km\nTreadmill: 6.5 km/h\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง' },
  '2026-04-05': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },
  '2026-04-06': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 5x5 @ 45kg 🔥\nLat Pulldown: 5x5 @ 50kg\nBack Extension: 3x12 + 5kg\nFace Pull: 3x15 @ 15kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nFinisher:\nWall Balls: 3x15 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-04-07': { type: 'run', title: 'Tempo Run + Upper', badge: '60-70 min', content: '🎯 threshold + strength — เพิ่มความเร็ววิ่งและแรงแขน\n\n⏱ พัก: ระหว่าง strength set 60s\n\nTempo Run: 25 min @ 7:00-7:30/km\nTreadmill: 8.0-8.5 km/h\nHR: 155-165 bpm\nFeel: พูดได้แค่สั้นๆ\n\nUpper:\nChest Press: 4x10 @ 45kg\nRope Tricep Pushdown: 3x12 @ 15kg\nCable Curl: 3x12 @ 15kg' },

  // No Gym Week: 8-12 April
  '2026-04-08': { type: 'nogym', title: '🏠 Home: Run + Pull', badge: 'No Gym', content: '🎯 รักษา fitness ไม่มียิม — bodyweight + วิ่งนอก\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nZone 2 Run: 40 min outdoor\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 4x max BW\nPlank: 3x45s BW' },
  '2026-04-09': { type: 'nogym', title: '🏠 Home: HIIT + Core', badge: 'No Gym', content: '🎯 รักษา fitness ไม่มียิม — bodyweight + วิ่งนอก\n\n5 rounds:\n• Burpees x10\n• Air Squats x20\n• Push-ups x15\n• Mountain Climbers x20\n• Rest 90s\n\nCore: Plank 45s + Side Plank 30s/side x3' },
  '2026-04-10': { type: 'nogym', title: '🏠 Home: Intervals', badge: 'No Gym', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\nWarm-up: 10 min\nIntervals: 6x 400m @ race pace\nRest: 90s\nCool-down: 10 min\nStretch: 10 min' },
  '2026-04-11': { type: 'nogym', title: '🏠 Home: Strength', badge: 'No Gym', content: '🎯 รักษา fitness ไม่มียิม — bodyweight + วิ่งนอก\n\n⏱ พัก: Sled 120s / Carry 90s / อื่นๆ 60s\n\n4 rounds:\n• Bulgarian Split Squats 10/leg\n• Pike Push-ups 12\n• Glute Bridges 15\n• Tricep Dips (chair) 15\n• Superman Hold 30s\n\nFarmer Carry: กระเป๋าหนัก 3x50m' },
  '2026-04-13': { type: 'nogym', title: '🏠 Home: Long Run', badge: 'No Gym', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nLong Run Zone 2: 70-85 min\nOR\nActive Recovery: Walk 45 min + Stretch 20 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\n\nฟังร่างกาย!' },
  '2026-04-12': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Week 4: Build Phase
  '2026-04-14': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 4x12 @ 40kg 🔥\nLat Pulldown: 4x12 @ 45kg\nBack Extension: 3x15 + 5kg\nSandbag Carry: 3x25m @ 20kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nEMOM 10 min:\nOdd min — Wall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\nEven min — Burpees: 6 BW\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-04-15': { type: 'run', title: 'Zone 2 Run + Burden Run', badge: '60-70 min', content: '🎯 สร้าง aerobic base — หัวใจแข็งแรงขึ้น pace จะเร็วขึ้นเอง\n\nZone 2 Run: 35 min\nSkiErg: 3x500m @ race pace\nBurden Run practice: 20kg backpack x 200m x 3' },
  '2026-04-16': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x10 @ 110kg\nDB Romanian Deadlift: 4x10 @ 16kg/hand\nWeighted Step Up: 4x10/leg @ 12kg/hand\nLeg Curl: 3x12 @ 40kg\nLunges: 40m @ 30kg → Run 100m (cramp prevention drill)\n\nLactic Legs Combo: 1X (15 Squat + 20m Lunge) @ 20kg sandbag' },
  '2026-04-17': { type: 'run', title: 'Running Intervals + Push', badge: '50-60 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\nWarm-up: 10 min\nIntervals: 7x 400m @ race pace\nTreadmill: 10.0-10.5 km/h\nRest: 90s\nCool-down: 10 min\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x10 @ 45kg\nWall Balls: 3x20 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-04-18': { type: 'strength', title: 'Strength - Mixed + Crucible (AM/PM)', badge: 'AM 50-60 / PM 30 min', content: '🎯 ฝึก stations จริง — ร่างกายชินกับอุปกรณ์แข่ง\n\nAM — Sled (คนน้อย setup สะดวก)\n⏱ พัก: Sled 120s\n\nSled Push: 6x25m @ 175kg\nSled Pull: 6x25m @ 120kg\nRope Lat Pulldown (Hoist sub): 4x10 @ 55kg\nSled Pull (Haul sub): 3x50m @ 120kg\n\nPM — Carry + Bodyweight\n⏱ พัก: Carry 90s / อื่นๆ 60s\n\nFarmer Carry: 4x50m @ 26kg/hand\n\nEMOM 12 min (rotate):\nMin 1 — Wall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\nMin 2 — Burpees: 8 BW\nMin 3 — Run: 100m\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW\n\nTransition Drill:\nRun 400m → Farmer Carry 50m → Run 400m' },
  '2026-04-20': { type: 'run', title: 'Long Run', badge: '50 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 50 min\nPace: 8:30-9:00 /km\nTreadmill: 6.5-7.0 km/h\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nBuilding endurance!' },
  '2026-04-19': { type: 'race', title: 'Crucible Tour', badge: 'Event', content: '🎯 ลองเล่น Crucible stations — เรียนรู้อุปกรณ์จริง\n\nCrucible Tour\nลองเล่น stations นิดหน่อย\nดูอุปกรณ์จริง จำ feel ไว้เทียบกับที่ซ้อม\n\nสังเกต:\n- StrengthErg เทียบ Seated Row ยังไง\n- Deadball เทียบ Sandbag Carry ยังไง\n- Cruciball Chamber เป็นยังไง\n- พื้น carpet friction เป็นยังไง' },

  // Week 5: Build Phase
  '2026-04-21': { type: 'strength', title: 'Strength - Pull', badge: '60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 5x5 @ 50kg 🔥\nLat Pulldown: 5x5 @ 55kg\nBack Extension: 3x12 + 10kg\nSled Pull: 3x40m @ 120kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nEMOM 10 min:\nOdd min — Wall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\nEven min — Run: 100m\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-04-22': { type: 'run', title: 'Tempo Run + Upper', badge: '60-70 min', content: '🎯 threshold + strength — เพิ่มความเร็ววิ่งและแรงแขน\n\n⏱ พัก: ระหว่าง strength set 60s\n\nTempo Run: 25 min @ 7:00-7:30/km\nTreadmill: 8.0-8.5 km/h\nHR: 155-165 bpm\n\nUpper:\nChest Press: 3x12 @ 45kg\nFace Pull: 3x15 @ 15kg\nRope Tricep Pushdown: 3x12 @ 22.5kg\nCable Curl: 3x12 @ 15kg' },
  '2026-04-23': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x10 @ 115kg\nDB Romanian Deadlift: 4x10 @ 16kg/hand\nWeighted Step Up: 4x10/leg @ 12kg/hand\nLeg Curl: 3x12 @ 45kg\nLunges: 50m @ 30kg → Run 200m (cramp drill)\nBurpee to Plate: 40 BW\n\nLactic Legs Combo: 1X (18 Squat + 20m Lunge) @ 20kg sandbag' },
  '2026-04-24': { type: 'run', title: 'Running Intervals + Push', badge: '50-60 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\nWarm-up: 10 min\nIntervals: 8x 400m @ race pace\nTreadmill: 10.0-10.5 km/h\nRest: 75s (decreasing)\nCool-down: 10 min\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x12 @ 45kg\nWall Balls: 3x25 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-04-25': { type: 'strength', title: 'Strength - Mixed + Crucible (AM/PM)', badge: 'AM 50-60 / PM 30 min', content: '🎯 ฝึก stations จริง — ร่างกายชินกับอุปกรณ์แข่ง\n\nAM — Sled (คนน้อย setup สะดวก)\n⏱ พัก: Sled 120s\n\nSled Push: 60m @ 175kg\nSled Pull: 60m @ 120kg\n(smooth surface overload — race 152/103kg)\nSled Pull: 4x40m @ 120kg\n\nPM — Carry + Bodyweight\n⏱ พัก: Carry 90s / อื่นๆ 60s\n\nFarmer Carry: 4x50m @ 28kg/hand\nBurden Run: 20kg x 400m (full distance!)\n\nEMOM 12 min (rotate):\nMin 1 — Wall Balls: 15 @ 9kg (alt: 6kg / DB Thruster)\nMin 2 — Burpees: 8 BW\nMin 3 — Run: 100m\n\nCore:\nPallof Press: 3x12/side @ 10kg\n\nTransition Drill:\nRun 400m → Farmer Carry 50m → Run 400m' },
  '2026-04-27': { type: 'run', title: 'Long Run', badge: '55 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 55 min\nPace: 8:30-9:00 /km\nTreadmill: 6.5-7.0 km/h\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง' },
  '2026-04-26': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Week 6: Race Simulation
  '2026-04-28': { type: 'strength', title: 'Strength - Pull (DELOAD)', badge: '60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 3x8 @ 40kg 🔥\nLat Pulldown: 3x8 @ 45kg\nBack Extension: 2x10 + 10kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nFinisher:\nWall Balls: 3x25 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-04-29': { type: 'run', title: 'Zone 2 Run', badge: '45-55 min', content: '🎯 สร้าง aerobic base — หัวใจแข็งแรงขึ้น pace จะเร็วขึ้นเอง\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\nZone 2 Run: 45-55 min\nSkiErg: 3x500m @ race pace\nEasy day before simulation' },
  '2026-04-30': { type: 'mixed', title: 'Crucible Simulation 50%', badge: '60-75 min', content: '🎯 จำลอง Crucible — ฝึก pacing ทุก station ก่อนแข่งจริง\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\n50% Simulation:\nRun 300m → Row 20cal → Ski 20cal\nSeated Row heavy: 4x8 @ 50kg (Erg sub)\nSandbag Carry: 3x25m @ 20kg\nRope Lat Pulldown: 4x10 @ 50kg (Hoist sub)\nBurpee to Plate: 20 BW → Burden Run 200m\nLactic Legs: 1X (20 squat + 20m lunge) @ 25kg\nSled Push: 3x25m @ 175kg\nSled Pull: 3x25m @ 120kg' },

  // ===== MAY 2026 =====
  '2026-05-01': { type: 'run', title: 'Recovery Run', badge: '30-40 min', content: '🎯 ฟื้นตัว active — เลือดไหลเวียนช่วยซ่อมกล้ามเนื้อ\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\nEasy Zone 2: 30-40 min\nRecovering from simulation' },
  '2026-05-02': { type: 'race', title: '🔥 5K Tough Mudder', badge: 'Race', content: '🎯 วันแข่ง — สนุกกับมัน!\n\n5K Tough Mudder\n\nStrategy:\n- Pace ตัวเอง ไม่ต้อง all out\n- ระวังบาดเจ็บ — Crucible อีก 3 สัปดาห์\n- ใช้เป็น cardio + obstacle practice\n- สนุกไปเลย!' },
  '2026-05-04': { type: 'run', title: 'Long Run', badge: '60 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 60 min\nPace: 8:30-9:00 /km\nTreadmill: 6.5-7.0 km/h\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง' },
  '2026-05-03': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Week 7: Peak Week
  '2026-05-05': { type: 'strength', title: 'Strength - Pull PEAK', badge: '60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 5x4 @ 55kg 🔥 PEAK\nLat Pulldown: 5x4 @ 60kg\nBack Extension: 3x10 + 15kg\nHeavy but controlled\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nFinisher:\nWall Balls: 3x20 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-05-06': { type: 'run', title: 'Tempo Run + Upper', badge: '60-70 min', content: '🎯 threshold + strength — เพิ่มความเร็ววิ่งและแรงแขน\n\n⏱ พัก: ระหว่าง strength set 60s\n\nTempo Run: 25 min @ 6:50-7:15/km\nTreadmill: 8.5-9.0 km/h\nHR: 155-165 bpm\n\nUpper:\nChest Press: 4x8 @ 50kg\nRope Tricep Pushdown: 3x12 @ 22.5kg\nCable Curl: 3x12 @ 17.5kg' },
  '2026-05-07': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x10 @ 115kg\nDB Romanian Deadlift: 4x10 @ 18kg/hand\nWeighted Step Up: 4x8/leg @ 14kg/hand\nLeg Curl: 3x12 @ 45kg\n\nLunges: 60m @ 30kg → Run 400m (cramp drill)\n\nLactic Legs Combo: 1X (20 Squat + 20m Lunge) @ 25kg' },
  '2026-05-08': { type: 'run', title: 'Intervals - Sharpening + Push', badge: '45-50 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\nWarm-up: 10 min\nIntervals: 6x 400m @ slightly faster than race pace\nRest: 90s\nStay sharp!\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x8 @ 50kg\nEMOM 10 min:\nOdd min — Wall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\nEven min — Burpees: 6 BW\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-05-09': { type: 'mixed', title: 'Crucible Simulation 80%', badge: '75-90 min', content: '🎯 จำลอง Crucible — ฝึก pacing ทุก station ก่อนแข่งจริง\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\n80% Full Simulation:\nRun 500m → Row 35cal → Ski 35cal\nSeated Row heavy: 4x6 @ 55kg (Erg sub)\nSandbag Carry: 4x25m @ 20kg\nRope Lat Pulldown: 4x8 @ 55kg (Hoist sub)\nBurpee to Plate: 32 BW → Burden Run 350m\nLactic Legs: 1X (20 squat + 20m lunge) @ 30kg (overload — แข่ง 25kg)\nSled Push: 4x25m @ 175kg\nSled Pull: 4x30m @ 120kg' },
  '2026-05-11': { type: 'run', title: 'Easy Run', badge: '30-40 min', content: '🎯 ฟื้นตัว active — เลือดไหลเวียนช่วยซ่อมกล้ามเนื้อ\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\nRecovery run after simulation\nZone 2: 30-40 min' },
  '2026-05-10': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Week 8: Taper
  '2026-05-12': { type: 'strength', title: 'Light Strength - Pull', badge: '45-50 min', content: '🎯 รักษา strength ช่วง taper — ไม่หนักเกินจนล้า\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 3x8 @ 40kg (light!)\nLat Pulldown: 3x8 @ 45kg\nBack Extension: 2x10 BW\nStay loose, don\'t push\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nFinisher:\nWall Balls: 2x15 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-05-13': { type: 'run', title: 'Easy Run', badge: '30 min', content: '🎯 ฟื้นตัว active — เลือดไหลเวียนช่วยซ่อมกล้ามเนื้อ\n\nZone 2: 30 min\nLegs fresh' },
  '2026-05-14': { type: 'strength', title: 'Light Strength - Push', badge: '45-50 min', content: '🎯 รักษา strength ช่วง taper — ไม่หนักเกินจนล้า\n\n⏱ พัก: Compound 90s / Isolation 60s\n\nChest Press: 3x8 @ 40kg\nWeighted Step Up: 3x8/leg @ 10kg/hand\nMobility work\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-05-15': { type: 'run', title: 'Short Intervals', badge: '35-40 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\nWarm-up: 10 min\nIntervals: 4x 200m @ race pace\nRest: 90s\nStay sharp but fresh!' },
  '2026-05-16': { type: 'recovery', title: 'Mobility & Activation', badge: '30 min', content: '🎯 mobility — ร่างกายยืดหยุ่น ลดความเสี่ยงบาดเจ็บ\n\nFoam Roll all major muscles\nDynamic Stretch\nLight activation: Band walks, Glute bridges\nVisualize race!' },
  '2026-05-18': { type: 'run', title: 'Shakeout Run', badge: '20 min', content: '🎯 ฟื้นตัว active — เลือดไหลเวียนช่วยซ่อมกล้ามเนื้อ\n\nEasy 20 min jog\nStrides: 4x 50m\nStretch' },
  '2026-05-17': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี\nPrepare gear, hydrate' },

  // Race Week - Crucible
  '2026-05-19': { type: 'recovery', title: 'Rest + Mobility', badge: '20-30 min', content: '🎯 mobility — ร่างกายยืดหยุ่น ลดความเสี่ยงบาดเจ็บ\n\nLight walk 15-20 min\nMobility work\nHydrate well!' },
  '2026-05-20': { type: 'run', title: 'Light Shakeout', badge: '15-20 min', content: '🎯 ฟื้นตัว active — เลือดไหลเวียนช่วยซ่อมกล้ามเนื้อ\n\nVery easy 15 min\nStrides: 3x 50m\nActivation exercises' },
  '2026-05-21': { type: 'rest', title: 'REST', badge: 'Pre-race', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nComplete rest\nPrepare nutrition\nPack race bag\nSleep early!' },
  '2026-05-22': { type: 'rest', title: 'REST + Prep', badge: 'Race Eve', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nComplete rest\nCarb load dinner\nVisualize race strategy\nSleep 8+ hours' },
  '2026-05-23': { type: 'race', title: '🔥 Crucible Race', badge: "Men's Silver", content: '🎯 วันแข่ง — ใช้ทุกอย่างที่ซ้อมมา ไปเต็มที่!\n\nCRUCIBLE FITNESS GAMES\nBRAVO BKK\n\n12 stations, 4 zones:\nZone 1 FIRE: Run 600m, Row 40cal, Ski 40cal\nZone 2 FORCE: Strength Erg, Deadball 50m, Sandbag Hoist 40m\nZone 3 FLOW: Burpee to Plate 40, Burden Run 400m, Cruciball 25\nZone 4 FORGE: Lactic Legs, Sled 60m, Cruci-haul 150m\n\nDamper: 4 on Row/Ski\n\nอุปกรณ์ที่ซ้อมแทน:\nStrength Erg → Seated Row heavy\nDeadball → Sandbag Carry\nSandbag Hoist → Rope Lat Pulldown\nCruci-haul → Heavy Sled Pull' },
  '2026-05-24': { type: 'rest', title: 'REST', badge: 'Recovery', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nComplete rest after Crucible\nHydrate, eat well, celebrate! 🎉' },
  '2026-05-25': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Post-Crucible Recovery + Hyrox Focus
  '2026-05-26': { type: 'recovery', title: 'Recovery Walk + Mobility', badge: '30-40 min', content: '🎯 mobility — ร่างกายยืดหยุ่น ลดความเสี่ยงบาดเจ็บ\n\nWalk 20-30 min\nFoam Roll full body\nStretch 15 min' },
  '2026-05-27': { type: 'run', title: 'Easy Zone 2', badge: '30 min', content: '🎯 สร้าง aerobic base — หัวใจแข็งแรงขึ้น pace จะเร็วขึ้นเอง\n\nZone 2: 30 min\nSkiErg: 3x500m @ race pace\nIf legs sore → just walk' },
  '2026-05-28': { type: 'strength', title: 'Light Upper', badge: '45-50 min', content: '🎯 รักษา strength ช่วง taper — ไม่หนักเกินจนล้า\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nLight weights\nSeated Row: 3x10 @ 35kg\nLat Pulldown: 3x10 @ 40kg\nChest Press: 3x10 @ 40kg\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-05-29': { type: 'run', title: 'Zone 2 Run', badge: '35-40 min', content: '🎯 สร้าง aerobic base — หัวใจแข็งแรงขึ้น pace จะเร็วขึ้นเอง\n\nZone 2: 35-40 min\nSkiErg: 3x500m @ race pace\nEasing back in' },
  '2026-05-30': { type: 'strength', title: 'Light Lower', badge: '45-50 min', content: '🎯 รักษา strength ช่วง taper — ไม่หนักเกินจนล้า\n\n⏱ พัก: Compound 90s / Isolation 60s\n\nLeg Press: 3x10 @ 100kg\nWeighted Step Up: 3x10/leg @ 10kg/hand\nLeg Curl: 3x10 @ 40kg\nCalf Raise: 3x15 @ 60kg\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-06-01': { type: 'run', title: 'Long Run', badge: '65 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 65 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nRebuilding base' },

  // ===== JUNE 2026 =====
  // Hyrox Focus - Build Phase
  '2026-05-31': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },
  '2026-06-02': { type: 'strength', title: 'Strength - Pull', badge: 'AM Run + 60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nAM — Zone 2 Run: 30 min @ 6.5 km/h\n\nPM — BACK TO HYROX FOCUS!\nSeated Row: 4x10 @ 50kg 🔥\nLat Pulldown: 4x10 @ 55kg\nBack Extension: 3x12 + 15kg\nSled Pull: 5x30m @ 120kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nEMOM 10 min:\nOdd min — Wall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\nEven min — Burpees: 6 BW\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-06-03': { type: 'run', title: 'Zone 2 + SkiErg', badge: '60-70 min', content: '🎯 cardio + strength รวม — ประหยัดเวลา ได้ทั้งวิ่งและเวท\n\nZone 2 Run: 40 min\nSkiErg: 3x 500m @ race pace' },
  '2026-06-04': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x8 @ 125kg\nDB Romanian Deadlift: 4x10 @ 20kg/hand\nWeighted Step Up: 4x10/leg @ 14kg/hand\nLeg Curl: 3x15 @ 45kg\nLunges: 70m @ 30kg → Run 400m (cramp drill)\n\nLactic Legs Combo: 1X (20 Squat + 20m Lunge) @ 30kg sandbag (overload — แข่ง 25kg)' },
  '2026-06-05': { type: 'run', title: 'Intervals + Push', badge: '50-60 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\nWarm-up: 10 min\n8x 400m @ sub-2 target pace (< 7:30/km)\nTreadmill: 10.5-11.0 km/h\nRest: 75s\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x10 @ 50kg\nWall Balls: 50 unbroken @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nEMOM 10 min:\nOdd min — Run: 100m\nEven min — Wall Balls: 10 @ 9kg (alt: 6kg / DB Thruster)\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-06-06': { type: 'strength', title: 'Hyrox Simulation Partial', badge: '60-75 min', content: '🎯 จำลองแข่ง — ฝึก pacing, transitions, nutrition strategy\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\nHyrox Partial Simulation:\nRun 1km → SkiErg: 1000m\nRun 1km → Sled Push: 3x30m @ 175kg\nRun 1km → Sled Pull: 3x30m @ 120kg\nRun 1km → Row: 1000m\n\nWall Balls: 3x25 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg (finisher)\nFocus on transitions!\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW\n\nTransition Drill:\nRun 400m → Farmer Carry 100m → Run 400m' },
  '2026-06-08': { type: 'run', title: 'Long Run', badge: '70 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 70 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nBuilding for Hyrox distance' },
  '2026-06-07': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Week continues...
  '2026-06-09': { type: 'strength', title: 'Strength - Pull', badge: 'AM Run + 60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nAM — Zone 2 Run: 30 min @ 6.5 km/h\n\nPM:\nSeated Row: 5x5 @ 60kg 🔥\nLat Pulldown: 5x5 @ 65kg\nBack Extension: 3x15 + 15kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-06-10': { type: 'run', title: 'Tempo Run + Upper', badge: '60-70 min', content: '🎯 threshold + strength — เพิ่มความเร็ววิ่งและแรงแขน\n\n⏱ พัก: ระหว่าง strength set 60s\n\nTempo Run: 30 min @ 6:40-7:00/km\nTreadmill: 8.5-9.0 km/h\nHR: 155-165 bpm\n\nUpper:\nFace Pull: 3x15 @ 15kg\nRope Tricep Pushdown: 3x12 @ 25kg\nCable Curl: 3x12 @ 17.5kg' },
  '2026-06-11': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x8 @ 125kg\nDB Romanian Deadlift: 4x10 @ 20kg/hand\nWeighted Step Up: 4x10/leg @ 16kg/hand\nLunges: 80m @ 30kg → Run 600m (cramp drill)\n\nLactic Legs Combo: 2X (20 Squat + 20m Lunge) @ 30kg sandbag' },
  '2026-06-12': { type: 'run', title: 'Intervals + Burpees + Push', badge: '55-65 min', content: '🎯 anti-cramp drill — ฝึกร่างกายไม่ cramp หลัง station\n\nWarm-up: 10 min\n6x (400m + 10 burpees)\nRest: 90s\nAnti-cramp specific!\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x12 @ 50kg\nEMOM 10 min:\nOdd min — Wall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\nEven min — Lunges: 20m @ 30kg\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-06-13': { type: 'strength', title: 'Hyrox Stations (AM/PM)', badge: 'AM 45-50 / PM 30 min', content: '🎯 ฝึก Hyrox stations เต็มน้ำหนัก — จับเวลาแต่ละ station\n\nAM — Sled (คนน้อย setup สะดวก)\n⏱ พัก: Sled 120s\n\nSled Push: 5x30m @ 175kg\nSled Pull: 5x30m @ 120kg\n\nPM — Carry + Wall Balls + Core\n⏱ พัก: Carry 90s / อื่นๆ 60s\n\nFarmer Carry: 5x 200m @ 32kg/hand\n⏱ พัก: อื่นๆ 60s\n\nWall Balls: 75 total @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-06-15': { type: 'run', title: 'Long Run', badge: '75 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 75 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nApproaching race distance!' },
  '2026-06-14': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Continue building...
  '2026-06-16': { type: 'strength', title: 'Strength - Pull', badge: 'AM Run + 60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nAM — Zone 2 Run: 30 min @ 7.0 km/h\n\nPM:\nSeated Row: 4x10 @ 55kg 🔥 MILESTONE!\nLat Pulldown: 4x10 @ 60kg\nBack Extension: 3x12 + 20kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-06-17': { type: 'run', title: 'Zone 2 + Row', badge: '60-70 min', content: '🎯 cardio + strength รวม — ประหยัดเวลา ได้ทั้งวิ่งและเวท\n\nZone 2 Run: 40 min\nRow: 3x 1000m @ race pace' },
  '2026-06-18': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x8 @ 135kg\nDB Romanian Deadlift: 4x10 @ 20kg/hand\nWeighted Step Up: 4x10/leg @ 16kg/hand\nLeg Curl: 4x10 @ 50kg\nLunges: 90m @ 30kg → Run 800m (cramp drill)\n\nLactic Legs Combo: 2X (20 Squat + 20m Lunge) @ 30kg sandbag' },
  '2026-06-19': { type: 'run', title: 'Intervals + Push', badge: '55-65 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\nWarm-up: 10 min\n10x 400m @ sub-2 pace\nTreadmill: 10.5-11.0 km/h\nRest: 60s (race simulation!)\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x10 @ 55kg\nWall Balls: 50 unbroken @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nEMOM 12 min (rotate):\nMin 1 — Wall Balls: 15 @ 9kg (alt: 6kg / DB Thruster)\nMin 2 — Burpees: 8 BW\nMin 3 — Run: 150m\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-06-20': { type: 'strength', title: 'Hyrox Simulation 50%', badge: '75-90 min', content: '🎯 จำลองแข่ง — ฝึก pacing, transitions, nutrition strategy\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\n50% Hyrox Simulation:\nRun 1km → SkiErg: 500m\nRun 1km → Sled Push: 2x25m @ 175kg\nRun 1km → Burpees: 40 BW\nRun 1km → Row: 500m\n\nRun 1km → Farmer Carry: 100m @ 24kg/hand\nRun 1km → Lunges: 50m @ 30kg\nRun 1km → Wall Balls: 50 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nPractice pacing — ห้าม blow up!\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-06-22': { type: 'run', title: 'Long Run', badge: '80 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 80 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nFull Hyrox run distance!' },
  '2026-06-21': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Peak weeks for Hyrox
  '2026-06-23': { type: 'strength', title: 'Strength - Pull', badge: 'AM Run + 60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nAM — Zone 2 Run: 30 min @ 7.0 km/h\n\nPM:\nSeated Row: 5x4 @ 65kg 🔥\nLat Pulldown: 5x4 @ 70kg\nBack Extension: 3x12 + 20kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-06-24': { type: 'run', title: 'Zone 2 + SkiErg', badge: '60-70 min', content: '🎯 cardio + strength รวม — ประหยัดเวลา ได้ทั้งวิ่งและเวท\n\nZone 2 Run: 45 min\nSkiErg: 1000m time trial' },
  '2026-06-25': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x8 @ 135kg\nDB Romanian Deadlift: 4x10 @ 20kg/hand\nWeighted Step Up: 4x8/leg @ 18kg/hand MILESTONE!\nLeg Curl: 3x12 @ 50kg\nLunges: 100m @ 30kg → Run 800m (cramp drill)\n\nLactic Legs Combo: 2X (20 Squat + 20m Lunge) @ 30kg sandbag' },
  '2026-06-26': { type: 'run', title: 'Intervals + Lunges + Push', badge: '55-65 min', content: '🎯 anti-cramp drill — ฝึกร่างกายไม่ cramp หลัง station\n\n6x (400m + Lunges 50m @ 30kg)\nAnti-cramp drill\nRest: 90s\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x10 @ 55kg\nWall Balls: 100 total @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nEMOM 12 min (rotate):\nMin 1 — Run: 200m\nMin 2 — Wall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\nMin 3 — Burpees: 8 BW\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-06-27': { type: 'strength', title: 'Hyrox Stations DELOAD (AM/PM)', badge: 'AM 35-40 / PM 25 min', content: '🎯 ฝึก Hyrox stations เต็มน้ำหนัก — จับเวลาแต่ละ station\n\nAM — Sled (คนน้อย setup สะดวก)\n⏱ พัก: Sled 120s\n\nFull weight all stations:\nSled Push: 3x30m @ 175kg\nSled Pull: 3x30m @ 120kg\n\nPM — Carry + Wall Balls + Bodyweight\n⏱ พัก: Carry 90s / อื่นๆ 60s\n\nFarmer Carry: 2x200m @ 32kg/hand\n\nTransition Drill:\nRun 400m → Farmer Carry 100m → Run 400m\nRun 1km → Lunges: 100m @ 30kg → Run 1km (anti-cramp drill)\n⏱ พัก: อื่นๆ 60s\n\nWall Balls: 2x25 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\nBurpees: 2x20 BW\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-06-29': { type: 'run', title: 'Long Run', badge: '85 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 85 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nMental prep!' },
  '2026-06-28': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // ===== JULY 2026 =====
  '2026-07-01': { type: 'strength', title: 'Strength - Pull', badge: 'AM Run + 60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nAM — Zone 2 Run: 35 min @ 7.0 km/h\n\nPM:\nSeated Row: 4x8 @ 60kg 🔥\nLat Pulldown: 4x8 @ 60kg TARGET!\nBack Extension: 3x10 + 25kg TARGET!\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-07-02': { type: 'run', title: 'Zone 2 + Row', badge: '60-70 min', content: '🎯 cardio + strength รวม — ประหยัดเวลา ได้ทั้งวิ่งและเวท\n\nZone 2 Run: 45 min\nRow: 1000m time trial' },
  '2026-07-03': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x6 @ 145kg\nDB Romanian Deadlift: 4x10 @ 22kg/hand\nWeighted Step Up: 4x8/leg @ 18kg/hand\nLunges: 100m @ 30kg → Run 1km (cramp drill)\n\nLactic Legs Combo: 3X (20 Squat + 20m Lunge) @ 30kg sandbag' },
  '2026-07-04': { type: 'run', title: 'Intervals + Push', badge: '55-65 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\nWarm-up: 10 min\n8x 800m @ race pace\nTreadmill: 10.5-11.0 km/h\nRest: 90s\nBig session!\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x8 @ 60kg TARGET!\nWall Balls: 75 unbroken @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nEMOM 12 min (rotate):\nMin 1 — Wall Balls: 15 @ 9kg (alt: 6kg / DB Thruster)\nMin 2 — Lunges: 25m @ 30kg\nMin 3 — Run: 200m\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-07-07': { type: 'strength', title: 'Hyrox Simulation 75%', badge: '90-105 min', content: '🎯 จำลองแข่ง — ฝึก pacing, transitions, nutrition strategy\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\n75% Hyrox Simulation:\nRun 1km → SkiErg: 750m\nRun 1km → Sled Push: 3x25m @ 175kg\nRun 1km → Sled Pull: 3x25m @ 120kg\nRun 1km → Burpees: 60 BW\nRun 1km → Row: 750m\nRun 1km → Farmer Carry: 150m @ 28kg/hand\n\nKey focus:\n- Transition speed\n- Burpee pacing (ไม่เร็วเกิน set แรก)\n- Lunges ระวัง cramp\n- Electrolytes ทุก 2 stations\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-07-06': { type: 'run', title: 'Long Run', badge: '90 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 90 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nMaintain endurance' },
  '2026-07-05': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Continue July
  '2026-07-08': { type: 'strength', title: 'Strength - Pull PEAK', badge: 'AM Run + 60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nAM — Zone 2 Run: 35 min @ 7.0 km/h\n\nPM:\nSeated Row: 5x3 @ 65kg 🔥\nLat Pulldown: 5x3 @ 70kg\nNearing targets!\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-07-09': { type: 'run', title: 'Tempo Run + Upper', badge: '60-70 min', content: '🎯 threshold + strength — เพิ่มความเร็ววิ่งและแรงแขน\n\n⏱ พัก: ระหว่าง strength set 60s\n\nTempo Run: 30 min @ 6:30-7:00/km\nTreadmill: 9.0-9.5 km/h\nHR: 160-170 bpm\n\nUpper:\nChest Press: 3x10 @ 55kg\nFace Pull: 3x15 @ 15kg\nRope Tricep Pushdown: 3x12 @ 25kg\nCable Curl: 3x12 @ 17.5kg' },
  '2026-07-10': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x6 @ 145kg\nDB Romanian Deadlift: 4x10 @ 22kg/hand\nWeighted Step Up: 4x6/leg @ 20kg/hand\nLeg Curl: 3x12 @ 50kg\n\nLactic Legs Combo: 3X (20 Squat + 20m Lunge) @ 30kg sandbag' },
  '2026-07-11': { type: 'run', title: 'Race Pace Run + Push', badge: '50-60 min', content: '🎯 ฝึก race pace — จำร่างกายให้ชินกับความเร็ววันแข่ง\n\n40 min @ sub-7:30/km pace\nTreadmill: 10.0 km/h\nPractice race running\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x8 @ 60kg\nWall Balls: 100 total @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg — sets of 20-25; จับเวลา; ฝึก pacing\n\nEMOM 10 min:\nOdd min — Burpees: 10 BW\nEven min — Run: 200m\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-07-13': { type: 'mixed', title: 'Hyrox Full Simulation', badge: '120-150 min', content: '🎯 จำลองแข่ง — ฝึก pacing, transitions, nutrition strategy\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\nFULL HYROX SIMULATION!\n\nRun 1km → SkiErg: 1000m\nRun 1km → Sled Push: 4x25m @ 175kg\nRun 1km → Sled Pull: 4x25m @ 120kg\nRun 1km → Burpees: 80 BW\nRun 1km → Row: 1000m\nRun 1km → Farmer Carry: 200m @ 32kg/hand\nRun 1km → Lunges: 100m @ 30kg\nRun 1km → Wall Balls: 100 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nTarget: Under 2:15\n\nStrategy:\n- Electrolytes ทุก 2 stations\n- Burpees: sets of 10, pace!\n- Lunges: sodium shot ก่อน\n- Lap 8: ใจสู้ ไม่ cramp!' },
  '2026-07-12': { type: 'rest', title: 'REST', badge: 'Recovery', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\nFull rest after simulation\nAssess performance' },
  '2026-07-14': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // July - Recovery from simulation, maintain
  '2026-07-15': { type: 'recovery', title: 'Recovery + Mobility', badge: '30-40 min', content: '🎯 mobility — ร่างกายยืดหยุ่น ลดความเสี่ยงบาดเจ็บ\n\nWalk 20-30 min\nFoam Roll\nStretch' },
  '2026-07-16': { type: 'run', title: 'Easy Zone 2', badge: '35-40 min', content: '🎯 สร้าง aerobic base — หัวใจแข็งแรงขึ้น pace จะเร็วขึ้นเอง\n\nZone 2: 35-40 min\nSkiErg: 3x500m @ race pace\nRecovery run' },
  '2026-07-17': { type: 'strength', title: 'Strength - Pull Maintain', badge: '50-60 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 4x8 @ 55kg\nLat Pulldown: 4x8 @ 60kg\nBack Extension: 3x10 + 20kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nCore:\nHanging Knee Raise: 3x10 BW\n\nTransition Drill:\nRun 400m → Wall Balls 25 @ 9kg (alt: 6kg / DB Thruster) → Run 400m' },
  '2026-07-18': { type: 'run', title: 'Intervals Light', badge: '45-50 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\n6x 400m @ race pace\nRest: 90s\nStay sharp' },
  '2026-07-21': { type: 'strength', title: 'Hyrox Stations Light (AM/PM)', badge: 'AM 35-40 / PM 25 min', content: '🎯 activation เบาๆ — เตรียมร่างกายก่อนแข่ง\n\nAM — Sled (คนน้อย setup สะดวก)\n⏱ พัก: Sled 120s\n\nAll stations at 70%:\nSled Push: 3x30m @ 175kg\nSled Pull: 3x30m @ 120kg\n\nPM — Carry + Wall Balls + Bodyweight\n⏱ พัก: Carry 90s / อื่นๆ 60s\n\nFarmer Carry: 3x100m @ 28kg/hand\n⏱ พัก: อื่นๆ 60s\n\nWall Balls: 50 unbroken @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\nBurpees: 3x15 BW\nFocus on form and efficiency\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-07-20': { type: 'run', title: 'Long Run', badge: '90 min', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 90 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nMaintain base' },
  '2026-07-19': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Late July - Final Build
  '2026-07-22': { type: 'strength', title: 'Strength - Pull (DELOAD)', badge: 'AM Run + 60-75 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nAM — Zone 2 Run: 30 min @ 7.0 km/h\n\nPM:\nSeated Row: 3x6 @ 50kg 🔥\nLat Pulldown: 3x6 @ 55kg\nBack Extension: 2x8 + 20kg\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nEMOM 10 min:\nOdd min — Wall Balls: 12 @ 9kg (alt: 6kg / DB Thruster)\nEven min — Burpees: 8 BW\n\nCore:\nPallof Press: 3x12/side @ 10kg\n\nTransition Drill:\nRun 400m → Sled Pull 25m → Run 400m' },
  '2026-07-23': { type: 'run', title: 'Zone 2 + Erg', badge: '60-70 min', content: '🎯 cardio + strength รวม — ประหยัดเวลา ได้ทั้งวิ่งและเวท\n\nZone 2: 40 min\nSkiErg: 1000m\nRow: 1000m' },
  '2026-07-24': { type: 'strength', title: 'Strength - Legs', badge: '60-75 min', content: '🎯 สร้างแรงขา — พื้นฐานสำหรับวิ่ง, Sled Push, Lunges\n\n⏱ พัก: Compound 90s / Explosive 90s / Isolation 60s / Lactic Legs 120s\n\nExplosive Warm-up (ทำตอนสด!):\nBox Jumps: 3x5 BW\nBroad Jumps: 3x5 BW\nLeg Press: 4x8 @ 135kg\nDB Romanian Deadlift: 4x10 @ 22kg/hand\nWeighted Step Up: 4x8/leg @ 20kg/hand\nLeg Curl: 3x12 @ 50kg\nBurpees 50 → Run 1km\nRun 1km → Lunges: 100m @ 30kg → Run 1km (anti-cramp drill)\n\nLactic Legs Combo: 2X (20 Squat + 20m Lunge) @ 30kg sandbag' },
  '2026-07-25': { type: 'run', title: 'Intervals + Push', badge: '55-65 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\n8x 600m @ race pace\nRest: 75s\nBig aerobic session\n\nPush:\n⏱ พัก: 60s\n\nChest Press: 4x8 @ 60kg\nEMOM 12 min (rotate):\nMin 1 — Wall Balls: 15 @ 9kg (alt: 6kg / DB Thruster)\nMin 2 — Lunges: 25m @ 30kg\nMin 3 — Run: 200m\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-07-28': { type: 'strength', title: 'Hyrox Simulation 80%', badge: '100-120 min', content: '🎯 จำลองแข่ง — ฝึก pacing, transitions, nutrition strategy\n\n⏱ พัก: ระหว่าง station 60-90s (จำลองแข่ง)\n\n80% Hyrox Simulation:\n\nRun 1km → SkiErg: 800m\nRun 1km → Sled Push: 4x25m @ 175kg\nRun 1km → Sled Pull: 4x25m @ 120kg\nRun 1km → Burpees: 65 BW\nRun 1km → Row: 800m\nRun 1km → Farmer Carry: 160m @ 32kg/hand\nRun 1km → Lunges: 80m @ 30kg\nRun 1km → Wall Balls: 80 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\n\nTarget: Strong, controlled\nNote weak points for race day\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-07-27': { type: 'run', title: 'Long Run', badge: '60 min (DELOAD)', content: '🎯 สร้างความอดทน — ร่างกายชินกับวิ่งนานเหมือนวันแข่ง\n\nZone 2: 60 min\nTennis Ball Squeeze: 2 ลูก บีบทั้ง 2 มือ 5 min on / 2 min off ตลอดวิ่ง\nDELOAD week — volume ลด 40%' },
  '2026-07-26': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // ===== AUGUST 2026 =====
  // Taper for Hyrox
  '2026-08-01': { type: 'strength', title: 'Strength - Pull Taper', badge: '50-60 min', content: '🎯 สร้างแรงดึง — ช่วย Sled Pull, Row, SkiErg ทำได้เร็วขึ้น\n\n⏱ พัก: Compound 90s / Isolation 60s / Dead Hang 60s\n\nSeated Row: 3x8 @ 55kg\nLat Pulldown: 3x8 @ 60kg\nReducing volume, maintain intensity\nPull-ups: 5x3 BW\nNegative Pull-ups: 3x5 (jump up, 3-5s slow down)\nDead Hang: 3x max BW\n\nCore:\nPallof Press: 3x12/side @ 10kg' },
  '2026-08-07': { type: 'run', title: 'Zone 2 Easy', badge: '35-40 min', content: '🎯 สร้าง aerobic base — หัวใจแข็งแรงขึ้น pace จะเร็วขึ้นเอง\n\nZone 2: 35-40 min\nLegs fresh' },
  '2026-08-03': { type: 'strength', title: 'Light Stations (AM/PM)', badge: 'AM 30 / PM 20 min', content: '🎯 activation เบาๆ — เตรียมร่างกายก่อนแข่ง\n\nAM — Sled (คนน้อย setup สะดวก)\n⏱ พัก: Sled 120s\n\nAll Hyrox stations at 60%:\nSled Push: 2x25m @ 175kg\nSled Pull: 2x25m @ 120kg\n\nPM — Carry + Wall Balls + Bodyweight\n⏱ พัก: Carry 90s / อื่นๆ 60s\n\nFarmer Carry: 2x100m @ 24kg/hand\n⏱ พัก: อื่นๆ 60s\n\nWall Balls: 2x15 @ 9kg (overload — แข่ง 6kg)\nAlt: Wall Ball 6kg / DB Thruster 6-8kg/hand / Goblet Squat+Press 10-12kg\nBurpees: 2x10 BW\nTechnique focus — no fatigue\n\nCore:\nPlank: 3x45s BW + Dead Bug: 3x10/side BW' },
  '2026-08-04': { type: 'run', title: 'Short Intervals', badge: '35-40 min', content: '🎯 เพิ่ม VO2max — วิ่งเร็วขึ้นที่ effort เท่าเดิม\n\n5x 300m @ race pace\nRest: 90s\nSharpening' },
  '2026-08-05': { type: 'strength', title: 'Light Full Body', badge: '40-45 min', content: '🎯 activation เบาๆ — เตรียมร่างกายก่อนแข่ง\n\n⏱ พัก: Compound 90s / Isolation 60s / Lactic Legs 120s\n\nVery light — activation only:\nChest Press: 2x8 @ 35kg\nSeated Row: 2x8 @ 40kg\nWeighted Step Up: 2x8/leg @ 10kg/hand\nFoam Roll + Mobility 15 min\n\nCore:\nHanging Knee Raise: 3x10 BW' },
  '2026-08-06': { type: 'run', title: 'Easy Shakeout', badge: '25-30 min', content: '🎯 ฟื้นตัว active — เลือดไหลเวียนช่วยซ่อมกล้ามเนื้อ\n\nEasy 25 min\nStrides: 4x 50m\nLegs feeling good!' },
  '2026-08-02': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Race Week - Hyrox (assuming mid-August)
  '2026-08-08': { type: 'recovery', title: 'Mobility + Activation', badge: '30 min', content: '🎯 mobility — ร่างกายยืดหยุ่น ลดความเสี่ยงบาดเจ็บ\n\nFoam Roll\nDynamic Stretch\nLight activation\nVisualize race!' },
  '2026-08-10': { type: 'run', title: 'Light Shakeout', badge: '20 min', content: '🎯 ฟื้นตัว active — เลือดไหลเวียนช่วยซ่อมกล้ามเนื้อ\n\nVery easy 15-20 min\nStrides: 3x 50m\nStay loose' },
  '2026-08-09': { type: 'rest', title: 'REST', badge: 'Pre-race', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nComplete rest\nPrepare nutrition\nElectrolytes ready\nPack race bag' },
  '2026-08-11': { type: 'rest', title: 'REST + Prep', badge: 'Race Eve', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nComplete rest\nCarb load dinner\nMagnesium tonight\nVisualize sub-2 race!\nSleep 8+ hours' },
  '2026-08-12': { type: 'race', title: '🏆 HYROX RACE — SUB-2 TARGET', badge: 'SUB-2:00!', content: '🎯 วันแข่ง — ใช้ทุกอย่างที่ซ้อมมา ไปเต็มที่!\n\nHYROX BANGKOK\n\nTARGET: SUB-2:00! 🎯\n\nKey strategy:\n1. Electrolytes every 2-3 stations\n2. Burpees: PACE! Don\'t rush start\n3. Lunges: Controlled, sodium shot ready\n4. Run Lap 8: Stay strong, no cramp!\n5. Wall Balls: Finish STRONG!\n\nYou\'ve done the work. Trust the training! 💪' },
  '2026-08-13': { type: 'rest', title: 'REST', badge: 'Recovery', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nCELEBRATE! 🎉\nRest and recover\nYou did it!' },
  '2026-08-14': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },

  // Post-race recovery
  '2026-08-15': { type: 'recovery', title: 'Recovery Walk', badge: '20-30 min', content: '🎯 ฟื้นตัวเบา — เลือดไหลเวียน ลด soreness\n\nLight walk\nFoam Roll\nStretch\nReflect on race!' },
  '2026-08-16': { type: 'rest', title: 'REST 🛌', badge: '', content: '🎯 ฟื้นตัว — กล้ามเนื้อซ่อมแซมและแข็งแรงขึ้น\n\nวันพัก — นอนให้พอ กินให้ดี' },
};

// Monthly goals
export const monthlyGoals = {
  2: { // March (index 2)
    title: 'Recovery & Base',
    goals: [
      { text: 'ฟื้นตัวหลัง Hyrox (2:28)', done: true },
      { text: 'Seated Row กลับมา 35kg', done: false },
      { text: 'Zone 2 Run 45-60 min สบาย', done: false },
    ],
    keyLifts: { 'Seated Row': '35kg', 'Lat Pulldown': '40kg', 'Chest Press': '40kg', 'Step Up': '10kg/hand' },
  },
  3: { // April
    title: 'Base Building + Crucible Prep',
    goals: [
      { text: 'Seated Row ถึง 45kg', done: false },
      { text: 'Long Run 75-90 min', done: false },
      { text: 'Crucible Simulation 50%', done: false },
      { text: 'Farmer Carry 28kg/hand', done: false },
    ],
    keyLifts: { 'Seated Row': '40→45kg', 'Lat Pulldown': '45→50kg', 'Chest Press': '40→45kg', 'Step Up': '10→12kg/hand' },
  },
  4: { // May
    title: 'Peak + Crucible Race',
    goals: [
      { text: 'Seated Row PEAK 50kg', done: false },
      { text: 'Crucible Simulation 80%', done: false },
      { text: '🔥 Crucible Race 23 พ.ค.', done: false },
      { text: 'Taper week ไม่ push เกิน', done: false },
    ],
    keyLifts: { 'Seated Row': '50kg PEAK', 'Lat Pulldown': '55kg', 'Chest Press': '50kg', 'Step Up': '14kg/hand' },
  },
  5: { // June
    title: 'Hyrox Focus — Build Phase',
    goals: [
      { text: 'Seated Row ถึง 55kg MILESTONE', done: false },
      { text: 'Step Up ถึง 18kg/hand', done: false },
      { text: 'Long Run 90 min (Hyrox distance)', done: false },
      { text: 'Hyrox Simulation 50%', done: false },
      { text: 'Sub-2 pace intervals 10x400m', done: false },
    ],
    keyLifts: { 'Seated Row': '50→55kg', 'Lat Pulldown': '55→60kg', 'Chest Press': '50→55kg', 'Step Up': '14→18kg/hand' },
  },
  6: { // July
    title: 'Peak + Full Simulation',
    goals: [
      { text: 'Seated Row TARGET 60kg', done: false },
      { text: 'Lat Pulldown TARGET 65kg', done: false },
      { text: 'Chest Press TARGET 60kg', done: false },
      { text: 'Step Up 20kg/hand', done: false },
      { text: 'Full Hyrox Simulation < 2:15', done: false },
      { text: 'Wall Balls 100 total @ 9kg — sets of 20-25; จับเวลา; ฝึก pacing', done: false },
    ],
    keyLifts: { 'Seated Row': '60→65kg', 'Lat Pulldown': '65→70kg', 'Chest Press': '60→65kg', 'Step Up': '18→20kg/hand' },
  },
  7: { // August
    title: 'Taper → HYROX SUB-2:00!',
    goals: [
      { text: 'Taper — ลด volume, รักษา intensity', done: false },
      { text: 'Hyrox Simulation 80% สุดท้าย', done: false },
      { text: '🏆 HYROX RACE — SUB-2:00!', done: false },
    ],
    keyLifts: { 'Seated Row': '55kg (taper)', 'Lat Pulldown': '60kg (taper)', 'Chest Press': '35-60kg', 'Step Up': '10kg/hand (taper)' },
  },
};

// Weekly weight progression: key lifts per week (week start date → weights)
export const weeklyProgression = [
  { week: '24-30 มี.ค.', row: 35, lat: 40, chest: 40, step: 10 },
  { week: '31 มี.ค.-6 เม.ย.', row: 35, lat: 40, chest: 40, step: 10 },
  { week: '7-13 เม.ย.', row: null, lat: null, chest: null, step: null, note: 'No Gym Week' },
  { week: '14-20 เม.ย.', row: 40, lat: 45, chest: 45, step: 12 },
  { week: '21-27 เม.ย.', row: 45, lat: 50, chest: 45, step: 12 },
  { week: '28 เม.ย.-4 พ.ค.', row: 45, lat: 50, chest: null, step: null, note: 'Sim week' },
  { week: '5-11 พ.ค.', row: 50, lat: 55, chest: 50, step: 14, note: 'PEAK' },
  { week: '12-18 พ.ค.', row: 40, lat: 45, chest: 40, step: 10, note: 'Taper' },
  { week: '19-25 พ.ค.', row: null, lat: null, chest: null, step: null, note: 'Crucible Race' },
  { week: '26-31 พ.ค.', row: 35, lat: 40, chest: 40, step: 10, note: 'Recovery' },
  { week: '1-7 มิ.ย.', row: 50, lat: 55, chest: 50, step: 14 },
  { week: '8-14 มิ.ย.', row: 50, lat: 55, chest: 50, step: 16 },
  { week: '15-21 มิ.ย.', row: 55, lat: 60, chest: 55, step: 16, note: 'MILESTONE' },
  { week: '22-28 มิ.ย.', row: 55, lat: 60, chest: 55, step: 18 },
  { week: '29 มิ.ย.-5 ก.ค.', row: 60, lat: 65, chest: 60, step: 18, note: 'TARGET' },
  { week: '6-12 ก.ค.', row: 60, lat: 65, chest: 60, step: 20 },
  { week: '13-19 ก.ค.', row: null, lat: null, chest: null, step: null, note: 'Recovery' },
  { week: '20-26 ก.ค.', row: 55, lat: 60, chest: null, step: null, note: 'Maintain' },
  { week: '27 ก.ค.-2 ส.ค.', row: 60, lat: 65, chest: 60, step: 20, note: 'Final Build' },
  { week: '3-9 ส.ค.', row: 55, lat: 60, chest: 35, step: 10, note: 'Taper' },
  { week: '10-16 ส.ค.', row: null, lat: null, chest: null, step: null, note: 'HYROX RACE!' },
];

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

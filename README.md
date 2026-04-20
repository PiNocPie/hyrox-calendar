# Hyrox Training Calendar

Interactive workout calendar from March 2026 for Hyrox training.

## Race Calendar

| Date | Race | Category | Target |
|------|------|----------|--------|
| 20 Mar 2026 | Hyrox BKK | - | Done 2:28 (cramped at Burpees + Lap 8) |
| 19 Apr 2026 | Crucible Tour | - | Try real equipment |
| 2 May 2026 | 5K Tough Mudder | - | Fun race, don't go all out |
| 23 May 2026 | Crucible BKK | Men's Silver | B Race |
| ~~Aug 2026~~ | ~~Hyrox BKK~~ | - | ~~Sub-2:00~~ SKIPPED — got patch |
| Late 2026 / Early 2027 | **Hyrox Malaysia** | - | **A Race — Sub-2:00! (date TBA)** |

## Athlete Profile (Apr 2026 baselines)

- Zone 2 treadmill pace: 6.5 km/h (HR 150+ at 8 km/h)
- Tempo pace: 8.0-8.5 km/h (couldn't sustain 9.0+ for 25 min)
- Intervals: 6x350m @ 10.5 km/h (target 7x400m)
- Long Run: 45 min baseline (building +5 min/week)
- Pull-ups: 3 reps per set
- Dead Hang: 15-25 sec per set
- Lunges: 40m @ 30kg baseline (building +10m/week to 100m)
- Lactic Legs: 15 squat + 20m lunge baseline (building to 20+20m)
- Wall Balls: 15-10-10 (35 total, target 100 unbroken)
- Front Squat max RM: 80-90kg (replaced with Leg Press in program)

### Gym Equipment Available
- Sled Push/Pull, SkiErg, Row, Farmer Carry, Wall Balls (9kg), Barbell, Squat Rack, Cable machines

### NOT Available (use substitutions)
| Missing | Substitution |
|---------|-------------|
| Strength Erg | Seated Row heavy |
| Deadball | Sandbag Carry |
| ~~Sandbag Hoist~~ | ~~Rope Lat Pulldown~~ (removed — can use bodyweight on race day) |
| Cruci-haul | Heavy Sled Pull |

### Shoes
| Shoe | Use for |
|------|---------|
| Asics Magic Speed 4 | Intervals, Tempo, Simulations, Race day |
| NB Rebel FuelCell | Zone 2, Long Run, Easy Run |
| Adidas Dropset 3 | Strength, Mixed, Sled days |
| Adidas Terrex Agravic | Tough Mudder, Trail, Long Run (incline 3% trail training) |
| On Cloudpulse | Gym (backup) |
| Adidas Evo SL | Casual |

### Key Issues & Fixes
- **Cramping**: Sled Push on high-friction carpet burned legs → cramped at Burpees + Lap 8. Fix: overload training (175/120kg on smooth floor), electrolyte strategy, pacing discipline
- **Sled setup time**: Takes too long to load/unload plates. Previously split AM/PM, now merged into single session after removing redundant exercises
- **Push+Legs too long**: Was 13 exercises (90+ min). Split into Legs day (Wed) + moved Push to Upper day (Mon)
- **4 heavy leg days in a row**: Wed→Thu→Fri→Sat caused Long Run failure. Fixed: REST before Long Run from Apr 14 onwards
- **Tempo too fast**: 9.0-9.5 km/h = VO2max not tempo. Fixed to 8.0-8.5 → 9.0-9.5 progressive

## Weekly Structure (from Apr 14)

| Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|-----|-----|-----|-----|-----|-----|-----|
| Upper (Pull+Push+Core) | Run (Zone 2/Tempo) | Legs | Intervals | Mixed/Sled | REST | Long Run |

## Workout Details

### Upper Day (Mon)
- Seated Row, Lat Pulldown, Back Extension
- Pull-ups 5x3, Negative Pull-ups 3x5, Dead Hang 3x max
- Chest Press, Wall Balls, Core
- 👟 Dropset 3

### Run Day (Tue)
- Zone 2 / Tempo Run / Zone 2 + SkiErg
- 👟 Rebel (Zone 2) / Magic Speed 4 (Tempo)

### Legs Day (Wed)
- Explosive: Box Jumps 3x5, Broad Jumps 3x5
- Leg Press, DB Romanian Deadlift, Weighted Step Up, Leg Curl
- Lunges → Run (progressive 40m→100m)
- Lactic Legs (last — when fatigued)
- 👟 Dropset 3

### Intervals Day (Thu)
- Running intervals only (no strength)
- 👟 Magic Speed 4

### Mixed/Sled Day (Fri)
- Sled Push @ 175kg / Sled Pull @ 120kg (overload — race 152/103kg)
- Farmer Carry, Wall Balls, Burpees, EMOM, Transition Drills
- 👟 Dropset 3

### Long Run (Sun)
- Terrex Agravic + Incline 3% (trail training)
- Tennis Ball Squeeze: 2 balls, 5 min on / 2 min off
- Progressive: 45 min baseline → +5 min/week → 90 min peak

## Crucible Men's Silver Spec

| Zone | Workout | Spec |
|------|---------|------|
| 1 FIRE | Run | 600m |
| 1 FIRE | RowErg | 40 cal |
| 1 FIRE | SkiErg | 40 cal |
| 2 FORCE | StrengthErg | 600kg / 1800kg |
| 2 FORCE | Deadball Power Trip | 20kg x 50m |
| 2 FORCE | Sandbag Hoist | 20kg x 40m |
| 3 FLOW | Burpee to Plate | 40 reps |
| 3 FLOW | Burden Run | 20kg x 400m |
| 3 FLOW | Cruciball Chamber | 25 reps |
| 4 FORGE | Lactic Legs | 1X (20 Squat & 20m Lunge) / 25kg |
| 4 FORGE | Sled Push & Pull | 60m / 60kg |
| 4 FORGE | Cruci-haul V2 | 80kg x 150m |

## Hyrox Race Spec (Men's Open)

- 8 x 1km Run between stations
- Sled Push: 152kg / Sled Pull: 103kg
- Wall Balls: 100 reps @ 6kg (train at 9kg overload)

## Tech Stack

- React 18 + Lucide React (icons)
- LocalStorage (progress save)
- CSS (no external UI library)
- PWA with Service Worker
- Deployed on Vercel: https://hyrox-calendar-self.vercel.app

## Setup

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build
npx vercel --prod --yes  # deploy
```

## Changelog

### 2026-04-17 to 2026-04-20
- **Merged Pull+Push into Upper day** — Mon is now Upper (Pull+Push+Core), Thu is Intervals only
- **Merged all AM/PM days into single sessions** — removed redundant exercises, no more split needed
- **Removed Rope Lat Pulldown (Hoist sub)** — can use bodyweight on race day
- **Removed Sled Pull (Haul sub)** — redundant with regular Sled Pull
- **Front Squat → Leg Press** — user preference, Leg Press progressive 110→145kg
- **Jump Squats → Broad Jumps** — horizontal power for Sled Push
- **KB Swings removed** — streamlined explosive warm-up to Box Jumps + Broad Jumps only
- **Leg Curl added to all Legs days** — hamstring coverage
- **Shoe recommendations** added to all 110 workout days
- **Long Run: Terrex Agravic + Incline 3%** for trail training (Tough Mudder prep)
- **Crucible Tour (Apr 19)** and **5K Tough Mudder (May 2)** added to calendar

### 2026-04-12 to 2026-04-16
- **Tempo Run pacing fixed**: 9.0-9.5 → 8.0-8.5 km/h (progressive to 9.0-9.5 by Jul)
- **Pull-ups 5x3 + Negatives 3x5** added to all Pull/Upper days (baseline: 3 reps)
- **Lunges progressive**: 40m→100m from baseline (was jumping to 100m too fast)
- **Lactic Legs progressive**: 15 squat→20 squat from baseline
- **Long Run progressive**: 45 min→90 min (+5 min/week from baseline)
- **Push+Legs split into Legs day + Intervals+Push** (later merged to Upper)
- **Auto-navigate to current week** on app load (was hardcoded to Mar 24)

### 2026-04-01
- Added **Burpee to Plate** to Crucible-specific workouts
- Fixed **Lactic Legs reps in simulations**
- Fixed **Zone 2 long run pacing** (was 9.0-9.5, corrected to 6.5-7.0)
- Added **Dead Hang** to all Pull days (baseline: 15-25 sec)
- Added **Sled Push/Pull weights** — 175/120kg (smooth surface overload vs race 152/103)
- Added **rest period guidelines** to all workout days
- Added **SkiErg 3x500m** practice on 5 Zone 2 run days
- Added **Wall Balls 50-75 unbroken** on 4 Jun-Jul days
- Added **DB Romanian Deadlift** to Legs days (16→22kg/hand)
- Added **Run→Lunges→Run anti-cramp drills** on 5 Jun-Jul days
- Added **Explosive warm-up** (Box Jumps, Broad Jumps) to Legs days
- Added **Tennis Ball Squeeze** to all Long Runs (grip endurance)

### Notes for Future Sessions
- Crucible is the **B race**, Hyrox Malaysia is the **A race**
- Hyrox BKK (Aug) is **skipped** — already got patch
- Hyrox Malaysia date **TBA** — program currently ends Aug, will extend when date confirmed
- Cruciball Chamber and Deadball Power Trip are NOT specifically trained — accepted trade-off
- Wall Balls train at 9kg overload (race is 6kg for Hyrox)
- Lactic Legs trains at 30kg overload (race is 25kg for Crucible)
- Gym sled surface is smoother than race carpet — hence the overload weights
- User prefers **single session over AM/PM split** — merged everything back
- User prefers **Leg Press over Front Squat**
- Adjust program based on **actual performance**, not theoretical targets
- No Gym week Apr 8-13 (user in China) — only trained Wed Pull-ups

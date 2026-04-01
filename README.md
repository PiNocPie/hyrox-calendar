# Hyrox Training Calendar

Interactive workout calendar from March 2026 to August 2026 for Hyrox training.

## Race Calendar

| Date | Race | Category | Target |
|------|------|----------|--------|
| 20 Mar 2026 | Hyrox BKK | - | Done 2:28 (cramped at Burpees + Lap 8) |
| 23 May 2026 | Crucible BKK | Men's Silver | B Race — Complete |
| Aug 2026 | Hyrox BKK | - | A Race — **Sub-2:00!** |

## Athlete Profile

- Zone 2 treadmill pace: 6.5 km/h (HR 150+ at 8 km/h, real Zone 2 ~6.5)
- Lat Pulldown: 45kg x 7 reps (uses 40kg for 4x10)
- Chest Press machine: 40kg x 7-8 reps
- Cable Curl: 15kg / Cable Lateral Raise: 5kg / Rope Tricep Pushdown: 20kg

### Gym Equipment Available
- Sled Push/Pull, SkiErg, Row, Farmer Carry, Wall Balls (9kg)

### NOT Available (use substitutions)
| Missing | Substitution |
|---------|-------------|
| Strength Erg | Seated Row heavy |
| Deadball | Sandbag Carry |
| Sandbag Hoist | Rope Lat Pulldown |
| Cruci-haul | Heavy Sled Pull |

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

## Features

- Full workout schedule Mar - Aug 2026
- Checkbox to mark workouts complete (saved to localStorage)
- Per-exercise checkboxes with progress bar
- Color-coded by workout type (Strength, Run, Rest, Race, etc.)
- Intensity bar (REST / LIGHT / MODERATE / HARD / HEAVY / MAX)
- Streak counter, weight progression table, monthly goals
- Mobile responsive (week view) + Desktop (calendar view)
- PWA — installable on phone

## Workout Types & Colors

| Type | Color | Description |
|------|-------|-------------|
| `race` | Red | Race day |
| `strength` | Purple | Gym strength |
| `run` | Green | Running |
| `rest` | Gray | Rest day |
| `nogym` | Orange | Home workout |
| `mixed` | Blue | Combined |
| `recovery` | Teal | Mobility/Recovery |

## Tech Stack

- React 18 + Lucide React (icons)
- LocalStorage (progress save)
- CSS (no external UI library)
- PWA with Service Worker
- Deployed on Vercel

## Setup

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build
```

## Customization

Edit `src/workoutData.js`:

```javascript
'2026-08-15': {
  type: 'strength',       // strength, run, rest, race, nogym, mixed, recovery
  title: 'Upper Day',
  badge: '60-75 min',
  content: 'Seated Row: 4x10 @ 50kg\nLat Pulldown: 4x10...'
},
```

## Changelog

### 2026-04-01
- Added **Burpee to Plate** to Crucible-specific workouts (Apr 3, 23, 30 sim, May 9 sim, May 23 race day) — previously just "Burpees"
- Fixed **Lactic Legs reps in simulations**:
  - Apr 30 (Sim 50%): was missing entirely — added `1X (20 squat + 20m lunge) @ 25kg`
  - May 9 (Sim 80%): was `15 squat + 15m lunge` — fixed to `1X (20 squat + 20m lunge) @ 30kg (overload)`
- Fixed **Zone 2 long run pacing** (Apr 20, 27, May 4): treadmill was incorrectly `9.0-9.5 km/h` — corrected to `6.5-7.0 km/h` with pace `8:30-9:00 /km` (based on HR data: 150+ at 8 km/h)
- Added **Sled Push/Pull weights** to all entries — Push @ 175kg, Pull @ 120kg (smooth surface overload vs race 152/103kg). Gym sled is ~10-20kg, gym floor is smoother than race carpet so extra weight compensates. Hyrox cramp issue was partly caused by going too hard on Sled Push on high-friction carpet.

### Notes for Future Sessions
- Crucible is the **B race**, Hyrox is the **A race** — don't over-optimize for Crucible at expense of Hyrox prep
- Crucible simulations keep 1km runs (Hyrox distance) intentionally, even though Crucible runs are 600m
- No Gym week Apr 8-13 is fixed (user away) — bodyweight workouts cover it
- Cruciball Chamber and Deadball Power Trip are NOT specifically trained — accepted trade-off
- Wall Balls train at 9kg overload (race is 6kg for Hyrox)
- Lactic Legs trains at 30kg overload (race is 25kg for Crucible Men's Silver)

# Hyrox Training Calendar 🏋️

Interactive workout calendar from March 2026 to August 2026 for Hyrox training.

## Features

- 📅 Full workout schedule มี.ค. - ส.ค. 2026
- ✅ Checkbox to mark workouts complete (saved to localStorage)
- 🎨 Color-coded by workout type (Strength, Run, Rest, Race, etc.)
- 📱 Mobile responsive
- 🏆 Race countdown: Hyrox → Crucible → Hyrox Sub-2:00!

## Race Calendar

| Date | Race | Target |
|------|------|--------|
| 20 มี.ค. 2026 | Hyrox BKK | ✅ 2:28 Done |
| 23 พ.ค. 2026 | Crucible Men's Silver | Complete |
| ส.ค. 2026 | Hyrox BKK | **Sub-2:00!** |

## Setup & Deploy

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
```

### 4. Deploy to Vercel

#### Option A: Via CLI

```bash
npm install -g vercel
vercel
```

#### Option B: Via GitHub

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Hyrox Training Calendar"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hyrox-calendar.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Click Deploy ✅

## Customization

### Add/Edit Workouts

Edit `src/workoutData.js`:

```javascript
'2026-08-15': { 
  type: 'strength',           // strength, run, rest, race, nogym, mixed, recovery
  title: 'Upper Day 💪',       
  badge: '60-75 min',         
  content: 'Seated Row: 4x10 @ 50kg\nLat Pulldown: 4x10...'
},
```

### Workout Types & Colors

| Type | Color | Description |
|------|-------|-------------|
| `race` | 🔴 Red | Race day |
| `strength` | 🟣 Purple | Gym strength |
| `run` | 🟢 Green | Running |
| `rest` | ⚫ Gray | Rest day |
| `nogym` | 🟠 Orange | Home workout |
| `mixed` | 🔵 Blue | Combined |
| `recovery` | 🩵 Teal | Mobility/Recovery |

## Tech Stack

- React 18
- Lucide React (icons)
- LocalStorage (progress save)
- CSS (no external UI library)

---

💪 Good luck with your Hyrox journey! Sub-2:00 is coming!

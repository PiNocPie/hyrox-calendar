import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Dumbbell, Trophy, Check, Flame } from 'lucide-react';
import { workouts, getWorkoutColor, thaiMonths, thaiDays, thaiDaysShort } from './workoutData';
import './App.css';

// Derive workout intensity from type + content
function getIntensity(workout) {
  if (!workout) return null;
  const { type, content } = workout;
  if (type === 'rest') return { level: 'REST', label: 'พักผ่อน', color: 'var(--type-rest)' };
  if (type === 'recovery') return { level: 'LIGHT', label: 'เบา — ฟื้นตัว', color: 'var(--type-recovery)' };
  if (type === 'race') return { level: 'MAX', label: 'แข่ง — สุดตัว!', color: 'var(--type-race)' };

  const hasSimulation = /simulation|sim/i.test(content);
  const hasPeak = /PEAK|MILESTONE|TARGET/i.test(content);
  const hasLight = /light|easy|recovery|shakeout|activation/i.test(content);
  const hasTaper = /taper|light!/i.test(content);
  const hasInterval = /interval|race pace|sub-2/i.test(content);

  if (hasSimulation) return { level: 'MAX', label: 'หนักมาก — Simulation', color: 'var(--type-race)' };
  if (hasPeak) return { level: 'HEAVY', label: 'หนัก — Peak/Target', color: '#ff9100' };
  if (hasInterval) return { level: 'HARD', label: 'หนัก — Intervals', color: '#ff9100' };
  if (hasLight || hasTaper) return { level: 'LIGHT', label: 'เบา — Recovery', color: 'var(--type-recovery)' };
  if (type === 'nogym') return { level: 'MODERATE', label: 'ปานกลาง — No Gym', color: 'var(--type-nogym)' };
  if (type === 'strength') return { level: 'MODERATE', label: 'ปานกลาง — Strength', color: 'var(--type-strength)' };
  if (type === 'run') return { level: 'MODERATE', label: 'ปานกลาง — Run', color: 'var(--type-run)' };
  if (type === 'mixed') return { level: 'HARD', label: 'หนัก — Mixed', color: 'var(--type-mixed)' };
  return { level: 'MODERATE', label: 'ปานกลาง', color: 'var(--text-secondary)' };
}

// Parse a single line into structured exercise data
function parseExerciseLine(line, index) {
  const trimmed = line.trim();
  if (!trimmed) return { type: 'empty', id: index };

  const isHighlight = trimmed.includes('🔥') || trimmed.includes('PEAK') || trimmed.includes('MILESTONE') || trimmed.includes('TARGET');
  const cleanLine = trimmed.replace(/[🔥💪🏆🛌🏠🎯🎉]/g, '').trim();

  // Pattern: "Exercise Name: SETSxREPS @ WEIGHTkg" (with or without colon)
  const fullPattern = /^(.+?)[:\s]\s*(\d+)x(\d+(?:-\d+)?)\s*@\s*([\d.]+)\s*kg/i;
  const fullMatch = cleanLine.match(fullPattern);
  if (fullMatch) {
    return { type: 'exercise', id: index, name: fullMatch[1].trim(), sets: fullMatch[2], reps: fullMatch[3], weight: fullMatch[4] + 'kg', isHighlight };
  }

  // Pattern: "Exercise Name: SETSxREPS @ WEIGHTkg/hand"
  const perHandPattern = /^(.+?):\s*(\d+)x(\d+(?:m|-\d+)?)\s*@\s*([\d.]+)\s*kg\/hand/i;
  const perHandMatch = cleanLine.match(perHandPattern);
  if (perHandMatch) {
    return { type: 'exercise', id: index, name: perHandMatch[1].trim(), sets: perHandMatch[2], reps: perHandMatch[3], weight: perHandMatch[4] + 'kg/hand', isHighlight };
  }

  // Pattern: "Exercise: SETSxREPS/leg @ WEIGHTkg"
  const legWeightPattern = /^(.+?):\s*(\d+)x(\d+\/leg)\s*@\s*([\d.]+)\s*kg/i;
  const legWeightMatch = cleanLine.match(legWeightPattern);
  if (legWeightMatch) {
    return { type: 'exercise', id: index, name: legWeightMatch[1].trim(), sets: legWeightMatch[2], reps: legWeightMatch[3], weight: legWeightMatch[4] + 'kg', isHighlight };
  }

  // Pattern: "Exercise: SETSxREPS BW" or "Exercise: SETSxREPS" (no weight → show BW)
  const setsRepsPattern = /^(.+?):\s*(\d+)x(\d+(?:s|-\d+|\/leg|\/side)?)\s*(?:BW)?$/i;
  const setsRepsMatch = cleanLine.match(setsRepsPattern);
  if (setsRepsMatch) {
    return { type: 'exercise', id: index, name: setsRepsMatch[1].trim(), sets: setsRepsMatch[2], reps: setsRepsMatch[3], weight: 'BW', isHighlight };
  }

  // Pattern: "Exercise: SETSxREPS + Weightkg"
  const plusWeightPattern = /^(.+?):\s*(\d+)x(\d+)\s*\+\s*([\d.]+)\s*kg/i;
  const plusWeightMatch = cleanLine.match(plusWeightPattern);
  if (plusWeightMatch) {
    return { type: 'exercise', id: index, name: plusWeightMatch[1].trim(), sets: plusWeightMatch[2], reps: plusWeightMatch[3], weight: '+' + plusWeightMatch[4] + 'kg', isHighlight };
  }

  // Pattern: "Exercise: SETSx max BW"
  const maxPattern = /^(.+?):\s*(\d+)x\s*max\s*(?:BW)?$/i;
  const maxMatch = cleanLine.match(maxPattern);
  if (maxMatch) {
    return { type: 'exercise', id: index, name: maxMatch[1].trim(), sets: maxMatch[2], reps: 'MAX', weight: 'BW', isHighlight };
  }

  // Pattern: "Exercise: NUMBER total @ WEIGHTkg"
  const totalWeightPattern = /^(.+?):\s*(\d+)\s*(?:total|reps)\s*@\s*([\d.]+)\s*kg/i;
  const totalWeightMatch = cleanLine.match(totalWeightPattern);
  if (totalWeightMatch) {
    return { type: 'exercise', id: index, name: totalWeightMatch[1].trim(), sets: null, reps: totalWeightMatch[2] + ' total', weight: totalWeightMatch[3] + 'kg', isHighlight };
  }

  // Pattern: "Exercise: NUMBER total" or "Exercise: NUMBER reps" (no weight)
  const totalPattern = /^(.+?):\s*(\d+)\s*(total|reps)/i;
  const totalMatch = cleanLine.match(totalPattern);
  if (totalMatch) {
    return { type: 'exercise', id: index, name: totalMatch[1].trim(), sets: null, reps: totalMatch[2] + ' total', weight: 'BW', isHighlight };
  }

  // Pattern: "Exercise: NUMBER unbroken @ WEIGHTkg"
  const unbWeightPattern = /^(.+?):\s*(\d+)\s*unbroken\s*@\s*([\d.]+)\s*kg/i;
  const unbWeightMatch = cleanLine.match(unbWeightPattern);
  if (unbWeightMatch) {
    return { type: 'exercise', id: index, name: unbWeightMatch[1].trim(), sets: null, reps: unbWeightMatch[2] + ' unbroken', weight: unbWeightMatch[3] + 'kg', isHighlight };
  }

  // Pattern: "Exercise: NUMBER unbroken" (no weight)
  const unbPattern = /^(.+?):\s*(\d+)\s*unbroken/i;
  const unbMatch = cleanLine.match(unbPattern);
  if (unbMatch) {
    return { type: 'exercise', id: index, name: unbMatch[1].trim(), sets: null, reps: unbMatch[2] + ' unbroken', weight: 'BW', isHighlight };
  }

  // Pattern: "Exercise: SETSxDISTANCEm @ WEIGHTkg"
  const distWeightPattern = /^(.+?):\s*(\d+)x(\d+m)\s*@\s*([\d.]+)\s*kg/i;
  const distWeightMatch = cleanLine.match(distWeightPattern);
  if (distWeightMatch) {
    return { type: 'exercise', id: index, name: distWeightMatch[1].trim(), sets: distWeightMatch[2], reps: null, distance: distWeightMatch[3], weight: distWeightMatch[4] + 'kg', isHighlight };
  }

  // Pattern: "Exercise: SETSx DISTANCEm" (distance-based)
  const distPattern = /^(.+?):\s*(\d+)x\s*(\d+m)\s*$/i;
  const distMatch = cleanLine.match(distPattern);
  if (distMatch) {
    return { type: 'exercise', id: index, name: distMatch[1].trim(), sets: distMatch[2], reps: null, distance: distMatch[3], weight: null, isHighlight };
  }

  // Pattern for duration-based: "Exercise: DURATION min"
  const durationPattern = /^(.+?):\s*([\d-]+)\s*min/i;
  const durationMatch = cleanLine.match(durationPattern);
  if (durationMatch) {
    return { type: 'exercise', id: index, name: durationMatch[1].trim(), duration: durationMatch[2] + ' min', isHighlight };
  }

  // Pattern: "Pace: X /km", "HR: X bpm", "Treadmill: X km/h"
  const infoPattern = /^(Pace|HR|Feel|Target|Damper|Treadmill):\s*(.+)$/i;
  const infoMatch = cleanLine.match(infoPattern);
  if (infoMatch) {
    return { type: 'info', id: index, label: infoMatch[1], value: infoMatch[2] };
  }

  // Pattern: lines starting with bullet
  const bulletPattern = /^[•·-]\s*(.+)$/;
  const bulletMatch = cleanLine.match(bulletPattern);
  if (bulletMatch) {
    const inner = bulletMatch[1];
    const bulletExPattern = /^(.+?)\s+x(\d+(?:\/\w+)?)/i;
    const bulletExMatch = inner.match(bulletExPattern);
    if (bulletExMatch) {
      return { type: 'exercise', id: index, name: bulletExMatch[1].trim(), sets: null, reps: bulletExMatch[2], weight: 'BW', isHighlight: false };
    }
    const bulletTimePattern = /^(.+?)\s+(\d+s)/i;
    const bulletTimeMatch = inner.match(bulletTimePattern);
    if (bulletTimeMatch) {
      return { type: 'exercise', id: index, name: bulletTimeMatch[1].trim(), duration: bulletTimeMatch[2], isHighlight: false };
    }
    return { type: 'text', id: index, text: inner, isBullet: true };
  }

  // Section headers
  if (/^(FULL|50%|75%|80%|HYROX|CRUCIBLE|BACK TO|BRAVO|TARGET)/i.test(cleanLine) ||
      /^(Zone \d|Key|Note|\d+ rounds|4 rounds|5 rounds)/.test(cleanLine)) {
    return { type: 'section', id: index, text: cleanLine };
  }

  return { type: 'text', id: index, text: cleanLine };
}

function ExerciseCard({ data, checked, onToggle }) {
  const isCheckable = data.type === 'exercise';

  if (data.type === 'empty') return <div className="exercise-text empty-line" />;
  if (data.type === 'section') return <div className="exercise-text section-header">{data.text}</div>;
  if (data.type === 'text') return <div className="exercise-text">{data.isBullet ? '  ' : ''}{data.text}</div>;

  if (data.type === 'info') {
    const isTreadmill = data.label.toLowerCase() === 'treadmill';
    return (
      <div className={`exercise-card info-card ${isTreadmill ? 'treadmill-card' : ''}`}>
        <div className="exercise-metrics">
          <span className={`metric ${isTreadmill ? 'treadmill' : 'duration'}`}>
            <span className="metric-label">{data.label}</span>
            <span className="metric-value">{data.value}</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`exercise-card ${data.isHighlight ? 'is-highlight' : ''} ${checked ? 'is-checked' : ''} ${isCheckable ? 'checkable' : ''}`}
      onClick={isCheckable ? onToggle : undefined}
    >
      <div className="exercise-top-row">
        {isCheckable && (
          <div className={`exercise-checkbox ${checked ? 'checked' : ''}`}>
            {checked && <Check size={10} />}
          </div>
        )}
        <div className="exercise-name">
          {data.name}
          {data.isHighlight && <span className="fire"><Flame size={12} /></span>}
        </div>
      </div>
      <div className="exercise-metrics">
        {data.sets && (
          <span className="metric sets">
            <span className="metric-label">Sets</span>
            <span className="metric-value">{data.sets}</span>
          </span>
        )}
        {data.reps && (
          <span className="metric reps">
            <span className="metric-label">Reps</span>
            <span className="metric-value">{data.reps}</span>
          </span>
        )}
        {data.distance && (
          <span className="metric distance">
            <span className="metric-label">Dist</span>
            <span className="metric-value">{data.distance}</span>
          </span>
        )}
        {data.weight && (
          <span className={`metric ${data.weight === 'BW' ? 'bw' : 'weight'}`}>
            <span className="metric-label">{data.weight === 'BW' ? 'Load' : 'Weight'}</span>
            <span className="metric-value">{data.weight}</span>
          </span>
        )}
        {data.duration && (
          <span className="metric duration">
            <span className="metric-label">Time</span>
            <span className="metric-value">{data.duration}</span>
          </span>
        )}
      </div>
    </div>
  );
}

function App() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1));
  const [selectedDate, setSelectedDate] = useState('2026-03-23');
  const [completedWorkouts, setCompletedWorkouts] = useState(() => {
    const saved = localStorage.getItem('completedWorkouts');
    return saved ? JSON.parse(saved) : {};
  });
  const [checkedExercises, setCheckedExercises] = useState(() => {
    const saved = localStorage.getItem('checkedExercises');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts));
  }, [completedWorkouts]);

  useEffect(() => {
    localStorage.setItem('checkedExercises', JSON.stringify(checkedExercises));
  }, [checkedExercises]);

  const changeMonth = (delta) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + delta);
    if (newDate >= new Date(2026, 2, 1) && newDate <= new Date(2026, 7, 31)) {
      setCurrentDate(newDate);
    }
  };

  const toggleComplete = (dateStr) => {
    setCompletedWorkouts(prev => ({ ...prev, [dateStr]: !prev[dateStr] }));
  };

  const toggleExercise = useCallback((dateStr, exIndex) => {
    setCheckedExercises(prev => {
      const key = `${dateStr}-${exIndex}`;
      return { ...prev, [key]: !prev[key] };
    });
  }, []);

  const formatDateStr = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const selectedWorkout = workouts[selectedDate];
  const intensity = useMemo(() => getIntensity(selectedWorkout), [selectedWorkout]);

  const parsedExercises = useMemo(() => {
    if (!selectedWorkout) return [];
    return selectedWorkout.content.split('\n').map((line, i) => parseExerciseLine(line, i));
  }, [selectedWorkout]);

  // Count checked exercises for this date
  const exerciseCount = parsedExercises.filter(e => e.type === 'exercise').length;
  const checkedCount = parsedExercises.filter(e => e.type === 'exercise' && checkedExercises[`${selectedDate}-${e.id}`]).length;

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = '2026-03-23';

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = formatDateStr(year, month, day);
      const workout = workouts[dateStr];
      const isSelected = dateStr === selectedDate;
      const isToday = dateStr === today;
      const isCompleted = completedWorkouts[dateStr];

      days.push(
        <div
          key={day}
          className={`calendar-day ${workout ? 'has-workout' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${isCompleted ? 'completed' : ''}`}
          onClick={() => workout && setSelectedDate(dateStr)}
        >
          <span className="day-number">{day}</span>
          {workout && (
            <>
              <div className="workout-dot" style={{ backgroundColor: getWorkoutColor(workout.type), color: getWorkoutColor(workout.type) }}></div>
              <span className="workout-preview">
                {workout.title.replace(/[🏆🔥🏠💪🛌]/g, '').trim().substring(0, 8)}
              </span>
            </>
          )}
          {isCompleted && <Check className="completed-check" size={12} />}
        </div>
      );
    }

    return days;
  };

  const totalWorkouts = Object.keys(workouts).length;
  const completedCountAll = Object.keys(completedWorkouts).filter(k => completedWorkouts[k]).length;
  const races = Object.values(workouts).filter(w => w.type === 'race').length;

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Dumbbell size={24} />
            <h1><span className="accent">Hyrox</span> Training</h1>
          </div>
          <div className="stats">
            <div className="stat">
              <Calendar size={14} />
              <span>{completedCountAll}/{totalWorkouts}</span>
            </div>
            <div className="stat">
              <Trophy size={14} />
              <span>{races} races</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="calendar-container">
          <div className="calendar-header">
            <button onClick={() => changeMonth(-1)} className="nav-btn">
              <ChevronLeft size={18} />
            </button>
            <h2>{thaiMonths[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <button onClick={() => changeMonth(1)} className="nav-btn">
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="calendar-weekdays">
            {thaiDaysShort.map((day, i) => (
              <div key={i} className="weekday">{day}</div>
            ))}
          </div>

          <div className="calendar-grid">
            {renderCalendar()}
          </div>

          <div className="legend">
            {[
              { color: 'var(--type-race)', label: 'Race' },
              { color: 'var(--type-strength)', label: 'Strength' },
              { color: 'var(--type-run)', label: 'Run' },
              { color: 'var(--type-rest)', label: 'Rest' },
              { color: 'var(--type-nogym)', label: 'No Gym' },
              { color: 'var(--type-mixed)', label: 'Mixed' },
              { color: 'var(--type-recovery)', label: 'Recovery' },
            ].map(({ color, label }) => (
              <div key={label} className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: color, color }} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {selectedWorkout ? (
          <div className="workout-detail">
            <div className="workout-detail-header">
              <div>
                <p className="workout-date">
                  {thaiDays[new Date(selectedDate).getDay()]} {new Date(selectedDate).getDate()} {thaiMonths[new Date(selectedDate).getMonth()]} {new Date(selectedDate).getFullYear()}
                </p>
                <h3 className="workout-title">{selectedWorkout.title}</h3>
              </div>
              <span
                className="workout-badge"
                style={{
                  backgroundColor: getWorkoutColor(selectedWorkout.type) + '22',
                  color: getWorkoutColor(selectedWorkout.type),
                  borderColor: getWorkoutColor(selectedWorkout.type) + '44',
                }}
              >
                {selectedWorkout.badge}
              </span>
            </div>

            {/* Intensity Bar */}
            {intensity && (
              <div className="intensity-bar" style={{ borderColor: intensity.color + '44' }}>
                <div className="intensity-dots">
                  {['LIGHT', 'MODERATE', 'HARD', 'HEAVY', 'MAX'].map((lvl, i) => (
                    <div
                      key={lvl}
                      className={`intensity-dot ${['LIGHT', 'MODERATE', 'HARD', 'HEAVY', 'MAX'].indexOf(intensity.level) >= i ? 'active' : ''}`}
                      style={['LIGHT', 'MODERATE', 'HARD', 'HEAVY', 'MAX'].indexOf(intensity.level) >= i ? { backgroundColor: intensity.color, boxShadow: `0 0 6px ${intensity.color}` } : {}}
                    />
                  ))}
                </div>
                <span className="intensity-label" style={{ color: intensity.color }}>{intensity.label}</span>
              </div>
            )}

            {/* Exercise progress */}
            {exerciseCount > 0 && (
              <div className="exercise-progress">
                <div className="exercise-progress-bar">
                  <div className="exercise-progress-fill" style={{ width: `${(checkedCount / exerciseCount) * 100}%` }} />
                </div>
                <span className="exercise-progress-text">{checkedCount}/{exerciseCount} exercises</span>
              </div>
            )}

            <div className="workout-exercises">
              {parsedExercises.map((ex) => (
                <ExerciseCard
                  key={ex.id}
                  data={ex}
                  checked={checkedExercises[`${selectedDate}-${ex.id}`]}
                  onToggle={() => toggleExercise(selectedDate, ex.id)}
                />
              ))}
            </div>

            <div className="complete-btn-wrap">
              <button
                className={`complete-btn ${completedWorkouts[selectedDate] ? 'completed' : ''}`}
                onClick={() => toggleComplete(selectedDate)}
              >
                {completedWorkouts[selectedDate] ? (
                  <><Check size={16} /> DONE</>
                ) : (
                  'MARK COMPLETE'
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="workout-detail">
            <div className="no-workout">
              <Calendar size={40} />
              <p>เลือกวันที่มี workout</p>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Hyrox 20 มี.ค. (2:28) → Crucible 23 พ.ค. → <strong>Hyrox ส.ค. Sub-2:00!</strong></p>
      </footer>
    </div>
  );
}

export default App;

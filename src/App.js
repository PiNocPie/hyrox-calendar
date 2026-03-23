import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Dumbbell, Trophy, Check, Flame } from 'lucide-react';
import { workouts, getWorkoutColor, thaiMonths, thaiDays, thaiDaysShort } from './workoutData';
import './App.css';

// Parse a single line into structured exercise data
function parseExerciseLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return { type: 'empty' };

  const isHighlight = trimmed.includes('🔥') || trimmed.includes('PEAK') || trimmed.includes('MILESTONE') || trimmed.includes('TARGET');
  const cleanLine = trimmed.replace(/[🔥💪🏆🛌🏠🎯🎉]/g, '').trim();

  // Pattern: "Exercise Name: SETSxREPS @ WEIGHTkg"
  const fullPattern = /^(.+?):\s*(\d+)x(\d+(?:-\d+)?)\s*@\s*([\d.]+)\s*kg/i;
  const fullMatch = cleanLine.match(fullPattern);
  if (fullMatch) {
    return {
      type: 'exercise',
      name: fullMatch[1].trim(),
      sets: fullMatch[2],
      reps: fullMatch[3],
      weight: fullMatch[4] + 'kg',
      isHighlight,
    };
  }

  // Pattern: "Exercise Name: SETSxREPS @ WEIGHTkg/hand"
  const perHandPattern = /^(.+?):\s*(\d+)x(\d+(?:m|-\d+)?)\s*@\s*([\d.]+)\s*kg\/hand/i;
  const perHandMatch = cleanLine.match(perHandPattern);
  if (perHandMatch) {
    return {
      type: 'exercise',
      name: perHandMatch[1].trim(),
      sets: perHandMatch[2],
      reps: perHandMatch[3],
      weight: perHandMatch[4] + 'kg/hand',
      isHighlight,
    };
  }

  // Pattern: "Exercise: SETSxREPS" (no weight)
  const setsRepsPattern = /^(.+?):\s*(\d+)x(\d+(?:-\d+|\/leg)?)\s*(?:BW)?$/i;
  const setsRepsMatch = cleanLine.match(setsRepsPattern);
  if (setsRepsMatch) {
    return {
      type: 'exercise',
      name: setsRepsMatch[1].trim(),
      sets: setsRepsMatch[2],
      reps: setsRepsMatch[3],
      weight: null,
      isHighlight,
    };
  }

  // Pattern: "Exercise: SETSxREPS + Weightkg"
  const plusWeightPattern = /^(.+?):\s*(\d+)x(\d+)\s*\+\s*([\d.]+)\s*kg/i;
  const plusWeightMatch = cleanLine.match(plusWeightPattern);
  if (plusWeightMatch) {
    return {
      type: 'exercise',
      name: plusWeightMatch[1].trim(),
      sets: plusWeightMatch[2],
      reps: plusWeightMatch[3],
      weight: '+' + plusWeightMatch[4] + 'kg',
      isHighlight,
    };
  }

  // Pattern: "Exercise: SETSx max"
  const maxPattern = /^(.+?):\s*(\d+)x\s*max$/i;
  const maxMatch = cleanLine.match(maxPattern);
  if (maxMatch) {
    return {
      type: 'exercise',
      name: maxMatch[1].trim(),
      sets: maxMatch[2],
      reps: 'MAX',
      weight: null,
      isHighlight,
    };
  }

  // Pattern: "Exercise: NUMBER total" or "Exercise: NUMBER reps"
  const totalPattern = /^(.+?):\s*(\d+)\s*(total|reps)/i;
  const totalMatch = cleanLine.match(totalPattern);
  if (totalMatch) {
    return {
      type: 'exercise',
      name: totalMatch[1].trim(),
      sets: null,
      reps: totalMatch[2] + ' total',
      weight: null,
      isHighlight,
    };
  }

  // Pattern: "Exercise: NUMBER unbroken goal"
  const unbPattern = /^(.+?):\s*(\d+)\s*unbroken/i;
  const unbMatch = cleanLine.match(unbPattern);
  if (unbMatch) {
    return {
      type: 'exercise',
      name: unbMatch[1].trim(),
      sets: null,
      reps: unbMatch[2] + ' unbroken',
      weight: null,
      isHighlight,
    };
  }

  // Pattern: "Exercise: SETSxDISTANCEm @ WEIGHTkg/hand"
  const distWeightPattern = /^(.+?):\s*(\d+)x(\d+m)\s*@\s*([\d.]+)\s*kg/i;
  const distWeightMatch = cleanLine.match(distWeightPattern);
  if (distWeightMatch) {
    return {
      type: 'exercise',
      name: distWeightMatch[1].trim(),
      sets: distWeightMatch[2],
      reps: null,
      distance: distWeightMatch[3],
      weight: distWeightMatch[4] + 'kg',
      isHighlight,
    };
  }

  // Pattern: "Exercise: SETSx DISTANCEm" (distance-based)
  const distPattern = /^(.+?):\s*(\d+)x\s*(\d+m)\s*$/i;
  const distMatch = cleanLine.match(distPattern);
  if (distMatch) {
    return {
      type: 'exercise',
      name: distMatch[1].trim(),
      sets: distMatch[2],
      reps: null,
      distance: distMatch[3],
      weight: null,
      isHighlight,
    };
  }

  // Pattern for duration-based: "Exercise: DURATION min"
  const durationPattern = /^(.+?):\s*([\d-]+)\s*min/i;
  const durationMatch = cleanLine.match(durationPattern);
  if (durationMatch) {
    return {
      type: 'exercise',
      name: durationMatch[1].trim(),
      duration: durationMatch[2] + ' min',
      isHighlight,
    };
  }

  // Pattern: "Pace: X /km" or "HR: X bpm"
  const infoPattern = /^(Pace|HR|Feel|Target|Damper):\s*(.+)$/i;
  const infoMatch = cleanLine.match(infoPattern);
  if (infoMatch) {
    return {
      type: 'info',
      label: infoMatch[1],
      value: infoMatch[2],
    };
  }

  // Pattern: lines starting with bullet • or number
  const bulletPattern = /^[•·-]\s*(.+)$/;
  const bulletMatch = cleanLine.match(bulletPattern);
  if (bulletMatch) {
    // Try to parse bullet content for exercise
    const inner = bulletMatch[1];
    const bulletExPattern = /^(.+?)\s+x(\d+(?:\/\w+)?)/i;
    const bulletExMatch = inner.match(bulletExPattern);
    if (bulletExMatch) {
      return {
        type: 'exercise',
        name: bulletExMatch[1].trim(),
        sets: null,
        reps: bulletExMatch[2],
        weight: null,
        isHighlight: false,
      };
    }
    // Bullet with time
    const bulletTimePattern = /^(.+?)\s+(\d+s)/i;
    const bulletTimeMatch = inner.match(bulletTimePattern);
    if (bulletTimeMatch) {
      return {
        type: 'exercise',
        name: bulletTimeMatch[1].trim(),
        duration: bulletTimeMatch[2],
        isHighlight: false,
      };
    }
    return { type: 'text', text: inner, isBullet: true };
  }

  // Section headers (ALL CAPS or contains specific keywords)
  if (/^(FULL|50%|75%|80%|HYROX|CRUCIBLE|BACK TO|BRAVO|TARGET)/i.test(cleanLine) ||
      /^(Zone \d|Key|Note|\d+ rounds|4 rounds|5 rounds)/.test(cleanLine)) {
    return { type: 'section', text: cleanLine };
  }

  // Numbered strategy lines
  const numberedPattern = /^(\d+)\.\s+(.+)$/;
  const numberedMatch = cleanLine.match(numberedPattern);
  if (numberedMatch) {
    return { type: 'text', text: cleanLine, isNumbered: true };
  }

  return { type: 'text', text: cleanLine };
}

function ExerciseCard({ data }) {
  if (data.type === 'empty') return <div className="exercise-text empty-line" />;
  if (data.type === 'section') return <div className="exercise-text section-header">{data.text}</div>;
  if (data.type === 'text') return <div className="exercise-text">{data.isBullet ? '  ' : ''}{data.text}</div>;

  if (data.type === 'info') {
    return (
      <div className="exercise-card">
        <div className="exercise-metrics">
          <span className="metric duration">
            <span className="metric-label">{data.label}</span>
            <span className="metric-value">{data.value}</span>
          </span>
        </div>
      </div>
    );
  }

  // Exercise type
  return (
    <div className={`exercise-card ${data.isHighlight ? 'is-highlight' : ''}`}>
      <div className="exercise-name">
        {data.name}
        {data.isHighlight && <span className="fire"><Flame size={12} /></span>}
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
          <span className="metric weight">
            <span className="metric-label">Weight</span>
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

  useEffect(() => {
    localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts));
  }, [completedWorkouts]);

  const changeMonth = (delta) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + delta);
    if (newDate >= new Date(2026, 2, 1) && newDate <= new Date(2026, 7, 31)) {
      setCurrentDate(newDate);
    }
  };

  const toggleComplete = (dateStr) => {
    setCompletedWorkouts(prev => ({
      ...prev,
      [dateStr]: !prev[dateStr]
    }));
  };

  const formatDateStr = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const selectedWorkout = workouts[selectedDate];

  const parsedExercises = useMemo(() => {
    if (!selectedWorkout) return [];
    return selectedWorkout.content.split('\n').map(parseExerciseLine);
  }, [selectedWorkout]);

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
              <div
                className="workout-dot"
                style={{ backgroundColor: getWorkoutColor(workout.type), color: getWorkoutColor(workout.type) }}
              ></div>
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

  // Stats
  const totalWorkouts = Object.keys(workouts).length;
  const completedCount = Object.keys(completedWorkouts).filter(k => completedWorkouts[k]).length;
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
              <span>{completedCount}/{totalWorkouts}</span>
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

            <div className="workout-exercises">
              {parsedExercises.map((ex, i) => (
                <ExerciseCard key={i} data={ex} />
              ))}
            </div>

            <div className="complete-btn-wrap">
              <button
                className={`complete-btn ${completedWorkouts[selectedDate] ? 'completed' : ''}`}
                onClick={() => toggleComplete(selectedDate)}
              >
                {completedWorkouts[selectedDate] ? (
                  <>
                    <Check size={16} />
                    DONE
                  </>
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

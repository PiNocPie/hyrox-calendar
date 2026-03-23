import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Dumbbell, Trophy, Check } from 'lucide-react';
import { workouts, getWorkoutColor, thaiMonths, thaiDays, thaiDaysShort } from './workoutData';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // March 2026
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
    // Limit to March 2026 - August 2026
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

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = '2026-03-23'; // Current date for demo

    const days = [];
    
    // Empty cells for days before first of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
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
                style={{ backgroundColor: getWorkoutColor(workout.type) }}
              ></div>
              <span className="workout-preview">
                {workout.title.replace(/[🏆🔥🏠💪🛌]/g, '').trim().substring(0, 8)}
              </span>
            </>
          )}
          {isCompleted && <Check className="completed-check" size={14} />}
        </div>
      );
    }

    return days;
  };

  const selectedWorkout = workouts[selectedDate];

  // Calculate stats
  const totalWorkouts = Object.keys(workouts).length;
  const completedCount = Object.keys(completedWorkouts).filter(k => completedWorkouts[k]).length;
  const races = Object.values(workouts).filter(w => w.type === 'race').length;

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Dumbbell size={28} />
            <h1>Hyrox Training Calendar</h1>
          </div>
          <div className="stats">
            <div className="stat">
              <Calendar size={18} />
              <span>{completedCount}/{totalWorkouts} workouts</span>
            </div>
            <div className="stat">
              <Trophy size={18} />
              <span>{races} races</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="calendar-container">
          <div className="calendar-header">
            <button onClick={() => changeMonth(-1)} className="nav-btn">
              <ChevronLeft size={20} />
            </button>
            <h2>{thaiMonths[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <button onClick={() => changeMonth(1)} className="nav-btn">
              <ChevronRight size={20} />
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
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#E24B4A' }}></span>
              Race
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#7F77DD' }}></span>
              Strength
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#1D9E75' }}></span>
              Run
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#888780' }}></span>
              Rest
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#D85A30' }}></span>
              No Gym
            </div>
          </div>
        </div>

        {selectedWorkout && (
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
                  color: getWorkoutColor(selectedWorkout.type)
                }}
              >
                {selectedWorkout.badge}
              </span>
            </div>
            
            <div className="workout-content">
              {selectedWorkout.content.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <button 
              className={`complete-btn ${completedWorkouts[selectedDate] ? 'completed' : ''}`}
              onClick={() => toggleComplete(selectedDate)}
            >
              {completedWorkouts[selectedDate] ? (
                <>
                  <Check size={18} />
                  ทำแล้ว!
                </>
              ) : (
                'ยังไม่ได้ทำ - กดเพื่อเช็ค ✓'
              )}
            </button>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>🏆 Hyrox 20 มี.ค. (2:28) → Crucible 23 พ.ค. → <strong>Hyrox ส.ค. Sub-2:00!</strong></p>
      </footer>
    </div>
  );
}

export default App;

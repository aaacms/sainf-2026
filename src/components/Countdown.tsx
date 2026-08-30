import { useEffect, useState } from 'react';

const EVENT_START = new Date('2026-10-13T08:30:00-03:00').getTime();

function getRemainingTime() {
  const difference = Math.max(0, EVENT_START - Date.now());

  return {
    finished: difference === 0,
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getRemainingTime);

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getRemainingTime()), 1_000);
    return () => window.clearInterval(interval);
  }, []);

  if (time.finished) {
    return <p className="pixel-title event-countdown-started">A SAINF JÁ COMEÇOU!</p>;
  }

  const units = [
    [time.days, 'dias'],
    [time.hours, 'horas'],
    [time.minutes, 'min'],
    [time.seconds, 'seg'],
  ];

  return (
    <div className="event-countdown" aria-label={`Faltam ${time.days} dias, ${time.hours} horas, ${time.minutes} minutos e ${time.seconds} segundos para a SAINF`}>
     
      <p className="pixel-title event-countdown-label">FALTAM</p>
      <div className="event-countdown-units">
        {units.map(([value, label]) => (
          <div className="event-countdown-unit" key={label as string}>
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      
    </div>
  );
}

// import { useState } from 'react';
// import { CalendarDays, MapPin, UserRound } from 'lucide-react';
// import { cronogramaEventos } from '../data/eventos.data';

export default function CronogramaSection() {
  // const [activeDay, setActiveDay] = useState(0);
  // const day = cronogramaEventos[activeDay];

  return (
    <section id="cronograma" className="schedule-section px-5 py-20 md:px-8 md:py-28" aria-labelledby="schedule-title">
      <div className="container mx-auto max-w-5xl">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          {/* <p className="pixel-title mb-3 text-primary">// AGENDA</p> */}
          <h2 id="schedule-title" className="text-4xl md:text-5xl">Cronograma</h2>
          <p className="mt-7 text-lg text-base-content/70">Escolha um dia e acompanhe a programação da SAINF.</p>
          {/* <p className="mt-3 text-lg text-base-content/70"><strong>programação em atualização</strong></p> */}
        </header>

        <div className="schedule-notice" role="status">
          <span className="schedule-notice-light" aria-hidden="true" />
          <p><strong>programação em atualização</strong></p>
        </div>

        {/* <div className="schedule-tabs" role="tablist" aria-label="Dias do evento">
          {cronogramaEventos.map((item, index) => (
            <button
              key={item.dia}
              type="button"
              role="tab"
              aria-selected={index === activeDay}
              className={index === activeDay ? 'schedule-tab is-active' : 'schedule-tab'}
              onClick={() => setActiveDay(index)}
            >
              <span>Dia {String(index + 1).padStart(2, '0')}</span>
              <strong>{item.dia}</strong>
            </button>
          ))}
        </div>

        <div className="schedule-day-heading">
          <CalendarDays size={20} />
          <span>{day.dia}</span>
          <em>{day.data}</em>
        </div>

        <ol className="schedule-list" aria-label={`Atividades de ${day.dia}`}>
          {day.eventos.map((event, index) => (
            <li className={`schedule-event schedule-event-${event.tipo}`} key={`${event.horario}-${index}`}>
              <div className="schedule-time">{event.horario}</div>
              <article className="schedule-card">
                <span className="schedule-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{event.titulo}</h3>
                {(event.local || event.palestrante) && (
                  <div className="schedule-details">
                    {event.local && <span><MapPin size={15} /> {event.local}</span>}
                    {event.palestrante && <span><UserRound size={15} /> {event.palestrante}</span>}
                  </div>
                )}
                {event.descricao && <p>{event.descricao}</p>}
              </article>
            </li>
          ))}
        </ol> */}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { cronogramaEventos, Evento } from '../data/eventos.data';

/**
 * Componente CronogramaSection
 * - Exibe cronograma do evento em tabs (Terça, Quarta, Quinta)
 * - Cada evento é exibido em um mockup-code
 * - Modal com timeline visual dos 3 dias
 */
export default function CronogramaSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [showTimelineModal, setShowTimelineModal] = useState(false);

  const getEventColor = (tipo: Evento['tipo']) => {
    switch (tipo) {
      case 'credenciamento':
        return 'text-info';
      case 'palestra':
        return 'text-primary';
      case 'workshop':
        return 'text-secondary';
      case 'pausa':
      case 'coffee':
        return 'text-warning';
      case 'almoco':
        return 'text-accent';
      default:
        return 'text-base-content';
    }
  };

  return (
    <section id="cronograma" className="py-20 bg-base-200">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cronograma
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Confira a programação completa do evento. Três dias repletos de conhecimento, networking e inovação.
          </p>
        </div>

        {/* Tabs dos dias */}
        <div className="flex flex-col items-center mb-8">
          <div role="tablist" className="tabs tabs-boxed bg-base-100 p-2 shadow-lg w-full max-w-md">
            {cronogramaEventos.map((dia, index) => (
              <button
                key={index}
                role="tab"
                className={`tab text-sm md:text-base ${
                  activeTab === index ? 'tab-active' : ''
                }`}
                onClick={() => setActiveTab(index)}
                aria-label={`${dia.dia} - ${dia.data}`}
              >
                <span className="hidden md:inline">{dia.dia}</span>
                <span className="md:hidden">{dia.dia.slice(0, 3)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo do tab ativo */}
        <div className="mb-8">
          {cronogramaEventos.map((dia, index) => (
            <div
              key={index}
              role="tabpanel"
              className={`${activeTab === index ? 'block' : 'hidden'}`}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-base-100 px-6 py-3 rounded-full shadow-md">
                  <Calendar size={20} className="text-primary" />
                  <span className="font-semibold text-lg">
                    {dia.dia} - {dia.data}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {dia.eventos.map((evento, eventoIndex) => (
                  <div key={eventoIndex} className="mockup-code w-full shadow-lg">
                    <pre data-prefix=">" className={`${getEventColor(evento.tipo)}`}>
                      <code className="font-bold">{evento.horario}</code>
                    </pre>
                    <pre data-prefix="📌" className="text-warning">
                      <code className="font-semibold text-base-content">{evento.titulo}</code>
                    </pre>
                    {evento.palestrante && (
                      <pre data-prefix="👤">
                        <code className="flex items-center gap-2">
                          <User size={14} className="inline" />
                          {evento.palestrante}
                        </code>
                      </pre>
                    )}
                    {evento.local && (
                      <pre data-prefix="📍">
                        <code className="flex items-center gap-2">
                          <MapPin size={14} className="inline" />
                          {evento.local}
                        </code>
                      </pre>
                    )}
                    {evento.descricao && (
                      <pre data-prefix="ℹ️">
                        <code className="text-sm text-base-content/70">{evento.descricao}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver Timeline */}
        <div className="flex justify-start mt-8">
          <button
            onClick={() => setShowTimelineModal(true)}
            className="btn btn-sm btn-outline btn-primary gap-2"
            aria-label="Ver timeline completa do evento"
          >
            <Clock size={16} />
            Ver Timeline
          </button>
        </div>
      </div>

      {/* Modal Timeline */}
      {showTimelineModal && (
        <div
          className="modal modal-open"
          onClick={() => setShowTimelineModal(false)}
        >
          <div
            className="modal-box max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-2xl mb-6 flex items-center gap-2">
              <Calendar className="text-primary" />
              Timeline Completa do Evento
            </h3>

            {/* Timeline Vertical (Mobile) */}
            <div className="block md:hidden">
              <ul className="timeline timeline-vertical timeline-compact">
                {cronogramaEventos.map((dia, diaIndex) => (
                  <div key={diaIndex}>
                    {dia.eventos.map((evento, eventoIndex) => (
                      <li key={`${diaIndex}-${eventoIndex}`}>
                        {eventoIndex > 0 || diaIndex > 0 ? <hr className="bg-primary" /> : null}
                        <div className="timeline-start timeline-box bg-base-200 shadow-md">
                          <div className="font-bold text-primary mb-1">{dia.dia}</div>
                          <div className="text-xs text-base-content/60 mb-2 flex items-center gap-1">
                            <Clock size={12} />
                            {evento.horario}
                          </div>
                          <div className="font-semibold">{evento.titulo}</div>
                          {evento.palestrante && (
                            <div className="text-sm text-base-content/70 mt-1">
                              {evento.palestrante}
                            </div>
                          )}
                          {evento.local && (
                            <div className="text-xs text-base-content/60 flex items-center gap-1 mt-1">
                              <MapPin size={12} />
                              {evento.local}
                            </div>
                          )}
                        </div>
                        <div className="timeline-middle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-primary"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="timeline-end"></div>
                        <hr className="bg-primary" />
                      </li>
                    ))}
                  </div>
                ))}
              </ul>
            </div>

            {/* Timeline Horizontal (Desktop) */}
            <div className="hidden md:block overflow-x-auto">
              <ul className="timeline timeline-horizontal min-w-full pb-8">
                {cronogramaEventos.map((dia, diaIndex) => (
                  <div key={diaIndex} className="contents">
                    {dia.eventos.map((evento, eventoIndex) => (
                      <li key={`${diaIndex}-${eventoIndex}`} className="min-w-[250px]">
                        {eventoIndex > 0 || diaIndex > 0 ? <hr className="bg-primary" /> : null}
                        <div className="timeline-start text-xs mb-2 font-semibold text-primary">
                          {diaIndex === 0 && eventoIndex === 0 && dia.dia}
                          {diaIndex === 1 && eventoIndex === 0 && dia.dia}
                          {diaIndex === 2 && eventoIndex === 0 && dia.dia}
                        </div>
                        <div className="timeline-middle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-primary"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="timeline-end timeline-box bg-base-200 shadow-md text-left max-w-[220px]">
                          <div className="text-xs text-base-content/60 mb-1 flex items-center gap-1">
                            <Clock size={12} />
                            {evento.horario}
                          </div>
                          <div className="font-semibold text-sm mb-1">{evento.titulo}</div>
                          {evento.palestrante && (
                            <div className="text-xs text-base-content/70 truncate">
                              {evento.palestrante}
                            </div>
                          )}
                          {evento.local && (
                            <div className="text-xs text-base-content/60 flex items-center gap-1 mt-1 truncate">
                              <MapPin size={10} />
                              {evento.local}
                            </div>
                          )}
                        </div>
                        <hr className="bg-primary" />
                      </li>
                    ))}
                  </div>
                ))}
              </ul>
            </div>

            {/* Botão Fechar */}
            <div className="modal-action">
              <button
                onClick={() => setShowTimelineModal(false)}
                className="btn btn-primary"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

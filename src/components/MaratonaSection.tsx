import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Trophy, Users, Clock, MapPin, AlertCircle, ArrowLeft, Send, Sparkles } from 'lucide-react';

/**
 * Componente MaratonaSection
 * Página para inscrição na Maratona de Programação da SAINF
 */
export default function MaratonaSection() {
  const checklistItems = [
    'Todos os membros do trio estão inscritos na SAINF',
    'Pelo menos um membro é dos cursos de Computação',
    'A equipe tem exatamente 3 membros',
    'Escolhi o nível adequado (Iniciante ou Avançado)',
    'Estou disponível para 5 horas de competição',
  ];
  const [checkedItems, setCheckedItems] = useState<boolean[]>(() => checklistItems.map(() => false));

  const toggleChecklistItem = (index: number) => {
    setCheckedItems((items) => items.map((isChecked, itemIndex) => (
      itemIndex === index ? !isChecked : isChecked
    )));
  };

  return (
    <section 
      id="maratona-programacao"
      className="marathon-section py-24 px-6 bg-base-100"
      aria-labelledby="maratona-title"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Botão Voltar */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="btn btn-ghost gap-2"
            aria-label="Voltar para página inicial"
          >
            <ArrowLeft size={20} />
            Voltar para Home
          </Link>
        </div>

        {/* Header com destaque */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} />
            <span className="font-semibold">SAINF 2026!</span>
          </div>
          <h2 
            id="maratona-title"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Maratona de SQL
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Olá, computchêiros! Prepare-se para o desafio!
          </p>
        </div>

        {/* Alerta Importante */}
        <div className="alert marathon-alert marathon-alert-warning mb-12">
          <AlertCircle size={32} />
          <div>
            <h3 className="font-bold text-lg">Atente-se, não seja um macaco de código:</h3>
            <p className="text-sm">
              Leia atentamente todas as regras e requisitos abaixo antes de se inscrever!
            </p>
          </div>
        </div>

        {/* Sobre a Maratona */}
        <div className="card marathon-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Sobre a Maratona</h3>
            </div>
            <p className="text-base-content/80 leading-relaxed mb-4">
              A Maratona de SQL da SAINF é uma competição em equipe que desafia 
              estudantes a resolver problemas complexos de programação em um ambiente de 
              alta pressão. É uma oportunidade única de testar suas habilidades, trabalhar 
              em equipe e aprender com outros competidores!
            </p>
          </div>
        </div>

        {/* Regras e Requisitos */}
        <div className="card marathon-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Regras e Requisitos Obrigatórios</h3>
            </div>
            <div className="space-y-6">
              <div className="alert marathon-alert marathon-alert-info">
                <Code2 size={24} />
                <div>
                  <h4 className="font-bold">Inscrição na SAINF Obrigatória</h4>
                  <p className="text-sm">
                    Para participar na Maratona, é <strong>necessário estar inscrito na SAINF</strong>. 
                    Iremos verificar e notificar em caso de não haver inscrição de todos os membros.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card marathon-content-card marathon-content-card-compact">
                  <div className="card-body">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="text-primary" size={24} />
                      <h4 className="font-bold">Formação de Equipe</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-sm text-base-content/80">
                      <li>É <strong>obrigatório</strong> que seja em <strong>trio</strong> a maratona</li>
                      <li>Ao menos <strong>um membro</strong> do grupo tem que ser dos <strong>cursos de Computação</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="card marathon-content-card marathon-content-card-compact">
                  <div className="card-body">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="text-primary" size={24} />
                      <h4 className="font-bold">Níveis de Dificuldade</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-sm text-base-content/80">
                      <li><strong>Nível Iniciante:</strong> Recomendado para quem nunca participou de uma maratona</li>
                      <li><strong>Nível Avançado:</strong> Para competidores experientes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Duração</h4>
                    <p className="text-base-content/80">
                      Lembre que a maratona tem duração de <strong>5 horas</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Local</h4>
                    <p className="text-base-content/80">
                      As maratonas serão realizadas nas <strong>salas 337 e 334 do NCC</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="card marathon-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Checklist Antes de Inscrever</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {checklistItems.map((item, index) => (
                <div className="form-control" key={item}>
                  <label className="label cursor-pointer justify-start gap-4">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={checkedItems[index]}
                      onChange={() => toggleChecklistItem(index)}
                    />
                    <span className="label-text text-base">{item}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão de Inscrição em Destaque */}
        <div className="mt-12">
          <div className="card marathon-cta">
            <div className="card-body items-center text-center">
              <div className="marathon-cta-icon" aria-hidden="true">
                <Trophy size={36} />
              </div>
              <p className="pixel-title marathon-cta-kicker">// MARATONA DE SQL</p>
              <h3 className="card-title text-3xl md:text-4xl">Pronto para o Desafio?</h3>
              <p className="marathon-cta-copy text-lg max-w-2xl">
                Inscreva sua equipe agora e mostre suas habilidades na Maratona de SQL!
              </p>
              <a 
                href="https://forms.gle/wuXdpVWxUgY5UY6f7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg marathon-cta-button gap-2"
              >
                <Send size={24} />
                Inscrever Minha Equipe
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

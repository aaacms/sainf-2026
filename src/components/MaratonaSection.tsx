import { Link } from 'react-router-dom';
import { Code2, Trophy, Users, Clock, MapPin, AlertCircle, ArrowLeft, Send, Sparkles } from 'lucide-react';

export default function MaratonaSection() {
  return (
    <section
      id="maratona-sql"
      className="marathon-section py-24 px-6 bg-base-100"
      aria-labelledby="maratona-title"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link to="/" className="btn btn-ghost gap-2" aria-label="Voltar para página inicial">
            <ArrowLeft size={20} />
            Voltar para Home
          </Link>
        </div>

        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} />
            <span className="font-semibold">SAINF 2026</span>
          </div>
          <h1 id="maratona-title" className="text-4xl md:text-5xl font-bold mb-6">
            Maratona de SQL
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Uma competição para colocar seus conhecimentos em SQL à prova.
          </p>
        </header>

        <div className="card marathon-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-primary" size={32} />
              <h2 className="card-title text-2xl">Sobre a competição</h2>
            </div>
            <p className="text-base-content/80 leading-relaxed">
              A Maratona de SQL é uma competição, inspirada na Maratona de Programação da SBC, em que equipes com{' '}
              <strong>um, dois ou três integrantes</strong> disputam para resolver o maior número de problemas usando a linguagem SQL.
            </p>
          </div>
        </div>

        <div className="card marathon-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-primary" size={32} />
              <h2 className="card-title text-2xl">Regras</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card marathon-content-card marathon-content-card-compact">
                <div className="card-body">
                  <Users className="text-primary mb-2" size={24} />
                  <h3 className="font-bold">Equipes</h3>
                  <p className="text-sm text-base-content/80">As equipes podem ter um, dois ou três integrantes.</p>
                </div>
              </div>
              <div className="card marathon-content-card marathon-content-card-compact">
                <div className="card-body">
                  <AlertCircle className="text-primary mb-2" size={24} />
                  <h3 className="font-bold">Materiais e acesso</h3>
                  <p className="text-sm text-base-content/80">É permitido levar material impresso. É proibido acessar a internet, usar dispositivos eletrônicos além dos computadores do laboratório ou recorrer a ferramentas de inteligência artificial.</p>
                </div>
              </div>
              <div className="card marathon-content-card marathon-content-card-compact">
                <div className="card-body">
                  <Code2 className="text-primary mb-2" size={24} />
                  <h3 className="font-bold">Ambiente</h3>
                  <p className="text-sm text-base-content/80">O Sistema de Gerenciamento de Banco de Dados utilizado será o PostgreSQL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card marathon-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-primary" size={32} />
              <h2 className="card-title text-2xl">Quando e onde</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-2">14 de outubro, quarta-feira</h3>
                  <p className="text-base-content/80">Das <strong>14h às 17h</strong>. Os primeiros 30 minutos serão de aquecimento, para criar as contas e conhecer a plataforma; as duas horas restantes serão de prova.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Laboratório 338</h3>
                  <p className="text-base-content/80">Centro de Tecnologia, durante a Semana Acadêmica de Informática (SAINF).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="alert marathon-alert marathon-alert-warning mb-12">
          <AlertCircle size={32} />
          <div>
            <h2 className="font-bold text-lg">Inscrição na SAINF obrigatória</h2>
            <p className="text-sm">Todos os integrantes da equipe devem estar devidamente inscritos na SAINF para participar.</p>
          </div>
        </div>

        <div className="mt-12">
          <div className="card marathon-cta">
            <div className="card-body items-center text-center">
              <div className="marathon-cta-icon" aria-hidden="true"><Trophy size={36} /></div>
              <p className="pixel-title marathon-cta-kicker">// MARATONA DE SQL</p>
              <h2 className="card-title text-3xl md:text-4xl">Pronto para o desafio?</h2>
              <p className="marathon-cta-copy text-lg max-w-2xl">Inscreva sua equipe e participe da Maratona de SQL.</p>
              <a
                href="https://forms.gle/4fH7FJmSpjvF2gaR6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg marathon-cta-button gap-2"
              >
                <Send size={24} />
                Inscrever minha equipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

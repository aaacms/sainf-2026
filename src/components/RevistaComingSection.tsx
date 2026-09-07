import { Link } from 'react-router-dom';
import { BookOpen, Calendar, FileText, Mail, Award, Users, ArrowLeft, Send } from 'lucide-react';

/**
 * Componente RevistaComingSection
 * Página para submissão de artigos para a Revista ComInG
 */
export default function RevistaComingSection() {
  return (
    <section 
      id="revista-coming"
      className="coming-section py-24 px-6 bg-base-100"
      aria-labelledby="revista-title"
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
          <p className="pixel-title coming-kicker">// SAINF 2026</p>
          <h2 
            id="revista-title"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Revista ComInG
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Publicação e Apresentação de Artigos - Communications and Innovations Gazette
          </p>
        </div>

        {/* Sobre a Revista */}
        <div className="card coming-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Sobre a Revista</h3>
            </div>
            <p className="text-base-content/80 leading-relaxed mb-4">
              A <strong>Revista ComInG</strong> foi criada com o objetivo de estimular a produção 
              científica-tecnológica e o debate acadêmico discente e docente, bem como fomentar a 
              disseminação de conhecimento nas áreas de Ciência da Computação, Sistemas de Informação 
              e Engenharia da Computação.
            </p>
            <div className="badge badge-primary badge-lg">eISSN 2448-1904</div>
            <p className="text-base-content/80 leading-relaxed mt-4">
              A ComInG buscará explorar diferentes perspectivas relacionadas às pesquisas realizadas 
              na Computação da UFSM. Os artigos enviados devem conter obrigatoriamente um aluno dos 
              cursos de Ciência da Computação, Sistemas de Informação ou Engenharia da Computação 
              como co-autor.
            </p>
          </div>
        </div>

        {/* Processo de Submissão */}
        <div className="card coming-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Processo de Submissão</h3>
            </div>
            <div className="space-y-4">
              <div className="alert coming-alert">
                <Users size={24} />
                <div>
                  <h4 className="font-bold">Apresentação Obrigatória na SAINF</h4>
                  <p className="text-sm">
                    A publicação se iniciará com o envio de um <strong>resumo</strong> e sua apresentação 
                    em <strong>pitch no dia 14 de outubro</strong>, das <strong>9h às 12h</strong>, 
                    com até <strong>5 minutos de apresentação</strong> por colaborador.
                  </p>
                </div>
              </div>

              <p className="text-base-content/80 leading-relaxed">
                Os resumos aprovados serão enviados como artigos pré-aprovados posteriormente, com a 
                data de submissão a partir de <strong>dezembro</strong>, e publicados na revista ComInG.
              </p>

              <div className="divider"></div>

              <h4 className="font-bold text-lg">Requisitos do Resumo:</h4>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Limite de <strong>1 página</strong></li>
                <li>Fonte tamanho <strong>12pt</strong> e coluna simples</li>
                <li>Formato padrão SBC disponível em{' '}
                  <a 
                    href="http://www.sbc.org.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    www.sbc.org.br
                  </a>
                </li>
                <li>Formato <strong>PDF</strong> obrigatório</li>
                <li>Trabalhos originais e inéditos</li>
              </ul>

              <div className="divider"></div>

              <h4 className="font-bold text-lg">Requisitos do Artigo Final:</h4>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Entre <strong>4 a 8 páginas</strong></li>
                <li>Fonte tamanho <strong>12pt</strong> e coluna simples</li>
                <li>Formato padrão SBC</li>
                <li>Idiomas aceitos: Português e Inglês</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Áreas de Interesse */}
        <div className="card coming-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Áreas de Interesse</h3>
            </div>
            <p className="text-base-content/80 mb-4">
              Convida-se a submeter trabalhos relacionados às seguintes áreas da Computação:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Algoritmos e Estruturas de Dados',
                'Arquitetura de Computadores',
                'Banco de Dados',
                'Bioinformática',
                'Computação Gráfica',
                'Educação à Distância',
                'Engenharia de Software',
                'Hipermídia e Multimídia',
                'Informática na Educação',
                'Inteligência Artificial',
                'Linguagens de Programação',
                'Microeletrônica',
                'Nanotecnologia',
                'Redes de Computadores',
                'Robótica',
                'Simulação Computacional',
                'Sistemas de Informação',
                'Sistemas Operacionais',
                'Sistemas Cooperativos',
                'Sistemas Paralelos e Distribuídos'
              ].map((area, index) => (
                <div key={index} className="badge coming-area-badge badge-lg p-4">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Datas Importantes */}
        <div className="card coming-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Datas Importantes</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="coming-date-card">
                <div className="text-sm text-base-content/60">Submissão de Resumos</div>
                <div className="text-2xl font-bold">12 de setembro de 2026</div>
              </div>
              <div className="coming-date-card">
                <div className="text-sm text-base-content/60">Notificação de Aceitação</div>
                <div className="text-2xl font-bold">11 de outubro de 2026</div>
              </div>
              <div className="coming-date-card">
                <div className="text-sm text-base-content/60">Apresentação em Pitch</div>
                <div className="text-2xl font-bold">14 de outubro de 2026</div>
                <div className="text-sm text-base-content/60">9h às 12h (5 min/colaborador)</div>
              </div>
              <div className="coming-date-card">
                <div className="text-sm text-base-content/60">Envio da Versão em Artigo</div>
                <div className="text-2xl font-bold">Até 15 de novembro de 2026</div>
              </div>
              <div className="coming-date-card md:col-span-2">
                <div className="text-sm text-base-content/60">Publicação da ComInG</div>
                <div className="text-2xl font-bold">Até março de 2027</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contatos */}
        <div className="card coming-content-card">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Contato</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <div className="font-bold">Giovani Rubert Librelotto</div>
                <div className="text-sm text-base-content/60">Editor da ComInG</div>
                <a 
                  href="mailto:coming@inf.ufsm.br" 
                  className="link link-primary text-sm"
                >
                  coming@inf.ufsm.br
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold">Luis Gustavo Werle Tozevich</div>
                <div className="text-sm text-base-content/60">Divulgação e Organização</div>
                <a 
                  href="mailto:lgtozevich@inf.ufsm.br" 
                  className="link link-primary text-sm"
                >
                  lgtozevich@inf.ufsm.br
                </a>
              </div>
  
            </div>
          </div>
        </div>

        {/* Botão de Submissão em Destaque */}
        <div className="mt-12">
          <div className="card coming-cta">
            <div className="card-body items-center text-center">
              <div className="coming-cta-icon" aria-hidden="true">
                <Send size={32} />
              </div>
              <p className="pixel-title coming-cta-kicker">// SUBMISSÃO DE ARTIGOS</p>
              <h3 className="card-title text-3xl md:text-4xl">Pronto para Submeter?</h3>
              <p className="coming-cta-copy text-lg max-w-2xl">
                Envie seu resumo através do formulário oficial e garanta sua participação na SAINF XIII!
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScTa8OPAOGHWuvqIUQinMZWNzQiINP7BKDbGsQMacoblPzZSA/viewform?usp=sharing&ouid=118110659113173141335" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg coming-cta-button gap-2"
              >
                <Send size={24} />
                Submeter Resumo Agora
              </a>
              <p className="coming-cta-deadline text-sm">
                Prazo: até 12 de setembro de 2026
              </p>
            </div>
          </div>
        </div>

        {/* Links Úteis */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="http://revistas.ufsm.br/coming" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg gap-2"
            >
              <BookOpen size={20} />
              Acessar Revista ComInG
            </a>
            <a 
              href="http://www.sbc.org.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg gap-2"
            >
              <FileText size={20} />
              Template SBC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowLeft, Award, BookOpen, Calendar, FileText, Mail, Send, Users } from 'lucide-react';

const MODELO_RESUMO_URL =
  `${import.meta.env.BASE_URL}Template_para_o_Resumo_XIII_SAINF.pdf`;

export default function RevistaComingSection() {
  return (
    <section
      id="revista-coming"
      className="coming-section py-24 px-6 bg-base-100"
      aria-labelledby="revista-title"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link to="/" className="btn btn-ghost gap-2" aria-label="Voltar para página inicial">
            <ArrowLeft size={20} />
            Voltar para Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <p className="pixel-title coming-kicker">// SAINF 2026</p>
          <h2 id="revista-title" className="text-4xl md:text-5xl font-bold mb-6">
            Revista ComInG
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Communications and Innovations Gazette
          </p>
        </div>

        <div className="card coming-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Sobre a Revista</h3>
            </div>
            <p className="text-base-content/80 leading-relaxed mb-4">
              A <strong>Revista ComInG — Communications and Innovations Gazette</strong> foi criada com
              o objetivo de estimular a produção científico-tecnológica e o debate acadêmico discente
              e docente, bem como fomentar a disseminação do conhecimento nas áreas de Ciência da
              Computação, Sistemas de Informação e Engenharia de Computação.
            </p>
            <div className="badge badge-primary badge-lg">eISSN 2448-1904</div>
            <p className="text-base-content/80 leading-relaxed mt-4">
              A ComInG busca explorar diferentes perspectivas relacionadas às pesquisas realizadas na
              área de Computação da UFSM. Os artigos enviados devem conter obrigatoriamente, entre os
              autores, pelo menos um estudante dos cursos de Ciência da Computação, Sistemas de
              Informação ou Engenharia de Computação.
            </p>
            <p className="text-base-content/80 leading-relaxed mt-4">
              Os artigos completos devem ser originais e não podem ter sido publicados nem submetidos
              simultaneamente a outras conferências ou periódicos. Os trabalhos serão avaliados
              considerando, entre outros critérios, originalidade, relevância, correção e clareza da
              apresentação. Trabalhos em andamento podem ser submetidos, mas será dada preferência
              àqueles que apresentem resultados relevantes.
            </p>
          </div>
        </div>

        <div className="card coming-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Participação na SAINF</h3>
            </div>
            <div className="space-y-4">
              <div className="alert coming-alert">
                <Users size={24} />
                <div>
                  <h4 className="font-bold">Apresentação obrigatória na SAINF</h4>
                  <p className="text-sm">
                    Todos os trabalhos enviados deverão ser apresentados em sessão técnica durante a
                    Semana Acadêmica de Informática (SAINF), no dia <strong>14 de outubro de 2026</strong>,
                    das <strong>8h às 12h</strong>, na <strong>sala 355</strong>.
                  </p>
                </div>
              </div>
              <p className="text-base-content/80 leading-relaxed">
                O processo começa com o envio de um resumo. O trabalho poderá ser apresentado pelo
                autor principal ou por um dos coautores.
              </p>
              <p className="text-base-content/80 leading-relaxed">
                Os trabalhos apresentados serão publicados em um livro de resumos. Além disso, os
                autores dos trabalhos aprovados serão convidados a submeter artigos completos para
                publicação na Revista ComInG. As instruções para essa etapa serão encaminhadas
                posteriormente aos autores, e os artigos serão submetidos ao processo de avaliação da revista.
              </p>

              <div className="divider" />

              <div className="flex items-center gap-3">
                <FileText className="text-primary" size={28} />
                <h4 className="font-bold text-lg">Formatação do Resumo</h4>
              </div>
              <p className="text-base-content/80">O resumo deve:</p>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>ter no máximo uma página;</li>
                <li>
                  seguir as orientações de formatação do{' '}
                  <a
                    href={MODELO_RESUMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    modelo disponibilizado pela organização
                  </a>
                  ;
                </li>
                <li>ser enviado exclusivamente em formato PDF.</li>
              </ul>
              <p className="text-base-content/80 leading-relaxed">
                Resumos que não respeitarem o limite de páginas ou o modelo solicitado serão
                rejeitados. Os idiomas aceitos são Português e Inglês.
              </p>
              <p className="text-base-content/80 leading-relaxed">
                As orientações de formatação para os artigos completos serão encaminhadas
                posteriormente aos autores dos trabalhos aprovados, juntamente com o convite para
                submissão à Revista ComInG.
              </p>
            </div>
          </div>
        </div>

        <div className="card coming-content-card mb-12">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Datas Importantes</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="coming-date-card">
                <div className="text-sm text-base-content/60">Envio dos resumos</div>
                <div className="coming-date-value text-2xl font-bold">21 a 29 de setembro de 2026</div>
              </div>
              <div className="coming-date-card">
                <div className="text-sm text-base-content/60">Divulgação dos resultados</div>
                <div className="coming-date-value text-2xl font-bold">Até 8 de outubro de 2026</div>
              </div>
              <div className="coming-date-card">
                <div className="text-sm text-base-content/60">Apresentações em sessão técnica na SAINF</div>
                <div className="coming-date-value text-2xl font-bold">14 de outubro de 2026</div>
                <div className="text-sm text-base-content/60">Das 8h às 12h, na sala 355</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card coming-content-card">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-primary" size={32} />
              <h3 className="card-title text-2xl">Contato</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="font-bold">Giovani Rubert Librelotto</div>
                <div className="text-sm text-base-content/60">Editor da ComInG</div>
                <a href="mailto:coming@inf.ufsm.br" className="link link-primary text-sm">
                  coming@inf.ufsm.br
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold">Luis Gustavo Werle Tozevich</div>
                <div className="text-sm text-base-content/60">Divulgação e Organização</div>
                <a href="mailto:lgtozevich@inf.ufsm.br" className="link link-primary text-sm">
                  lgtozevich@inf.ufsm.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="card coming-cta">
            <div className="card-body items-center text-center">
              <div className="coming-cta-icon" aria-hidden="true">
                <Send size={32} />
              </div>
              <p className="pixel-title coming-cta-kicker">// SUBMISSÃO DE RESUMOS</p>
              <h3 className="card-title text-3xl md:text-4xl">Pronto para Submeter?</h3>
              <p className="coming-cta-copy text-lg max-w-2xl">
                Envie seu resumo através do formulário oficial e participe da SAINF XIII!
              </p>
              <a
                href="https://forms.gle/kVjuF8fnxynTsCvp6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg coming-cta-button gap-2"
              >
                <Send size={24} />
                Submeter Resumo Agora
              </a>
              <p className="coming-cta-deadline text-sm">Prazo: 29 de setembro de 2026</p>
            </div>
          </div>
        </div>

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
              href={MODELO_RESUMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg gap-2"
            >
              <FileText size={20} />
              Modelo do Resumo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

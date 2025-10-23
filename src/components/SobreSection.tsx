import { BookOpen, Mic2, Users, CheckCircle2, Award, Lightbulb, Briefcase } from 'lucide-react';

/**
 * Componente Sobre Section
 * - Explica o que é a SAINF
 * - Mostra os benefícios para os estudantes
 * - Design minimalista e responsivo
 */
export default function SobreSection() {
  return (
    <section 
      id="sobre"
      className="py-20 md:py-28 px-6 bg-base-200/50" 
      aria-labelledby="sobre-title"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 
            id="sobre-title"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            O que é a SAINF?
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Conheça mais sobre o maior evento acadêmico de Informática
          </p>
        </div>

        {/* Descrição Principal */}
        <div className="prose prose-lg md:prose-xl mx-auto mb-12">
          <p className="text-base-content/80 leading-relaxed">
            A <strong>Semana Acadêmica de Informática (SAINF)</strong> é um evento tradicional 
            organizado por estudantes do curso de Informática, que acontece anualmente com o 
            objetivo de promover conhecimento, integração e desenvolvimento profissional.
          </p>
          
          <p className="text-base-content/80 leading-relaxed">
            Durante uma semana inteira, os participantes têm acesso a conteúdos atualizados 
            sobre as principais tendências e tecnologias do mercado, ministrados por 
            profissionais experientes e referências em suas áreas.
          </p>
        </div>

        {/* Cards de Benefícios */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Minicursos */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="mb-4">
                <BookOpen className="w-12 h-12 text-primary" />
              </div>
              <h3 className="card-title text-2xl mb-2">Minicursos</h3>
              <p className="text-base-content/70">
                Aprenda na prática com cursos intensivos sobre as tecnologias 
                mais relevantes do mercado, ministrados por especialistas.
              </p>
            </div>
          </div>

          {/* Palestras */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="mb-4">
                <Mic2 className="w-12 h-12 text-primary" />
              </div>
              <h3 className="card-title text-2xl mb-2">Palestras</h3>
              <p className="text-base-content/70">
                Inspire-se com histórias e experiências de profissionais 
                que estão transformando o mercado tech.
              </p>
            </div>
          </div>

          {/* Networking */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="card-title text-2xl mb-2">Networking</h3>
              <p className="text-base-content/70">
                Conecte-se com outros estudantes, professores e profissionais 
                da área, ampliando sua rede de contatos.
              </p>
            </div>
          </div>
        </div>

        {/* Por que participar */}
        <div className="mt-20 bg-base-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Por que participar?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Conhecimento Atualizado</h4>
                <p className="text-base-content/70">
                  Conteúdos alinhados com as demandas atuais do mercado de trabalho
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Certificados</h4>
                <p className="text-base-content/70">
                  Certificação válida para atividades complementares do curso
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Experiência Prática</h4>
                <p className="text-base-content/70">
                  Workshops hands-on para aplicar o conhecimento na prática
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Oportunidades</h4>
                <p className="text-base-content/70">
                  Conheça empresas parceiras e descubra oportunidades de carreira
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <a 
            href="https://forms.gle/ohKJEorKojBA1UYF9" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            aria-label="Fazer inscrição na SAINF XII"
          >
            Garanta sua vaga agora!
          </a>
        </div>
      </div>
    </section>
  );
}

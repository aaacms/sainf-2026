import { BookOpen, Mic2, Users } from 'lucide-react';

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
      className="py-20 md:py-28 px-6 bg-base-100"
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
            Conheça mais sobre o evento
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
          <div className="card about-feature-card">
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
          <div className="card about-feature-card">
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
          <div className="card about-feature-card">
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
      </div>
    </section>
  );
}

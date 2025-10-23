import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

/**
 * Componente Hero
 * - Espaço para logo 300x300 (placeholder)
 * - Título SAINF XII
 * - Subtítulo com lorem ipsum
 * - Espaçamento generoso (minimalista)
 * - Responsivo mobile-first
 */
export default function Hero() {
  return (
    <section 
      className="py-24 md:py-32 px-6" 
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          
          {/* Logo - 50% do espaço */}
          <div 
            className="flex-1 w-full h-[400px] md:h-[600px] lg:h-[700px] flex items-center justify-center"
            role="img"
            aria-label="Logo SAINF XII"
          >
            <img 
              src="/saint.png" 
              alt="Logo SAINF XII"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto Hero - 50% do espaço */}
          <div className="flex-1 text-center md:text-left">
            <h1 
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              SAINF XII
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed mb-4">
              A Semana Acadêmica de Informática é um evento anual que reúne estudantes para uma semana de aprendizado e networking através de minicursos, palestras com profissionais da área e workshops práticos.
            </p>

            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed">
              Participe da 12ª edição e aproveite para expandir seus conhecimentos, conhecer novas tecnologias e conectar-se com a comunidade tech!
            </p>

            {/* Novidade Revista ComInG */}
            <div className="mt-8 p-4 bg-primary/10 rounded-lg border-2 border-primary/30">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-primary" size={20} />
                <span className="font-bold text-primary">Novidade 2025!</span>
              </div>
              <p className="text-base text-base-content/80">
                Este ano teremos a <strong>Revista ComInG</strong> para publicação de artigos científicos! 
                Submeta seu trabalho e apresente na SAINF.
              </p>
              <Link 
                to="/incoming" 
                className="link link-primary text-sm mt-2 inline-block"
              >
                Saiba mais →
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://forms.gle/ohKJEorKojBA1UYF9" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                aria-label="Ir para formulário de inscrição"
              >
                Inscreva-se Agora
              </a>
              <a 
                href="#sobre" 
                className="btn btn-outline btn-lg"
                aria-label="Saiba mais sobre a SAINF"
              >
                Saiba Mais
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

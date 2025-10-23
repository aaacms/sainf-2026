/**
 * Componente Hero
 * - Espaço para logo 300x300 (placeholder)
 * - Título SAINF XXV
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
          
          {/* Espaço para Logo 300x300 */}
          <div 
            className="flex-shrink-0 w-[300px] h-[300px] bg-base-200 rounded-lg flex items-center justify-center border border-base-content/10"
            role="img"
            aria-label="Logo SAINF XXV - Espaço reservado para imagem"
          >
            <div className="text-center text-base-content/40">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 mx-auto mb-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Logo 300×300</p>
            </div>
          </div>

          {/* Texto Hero */}
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <h1 
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              SAINF XXV
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>

            {/* CTA Buttons (opcional) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#inscricao" 
                className="btn btn-primary btn-lg"
                aria-label="Ir para formulário de inscrição"
              >
                Inscreva-se Agora
              </a>
              <a 
                href="#parceiros" 
                className="btn btn-outline btn-lg"
                aria-label="Conhecer nossos parceiros"
              >
                Nossos Parceiros
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

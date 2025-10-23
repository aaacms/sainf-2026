/**
 * Componente Seção de Parceiros
 * - Grid 4 por linha (desktop)
 * - Responsivo: 2 por linha (tablet), 1 por linha (mobile)
 * - Placeholders para logos dos parceiros
 */
export default function ParceirosSection() {
  // Array de 8 parceiros placeholder (pode expandir depois)
  const parceiros = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    nome: `Parceiro ${i + 1}`,
  }));

  return (
    <section 
      id="parceiros" 
      className="py-24 md:py-32 px-6"
      aria-labelledby="parceiros-title"
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 
            id="parceiros-title"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Parceiros
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conheça as organizações que apoiam este evento.
          </p>
        </div>

        {/* Grid de parceiros */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          role="list"
          aria-label="Lista de parceiros do evento"
        >
          {parceiros.map((parceiro) => (
            <div 
              key={parceiro.id}
              className="bg-base-200 rounded-lg p-8 flex items-center justify-center border border-base-content/10 hover:border-primary/50 transition-all hover:scale-105 aspect-square"
              role="listitem"
            >
              <div className="text-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 mx-auto mb-3 text-base-content/40" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm text-base-content/60">
                  Logo {parceiro.nome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nota informativa */}
        <div className="mt-12 text-center">
          <p className="text-sm text-base-content/50">
            Quer se tornar um parceiro? Entre em contato conosco.
          </p>
        </div>
      </div>
    </section>
  );
}

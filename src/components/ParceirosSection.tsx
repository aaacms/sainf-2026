import { Instagram } from 'lucide-react';

/**
 * Componente Seção de Parceiros
 * - Grid 4 por linha (desktop)
 * - Responsivo: 2 por linha (tablet), 1 por linha (mobile)
 * - Logos dos parceiros
 */
export default function ParceirosSection() {
  // Array de parceiros
  const parceiros = [
    {
      id: 1,
      nome: "Parceiro 1",
      logo: null,
      link: null,
    },
    {
      id: 2,
      nome: "Parceiro 2",
      logo: null,
      link: null,
    },
    {
      id: 3,
      nome: "PET-CC",
      logo: "/parceiros/petcc.png",
      link: "https://www.ufsm.br/pet/computacao",
    },
    {
      id: 4,
      nome: "Parceiro 4",
      logo: null,
      link: null,
    },
    {
      id: 5,
      nome: "Parceiro 5",
      logo: null,
      link: null,
    },
    {
      id: 6,
      nome: "Parceiro 6",
      logo: null,
      link: null,
    },
    {
      id: 7,
      nome: "Parceiro 7",
      logo: null,
      link: null,
    },
    {
      id: 8,
      nome: "Parceiro 8",
      logo: null,
      link: null,
    },
  ];

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
            Conheça as empresas e organizações que tornam a SAINF XII possível. Juntos, construímos uma semana de aprendizado e networking inesquecível!
          </p>
        </div>

        {/* Grid de parceiros */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          role="list"
          aria-label="Lista de parceiros do evento"
        >
          {parceiros.map((parceiro) => {
            const content = (
              <>
                {parceiro.logo ? (
                  <img 
                    src={parceiro.logo} 
                    alt={`Logo ${parceiro.nome}`}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
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
                )}
              </>
            );

            return parceiro.link ? (
              <a
                key={parceiro.id}
                href={parceiro.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-base-200 rounded-lg p-8 flex items-center justify-center border border-base-content/10 hover:border-primary/50 transition-all hover:scale-105 aspect-square cursor-pointer"
                role="listitem"
                aria-label={`Visitar site de ${parceiro.nome}`}
              >
                {content}
              </a>
            ) : (
              <div
                key={parceiro.id}
                className="bg-base-200 rounded-lg p-8 flex items-center justify-center border border-base-content/10 hover:border-primary/50 transition-all hover:scale-105 aspect-square"
                role="listitem"
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Call to Action para novos parceiros */}
        <div className="mt-16 text-center">
          <div className="card bg-base-200 shadow-lg max-w-2xl mx-auto">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl mb-3">Seja um Parceiro!</h3>
              <p className="text-base-content/70 mb-6">
                Quer apoiar a SAINF e conectar-se com a comunidade acadêmica? Entre em contato conosco pelo Instagram!
              </p>
              <a 
                href="https://www.instagram.com/sainf_ufsm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg gap-2"
              >
                <Instagram size={24} />
                Quer ser parceiro?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

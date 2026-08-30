/**
 * Componente Seção de Inscrição
 * - Link para Google Forms (externo)
 * - Design minimalista com espaçamento generoso
 */
export default function InscricaoSection() {
  return (
    <section 
      id="inscricao" 
      className="py-24 md:py-32 px-6 bg-base-100"
      aria-labelledby="inscricao-title"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 
          id="inscricao-title"
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Inscrição
        </h2>
        
        <p className="text-lg md:text-xl text-base-content/70 mb-10 max-w-2xl mx-auto">
          Não perca a oportunidade de participar da 13ª edição da SAINF! Faça sua inscrição através do nosso formulário e garanta sua participação no evento.
        </p>

        <a 
          href="https://forms.gle/7h2fzrZfLbiMHTDq6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg form-cta-button"
          aria-label="Abrir formulário de inscrição em nova aba"
        >
          Acessar Formulário de Inscrição
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}

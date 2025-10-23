/**
 * Componente Footer
 * - Minimalista
 * - Copyright simples
 * - Espaçamento adequado
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t border-base-content/10 py-8 px-6"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-base-content/60">
            © {currentYear} SAINF XII. Todos os direitos reservados.
          </p>

          {/* Links opcionais (redes sociais, etc) */}
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-sm text-base-content/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-sm text-base-content/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-sm text-base-content/60 hover:text-primary transition-colors"
              aria-label="Email de contato"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

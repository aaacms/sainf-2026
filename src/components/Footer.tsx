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
      className="border-t border-base-content/10 bg-base-100 py-8 px-6"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-base-content/60">
            © {currentYear} SAINF XIII. Todos os direitos reservados.
          </p>

          {/* Links de redes sociais */}
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/sainf_ufsm/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-base-content/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Instagram } from 'lucide-react';

/**
 * Componente Navbar
 * - Sem logo à esquerda
 * - Menu à direita com Inscrição e Parceiros
 * - Mobile: menu abre como modal/dialog com botão fechar no topo direito
 * - Acessível para leitores de tela
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar px-6 py-4" role="navigation" aria-label="Menu principal">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        
        {/* Espaço vazio à esquerda - mantém design minimalista */}
        <div className="flex-1"></div>

        {/* Menu Desktop - escondido em mobile */}
        <div className="hidden md:flex gap-8 items-center">
          <a 
            href="#cronograma" 
            className="text-base font-medium hover:text-primary transition-colors"
            aria-label="Ir para seção de cronograma"
          >
            Cronograma
          </a>
          <a 
            href="#inscricao" 
            className="text-base font-medium hover:text-primary transition-colors"
            aria-label="Ir para seção de inscrição"
          >
            Inscrição
          </a>
          <a 
            href="#parceiros" 
            className="text-base font-medium hover:text-primary transition-colors"
            aria-label="Ir para seção de parceiros"
          >
            Parceiros
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Visite nosso Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="btn btn-ghost btn-square"
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              className="inline-block w-6 h-6 stroke-current"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Modal */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 md:hidden"
          onClick={closeMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div 
            className="fixed top-0 right-0 h-full w-64 bg-base-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar no topo direito */}
            <div className="flex justify-end p-4">
              <button 
                onClick={closeMenu}
                className="btn btn-ghost btn-square"
                aria-label="Fechar menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links do menu */}
            <div className="flex flex-col gap-4 px-6 py-8">
              <a 
                href="#cronograma" 
                className="text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
                aria-label="Ir para seção de cronograma"
              >
                Cronograma
              </a>
              <a 
                href="#inscricao" 
                className="text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
                aria-label="Ir para seção de inscrição"
              >
                Inscrição
              </a>
              <a 
                href="#parceiros" 
                className="text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
                aria-label="Ir para seção de parceiros"
              >
                Parceiros
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
                aria-label="Visite nosso Instagram"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
